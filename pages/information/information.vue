<template>
	<view class="page records">
		<view class="record_item">
			<view class="record_item_name">
				广东93家会计师事务所(分所)被责令整改
				<view class="item_money">2019-06-10</view>
			</view>
			<view class="record_company">
				广东省财政厅近日发布《关于责令会计师事务所进行整改的公告》《关于责令会计师事务所进行整改的公告》（2019年第21号），针对广州方圆会计师事务所（普通合伙）...
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
