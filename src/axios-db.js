import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://goals-appforyou.firebaseio.com/'
});

export default instance;