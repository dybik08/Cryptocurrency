import { FETCH_CURRENCY} from '../actions/fetch_currency_pair_data.js';

export default function(state = [], action){
    switch(action.type) {
        case FETCH_CURRENCY:
            return [action.payload.data, ...state];

    }
    return state;
}