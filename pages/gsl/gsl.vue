<template>
	<view class="page">
		<scroll-view class="list" scroll-y>
			<jjGoodsItem 
				cover="../static/goods_img.png"
				money="158.00"
				name="小型规模公司代理注册证件服务业小型规模公司代理注册证件服务业"
				@event="goodsInfo"
			></jjGoodsItem>
			<jjGoodsItem 
				cover="../static/goods_img.png"
				money="158.00"
				name="小型规模公司代理注册证件服务业小型规模公司代理注册证件服务业"
			></jjGoodsItem>
		</scroll-view>
	</view>
</template>

<script>
	import jjGoodsItem from '../../components/jj-goods-item.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			jjGoodsItem
		},
		methods: {
			goodsInfo(){
				uni.navigateTo({
					url:'../goodsInfo/goodsInfo'
				})
			}
		}
	}
</script>

<style>
	.list{
		height: 100%;
		padding: 35upx;
		box-sizing: border-box;
	}
</style>
