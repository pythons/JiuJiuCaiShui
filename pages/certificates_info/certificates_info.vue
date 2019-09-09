<template>
	<view class="page certificates_info">
		<view class="certificates_item">
			<view class="select_img" v-if="yyzz==''" @click="selectImg('yyzz')"></view>
			<image :src="yyzz" v-else mode="widthFix" hover-start-time="500" @longpress="operator('yyzz')" class="certificates_img"></image>
			<view class="item_title">营业执照</view>
		</view>
		<view class="certificates_item">
			<view class="select_img" v-if="khxuz==''" @click="selectImg('khxuz')"></view>
			<image :src="khxuz" v-else mode="widthFix" hover-start-time="500" @longpress="operator('yyzz')" class="certificates_img"></image>
			<view class="item_title">开户许可证</view>
		</view>
		<view class="certificates_item">
			<view class="select_img" v-if="gsmp==''" @click="selectImg('gsmp')"></view>
			<image :src="gsmp" v-else mode="widthFix" hover-start-time="500" @longpress="operator('yyzz')" class="certificates_img"></image>
			<view class="item_title">公司名片</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yyzz:'',
				khxuz:'',
				gsmp:''
			}
		},
		methods: {
			getImg(){
				console.log("tap");
			},
			selectImg(type){
				var _this = this;
				uni.chooseImage({
					count:1,
					success(res) {
						console.log(res);
						var img = res.tempFilePaths[0];
						if(type=="yyzz"){
							_this.yyzz = img;
						} else if(type=="khxuz"){
							_this.khxuz = img;
						} else if(type=="gsmp"){
							_this.gsmp = img;
						}
					}
				})
			},
			operator(id) {
				var _this = this;
				uni.showActionSheet({
					itemList: ["删除图片"],
					success: function(res){
						// 下标为0则下载
						if (res.tapIndex == 0) {
							if(id=='yyzz'){
								_this.yyzz = '';
							}  else if(id=="khxuz"){
								_this.khxuz = '';
							} else if(id=="gsmp"){
								_this.gsmp = '';
							}
						}
					}
				})
			}
		}
	}
</script>

<style>
	.certificates_info{
		padding: 36upx;
	}
	.certificates_item{
		background-color: #ffffff;
		box-shadow: 0px 0px 9upx 1upx 
			rgba(0, 0, 0, 0.05);
		border-radius: 10upx;
		margin-bottom: 40upx;
		padding: 30upx;
	}
	.certificates_img{
		width: 100%;
	}
	.item_title{
		font-size: 30upx;
		color: #000000;
		text-align: center;
		margin-top: 20upx;
	}
	.select_img{
		height: 430upx;
		width: 100%;
		background-image: url('../../static/add_img.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>
