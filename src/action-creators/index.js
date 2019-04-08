import {
    OPEN_AUTHORIZATION,
    AUTHORIZATION,
    LOAD_RABBITS,
    CREATE_RABBIT,
    REFACT_RABBIT,
    DELETE_RABBIT
} from '../constants';

const status = (response) => {
    if (!response.ok) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}

const json = (response) => {
    return response.json()
}

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
            .then(status)
            .then(json)
            .then((token) => {
                console.log(token);
                dispatch({
                    type: AUTHORIZATION,
                    payload: token
                });
            })
            //.then(getRabbits(token)(dispatch))
            .catch((error) => {
                console.log(error)
            });
    };
}

export function getRabbits() {

    return (dispatch, getState) => {
        const token = getState().authorization.token;
        fetch('http://conquest.weekendads.ru/rabbit/list', {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            }
        )
        .then(status)
        .then(json)
            .then((rabbits) => {
                console.log(rabbits, 'new list');
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


export function createRabbit(newRabbit) {

    return (dispatch, getState) => {
        const token = getState().authorization.token;
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
            .then(status)
            .then(json)
            .then(() => {
                console.log(newRabbit)
                dispatch({
                    type: CREATE_RABBIT,
                    payload: newRabbit
                });
            })
            .then(getRabbits()(dispatch, getState))
            .catch((error) => {
                console.log(error)
            });
    };
}

export function refactSelectRabbit(refactRabbit, rabbitId) {

    return (dispatch, getState) => {
        const token = getState().authorization.token;
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
            .then(status)
            .then(json)
            .then(() => {
                dispatch({
                    type: REFACT_RABBIT,
                    payload: {
                        id: rabbitId,
                        refactRabbit: refactRabbit
                    }
                });
            })
            .catch((error) => {
                console.log(error)
            });
    };

}

export function deleteRabbit(rabbit) {

    return (dispatch, getState) => {
        const token = getState().authorization.token;
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
            .then(status)
            .then(json)
            .then((rabbit) => {
                dispatch({
                    type: DELETE_RABBIT,
                    payload: rabbit.id
                });
            })
            .catch((error) => {
                console.log(error)
            });
    };
}