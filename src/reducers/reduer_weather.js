import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // concat did not change the original array, instead return a new array
            // return state.concat([action.payload.data]);
            // ES6 syntax here, [city, city, city]
            return [ action.payload.data, ...state ];
    }
    return state;
}