/* 配置项目的baseurl timeout 还可以区分环境 */

let BASE_URL = ''
if(import.meta.env.PROD) {
    // BASE_URL = 'http://139.198.34.216:8201'
    BASE_URL = '/api'
} else {
    // BASE_URL = 'http://139.198.34.216:8201'
    BASE_URL = '/api'
}
const TIME_OUT = 10000
export { BASE_URL, TIME_OUT }
