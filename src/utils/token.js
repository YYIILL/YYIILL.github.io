/* eslint-disable indent */
// 声明变量，表示token的名字

const name = 'token';
// 读
export function getToken() {
    return localStorage.getItem(name);
}
// 取
export function saveToken(token) {
    localStorage.setItem(name, token);
}
// 删
export function removeToken() {
    localStorage.removeItem(name);
}
