<template>
	<view class="hxm_order">
		<view class="hxm_order_info">
			<image :src="cover" class="hxm_order_img"></image>
			<view class="hxm_order_goods">
				{{name}}
				<view class="goods_money">￥{{money}}</view>
			</view>
		</view>
		<view class="hxm_order_number">x{{number}}</view>
	</view>
</template>

<script>
	export default {
		name:'hxm-order',
		props:{
			cover:{
				default:''
			},
			name:{
				default:''
			},
			money:{
				default:0
			},
			number:{
				default:0
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.hxm_order{
	display: flex;
	height: 141upx;
	justify-content: space-between;
	align-items: center;
}
.hxm_order_info{
	display: flex;
	align-items: center;
	height: 100%;
}
.hxm_order_img{
	width: 141upx;
	height: 141upx;
	border-radius: 20upx;
	margin-right: 23upx;
}
.hxm_order_goods{
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 26upx;
	color: #333333;
	height: 100%;
}
.goods_money{
	font-size: 24upx;
	color: #cc1717;
	margin-top: 20upx;
}
.hxm_order_number{
	font-size: 22upx;
	color: #999999;
}
</style>
