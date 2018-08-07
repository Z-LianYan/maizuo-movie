<template>
  <div class="films page">
        <film-nav 
            :type = " type "
            :change-type = "changeType"
        ></film-nav>

        <films-box :type = " type "></films-box>


        <back-top
            size = "small"
            v-back-top:click
        ></back-top>
  </div>
</template>

<script>

import FilmNav from './FilmNav'
import FilmsBox from './FilmsBox'

export default {
  name: 'Films',
  data () {
      return {
          type: 'now-playing'
      }
  },
  methods: {
      changeType (type) {
          this.type = type
      }
  },
  components: {FilmNav, FilmsBox}
}
</script>

<style lang="scss" scoped>
    .films{
        background: #f9f9f9;
        min-height: 100vh;
        padding-left:15px; 
        padding-right:15px; 
    }
</style>


