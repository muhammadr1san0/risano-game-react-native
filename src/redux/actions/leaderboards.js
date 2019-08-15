import axios from 'axios';

export const getLeaderboard = (id_user) => {
    return {
        type: 'GET_LEADERBOARD',
        payload: axios.get('http://192.168.6.112:4000/leaderboard?page=1', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
export const insertscore = (data) => {
    return {
        type: 'INSERT_SCORE',
        payload: axios.post('http://192.168.6.112:4000/leaderboard', data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
export const getLeaderboarduser = (id_user) => {
    return {
        type: 'GET_USER',
        payload: axios.get('http://192.168.6.112:4000/leaderboard/' + id_user, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

