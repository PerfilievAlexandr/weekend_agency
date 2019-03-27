import {LOAD_RABBITS} from '../constants';


const initialState = [];

export default (rabbits = initialState, action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_RABBITS:
            return {
                rabbits
            };

        default:
            return rabbits
    }
}