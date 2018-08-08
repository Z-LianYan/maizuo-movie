

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import buycar from './buycar'

const store = new Vuex.Store ({
	modules: {
		buycar		
	}
})

export default store