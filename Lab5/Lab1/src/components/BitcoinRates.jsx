import { useState, useContext } from "react";
import useBitcoinRate from "./useBitcoinRate"; // Import the custom hook
import { EmojiContext } from "./EmojiContext"; // Import the context
import Emoji from "./Emoji"; // Import the Emoji component

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, error, loading } = useBitcoinRate(currency); // Use the custom hook
  const { emoji } = useContext(EmojiContext); // Use the emoji context

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading && <div>Loading...</div>}
      {rate !== null && <div><strong>Rate:</strong> {rate}</div>}
      {error && <div className="error"><strong>Error:</strong> {error}</div>}
      <div><strong>Current Mood:</strong> {emoji}</div> {/* Mostrar el emoji actual */}
      <Emoji /> {/* Incluir el componente Emoji */}
    </div>
  );
}

export default BitcoinRates;
