<template>
    <div 
        v-scroll-hide="isShow"
        class="back-top-box"
        scroll-hide-distance = "300"
    >
        <transition 
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
        >
            <div v-if = "isShow" class="back-top animated">
                <i class="fa fa-arrow-up"></i>
            </div>
        </transition>
        
    </div>
</template>
<script>
export default {
   name: 'BackTop',
   data () {
       return {
           isShow: false
       }
   }
}
</script>
<style lang="scss" >
@import './index.scss';

</style>


