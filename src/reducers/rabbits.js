import {LOAD_RABBITS} from '../constants';

export default (rabbits = [], action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_RABBITS:
            return rabbits = payload
        default:
            return rabbits
    }
};