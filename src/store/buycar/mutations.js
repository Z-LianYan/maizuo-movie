
import {
	SYNC_UPDATE
} from './const'
export default {
	[SYNC_UPDATE] (state, newcar) {
		//在这里state已经是buycar模块的state了
		state.cars = newcar
	}
		
}
