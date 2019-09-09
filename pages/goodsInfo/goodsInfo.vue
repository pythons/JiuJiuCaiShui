<template>
	<view class="page">
		<view class="goods_banner">
			<swiper class="swiper" :autoplay="true" :circular="true" @change="change">
				<swiper-item>
					<image class="swiper_img" src="../../static/goods_banner2.png"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper_img" src="../../static/goods_banner.png"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper_img" src="../../static/goods_banner2.png"></image>
				</swiper-item>
			</swiper>
			<view class="banner_number">{{bannerIndex}}/3</view>
		</view>
		<view class="goods_info_main">
			<view class="goods_name">
				<view class="goods_name_main">
					<view class="goods_name_content">中型规模公司代理注册服务业务</view>
					<view class="goods_money">
						<text class="goods_money_text">价格</text>
						￥300
					</view>
				</view>
				<!-- <button class="goods_share_btn">分享</button> -->
				<button open-type="share" class="goods_share_btn">
					<image src="../../static/share_icon.png" class="share_icon"></image>分享
				</button>
			</view>
			
			<view class="goods_info">
				<view class="goods_info_li">
					<view class="goods_info_title">服务类型:</view>
					<view class="goods_info_content">
						<view class="goods_type_title">
							选择服务类型
							<image src="../../static/select_icon.png" class="right_icon"></image>
						</view>
						<view class="goods_select_vals">
							<view class="select_val_item">外资企业</view>
							<view class="select_val_item">内资企业</view>
							<view class="select_val_item">个体工商户</view>
						</view>
					</view>
				</view>
				<view class="goods_info_li">
					<view class="goods_info_title">推荐服务</view>
					<view class="goods_info_content">
						<view class="goods_type_title">
							选择服务项目
							<image src="../../static/select_icon.png" class="right_icon"></image>
						</view>
						<view class="goods_select_vals">
							<view class="select_val_item">银行服务</view>
							<view class="select_val_item">税务服务</view>
						</view>
					</view>
				</view>
				<view class="goods_info_li">
					<view class="goods_info_title">选择地区</view>
					<view class="goods_info_content">
						<view class="goods_type_title" @click="showMulLinkageThreePicker">
							{{city==''?'选择地区':city}}
							<image src="../../static/select_icon.png" class="right_icon"></image>
						</view>
					</view>
				</view>
			</view>
			
			<view class="goods_info_btns">
				<view class="goods_btn_item">业务介绍</view>
				<view class="goods_btn_item item_white">需要资料</view>
			</view>
			
			<view class="goods_imgs">
				<uParse :content="content" />
			</view>
		</view>
		
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		
		<view class="goods_footer">
			<view class="goods_money">￥300.00元</view>
			<view class="goods_btn buy_btn" @click="confirmOrder">立即购买</view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue';
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		data() {
			return {
				type:'',
				themeColor: '#181818',
				cityPickerValueDefault: [0, 0, 1],
				city:'',
				bannerIndex:1,
				content:'商品详情'
			}
		},
		onShareAppMessage() {
			var _this = this;
			return {
				title: "中型规模公司代理注册服务业务",
				path: '/pages/index/index?pageNeedId1='+_this.uid+"&pageNeedId2="+_this.goodId+"&page=goods_info"
			}
		},
		components: {
			uParse,
			mpvueCityPicker
		},
		onLoad(e) {
			this.type = e.type;
		},
		methods: {
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.city = e.label.replace(/-/g,' ');
			},
			onCancel(e) {
				this.city = e.label.replace(/-/g,' ');
			},
			change(e) {
				this.bannerIndex = e.detail.current+1;
			},
			confirmOrder() {
				var _this = this;
				if(this.type==1){
					uni.navigateTo({
						url:'../order_info/order_info?status=0'
					})
				} else if(this.type==2){
					uni.navigateTo({
						url:'../order_info_dzl/order_info_dzl?status=0'
					})
				} else if(this.type==3){
					uni.navigateTo({
						url:'../order_cpl/order_cpl'
					})
				} else if(this.type==4){
					uni.navigateTo({
						url:'../order_info_sbl/order_info_sbl'
					})
				}
			}
		}
	}
</script>

<style>
	@import url("goodsInfo.css");
</style>
