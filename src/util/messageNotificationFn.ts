/**
 *
 * 请求后台返回的信息告诉用户
 * @export ElMessageInfo
 * @param {number} code
 * @param {string} message
 */
import { ElMessage  } from 'element-plus'
export function MessageNoticeFn(code: number, message: string) {
    // 请求失败
    if (code !== 200) {
        ElMessage({
            showClose: true,
            message: `当前请求${message}`,
            grouping: true,
            type: 'error',
            center: true,
            duration: 2000,
        })
    } else {
        // 请求成功
        ElMessage({
            showClose: true,
            message: `当前请求${message}`,
            grouping: true,
            type: 'success',
            center: true,
            duration: 2000,
        })
    }
}
