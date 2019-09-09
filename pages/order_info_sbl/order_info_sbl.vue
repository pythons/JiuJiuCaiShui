<template>
	<view class="page order_info">
		<view class="order_info_main">
			<view class="goods_info">
				<image src="../../static/goods_img.png" mode="aspectFill" class="goods_img"></image>
				<view class="goods_info_main">
					<view class="goods_info_name">北京商标注册</view>
					<view class="goods_type">图文</view>
					<view class="goods_money">￥158.00</view>
				</view>
			</view>
		</view>
		<view class="order_info_main select_company">
			选择公司：阿里巴巴（中国）网络技术有限公司
			<image src="../../static/right_icon.png" v-if="status==0" class="right_icon"></image>
		</view>
		<view class="order_info_main" style="padding: 0 25upx;">
			<view class="money_info_li">
				输入商标名
				<input type="text" class="order_li_input" />
			</view>
			<view class="money_info_li">
				上传图片
				<image src="../../static/upload_icon.png" class="money_li_img" mode="aspectFit"></image>
			</view>
		</view>
		<view class="order_info_main">
			<view class="order_info_name">订单信息</view>
			<view class="order_info_content">订单编号：16343984661651</view>
			<view class="order_info_content">创建时间：2019-07-02 17:07:13</view>
		</view>
		
		<view class="order_btn" v-if="status==0">提交订单</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:0,	// 0:提交订单，1：查看订单
			}
		},
		onLoad(e){
			var _this = this;
			this.status = e.status;
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("order_info.css");
</style>
