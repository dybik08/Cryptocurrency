import { combineReducers } from 'redux';
import CurrencyPairReducer from './reducer_currency_pair';


const rootReducer = combineReducers({
    currencyPair: CurrencyPairReducer,
});

export default rootReducer;