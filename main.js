import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

/* Vue.prototype.href = "https://wx.tbshou.com";
Vue.prototype.serverURL = "https://wx.tbshou.com/index.php/"; */
Vue.prototype.APPID = "wx26504ae2a2c63a53";
/* Vue.prototype.secret = "dd6d168f9d043e7d87076f3addb0a6f0"; */

Vue.prototype.goLogin = function() {		// 未登录
	uni.navigateTo({
		url:'../login/login'
	})
}

Vue.prototype.noRegister = function() {		// 未登录
	uni.showModal({
		title:'',
		content:'您还没有登录，请先登录~',
		success(res) {
			if(res.confirm){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	})
}

Vue.prototype.myRequest = function(url,datas,callback) {
	uni.showLoading({
		title:'加载中...',
		mask:true
	})
	uni.request({
		url:this.serverURL + url,
		method:"POST",
		data:datas,
		success(res) {
			callback(res);
		}
	})
}

Vue.prototype.myModel = function(title) {
	uni.showModal({
		title:'',
		content:title
	})
}

Vue.prototype.checkMobile = function(mobile) {
	return RegExp(/^1[3456789]\d{9}$/).test(mobile);
}

const app = new Vue({
    ...App
})
app.$mount()
