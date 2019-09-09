<template>
	<view class="page">
		<view class="page_title">收货地址</view>
		<view class="order_address">
			<image src="../../static/address_icon.png" class="address_icon"></image>
			<view class="order_address_info">
				张三三 187637363736
				<text>江西省南昌市西湖区中山路890号</text>
			</view>
		</view>
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
			<view class="order_li_main">
				<view class="order_li">
					<view class="order_li_left">
						购买数量
					</view>
					<view class="order_li_right">x1</view>
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
		<view class="order_address order_status" v-if="status==0">
			<image src="../../static/wait_icon.png" class="address_icon"></image>
			<view class="order_address_info green">
				等待买家付款
				<text>剩余23小时24分自动关闭</text>
			</view>
		</view>
		<view class="order_address order_status" v-if="status==1">
			<image src="../../static/wait_icon.png" class="address_icon"></image>
			<view class="order_address_info green">
				买家已付款
				<text>等待卖家发货</text>
			</view>
		</view>
		<view class="order_address order_status" v-if="status==2">
			<image src="../../static/order_icon.png" class="address_icon"></image>
			<view class="order_address_info green">
				卖家已发货
				<view class="order_number">
					快递运单号：1564984134114166
					<view class="copy_btn">复制</view>
				</view>
			</view>
		</view>
		<view class="order_address order_status" v-if="status==3">
			<image src="../../static/order_icon.png" class="address_icon"></image>
			<view class="order_address_info green">
				交易完成
				<view class="order_number">
					快递运单号：1564984134114166
					<view class="copy_btn">复制</view>
				</view>
			</view>
		</view>
		
		<view class="order_btns" v-if="status!=1">
			<template v-if="status==0">
				<view class="order_btn_item">取消订单</view>
				<view class="order_btn_item green">立即支付</view>
			</template>
			<!-- <template v-if="status==1">
				<view class="order_btn_item green">联系卖家</view>
			</template> -->
			<template v-if="status==2">
				<view class="order_btn_item green">确认收货</view>
			</template>
			<template v-if="status==3">
				<view class="order_btn_item">删除订单</view>
				<view class="order_btn_item green">再买一次</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:2,	//0:等待买家付款；1：等待卖家发货;2:卖家已发货;3:交易完成
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("orderInfo.css");
</style>
