export const PICKED_CURRENCY_PAIR = 'PICKED_CURRENCY_PAIR';

export function pickedCurrencyPair(currencyPair){
    return {
        type: PICKED_CURRENCY_PAIR,
        currencyPair,

    };
}