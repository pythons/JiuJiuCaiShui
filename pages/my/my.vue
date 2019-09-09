<template>
	<view class="page my_page">
		<view class="my_info">
			<image src="../../static/goods_cover.png" class="my_photo" mode="aspectFill"></image>
			张三三
		</view>
		<view class="my_lis">
			<view class="my_li_item" v-for="ls in lists" :key="ls.name" @click="event(ls.name)">
				<view class="li_item_left">
					<image :src="ls.icon" class="li_item_icon"></image>
					{{ls.title}}
				</view>
				<image src="../../static/right_icon2.png" class="right_icon"></image>
			</view>
		</view>
		<view class="jszc">技术支持：鼎峰互动</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[
					{title:"公司信息",icon:"../../static/gsxx_icon.png",name:"gsxx"},
					{title:"证件信息",icon:"../../static/zjxx_icon.png",name:"zjxx"},
					{title:"交易信息",icon:"../../static/jyjl_icon.png",name:"jyjl"},
					{title:"票据信息",icon:"../../static/pjxx_icon.png",name:"pjxx"},
				]
			}
		},
		methods: {
			event(val){
				if(val=='gsxx'){
					uni.navigateTo({
						url:'../company_list/company_list'
					})
				} else if(val=='zjxx'){
					uni.navigateTo({
						url:'../certificates_list/certificates_list'
					})
				} else if(val=='jyjl'){
					uni.navigateTo({
						url:'../records/records'
					})
				} else if(val=='pjxx'){
					
				}
			}
		}
	}
</script>

<style>
	.my_page{
		background-image: url('~@/static/my_bg.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position-y: -130upx;
		padding-top: 212upx;
	}
	.my_info{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		color: #000000;
		flex-direction: column;
	}
	.my_photo{
		width: 131upx;
		height: 131upx;
		border-radius: 50%;
		margin-bottom: 10upx;
	}
	.my_lis{
		width: 678upx;
		background-color: #ffffff;
		box-shadow: 0px 0px 9upx 1upx 
			rgba(0, 0, 0, 0.05);
		border-radius: 10upx;
		margin: 0 auto;
		margin-top: 40upx;
		padding: 0 30upx;
	}
	.my_li_item{
		height: 90upx;
		display: flex;
		align-items: center;
		border-bottom: solid 1px #ececec;
		justify-content: space-between;
		padding: 0 25upx;
	}
	.my_li_item:last-child{
		border: none;
	}
	.li_item_left{
		display: flex;
		align-items: center;
		font-size: 24upx;
		color: #000000;
	}
	.li_item_icon{
		width: 35upx;
		height: 35upx;
		margin-right: 30upx;
	}
	.right_icon{
		width: 12upx;
		height: 22upx;
	}
	.jszc{
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		bottom: 50upx;
		font-size: 20upx;
		color: #999999;
	}
</style>
