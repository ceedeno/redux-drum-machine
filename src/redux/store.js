import {createStore} from "redux";

const MESSAGE = 'MESSAGE';
const SET_VOLUME = 'SET_VOLUME';
const POWER = 'POWER';

const initialState = {
    power: true,
    message: '',
    volume: 1
}

function audioReducer(state = initialState, action) {
    switch (action.type) {
        case MESSAGE:
            return {...state, message: action.message};
        case SET_VOLUME:
            return {...state, volume: action.volume};
        case POWER:
            return {...state, power: !state.power}
        default:
            return state;
    }
}

const store = createStore(audioReducer);

export default store;