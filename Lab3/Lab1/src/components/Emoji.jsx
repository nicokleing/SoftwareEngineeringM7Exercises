import React, { useContext } from 'react';
import { EmojiContext } from './EmojiContext';

const Emoji = () => {
  const { emoji, changeMood } = useContext(EmojiContext);

  return (
    <div className="Emoji">
      <h2>Current Mood: {emoji}</h2>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
