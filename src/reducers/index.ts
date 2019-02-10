import { combineReducers } from 'redux';
import CurrencyPairReducer from './reducer_currency_pair';
import PickedPairReducer from './reducer_picked_currency_pair';


const rootReducer = combineReducers({
    currencyPair: CurrencyPairReducer,
    pickedPair: PickedPairReducer,
});

export default rootReducer;