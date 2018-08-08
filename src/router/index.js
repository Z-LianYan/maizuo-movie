
// 先去下载vue-router全局插件  
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home/Home.vue'
import Films from '../components/pages/Films/Films.vue'
import Mine from '../components/pages/Mine/Mine.vue'
import Detail from '../components/pages/Detail/Detail.vue'
import Goods from '../components/pages/Goods/Goods.vue'
import Car from '../components/pages/Car/Car.vue'
import NotFound from '../components/pages/NotFound/NotFound.vue'


const router = new VueRouter({
    routes: [
        {path: '', redirect: '/home'},
        {path: '/home', name: 'home', component: Home},
        {path: '/films', name: 'films', component: Films},
//      {path: '/mine', name: 'mine', component: Mine},
        {path: '/goods', name: 'goods', component: Goods},
        {path: '/car', name: 'car', component: Car},
        {path: '/detail/:id', name: 'detail', component: Detail, props: true},
        {path: '/not-found', name: 'not-found', component: NotFound},
        {path: '**', redirect: '/not-found'}
    ]
})

// import bus from '../modules/bus'

// router.beforeEach((to, from, next) => {
//     //更改Header的isNavShow
//     bus.$emit('close-nav')
//     next()
// })

export default router