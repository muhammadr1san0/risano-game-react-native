const globalState = {
    leaderboard: null,
    leaderuser: null,
    rank: null
};


const leaderboards = (state = globalState, action) => {

    switch (action.type) {
        case 'GET_LEADERBOARD_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_LEADERBOARD_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_LEADERBOARD_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                leaderboard: action.payload.data.result
            };
        case 'INSERT_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'INSERT_SCORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'INSERT_SCORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };

        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                leaderuser: action.payload.data.result,
                rank: action.payload.data.rank
            };
        default:
            return state;
    }


}

export default leaderboards;