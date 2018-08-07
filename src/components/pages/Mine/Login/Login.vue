<template>
	<div class="login">
	
		<form @submit.prevent = "login">		
			<input type="text" v-model = "username" />
			<input type="password" v-model = "password" />
			<button type="submit">登陆</button>
		</form>
		
	</div>
</template>

<script >
	import {Toast} from 'mint-ui'
	export default {
		name: 'Login',
		data () {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login () {
				let {username, password} = this
				
				let params = {username, password, callback: (result) => {
					if(result === 1) {
						Toast({
							message: '登陆成功',duration: 1000,
						})	
					} else {
						Toast({
							message: '登陆失败',duration: 1000
						})
					}
				}}
				//调用actions的方法
				this.$store.dispatch('login', params)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>