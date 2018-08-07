<template>
  <div  class="nav-list">
        <transition
            enter-active-class="animated slideInLeft"
            leave-active-class="animated slideOutLeft"
        >
            <nav  v-if = "isNavShow" class="nav-group">
                <ul>
                    <li  
                        @click = "closeNav"                     
                        v-for = " nav in navs "
                        :key = " nav.id "
                    >
                        <router-link :to = "{name: nav.name}">
                            {{ nav.title }}
                            <i class="fa fa-angle-right"></i>
                        </router-link>
                    </li>
                    
                </ul>
            </nav>
        </transition>
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <div @click = "closeNav" v-if = "isNavShow" class="mask"></div>
        </transition>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  props: ['isNavShow', 'closeNav'],
  data () {
      return {
          navs: [
              {id: 1, title: '首页', name: 'home'},
              {id: 2, title: '影片', name: 'films'},
              {id: 3, title: '我的', name: 'mine'},
              {id: 4, title: '商品', name: 'goods'},
              {id: 5, title: '购物车', name: 'car'}
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
.nav-list{
    position: fixed;
    left: 0;right: 0;top:0;
    z-index: 998;
    .mask {
        z-index: 9;
        height: 100vh;
    }

    .animated {
        animation-duration: 0.5s;
    }

    .nav-group {
        border-top: 1px solid #222;
        box-shadow: 0 1px 1px #363636 inset;
        background: #282828;
        position: absolute;
        display: block;
        top: 50px;
        width: 2.67rem;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all ease 0.4s;
        -webkit-transition: all ease 0.4s;
        z-index: 10;
        height: 100vh;
        li {
            height: 50px;

            a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 50px;
                padding: 0 16px;
                border-bottom: 1px dotted #333;
                color: #9a9a9a;
                font-size: 14px;
               
                i{
                    color: #666;
                    font-size: 14px;
                }
            }
        }
            
    }
}
</style>

