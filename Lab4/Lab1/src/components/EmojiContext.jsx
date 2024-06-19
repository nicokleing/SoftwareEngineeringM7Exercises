import React, { createContext, useState } from 'react';

// Crear el contexto
export const EmojiContext = createContext();

// Proveedor del contexto
export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("😊");

  const changeMood = () => {
    const emojis = ["😊", "😂", "😢", "😡", "😍"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
};
