
export default {
	userInfo: localStorage.userInfo?JSON.parse(localStorage.userInfo) : {
		userId: null,
		username: ''
	}
}

