<template>
	<div class="page goods-box">
		<cell 
			v-for = "good in goods"
			:key = "good.id"
			:title = "good.commodityName"
			:label = "good.commodityPrice+good.commoditySpec"
			:src = "good.pictureUrl"
		>
			
			<mz-button @click = "addGoodInCar(good)" type="danger" size = "small">加入购物车</mz-button>
		</cell>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		name: 'GoodsBox',
		data () {
			return {
				goods: []
			}
		},
		methods: {
			...mapActions(['addGoodInCar']),
			getGoods () {
				this.$http.get('/static/json/data.json').then(res => {
					this.goods = res.data
				})
			}
		},
		created () {
			this.getGoods()
		}
	}
</script>

<style lang="scss" scoped>

</style>