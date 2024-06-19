import { useReducer, useEffect } from 'react';

// Define the initial state for the reducer
const initialState = {
  rate: null,
  error: null,
  loading: true,
};

// Define the reducer function
function rateReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, rate: action.payload, error: null, loading: false };
    case 'FETCH_ERROR':
      return { ...state, rate: null, error: action.payload, loading: false };
    case 'FETCH_INIT':
      return { ...state, rate: null, error: null, loading: true };
    default:
      return state;
  }
}

// Define the custom hook
function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(rateReducer, initialState);

  useEffect(() => {
    // Fetch the exchange rate from the API
    const fetchRate = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency.toLowerCase()] });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchRate();
  }, [currency]);

  return state;
}

export default useBitcoinRate;
