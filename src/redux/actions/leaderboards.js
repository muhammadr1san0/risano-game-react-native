import axios from 'axios';

export const getLeaderboard = (id_user) => {
    return {
        type: 'GET_LEADERBOARD',
        payload: axios.get('http://titaktitak.muhammadrisano.online/leaderboard?page=1', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
export const insertscore = (data) => {
    return {
        type: 'INSERT_SCORE',
        payload: axios.post('http://titaktitak.muhammadrisano.online/leaderboard', data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
export const getLeaderboarduser = (id_user) => {
    return {
        type: 'GET_USER',
        payload: axios.get('http://titaktitak.muhammadrisano.online/leaderboard/' + id_user, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

