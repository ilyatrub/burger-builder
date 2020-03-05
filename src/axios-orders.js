import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ilyatrub.firebaseio.com/'
});

export default instance;