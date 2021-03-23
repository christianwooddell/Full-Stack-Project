export const RECEIVE_PLAY = "RECEIVE_PLAY"
export const RECEIVE_PAUSE = "RECEIVE_PAUSE"
export const RECEIVE_SKIP = "RECEIVE_SKIP"
export const RECEIVE_PREV = "RECEIVE_PREV"

export const receivePlay = () => ({
    type: RECEIVE_PLAY
});

export const receivePause = () => ({
    type: RECEIVE_PAUSE
});

export const receiveSkip = () => ({
    type: RECEIVE_SKIP
});

export const receivePrev = () => ({
    type: RECEIVE_PREV
});