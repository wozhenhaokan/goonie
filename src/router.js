import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mhome from './views/Mhome.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { auth: true }
    },
    {
      path: '/Mhome',
      name: 'Mhome',
      component: Mhome,
      meta: { auth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (_isMobile()) {
      // 当next是带有path的情况下，执行后还会进入钩子，所以当当前路径为即将跳转的路径时，需要直接执行next（），否则会死循环
      if (to.path === '/Mhome') {
        next()
      } else {
        next({ path: '/Mhome' })
      }
    } else {
      if (to.path === '/') {
        next()
      } else {
        next({ path: '/' })
      }
    }
    next()
  } else {
    next()
  }
})

function _isMobile () {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag
}
export default router
