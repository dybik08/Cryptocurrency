import axios from 'axios';


export const FETCH_CURRENCY = 'FETCH_CURRENCY';


export function fetchCurrency(currencyPair) {
    const url = 'https://api.bitfinex.com/v1/pubticker/'+currencyPair;
    const response = axios.get(url);

    return {
        payload: response,
        type: FETCH_CURRENCY,
    };
}