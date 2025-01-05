import React, { useState } from 'react';

export const TextField = () => {
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      message,
    };
    fetch('http://localhost:5173/api/messages', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((data) => console.log(data));
  };

  return (
    <section className='max-w-3xl border-[#999999] border mx-auto mt-20 text-white'>
      <form className='flex flex-col p-4 gap-4' onSubmit={handleSubmit}>
        <div className='relative border border-[#999999] p-2'>
          <label
            htmlFor='name'
            className='absolute -top-3 left-2 bg-black px-1 text-lg font-bold'
          >
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='w-full border-none outline-none bg-black p-2'
            onChange={handleTitleChange}
          />
        </div>
        <div className='relative border border-[#999999] p-2 '>
          <label
            htmlFor='message'
            className='absolute -top-3 left-2 bg-black px-1 text-lg font-bold'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='w-full p-2 border-none outline-none bg-black max-h-[100px]'
            onChange={handleMessageChange}
          />
        </div>
        <button
          type='submit'
          className='bg-[#9999] text-white font-bold py-2 px-4  mt-4'
        >
          Submit
        </button>
      </form>
    </section>
  );
};
