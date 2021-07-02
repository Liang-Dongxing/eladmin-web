import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index'
import Login from '@/views/login'
import Page404 from '@/views/features/404'
import Page401 from '@/views/features/401'
import Redirect from '@/views/features/redirect'
import Dashboard from '@/views/home'
import Center from '@/views/system/user/center'

export const constantRouterMap = [
  {
    path: '/login',
    meta: { title: '登录', noCache: true },
    component: Login,
    hidden: true
  }
  // {
  //   path: '/404',
  //   component: Page404,
  //   hidden: true
  // },
  // {
  //   path: '/401',
  //   component: Page401,
  //   hidden: true
  // },
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: Redirect
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: Dashboard,
  //       name: 'Dashboard',
  //       meta: { title: '首页', icon: 'index', affix: true, noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/user',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'center',
  //       component: Center,
  //       name: '个人中心',
  //       meta: { title: '个人中心' }
  //     }
  //   ]
  // }
]

const router = createRouter({
  'history': createWebHistory(),
  // "hash": createWebHashHistory()
  // "abstract": createMemoryHistory()
  // scrollBehavior: () => ({ top: 0 }),
  routes: constantRouterMap
})
export default router
