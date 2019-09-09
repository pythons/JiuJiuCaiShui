<template>
	<view class="page order_info">
		<view class="order_info_main">
			<view class="goods_info">
				<image src="../../static/goods_img.png" mode="aspectFill" class="goods_img"></image>
				<view class="goods_info_main">
					<view class="goods_info_name">小型规模公司代理注册证件服务业</view>
					<view class="goods_type">外资企业</view>
					<view class="goods_money">￥158.00</view>
				</view>
			</view>
			<view class="goods_info_li">
				银行服务
				<view class="goods_money">￥158.00</view>
			</view>
			<view class="goods_info_li">
				税务服务
				<view class="goods_money">￥158.00</view>
			</view>
		</view>
		<view class="order_info_main select_company">
			选择公司：阿里巴巴（中国）网络技术有限公司
			<image src="../../static/right_icon.png" v-if="status==0" class="right_icon"></image>
		</view>
		<view class="order_info_main" style="padding: 0 25upx;">
			<view class="money_info_li">
				合同总金额
				<text>￥358.00</text>
			</view>
			<view class="money_info_li">
				付款比例
				<text>50%</text>
			</view>
			<view class="money_info_li">
				首款金额
				<view class="goods_money">￥179.00</view>
			</view>
			<view class="money_info_li">
				剩余款项
				<view class="goods_money">￥179.00</view>
			</view>
			<view class="money_info_li">
				所在区域
				<text>北京市 朝阳区</text>
			</view>
		</view>
		<view class="order_info_main" v-if="status!=0" @click="togglePopup('middle')" style="justify-content: center;display: flex;">
			查看提供资料详情
		</view>
		<view class="order_info_main">
			<view class="order_info_name">订单信息</view>
			<view class="order_info_content">订单编号：16343984661651</view>
			<view class="order_info_content">创建时间：2019-07-02 17:07:13</view>
		</view>
		
		<view class="order_btn">续费</view>
		
		<uni-popup :show="type === 'middle'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<view class="source_main">
				<view class="source_title">需要提供资料</view>
				<view class="source_title source_item" :class="{active:selects.indexOf('1')!=-1}" @click="select(1)">
					法人身份证原件
					<view class="source_checkbox"></view>
				</view>
				<view class="source_title source_item" :class="{active:selects.indexOf('2')!=-1}" @click="select(2)">
					法人身份证复印件
					<view class="source_checkbox"></view>
				</view>
				<view class="source_title source_item" :class="{active:selects.indexOf('3')!=-1}" @click="select(3)">
					银行开户信息
					<view class="source_checkbox"></view>
				</view>
				<view class="source_message">
					请在2019年9月14日之前提交。收件地址：筑城奥斯卡大厦B座524，收件人：XXX，电话：15365131155
				</view>
				<view class="source_submit" v-if="status==0">提交</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				type: '',
				selects:'',
				status:0	// 0:提交订单，1：查看订单
			}
		},
		components:{
			uniPopup
		},
		onLoad(e){
			this.status = e.status;
		},
		methods: {
			togglePopup(type) {
				this.type = type;
			},
			select(val){
				var _this = this;
				var selects = _this.selects;
				if(selects.indexOf(val)==-1){
					selects += val+',';
				} else {
					selects.replace(val,'');
				}
				_this.selects = selects.substring(0,selects.length-1);
			}
		}
	}
</script>

<style>
	@import url("order_info.css");
</style>
