import {
    OPEN_AUTHORIZATION,
    AUTHORIZATION,
    LOAD_RABBITS,
    CREATE_RABBIT,
    REFACT_RABBIT
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
            })
            .catch((error) => {
                console.log(error)
            });
    };
}

export function getRabbits(tokenData) {

    return (dispatch) => {
        console.log('get rabbits');
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
            })
            .catch((error) => {
                console.log(error)
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
            })
            .then(() => getRabbits(token))
            .catch((error) => {
                console.log(error)
            });
    };
}

export function refactSelectRabbit(refactRabbit, rabbitId,  token) {

    return (dispatch) => {
        const data = new URLSearchParams();
        data.append('rabbit[name]', refactRabbit.name);
        data.append('rabbit[weight]', refactRabbit.weight);

        fetch(`http://conquest.weekendads.ru/rabbit/${rabbitId}`, {
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
                console.log(rabbit);
                dispatch({
                    type: REFACT_RABBIT,
                    payload: rabbit
                });
            })
            .catch((error) => {
                console.log(error)
            });
    };

}

export function deleteRabbit(rabbit, token) {

    return (dispatch) => {

        const data = new URLSearchParams();
        data.append('rabbit[name]', rabbit.name);
        data.append('rabbit[weight]', rabbit.weight);

        fetch(`http://conquest.weekendads.ru/rabbit/${rabbit.id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data
            }
        )
            .then((response) => response.json())
            .then((rabbit) => {
                console.log(rabbit);
                dispatch({
                    type: REFACT_RABBIT,
                    payload: rabbit
                });
            })
            .catch((error) => {
                console.log(error)
            });
    };
}