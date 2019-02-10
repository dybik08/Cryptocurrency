import { PICKED_CURRENCY_PAIR } from '../actions/picked_pair';

export default function(state = {}, action): object {
    switch(action.type){
        case PICKED_CURRENCY_PAIR:
                return [action.currencyPair];

        default:
            return state;
    }
}