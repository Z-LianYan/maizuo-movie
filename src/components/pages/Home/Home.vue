
<template>
    <div class="home page">
        <app-banner></app-banner>
        
        <movie-box 
            v-for = "type in types"
            :key = " type.id "
            :type = "type"
        ></movie-box>
    </div>
</template>

<script>
import AppBanner from './Banner'
import MovieBox from './MovieBox'
export default {
  name: 'Home',
  data () {
      return {
          types: [
              {id:1, url_type: 'now-playing', title:　'热映', count: 5},
              {id:2, url_type: 'coming-soon', title:　'即将上映', count: 3}
          ]
      }
  },
  components: {
      AppBanner, MovieBox
  },
  activated () {
  	console.log('Home is activated')
  },
  deactivated () {
  	console.log('Home is deactivated')
  }
}
</script>

<style lang="scss">
    .home {
        height: 2000px;

    }
</style>


