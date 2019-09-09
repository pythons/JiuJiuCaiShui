<template>
	<view class="page records">
		<view class="record_item">
			<view class="record_item_name">
				公司代理记账服务
				<view class="item_money">￥100</view>
			</view>
			<view class="record_company">办理公司：阿里巴巴（中国）网络技术有限公司</view>
			<view class="record_time">2019-08-05</view>
		</view>
		<view class="record_item">
			<view class="record_item_name">
				公司代理记账服务
				<view class="item_money">￥100</view>
			</view>
			<view class="record_company">办理公司：阿里巴巴（中国）网络技术有限公司</view>
			<view class="record_time">2019-08-05</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.records{
		padding: 36upx;
	}
	.record_item{
		height: 150upx;
		background-color: #ffffff;
		box-shadow: 0px 0px 9upx 1upx 
			rgba(0, 0, 0, 0.05);
		border-radius: 20upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-bottom: 30upx;
		padding: 0 20upx;
	}
	.record_item_name{
		font-size: 22upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #333333;
	}
	.item_money{
		font-size: 22upx;
		color: #f00;
	}
	.record_company{
		font-size: 20upx;
		color: #333333;
	}
	.record_time{
		font-size: 18upx;
		color: #999999;
	}
</style>
