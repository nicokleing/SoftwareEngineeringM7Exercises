import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import BitcoinRates from './components/BitcoinRates';
import NavBar from './components/NavBar';
import { EmojiProvider } from './components/EmojiContext';

function App() {
  return (
    <EmojiProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bitcoin-rates" element={<BitcoinRates />} />
          </Routes>
        </div>
      </Router>
    </EmojiProvider>
  );
}

export default App;
