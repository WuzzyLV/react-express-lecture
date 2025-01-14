import React, { useState } from 'react';
import { Upvote } from './Upvote';
import { Downvote } from './Downvote';

export const Voting = ({ count }) => {
  const [voteCount, setVoteCount] = useState(count);

  const handleUpvote = () => {
    setVoteCount(voteCount + 1);
  };

  const handleDownVote = () => {
    setVoteCount(voteCount - 1);
  };

  return (
    <span className='flex gap-2 absolute -bottom-3 left-2 bg-black px-2 items-center'>
      <span onClick={handleUpvote} className='cursor-pointer'>
        <Upvote />
      </span>
      <span className='text-white'>{voteCount}</span>
      <span className='cursor-pointer' onClick={handleDownVote}>
        <Downvote />
      </span>
    </span>
  );
};
