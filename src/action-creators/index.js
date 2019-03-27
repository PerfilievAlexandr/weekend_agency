import {
    OPEN_AUTHORIZATION,
    AUTHORIZATION
} from '../constants'

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
            })
    };
}
