<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			if (uni.canIUse('getUpdateManager')) {
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(function (res) {
					if (res.hasUpdate) { // 请求完新版本信息的回调
						updateManager.onUpdateReady(function () {
							uni.showModal({
								title: '更新提示',
								content: '新版本已经准备好，是否重启应用？',
								success: function (res) {
									if (res.confirm) {// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
										updateManager.applyUpdate()
									}
								}
							})
						});
						updateManager.onUpdateFailed(function () {
							uni.showModal({// 新的版本下载失败
								title: '已经有新版本了哟~',
								content: '新版本已经上线啦~，请您删除当前小程序，重新搜索进入哟~',
							})
						})
					}
				})
			} else {
				uni.showModal({// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
					title: '提示',
					content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
				})
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	.page{
		height: 100vh;
	}
	view{
		box-sizing: border-box;
		word-wrap:break-word!important;
		word-break: normal!important;
	}
	::-webkit-scrollbar{
		width: 0;
		height: 0;
		color: transparent;
	}
	button::after {
	  border: none;
	}
	
	.null_data{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24upx;
		color: #00b0fc;
	}
	.null_data_img{
		width: 278upx;
		height: 298upx;
		margin-bottom: 30upx;
	}
</style>
