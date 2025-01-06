import React, { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { MessageContext } from "../context/useMessages";
import { msToTime } from "../utils/timeConversion";

export const TextField = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { handleSubmit, canSend, time } = useContext(MessageContext);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(title, message);
    setMessage("");
    setTitle("");
  };

  return (
    <>
      <section className=" border-[#999999] border mx-auto mt-4 text-white">
        <form className="flex flex-col p-4 gap-4" onSubmit={onSubmit}>
          <div className="relative border border-[#999999] p-2">
            <label htmlFor="name" className="absolute -top-3 left-2 bg-black px-1 text-lg font-bold">
              Title
            </label>
            <input
              value={title}
              type="text"
              id="title"
              name="title"
              className="w-full border-none outline-none bg-black p-2"
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="relative border border-[#999999] p-2 ">
            <label htmlFor="message" className="absolute -top-3 left-2 bg-black px-1 text-lg font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              className="w-full p-2 border-none outline-none bg-black max-h-[100px]"
              onChange={handleMessageChange}
              required
            />
          </div>
          <Button disabled={!canSend.canSend} type={"submit"}>
            {canSend ? (time > 0 ? msToTime(time) : "Submit") : "Submit"}
          </Button>
        </form>
      </section>
    </>
  );
};
