const globalState = {
    soundbutton: null,
    pattern: null
};


const games = (state = globalState, action) => {

    switch (action.type) {
        case 'SOUND_BUTTON_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'SOUND_BUTTON_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'SOUND_BUTTON_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                soundbutton: action.payload.data.result
            };
        case 'GET_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                pattern: action.payload.data.result
            };
        default:
            return state;
    }


}

export default games;