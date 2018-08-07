

export default {
	//总价钱
	totalInfo (state) {
		let total = {price: 0, num: 0}
		
		state.cars.forEach(item => {
			total.num += item.num
			total.price += item.num * item.commodityPrice
		})
		
		return total
	}
}
