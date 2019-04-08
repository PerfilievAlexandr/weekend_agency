import {LOAD_RABBITS, REFACT_RABBIT, DELETE_RABBIT} from '../constants';

export default (rabbits = [], action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_RABBITS:
            return rabbits = payload;

        case REFACT_RABBIT:
        let indexOfRefactRabbit
            rabbits.forEach((rabbit, index) => {
                if (rabbit.id === payload.id) indexOfRefactRabbit = index;
            });
        const refactedRabbit = rabbits[indexOfRefactRabbit] = {
            ...rabbits[indexOfRefactRabbit],
            name: payload.refactRabbit.name,
            weight: payload.refactRabbit.weight
        };
        rabbits[indexOfRefactRabbit] = refactedRabbit;

            return [
                ...rabbits,  
            ];
        
        case DELETE_RABBIT:
            let indexOfDeleteRabbit
                rabbits.forEach((rabbit, index) => {
                    if (rabbit.id === payload) indexOfDeleteRabbit = index;
                });
            rabbits.splice(indexOfDeleteRabbit, 1);

            return [
                ...rabbits,  
            ];

        default:
            return rabbits;
    }
};