<template>
	<view class="page">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="order_item" @click="seeOrderInfo">
						<jjOrder 
							cover="../static/goods_cover.png"
							name="产品名称"
							money="300"
							number="1"
						></jjOrder>
						<view class="order_item_btns">
							<view class="order_btn">取消订单</view>
							<view class="order_btn green">付款</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="order_item" @click="seeOrderInfo">
						<jjOrder 
							cover="../static/goods_cover.png"
							name="产品名称"
							money="300"
							number="1"
						></jjOrder>
					</view>
					<view class="order_item" @click="seeOrderInfo">
						<jjOrder 
							cover="../static/goods_cover.png"
							name="产品名称"
							money="300"
							number="1"
						></jjOrder>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="order_item" @click="seeOrderInfo">
						<jjOrder 
							cover="../static/goods_cover.png"
							name="产品名称"
							money="300"
							number="1"
						></jjOrder>
						<view class="order_item_btns">
							<view class="order_btn green">确认收货</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="order_item" @click="seeOrderInfo">
						<jjOrder 
							cover="../static/goods_cover.png"
							name="产品名称"
							money="300"
							number="1"
						></jjOrder>
						<view class="order_item_btns">
							<view class="order_btn black">删除订单</view>
							<view class="order_btn green">再买一次</view>
						</view>
					</view>
					<view class="order_item" @click="seeOrderInfo">
						<jjOrder 
							cover="../static/goods_cover.png"
							name="产品名称"
							money="300"
							number="1"
						></jjOrder>
						<view class="order_item_btns">
							<view class="order_btn black">删除订单</view>
							<view class="order_btn green">再买一次</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import jjOrder from '@/components/jj-order.vue'
	export default {
		data() {
			return {
				scrollLeft: 0,
				tabIndex: 0,
				tabBars: [{
					name: '待支付',
					id: 'daifukuan'
				}, {
					name: '待发货',
					id: 'daifahuo'
				}, {
					name: '待收货',
					id: 'daishouhuo'
				}, {
					name: '已完成',
					id: 'quanbudingdan'
				}]
			}
		},
		components:{
			jjOrder
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
			seeOrderInfo() {
				uni.navigateTo({
					url:'../order_goods_info/order_goods_info'
				})
			}
		}
	}
</script>

<style>
	@import "myOrder.css";
</style>
