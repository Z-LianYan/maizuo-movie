<template>
    <div class="swiper-container app-banner">
        <div class="swiper-wrapper  img-background">
            <div class="swiper-slide img-background"
                v-for = " banner in banners "
                :key  = " banner.id "
            >
                <img class="swiper-lazy" width="100%" :data-src="banner.imageUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
       
    </div>
</template>
<script>

import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'

import Vue from 'vue'

export default {
    name: 'AppBanner',
    data () {
        return {
            banners: []
        }
    },
    mounted () {
        this.$http.get( '/mz/v4/api/billboard/home', {
            params:{__t: Date.now() }
        }).then (res => {
            this.banners = res.data.data.billboards
            Vue.nextTick(() => {
                new Swiper('.app-banner', {
                	autoplay:true,
                	loop:true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    lazy: true
                })
            })
        })
    }
}
</script>
<style lang="scss" scoped>
    .swiper-slide ,.swiper-wrapper{
        height: 2.1094rem;
    }
</style>

