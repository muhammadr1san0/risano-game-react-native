import axios from 'axios';

export const soundbutton = () => {
    return {
        type: 'SOUND_BUTTON',
        payload: axios.get('http://titaktitak.muhammadrisano.online/button', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const getpattern = () => {
    return {
        type: 'GET_PATTERN',
        payload: axios.get('http://titaktitak.muhammadrisano.online/pattern', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

