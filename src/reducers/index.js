import {combineReducers} from 'redux';
import rabbits from './rabbits'
import authorization from './authorization'


const reducer = combineReducers({
    rabbits,
    authorization
});

export default reducer;