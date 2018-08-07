import {
	CHANGE_USER_INFO
} from './const'

export default {
	
	
	login ({commit}, {username, password, callback}) {
		
		setTimeout(() => {
			if (username === '1' && password === '1') {
				//登陆成功
				let userInfo = {userId: 100, username: '二狗子'}
				
				
				commit(CHANGE_USER_INFO,userInfo)
				callback(1);
				return false;
			}
			callback(0)
		},1000)
		
	}
	
}
