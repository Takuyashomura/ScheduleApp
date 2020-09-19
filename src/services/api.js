import axios from 'axios';
const host = 'http://localhost:5001/scheduleapp-3284d/asia-northeast2';
const url = path => `${host}/${path}`;

export const get = async path => {
    const response = await axios.get(url(path));

    checkError( response.status );

    return response.data;
}

export const post = async ( path, body ) => {
    const response = await axios.post( url(path), body);

    checkError( response.status );

    return response.data;
}

export const remove = async path => {
    await axios.delete( url(path));

    return;
}

const checkError = status => {
    if( status >= 400 ) {
        throw new Error ('エラーが発生しました、再度お試しください。');
    }
}