/* eslint-disable indent */
import request from '@/utils/request';

export function login(data) {
    return request.post('/auth/login', data);
}

export function getUser() {
    return request.get('/auth/currentUser');
}
