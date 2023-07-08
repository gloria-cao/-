import CQRequest from "@/service/request/request";
import {BASE_URL, TIME_OUT} from "./config";

const cqRequest = new CQRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
//    拦截器
    interceptors: {
    //    请求成功拦截，将token放在请求头中
        requestSuccessFn: (config) => {
            //TODO: 将token放在请求头中
            return config
        }
    }
})

export default  cqRequest
