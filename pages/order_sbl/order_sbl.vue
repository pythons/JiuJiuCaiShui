<template>
	<view class="page">
		<view class="new_logins">
			<jjOrderBrank 
				cover="../static/goods_img.png"
				name="小型规模公司代理注册证件服务业"
				money="158.00"
				companyName="阿里巴巴"
				@event="orderInfo"
			></jjOrderBrank>
		</view>
	</view>
</template>

<script>
	import jjOrderBrank from '../../components/jj-order-brank.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			jjOrderBrank
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:"腾讯控股有限公司"
			});
		},
		methods: {
			orderInfo(){
				uni.navigateTo({
					url:'../order_info_sbl/order_info_sbl'
				})
			}
		}
	}
</script>

<style>
	.new_logins{
		padding: 30upx 36upx;
	}
</style>
