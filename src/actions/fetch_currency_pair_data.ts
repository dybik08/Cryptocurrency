import data from "../tickers.json";


export const FETCH_CURRENCY = 'FETCH_CURRENCY';


export function fetchCurrency() {
    const cryptoData = data;


    return {
        cryptoData,
        type: FETCH_CURRENCY,
    };
}