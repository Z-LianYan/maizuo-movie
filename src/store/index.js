

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import buycar from './buycar'
import other from './other'

const store = new Vuex.Store ({
	modules: {
		buycar,other
	}
})

export default store