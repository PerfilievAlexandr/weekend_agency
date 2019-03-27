import {
    OPEN_AUTHORIZATION,
    AUTHORIZATION,
    LOAD_RABBITS
} from '../constants';

export function OpenCloseAuthorization() {
    return {
        type: OPEN_AUTHORIZATION,
    };
}

export function authorize(personalData) {

    return (dispatch) => {

        fetch('http://conquest.weekendads.ru/login_check', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: personalData.name,
                    password: personalData.password
                })
            }
        )
            .then((response) => response.json())
            .then((token) => {
                console.log(token);
                dispatch({
                    type: AUTHORIZATION,
                    payload: token
                });
            });
    };
}

export function getRabbits(tokenData) {

    return (dispatch) => {
        console.log(tokenData, 'token data');

        fetch('http://conquest.weekendads.ru/rabbit/list', {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + tokenData,
                }
            }
        )
            .then((response) => response.json())
            .then((rabbits) => {
                console.log(rabbits);
                dispatch({
                    type: LOAD_RABBITS,
                    payload: rabbits
                });
            });
    };
}
