import React, { useContext, useState } from 'react';
import { Upvote } from './Upvote';
import { Downvote } from './Downvote';
import { MessageContext } from '../context/useMessages';
import { UpvoteFill } from './UpvoteFill';
import { DownvoteFill } from './DownvoteFill';

export const Voting = ({ count, userVote, onUpvote, onDownvote }) => {
  return (
    <span className='flex gap-2 absolute -bottom-3 left-2 bg-black px-2 items-center'>
      <span
        onClick={() => {
          onUpvote();
        }}
        className='cursor-pointer'
      >
        {userVote && userVote === true ? <UpvoteFill /> : <Upvote />}
      </span>
      <span className='text-white'>{count}</span>
      <span
        className='cursor-pointer'
        onClick={() => {
          onDownvote();
        }}
      >
        {userVote === false ? <DownvoteFill /> : <Downvote />}
      </span>
    </span>
  );
};
