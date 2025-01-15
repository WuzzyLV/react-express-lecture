import { useContext, useEffect, useState } from 'react';
import { Voting } from './Voting';
import { MessageContext } from '../context/useMessages';

export const MessageCard = ({
  title,
  message,
  createdAt,
  initialCount,
  id,
  userVote,
}) => {
  const [count, setCount] = useState(initialCount);

  const { handleVote } = useContext(MessageContext);

  const handleUpvote = () => {
    handleVote(id, true);
  };

  const handleDownvote = () => {
    handleVote(id, false);
  };

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div className='border-[#999999] border flex flex-col p-4 gap-2 relative'>
      <div>
        <span className='flex gap-2 text-accent'>
          <p className='text-2xl font-extrabold'>{title || ''}</p>
        </span>
      </div>
      <div>
        <span className='flex gap-2 text-xl'>
          <p>{message || ''}</p>
        </span>
      </div>
      <span className='flex gap-2 absolute -bottom-3 right-2 bg-black text-[#999999] px-2'>
        <p>{new Date(createdAt).toLocaleString() || ''}</p>
      </span>
      <Voting
        count={count}
        userVote={userVote}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
    </div>
  );
};
