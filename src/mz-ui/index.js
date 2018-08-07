
import BackTop from './back-top/BackTop.vue'
import Cell from './Cell/Cell.vue'

//use就相当于在执行install方法，也就相当于在注册我们的组件
export default {
    install (Vue) {          
        Vue.component('back-top',BackTop)
        Vue.component('cell',Cell)
    }
}