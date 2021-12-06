const MESSAGE = 'MESSAGE';
const SET_VOLUME = 'SET_VOLUME';
const POWER = 'POWER';

export const displayMessage = (message) => {
    return {
        type: MESSAGE,
        message: message
    }
};

export const setVolume = (volume) => {
    return {
        type: SET_VOLUME,
        volume: volume
    }
};

export const setPower = () => {
    return {
        type: POWER,
    }
};