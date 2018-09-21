
import BackTop from './back-top/BackTop.vue'
import Cell from './Cell/Cell.vue'

export default {
    install (Vue) {          
        Vue.component('back-top',BackTop)
        Vue.component('cell',Cell)
    }
}