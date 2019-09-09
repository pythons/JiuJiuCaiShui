<template>
	<view class="page">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<jjOrderItem 
						name="阿里巴巴（中国）网络技术有限公司"
						number="91330100799655058B"
						@event="goNewLogin"
					></jjOrderItem>
					<jjOrderItem 
						name="阿里巴巴（中国）网络技术有限公司"
						number="91330100799655058B"
					></jjOrderItem>
					<jjOrderItem 
						isNew="1"
					></jjOrderItem>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<jjOrderItem 
						name="阿里巴巴（中国）网络技术有限公司"
						number="91330100799655058B"
						@event="goOrder"
					></jjOrderItem>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="order_tabs">
						<view class="order_tab_item" @click="orderStatus(0)">
							<image src="../../static/dzf_icon.png" class="order_tab_icon"></image>
							待支付
						</view>
						<view class="order_tab_item" @click="orderStatus(1)">
							<image src="../../static/dfh_icon.png" class="order_tab_icon"></image>
							待发货
						</view>
						<view class="order_tab_item" @click="orderStatus(2)">
							<image src="../../static/dsh_icon.png" class="order_tab_icon"></image>
							待收货
						</view>
					</view>
					<scroll-view scroll-y class="list_son">
						<jjOrderGoods
							cover="../static/goods_img.png"
							name="产品名称"
							money="561"
							express="中通快递"
							expressNumber="651131231656164861"
							@event="orderGoodsInfo()"
						></jjOrderGoods>
						<jjOrderGoods
							cover="../static/goods_img.png"
							name="产品名称"
							money="561"
							express="中通快递"
							expressNumber="651131231656164861"
						></jjOrderGoods>
					</scroll-view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<jjOrderItem 
						name="阿里巴巴（中国）网络技术有限公司"
						number="91330100799655058B"
						@event="goBrankOrder"
					></jjOrderItem>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import jjOrderItem from '../../components/jj-order-item.vue'
	import jjOrderGoods from '../../components/jj-order-goods.vue'
	export default {
		data() {
			return {
				scrollLeft: 0,
				tabIndex: 0,
				tabBars: [{
					name: '工商类',
					id: 'gongshanglei'
				}, {
					name: '代账类',
					id: 'daizhanglei'
				}, {
					name: '产品类',
					id: 'chanpinlei'
				}, {
					name: '商标类',
					id: 'shangbiaolei'
				}]
			}
		},
		components:{
			jjOrderItem,
			jjOrderGoods
		},
		onLoad(e) {
			this.tabIndex = e.index;
		},
		methods: {
			async changeTab(e) {
				let index = e.target.current;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				this.tabIndex = tabIndex;
			},
			goNewLogin(){
				uni.navigateTo({
					url:'../new_login/new_login'
				})
			},
			goOrder(){
				uni.navigateTo({
					url:'../order_dzl/order_dzl'
				})
			},
			orderGoodsInfo(){
				uni.navigateTo({
					url:'../order_goods_info/order_goods_info'
				})
			},
			orderStatus(index){
				uni.navigateTo({
					url:'../order_types/order_types?index='+index
				})
			},
			goBrankOrder(){
				uni.navigateTo({
					url:'../order_sbl/order_sbl'
				})
			}
		}
	}
</script>

<style>
	@import url("order.css");
</style>
