import axios from 'axios';

export const soundbutton = () => {
    return {
        type: 'SOUND_BUTTON',
        payload: axios.get('http://192.168.6.112:4000/button', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const getpattern = () => {
    return {
        type: 'GET_PATTERN',
        payload: axios.get('http://192.168.6.112:4000/pattern', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

