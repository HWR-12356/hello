import axios from 'axios';

//创建axios实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // 从.env文件中获取基础URL
    timeout: 5000, //请求超时事件
})

//请求拦截器
service.interceptors.request.use(
    (config: any) => {
        // 发送请求前做些什么，例如添加token
        return config
    },
    (error: any) => {
        //处理请求错误
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response: { data: any; }) => {
        // 对响应数据做点什么
        const res = response.data;
        return res
    },
    (error: string) => {
        //处理响应错误
        console.log('err' + error)
        return Promise.reject(error)
    }
)

// 封装get请求
export function get (url: any, params={}) {
    return service.get(url, {params});
}

//封装post请求
export function post (url: any, data = {}) {
    return service.post(url, data)
}
