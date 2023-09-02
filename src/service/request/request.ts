import axios from 'axios';
import type { AxiosInstance } from 'axios'
import type { CQRequestConfig } from "./type";
import {USER_TOKEN} from "@/global/constance";

// 后续调用时，每创建一个新的实例就能够请求新的服务器
class CQRequest {
    instance: AxiosInstance
    constructor(config: CQRequestConfig) {
        this.instance = axios.create(config)

        /* 请求拦截 */
        //TODO: 这里加网络请求进度条
        this.instance.interceptors.request.use((config) => {
            // token是公共数据
            const token = localStorage.getItem(USER_TOKEN)
            if(token) {
                config.headers.token = token
            }
            // get请求映射params参数
            if (config.method === 'get' && config.params) {
                let url = config.url;
                for (const propName of Object.keys(config.params)) {
                    const value = config.params[propName];
                    const part = encodeURIComponent(propName) + '='
                    if (value !== null && typeof(value) !== "undefined") {
                        if (typeof value === 'object') {
                            for (const key of Object.keys(value)) {
                                let params = propName + '[' + key + ']';
                                const subPart = encodeURIComponent(params) + '='
                                url += subPart + encodeURIComponent(value[key]) + "?";
                                console.log("propName", propName)
                            }
                        } else {
                            url += part + encodeURIComponent(value) + "?";
                        }
                    }
                }
                url = url.slice(0, -1);
                config.params = {};
                config.url = url;
            }
            return config
        }, (error) => {
            return error
        })
        /* 响应拦截 */
        this.instance.interceptors.response.use((res) => {
            // loaded()
            return res
        }, (error) => {
            //TODO:设置错误的弹窗
            return error
        })

        // 针对特定的hyRequest实例添加拦截器
        this.instance.interceptors.request.use(
            config.interceptors?.requestSuccessFn,
            config.interceptors?.requestFailureFn
        )
        this.instance.interceptors.response.use(
            config.interceptors?.responseSuccessFn,
            config.interceptors?.responseFailureFn
        )
    }

//    封装网络请求的方法
    request<T = any>(config: CQRequestConfig<T>) {
        // 单次请求成功拦截处理
        if(config.interceptors?.requestSuccessFn) {
            config = config.interceptors.requestSuccessFn(config)
        }

        // 返回Promise
        return new Promise<T>((resolve, reject) => {
            this.instance
                .request<any, T>(config)
                .then((res) => {
                //    单次响应成功的拦截
                    if(config.interceptors?.responseSuccessFn) {
                        res = config.interceptors.responseSuccessFn(res)
                    }
                    resolve(res)
                })
                .catch((err)=> {
                reject(err)
            })
        })
}


    get<T = any>(config: CQRequestConfig<T>) {
        return this.request({ ...config, method: 'GET' })
    }
    post<T = any>(config: CQRequestConfig<T>) {
        return this.request({ ...config, method: 'POST' })
    }
    delete<T = any>(config: CQRequestConfig<T>) {
        return this.request({ ...config, method: 'DELETE' })
    }
    patch<T = any>(config: CQRequestConfig<T>) {
        return this.request({ ...config, method: 'PATCH' })
    }
    put<T = any>(config: CQRequestConfig<T>) {
        return this.request({ ...config, method: 'PUT' })
    }
}

// 外面在使用的时候创建它的实例对象
export default CQRequest
