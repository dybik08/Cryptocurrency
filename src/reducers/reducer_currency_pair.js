import { FETCH_CURRENCY} from '../actions/fetch_currency_pair_data.ts';

export default function(state = [], action){
    switch(action.type) {
        case FETCH_CURRENCY:
            return [action.cryptoData];

    default:
    return state;
    }
}