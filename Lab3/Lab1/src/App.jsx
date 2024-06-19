import React from 'react';
import BitcoinRates from './components/BitcoinRates';
import Emoji from './components/Emoji';
import { EmojiProvider } from './components/EmojiContext';

function App() {
  return (
    <EmojiProvider>
      <div className="App">
        <h1>Welcome to Bitcoin Rates App</h1>
        <BitcoinRates />
        <Emoji />
      </div>
    </EmojiProvider>
  );
}

export default App;
