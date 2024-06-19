import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the exchange rate from the API
    const fetchRate = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRate(data.bitcoin[currency.toLowerCase()]);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRate();
  }, [currency]);

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
      {rate !== null && <div><strong>Rate:</strong> {rate}</div>}
      {error && <div className="error"><strong>Error:</strong> {error}</div>}
    </div>
  );
}

export default BitcoinRates;
