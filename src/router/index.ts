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
            component: () => import('@/pages/hospital/index.vue'),
            redirect: '/hospital/register',
            children: [
                {
                    path:'register',
                    component: () => import('@/pages/hospital/component/register/register.vue')
                },
                {
                    path:'detail',
                    component: () => import('@/pages/hospital/component/detail/detail.vue')
                },
                {
                    path:'notification',
                    component: () => import('@/pages/hospital/component/notification/notification.vue')
                },
                {
                    path:'searchOrCancel',
                    component: () => import('@/pages/hospital/component/searchOrCancel/searchOrCancel.vue')
                },
                {
                    path:'undiagnosis',
                    component: () => import('@/pages/hospital/component/undiagnosis/undiagnosis.vue')
                }
            ]
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
