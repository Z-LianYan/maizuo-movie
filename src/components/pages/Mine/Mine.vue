
<template>
  <div class="page mine"> 		
      <router-view></router-view>
  </div>
</template>
<script>
	import { mapState } from 'vuex'
export default {
  name: 'Mine',
  computed: mapState({
  	userInfo: state => state.other.userInfo
  }),
  watch: {
  	'userInfo.username':{
  		immediate: true,
  		handler (newval)  {
	  		if( newval ) {
		  		this.$router.replace({name: 'user'})
		  	} else {
		  		this.$router.replace({name: 'login'})
		  	}
	  	}
  	}
  }
}
</script>
<style lang="scss">

</style>
