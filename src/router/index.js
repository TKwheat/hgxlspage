import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    children:[
      {
        path: '/',
        name: '首页',
        component: () => import(/* webpackChunkName: "index" */ '../views/index/Index.vue'),
        meta: {
          componentName: "Index"
        }
      },
      {
        path: '/service',
        name: '服务',
        component: () => import(/* webpackChunkName: "error" */ '../views/service/Service.vue'),
        meta: {
          componentName: "Service"
        }
      },
      {
        path: '/price',
        name: '订阅',
        component: () => import(/* webpackChunkName: "index" */ '../views/order/Order.vue'),
        meta: {
          componentName: "Order"
        }
      },
      {
        path: '/build',
        name: '建设中',
        component: () => import(/* webpackChunkName: "error" */ '../views/build/Build.vue'),
        meta: {
          componentName: "Build"
        }
      },
      {
        path: '/feature',
        name: '愿景',
        component: () => import(/* webpackChunkName: "error" */ '../views/feature/Feature.vue'),
        meta: {
          componentName: "Feature"
        }
      },
      {
        path: '/team',
        name: '团队',
        component: () => import(/* webpackChunkName: "error" */ '../views/team/Team.vue'),
        meta: {
          componentName: "Team"
        }
      },
      {
        path: '/home',
        name: '授权',
        component: () => import(/* webpackChunkName: "Permission" */ '../views/home/Home.vue'),
        meta: {
          componentName: "Permission"
        }
      },
      {
        path: '/quote',
        name: '试用',
        component: () => import(/* webpackChunkName: "error" */ '../views/quote/Quote.vue'),
        meta: {
          componentName: "Quote"
        }
      },
      {
        path: '/privacy',
        name: '隐私政策',
        component: () => import(/* webpackChunkName: "error" */ '../views/privacy/Privacy.vue'),
        meta: {
          componentName: "Privacy"
        }
      },
      {
        path: '/404',
        name: '错误',
        component: () => import(/* webpackChunkName: "error" */ '../views/error/Error.vue'),
        meta: {
          componentName: "Error"
        }
      },
    ]
  },
  {
    path: "*",
    redirect: "404",
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.NODE_ENV == "production" ? "/hgxlserp/" : '/',
  routes
})

export default router
