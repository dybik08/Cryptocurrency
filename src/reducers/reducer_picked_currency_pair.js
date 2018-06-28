import { PICKED_CURRENCY_PAIR } from '../actions/picked_pair';

export default function(state=[], action){
    switch(action.type){
        case PICKED_CURRENCY_PAIR:
                return [action.currencyPair];

        default:
            return state;
    }
}