import qs from 'qs'
import axios from 'axios'
import { message } from 'antd'
import allUrls from './urls'
import sessionStore from './SessionStore';
axios.defaults.baseURL = allUrls.serverUrl
axios.defaults.timeout = 60000
//axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers['Authorization'] = 'Basic Y2xpZW50OnNlY3JldA=='

/** 请求拦截器，添加token */
// axios.interceptors.request.use(
//     config => {
//         // console.log('请求拦截器- config', config)
//         // if (sessionStore.get('token')) {
//         //     config.headers['Blade-Auth'] = sessionStore.get('token')
//         //     config.headers['Tenant-Id'] = sessionStore.get('TENANT_ID')
//         // }
//         return config
//     },
//     error => {
//         message.error('请求出错' + error);
//         return Promise.reject(error);
//     }
// )

/** 响应拦截器 */
// axios.interceptors.response.use(
//     response => {
//         // console.log('响应拦截器- response', response)
//         return response.data
//     },
//     error => {
//         console.log('响应拦截器--error', error)
//         if (error && error.response) {
//             if (error.response.status === 401) {
//                 // message.error("未授权，请重新登录", 1, () => {
//                 //     window.location.replace('xxxx')
//                 // })
//             }
//             else if (error.response.status === 403) { message.error("您的访问被拒绝") }
//             else if (error.response.status === 404) { message.error("未找到请求路径") }
//             else if (error.response.status === 500) { message.error("服务器出错了") }
//             else { message.error(error.message) }
//         } else {
//             message.error('请求出错')
//         }

//         return Promise.reject(error)
//     }
// )

export const get = (url, params = {}) => {
    return axios.get(url, { params: params })
}

export const post = (url, { }, data = {}) => {
    return axios({
        url,
        method: 'post',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        data: JSON.stringify(data)
    })
}

export const paramsPost = (url, params = {}) => {
    return axios({
        url,
        method: 'post',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        params: params
    })
}

export const postJson = (url, query = {}, data = {}, options = {}) => {
    return axios({
        type: 'post',
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        ...options
    })
}

export const postFormData = (url, data = {}) => {
    console.log(url);
    return axios({
        url,
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data)
    })
}

export const all = (requests = []) => {
    return axios.all(requests).then(axios.spread((...result) => {
        return [...result]
    })).catch(error => {
        console.log(error)
    })
}

export const handleResult = (res, hint = true, data = false) => {
    if (res.code === 200) {
        if (hint) message.success(res.msg)
        return res.data
    } else {
        message.error(res.msg)
        return data
    }
}

