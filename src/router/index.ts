import { createRouter, createWebHistory } from "vue-router";

/* 配置路由 */
const route = createRouter({
    // 路由模式
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue')
        }
    ],
    // 滚动行为：控制滚动条的位置
    scrollBehavior() {
        return {
            top: 0,
            left: 0
        }
    }
})
export default route
