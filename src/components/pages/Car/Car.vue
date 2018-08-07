<template>
	<div class="page car">
		<cell 
			v-for = "good in cars"
			:key = "good.id"
			:title = "good.commodityName"
			:label = "good.commodityPrice+good.commoditySpec+' * '+good.num"
			:src = "good.pictureUrl"
		>
			
			<mz-button @click = "reduceGoodInCar(good)" type="danger" size = "small">-</mz-button>
			<mz-button @click="addGoodInCar(good)" type="danger" size = "small">+</mz-button>
		</cell>
		
		<total></total>
	</div>
</template>

<script>
	import Total from './Total'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'Car',
		components: {Total},
		computed:{
			...mapState({
				cars: state => state.buycar.cars
			})
		},
		methods: {
			...mapActions(['addGoodInCar', 'reduceGoodInCar'])
		},
		mounted () {
			console.log(this)
		}
		
	}
</script>

<style lang="scss" scoped>

</style>