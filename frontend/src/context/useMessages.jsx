import { useState, createContext, useEffect } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState();
  const [canSend, setCanSend] = useState({});
  const [errors, setErrors] = useState();
  const [success, setSucces] = useState();
  const [time, setTime] = useState(canSend ? canSend.timeToWait : 0);

  const fetchMessages = async () => {
    await fetch('http://localhost:5173/api/messages')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCanSend = async () => {
    await fetch('http://localhost:5173/api/messages/can-send')
      .then((res) => res.json())
      .then((data) => {
        setCanSend(data);
        setTime(data.timeToWait);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      setCanSend({ canSend: true });
    }
  }, [time]);

  const handleSubmit = async (title, message) => {
    setErrors();
    setSucces();
    const data = {
      title,
      message,
    };
    await fetch('http://localhost:5173/api/messages', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.status === 400) {
          return res.json().then((data) => {
            setErrors(data.error);
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setSucces(data.message);
          fetchMessages();
          fetchCanSend();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // fetch messages on start
  useEffect(() => {
    fetchMessages();
    fetchCanSend();
  }, []);

  return (
    <MessageContext.Provider
      value={{
        messages,
        handleSubmit,
        canSend,
        time,
        errors,
        success,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
