
<template>
    <header class="app-header">
        <nav>
            <div class="left">
                <div @click = " isNavShow = !isNavShow" class="title-icon">
                    <i class="fa fa-navicon"></i>
                </div>
                <div class="title">{{title}}</div>
            </div>
            <div class="right">
                <div class="city">广州</div>
                <div class="user" v-back-top:touchstart>
                    <i class="fa fa-user-o"></i>
                </div>
            </div>
        </nav>

        
        <nav-list 
        :close-nav = "closeNav" 
        :is-nav-show = "isNavShow">
        </nav-list>

        

    </header>
</template>

<script>
// import bus from '../../../modules/bus'

import router from '../../../router'
import bus from '../../../modules/bus'
import NavList from './NavList'
export default {
  name: 'AppHeader',
  data () {
      return {
          isNavShow: false,
          title: '卖座电影'
      }
  },
  created () {
    //   bus.$on('close-nav',this.closeNav)
    router.beforeEach((to, from ,next) => {
        let title = '卖座电影'
        switch (to.name) {
            case 'films': title = '电影列表';break;
            case 'not-found': title = '404';break;
            case 'goods': title = '商品列表';break;
            case 'car': title = '购物车';break;
            // case 'detail': title = to.query.name;break;
        }
        this.title = title
        this.closeNav()
        next()
    })

    bus.$on('change-title',(title)=>{this.title = title})
  },
  methods: {
    closeNav () {
        this.isNavShow = false
    }  
  },
  components: {
      NavList
  }
}
</script>

<style lang="scss" scoped>
    .app-header{
        
        position: fixed;
        z-index: 500;
        top: 0;
        right: 0;
        left: 0;
        width: auto;
        height: 50px;
        line-height: 50px;
        overflow: hidden;

        nav {
            overflow: hidden;
            z-index: 999;
            position: relative;
            background: #282828;
        }

        .left {
            color: #fff;
            font-size: 16px;
            line-height: 50px;
            text-align: left;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
            width: auto;
            height: 50px;
            margin: 0 auto;
            float: left;
            .title-icon {
                float: left;
                width: 48px;
                text-align: center;
                border-right: 1px solid #222;
                box-shadow: 1px 0 1px #363636;
                color: #999;
            }
            .title {
                    padding: 0 1em;
                    float: left;
                    font-size: 14px;
                    color: #efefef;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    displdday: inline-block;
                    overflow: hidden;
            }
            
        }

        .right {
            float: right;
            color: #999;
            .city {
                float: left;
                font-size: 14px;
                padding: 0 6px;
            }
            .user {
                float: left;
                font-size: 16px;
                width: 48px;
                text-align: center;
            }
        }
    }
</style>


