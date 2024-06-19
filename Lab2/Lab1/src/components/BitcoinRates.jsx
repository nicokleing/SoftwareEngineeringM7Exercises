import { useState } from "react";
import useBitcoinRate from "./useBitcoinRate"; // Import the custom hook

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, error, loading } = useBitcoinRate(currency); // Use the custom hook

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
      {/* Display loading state */}
      {loading && <div>Loading...</div>}
      {/* Display the exchange rate if it is available */}
      {rate !== null && <div><strong>Rate:</strong> {rate}</div>}
      {/* Display an error message if there is an error */}
      {error && <div className="error"><strong>Error:</strong> {error}</div>}
    </div>
  );
}

export default BitcoinRates;
