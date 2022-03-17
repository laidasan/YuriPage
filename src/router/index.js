import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  createMemoryHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Bar from '../views/Bar/Bar.vue'
import Profile from '../views/Bar/page/Profile.vue'
import Game from '../views/Bar/page/Game.vue'
import Test from '../views/Bar/page/Test.vue'
// import User from '../views/Bar/page/User.vue'
import Error404 from '../views/error/Error404.vue'

const routes = [
  {
    path: '/',
    // name: 'Home',
    redirect: { name: 'Home' }
    // component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/home',
  //   name: 'homet',
  //   component: Home,
  //   children: [
  //     {
  //       path: 'root',
  //       component: Home
  //     },
  //     {
  //       path: 'game',
  //       component: Game
  //       // alias: '/bar'
  //     },
  //     {
  //       path: ':user',
  //       name: 'hometUser',
  //       component: Game,
  //       children: [
  //         {
  //           path: 'profile',
  //           name: 'hometUserProfile',
  //           component: Profile
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: '/bar',
  //   component: Bar,
  //   props: true,
  //   children: [
  //     {
  //       path: ':user(\\d+)+',
  //       name: 'BarUser',
  //       component: () => import(/* webpackChunkName: "User" */ '../views/Bar/page/User.vue'),
  //       // props: true,
  //       props: route => ({ route }),
  //       beforeEnter (to, from, next) {
  //         console.log('user(\\d+)')
  //         next()
  //       },
  //       // beforeEnter (to, from, next) {
  //       //   console.log('before Enter', from)
  //       //   const testError = new Error('samura error')
  //       //   if (from.path === '/bar') {
  //       //     console.log('error next')
  //       //     next(testError)
  //       //   } else {
  //       //     next()
  //       //   }
  //       // },
  //       children: [
  //         {
  //           path: 'profile',
  //           component: Profile
  //         },
  //         {
  //           path: 'game',
  //           component: Game
  //         },

  //         // 訪問 /test 才有用 , 不是 /bar/test
  //         // 會 mount 在 Bar 的 <router-view / >
  //         {
  //           path: '/test',
  //           component: Test
  //         }
  //       ]
  //     },
  //     {
  //       path: ':user',
  //       props: route => ({ route }),
  //       component: () => import(/* webpackChunkName: "User" */ '../views/Bar/page/User.vue')
  //     }
  //   ]
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about/:user',
    name: 'AboutUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404',
    name: 'error404',
    component: Error404
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // history: createMemoryHistory(),
  routes,
  scrollBehavior (to, from, savePosition) {
    const defaultPosition = {
      left: 0,
      top: 0,
      behavior: 'smooth'
    }

    return savePosition || defaultPosition
  }
})

// router.onError((error, a, b, c, d) => {
//   console.error(error)
//   router.push('/404')
// })

export default router
