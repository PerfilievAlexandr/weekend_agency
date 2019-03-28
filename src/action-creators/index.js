import {
    OPEN_AUTHORIZATION,
    AUTHORIZATION,
    LOAD_RABBITS,
    CREATE_RABBIT
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


export function createRabbit(newRabbit, token) {


    return (dispatch) => {
        const data = new URLSearchParams();
        data.append('rabbit[name]', newRabbit.name);
        data.append('rabbit[weight]', newRabbit.weight);

        fetch('http://conquest.weekendads.ru/rabbit', {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data
            }
        )
            .then((response) => response.json())
            .then((rabbit) => {
                dispatch({
                    type: CREATE_RABBIT,
                    payload: rabbit
                });
            });
    };
}