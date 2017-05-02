import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // put in an array because we have multiple cities coming back
            // return new instance of state so as to not mutate state
            return [ action.payload.data, ...state ];
    }
    return state;
}   