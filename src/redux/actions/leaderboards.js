import axios from 'axios';

export const getLeaderboard = () => {
    return {
        type: 'GET_LEADERBOARD',
        payload: axios.get('http://192.168.6.112:4000/leaderboard?page=1', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

