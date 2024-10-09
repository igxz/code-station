import axios from 'axios';

const service = axios.create({
    timeout: 5000,
});

// request interceptor
service.interceptors.request.use(
    (config)=>{
        // intercept the request to
        // e.g: add token. etc~
        const token = localStorage.getItem('userToken');
        if(token){
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    (err) => {
        // callback function when error occurs
        console.log('error occured during request interception', err)
    }
);

// response interceptor
service.interceptors.response.use(
    (response)=>{
        // if token, then save it to local storage
        const token = response.headers.Authorization;
        if(token){
            localStorage.setItem('token', token);
        }
        // intercept the response to
        const resData = response.data;
        return resData;
    },
    (err) => {
        // callback function when error occurs
        console.log('error occured during response interception', err);
    },
);

export default service; 