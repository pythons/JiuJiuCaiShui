<template>
	<view class="page order_info">
		<view class="order_info_main">
			<view class="goods_info">
				<image src="../../static/goods_img.png" mode="aspectFill" class="goods_img"></image>
				<view class="goods_info_main">
					<view class="goods_info_name">公司代理记账</view>
					<view class="goods_money">￥158.00</view>
				</view>
			</view>
		</view>
		<view class="order_info_main select_company">
			选择公司：阿里巴巴（中国）网络技术有限公司
			<image src="../../static/right_icon.png" v-if="status==0" class="right_icon"></image>
		</view>
		<view class="order_info_main" style="padding: 0 25upx;">
			<template v-if="status!=0">
				<view class="money_info_li">
					开始日期
					<text>2019-09-01</text>
				</view>
				<view class="money_info_li">
					服务周期
					<text>12个月</text>
				</view>
				<view class="money_info_li">
					到期时间
					<text>2020-08-31</text>
				</view>
			</template>
			<template v-if="status==0">
				<view class="money_info_li">
					开始日期
					<view class="select_order_date" @click="selectDate('date')">
						<view class="date_input" style="width: 80upx;">{{year}}</view>年
						<view class="date_input">{{month}}</view>月
						<view class="date_input">{{day}}</view>日
					</view>
				</view>
				<view class="money_info_li">
					服务周期
					<view class="select_order_date" @click="selectDate('selector')">
						<view class="date_input">{{monthSize}}</view>个月
					</view>
				</view>
				<view class="money_info_li">
					到期时间
					<text>{{overDate}}</text>
				</view>
			</template>
			<view class="money_info_li">
				合同金额
				<view class="goods_money">￥1896</view>
			</view>
			<view class="money_info_li">
				所在区域
				<text>北京市 朝阳区</text>
			</view>
		</view>
		<view class="order_info_main">
			<view class="order_info_name">订单信息</view>
			<view class="order_info_content">订单编号：16343984661651</view>
			<view class="order_info_content">创建时间：2019-07-02 17:07:13</view>
		</view>
		
		<view class="order_btn" v-if="status==1">续费</view>
		<view class="order_btn" v-if="status==0">提交订单</view>
		
		<w-picker 
			mode="date" 
			startYear="2019" 
			endYear="2030"
			:defaultVal="[0,0,0]" 
			:current="true"
			@confirm="onConfirm" 
			ref="date" 
			themeColor="#f00">
		</w-picker>
		
		<w-picker 
			v-if="selectList.length!=0"
			mode="selector" 
			:defaultVal="[0]" 
			@confirm="onConfirm2" 
			ref="selector" 
			themeColor="#f00"
			:selectList="selectList"
		></w-picker>
		 
	</view>
</template>

<script>
	import wPicker from '@/components/w-picker/w-picker.vue'
	export default {
		data() {
			return {
				status:0,	// 0:提交订单，1：查看订单
				year:'',
				month:'',
				monthSize:'',
				day:'',
				overDate:'',
				yearList:[],
				selectList:[],
			}
		},
		components:{
			wPicker
		},
		onLoad(e){
			var _this = this;
			this.status = e.status;
			
			for(var i=0;i<12;i++){
				_this.selectList.push({label:i+1,value:i+1});
			}
			
		},
		methods: {
			onConfirm(e) {
				var _this = this;
				this.year = e.checkArr[0];
				this.month = e.checkArr[1];
				this.day = e.checkArr[2];
				if(_this.monthSize!=''){
					var m = _this.month*1+_this.monthSize*1;
					var month = (m % 12)>9?(m % 12):('0'+(m % 12));
					var year = parseInt(m / 12) + (_this.year*1);
					_this.overDate = year + '-' + month + '-' + _this.day
				}
			},
			onConfirm2(e) {
				var _this = this;
				this.monthSize = e.checkArr.value;
				if(_this.year!=''){
					var m = _this.month*1+_this.monthSize*1;
					var month = (m % 12)>9?(m % 12):('0'+(m % 12));
					var year = parseInt(m / 12) + (_this.year*1);
					_this.overDate = year + '-' + month + '-' + _this.day
				}
			},
			selectDate(mode) {
				this.$refs[mode].show();
			},
		}
	}
</script>

<style>
	@import url("order_info.css");
</style>
