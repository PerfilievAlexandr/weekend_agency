import {AUTHORIZATION, OPEN_AUTHORIZATION} from '../constants';

const initialState = {
    token: '',
    open: false,
    logIn: false
};

export default (authorization = initialState, action) => {
    const {type, payload} = action;

    switch (type) {

        case AUTHORIZATION:
            return {...authorization, token: payload.token,  logIn: !authorization.logIn};

        case OPEN_AUTHORIZATION:
            return {...authorization, open: !authorization.open};

        default:
            return authorization
    }
};