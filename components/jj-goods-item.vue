<template>
	<view class="goods_item" @click="event">
		<image :src="cover" class="goods_item_cover"></image>
		<view class="goods_info">
			<view class="goods_name">{{name}}</view>
			<view class="goods_money">
				价格：<view class="money_num">￥{{money}}</view>
			</view>
			<view class="goods_btn">
				<image src="../static/see_icon.png" class="see_icon"></image>
				查看
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goods_item",
		props:{
			cover:{
				default:''
			},
			money:{
				default:''
			},
			name:{
				default:''
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			event (){
				this.$emit("event")
			}
		}
	}
</script>

<style>
	.goods_item{
		height: 200upx;
		background-color: #ffffff;
		box-shadow: 0px 0px 9upx 1px 
			rgba(0, 0, 0, 0.05);
		border-radius: 10upx;
		display: flex;
		margin-bottom: 35upx;
	}
	.goods_item_cover{
		width: 299upx;
		height: 200upx;
		background-color: #ce9898;
		border-radius: 10upx;
	}
	.goods_info{
		width: calc(100% - 299upx);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0 13upx;
	}
	.goods_name{
		font-size: 24upx;
		line-height: 30upx;
		color: #000000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goods_money{
		display: flex;
		align-items: center;
		font-size: 20upx;
		color: #000000;
	}
	.money_num{
		font-size: 20upx;
		color: #ff0000;
	}
	.goods_btn{
		width: 100upx;
		height: 36upx;
		border-radius: 6upx;
		border: solid 1px #00b0fc;
		font-size: 20upx;
		color: #00b0fc;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.see_icon{
		width: 20upx;
		height: 20upx;
		margin-right: 8upx;
	}
</style>
