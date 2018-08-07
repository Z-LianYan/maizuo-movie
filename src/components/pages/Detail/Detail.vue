<template>
    <div v-if = "film.name" class="page detail">
        <div class="img-background img-box">
            <img width="100%" :src="film.cover.origin" alt="">
        </div>
        {{film.name}}
    </div>
</template>
<script>
import bus from '../../../modules/bus'
export default {
    name: 'Detail',
    props: ['id'],
    data () {
        return {
            film: {}
        }
    },
    methods: {
        getItem () {
            this.$http.get('/mz/v4/api/film/'+this.id, {
                params: {__t: Date.now()}
            }).then(res => {
                this.film = res.data.data.film
                
            })
        }
    },
    created () {
        bus.$emit('change-title',this.$route.query.name)
        this.getItem()
    }
}
</script>
<style lang="scss" scoped>
    .img-box {
        width: 100%;
        height: 2.1094rem;
    }
</style>


