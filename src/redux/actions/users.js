import axios from 'axios';

export const loginUser = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post('http://192.168.6.112:4000/user/login', data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const registeruser = (data) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post('http://192.168.6.112:4000/user/register', data, {
            headers: { "authorization": "jangan-coba-coba" },
        })
    }
}

export const getUser = (data, header) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`http://libraryapi.muhammadrisano.online/user?search=` + data, {
            headers: header
        }),
    };
};

export const getuserid = (id_user, header) => {
    return {
        type: 'GET_USER_ID',
        payload: axios.get('http://libraryapi.muhammadrisano.online/user/' + id_user, {
            headers: header
        })
    }
}

export const updateuser = (id_user, data, header) => {
    return {
        type: 'UPDATE_USER',
        payload: axios.patch('http://libraryapi.muhammadrisano.online/user/' + id_user, data, {
            headers: header
        })
    }
}