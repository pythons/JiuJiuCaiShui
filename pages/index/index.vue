<template>
	<view class="page">
		<view class="search_main">
			<view class="search_input" @click="searchPage">
				<image src="../../static/search_icon.png" class="search_icon"></image>
				请输入您要搜索的内容
			</view>
		</view>
		<view class="index_main">
			<view class="index_message">
				<view class="message_left">
					<image src="../../static/message_icon.png" class="message_icon"></image>
					欢迎您进入九久财税
				</view>
				<image src="../../static/right_icon.png" class="right_icon"></image>
			</view>
			<swiper class="swiper" indicator-dots="true" autoplay="true" indicator-color="#959595" indicator-active-color="#e9e9e9" interval="5000" circular="true">
				<swiper-item>
					<navigator url=""><image src="../../static/banner.png" mode="aspectFill" class="swiper_img"></image></navigator>
				</swiper-item>
				<swiper-item>
					<navigator url=""><image src="../../static/banner.png" mode="aspectFill" class="swiper_img"></image></navigator>
				</swiper-item>
				<swiper-item>
					<navigator url=""><image src="../../static/banner.png" mode="aspectFill" class="swiper_img"></image></navigator>
				</swiper-item>
			</swiper>
			<view class="index_menu">
				<view class="menu_item" @click="menu('1')">
					<image src="../../static/gsl.png" mode="scaleToFill" class="menu_icon"></image>
					工商类
				</view>
				<view class="menu_item" @click="menu('2')">
					<image src="../../static/dzl.png" mode="scaleToFill" class="menu_icon"></image>
					代账类
				</view>
				<view class="menu_item" @click="menu('3')">
					<image src="../../static/cpl.png" mode="scaleToFill" class="menu_icon"></image>
					产品类
				</view>
				<view class="menu_item" @click="menu('4')">
					<image src="../../static/sbl.png" mode="scaleToFill" class="menu_icon"></image>
					商标类
				</view>
			</view>
			<view class="index_guangao">
				<image src="../../static/sb_img.png" class="sb_img"></image>
			</view>
			<view class="index_models">
				<view class="model_item" @click="event('cszx')">
					<view class="model_item_title">
						财税资讯
					</view>
					<view class="model_item_info">
						<view class="item_info_left">
							关于财税最新消息
							<view class="item_info_btn cszx_btn">查看咨询</view>
						</view>
						<image src="../../static/cwzx_icon.png" class="model_icon"></image>
					</view>
				</view>
				<view class="model_item" @click="event('lxwm')">
					<view class="model_item_title">
						联系我们
					</view>
					<view class="model_item_info">
						<view class="item_info_left">
							在线1对1沟通
							<view class="item_info_btn lxwm_btn">联系九久</view>
						</view>
						<image src="../../static/lxwm_icon.png" class="model_icon"></image>
					</view>
				</view>
				<view class="model_item" @click="event('zxfg')">
					<view class="model_item_title">
						最新法规
					</view>
					<view class="model_item_info">
						<view class="item_info_left">
							关于财税最新法规
							<view class="item_info_btn zxfz_btn">查看法规</view>
						</view>
						<image src="../../static/zxfz_icon.png" class="model_icon"></image>
					</view>
				</view>
				<view class="model_item" @click="event('zxxt')">
					<view class="model_item_title">
						在线学堂
					</view>
					<view class="model_item_info">
						<view class="item_info_left">
							学习最新财税知识
							<view class="item_info_btn zxxt_btn">进入学堂</view>
						</view>
						<image src="../../static/zxxt_icon.png" class="model_icon"></image>
					</view>
				</view>
			</view>
			
			<view class="goods_list">
				<view class="goods_list_title">
					快速办理
					<view class="more_goods">
						更多>>
					</view>
				</view>
				<view class="goods_list_main">
					<jjGoodsItem 
						cover="../static/goods_img.png"
						money="158.00"
						name="小型规模公司代理注册证件服务业小型规模公司代理注册证件服务业"
					></jjGoodsItem>
				</view>
			</view>
			
		</view>
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
		onLoad() {

		},
		methods: {
			menu(id) {
				uni.navigateTo({
					url:'../goodsList/goodsList?type='+id
				})
			},
			searchPage() {
				uni.navigateTo({
					url:'../search/search'
				})
			},
			event(val){
				if(val=='cszx'){
					uni.navigateTo({
						url:'../information/information'
					})
				} else if(val=='zxfg'){
					uni.navigateTo({
						url:'../statute/statute'
					})
				} else if(val=='zxxt'){
					uni.navigateTo({
						url:'../school/school'
					})
				} else if(val=='lxwm'){
					uni.navigateTo({
						url:'../company_profile/company_profile'
					})
				}
			}
		}
	}
</script>

<style>
	@import url("index.css");
</style>
