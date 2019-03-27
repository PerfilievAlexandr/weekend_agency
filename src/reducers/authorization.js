import {AUTHORIZATION, OPEN_AUTHORIZATION} from '../constants';

const initialState = {
    token: '',
    open: false,
};

export default (authorization = initialState, action) => {
    const {type, payload} = action;

    switch (type) {

        case AUTHORIZATION:
            return {...authorization, token: payload.token};

        case OPEN_AUTHORIZATION:
            return {...authorization, open: !authorization.open};

        default:
            return authorization
    }
};