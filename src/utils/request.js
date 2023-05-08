/* eslint-disable indent */
// 导入封装axios
import axios from 'axios';
import store from '@/store';
import { Message } from 'element-ui';
import router from '../router';
// 公共基地址
axios.defaults.baseURL = 'http://interview-api-t.itheima.net/';

// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        const { token } = store.state.user;
        if (token) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),

);

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => response.data.data,
    (error) => {
        if (error.response.status === 401) {
            store.commit('user/removeToken');
            router.push('/');
        }
        const msg = error.response.data.message;
        if (msg) {
            Message.error(msg);
        }
        return Promise.reject(error);
    },

);

export default axios;
