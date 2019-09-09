<template>
	<view class="page">
		<view class="page_title">
			收货地址
			<view class="add_address">添加</view>
		</view>
		<scroll-view class="address_list" scroll-x>
			<view class="address_item">
				<view class="order_address">
					<image src="../../static/address_icon.png" class="address_icon"></image>
					<view class="order_address_info">
						张三三 187637363736
						<view class="address_content">江西省南昌市西湖区中山西湖区中山路890号</view>
					</view>
					<view class="address_make">
						<image src="../../static/selected_icon.png" class="selected_icon"></image>
						<image src="../../static/edit_icon.png" class="edit_icon"></image>
					</view>
				</view>
			</view>
			<view class="address_item">
				<view class="order_address">
					<image src="../../static/address_icon.png" class="address_icon"></image>
					<view class="order_address_info">
						张三三 187637363736
						<view class="address_content">江西省南昌市中山路890号</view>
					</view>
					<view class="address_make">
						<image src="../../static/selected_icon.png" class="selected_icon"></image>
						<image src="../../static/edit_icon.png" class="edit_icon"></image>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="order_info">
			<view class="order_info_goods">
				<view class="info_goods_leftt">
					<image src="../../static/goods_img.png" class="goods_img"></image>
					<view class="goods_info">
						<view class="goods_info_name">产品名称</view>
						<view class="goods_info_money">￥300</view>
					</view>
				</view>
				<view class="goods_btn_main">
					<view class="goods_add_btn">
						<view class="add_btn">-</view>
						<input type="number" class="goods_number_input" />
						<view class="add_btn">+</view>
					</view>
				</view>
			</view>
			<view class="order_info_goods">
				<view class="info_goods_leftt">
					<image src="../../static/goods_img.png" class="goods_img"></image>
					<view class="goods_info">
						<view class="goods_info_name">产品名称</view>
						<view class="goods_info_money">￥300</view>
					</view>
				</view>
				<view class="goods_btn_main">
					<view class="goods_add_btn">
						<view class="add_btn">-</view>
						<input type="number" class="goods_number_input" />
						<view class="add_btn">+</view>
					</view>
				</view>
			</view>
			<view class="order_li_main">
				<view class="order_li">
					<view class="order_li_left">
						购买数量
					</view>
					<view class="order_li_right">x1</view>
				</view>
				<view class="order_li">
					<view class="order_li_left">
						配送方式
						<text class="order_li_content">普通配送</text>
					</view>
					<view class="order_li_right">免费配送</view>
				</view>
				<view class="order_li">
					<view class="order_li_left">
						订单备注
						<input type="text" class="order_description" placeholder="选填，请先和商家协商一致" placeholder-class="plac_order" />
					</view>
				</view>
			</view>
			<view class="order_count">
				共1件，合计:<text class="count_money">￥300</text>
			</view>
		</view>
		<view class="order_dicture">
			<view class="order_dicture_top">订单信息</view>
			<view class="order_dicture_item">订单编号：　16343984661651</view>
			<view class="order_dicture_item">创建时间：　2019-07-02 17:07:13</view>
		</view>
		
		<view class="order_btns">
			<view class="order_money">
				共2件，合计:<text class="order_money_count">￥600</text>
			</view>
			<view class="order_btn_item">提交订单</view>
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
@import url("confirmOrder.css");
</style>
