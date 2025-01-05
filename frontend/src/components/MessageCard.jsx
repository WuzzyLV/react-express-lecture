import React from 'react';

export const MessageCard = ({ title, message }) => {
  return (
    <div className='border-[#999999] border flex flex-col p-4 gap-2'>
      <div>
        <span className='flex gap-2'>
          <p className='font-bold'>Title: </p>
          <p>{title || ''}</p>
        </span>
      </div>
      <div>
        <span className='flex gap-2'>
          <p className='font-bold'>Message: </p>
          <p>{message || ''}</p>
        </span>
      </div>
    </div>
  );
};
