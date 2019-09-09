<template>
	<view class="page records">
		<view class="record_item">
			<view class="record_item_name">
				国务院发布加快发展流通促进商业消费的意见
				<view class="item_money">2019-06-10</view>
			</view>
			<view class="record_company">
				为落实中美两国元首阿根廷会晤共识，2018年12月14日，国务院关税税则委员会发布公告，从2019年1月1日起，对原产于美国的汽车...
			</view>
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
		padding: 20upx;
	}
	.record_item_name{
		font-size: 22upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #000000;
	}
	.item_money{
		font-size: 22upx;
		color: #666666;
	}
	.record_company{
		font-size: 20upx;
		color: #666;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
