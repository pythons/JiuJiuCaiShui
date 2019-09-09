<template>
	<view class="page">
		<view class="new_logins">
			<jjOrderSon 
				cover="../static/goods_img.png"
				name="公司代理记账业务"
				value1="2019-09-01"
				value2="12个月"
				value3="2019-09-01"
				value4="1896"
				time="2019-09-02 10:34:07"
				isOver="0"
				@event="orderInfo"
			></jjOrderSon>
			
			<jjOrderSon 
				cover="../static/goods_img.png"
				name="公司代理记账业务"
				value1="2019-09-01"
				value2="12个月"
				value3="2019-09-01"
				value4="1896"
				time="2019-09-02 10:34:07"
				isOver="1"
			></jjOrderSon>
		</view>
	</view>
</template>

<script>
	import jjOrderSon from '../../components/jj-order-son2.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			jjOrderSon
		},
		methods: {
			orderInfo(){
				uni.navigateTo({
					url:'../order_info_dzl/order_info_dzl'
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
