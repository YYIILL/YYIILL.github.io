/* eslint-disable indent */
import { login } from '@/api/user';
import { getToken, removeToken, saveToken } from '@/utils/token';

export default ({
    // 命名空间
    namespaced: true,
    state: {
        token: getToken(),
    },
    mutations: {
        // 存储token的mutation
        saveToken(state, token) {
            state.token = token;
            console.log('vuex的token', state.token);
            saveToken(state.token);
        },
        // 删除token
        removeToken(state) {
            state.token = null;
            removeToken();
        },
    },
    actions: {
        // 登录的action
        // user是登录的时候，传进来的对象，包含用户名，密码
        async login(context, user) {
            const res = await login(user);
            localStorage.setItem('token', res.token);
            context.commit('saveToken', res.token);
        },
    },
    modules: {
    },
});
