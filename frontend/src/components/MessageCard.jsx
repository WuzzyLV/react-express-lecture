import React from "react";

export const MessageCard = ({ title, message, createdAt }) => {
  return (
    <div className="border-[#999999] border flex flex-col p-4 gap-2 relative">
      <div>
        <span className="flex gap-2 text-accent">
          {/* <p className="font-bold">Title: </p> */}
          <p className="text-2xl font-extrabold">{title || ""}</p>
        </span>
      </div>
      <div>
        <span className="flex gap-2 text-xl">
          <p>{message || ""}</p>
        </span>
      </div>
      <span className="flex gap-2 absolute -bottom-3 left-2 bg-black text-[#999999] px-2">
        <p>{new Date(createdAt).toLocaleString() || ""}</p>
      </span>
    </div>
  );
};
