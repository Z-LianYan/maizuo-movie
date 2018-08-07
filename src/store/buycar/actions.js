
import {
	SYNC_UPDATE
} from './const'

export default {
	initCars ({commit}) {
		//在这里，从后端数据库里取出购物车信息		
		setTimeout (() => {
			let cars = getCars();	
			commit(SYNC_UPDATE, cars)
		},300)
	},
	addGoodInCar ({commit},goodinfo) {
		//在这里发送ajax请求到后端服务器，将商品添加到数据库里，再去更改vuex里的cars数据
		
		//在真正的项目中，其实我们接收一个商品id和用户id就可以了，但是在这里，我们没有后端，所以添加商品我们就添加到localStorage中，而且购物车添加的逻辑，只能咱们自己写了		
		setTimeout(() => {
			//注意，这些都是后端的逻辑
			let cars = getCars()
			let isHas = cars.some((item) => {
				if(item.id === goodinfo.id){
					item.num ++					
					return true
				}
			})
			//如果没有这个商品
			if(!isHas) {
				goodinfo.num = 1
				cars.push(goodinfo)
			}	
			
			localStorage.cars = JSON.stringify(cars)
			//到这里，数据库已经更新了，做一个同步，这个时候，假设，我们后端很好，直接将处理之后的用户的购物车信息全部返回了
			commit (SYNC_UPDATE,cars)
			
			
		},500)
		
	},
	reduceGoodInCar ({commit}, goodinfo) {
		setTimeout(() => {
			let cars = getCars()
			
			cars = cars.filter(item => {
				if(item.id === goodinfo.id) {
					item.num -- ;
					if (item.num <= 0) {
						return false
					}
					return true
				}
				return true
			})
			
			localStorage.cars = JSON.stringify(cars)
			//同步vuex中的购物车数据
			commit(SYNC_UPDATE,cars)
		},300)
	}
	
	
}

function getCars () {
	return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}