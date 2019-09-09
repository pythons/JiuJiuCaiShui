<template>
	<view class="order_son">
		<view class="order_body" @click="info">
			<image :src="cover" class="order_img"></image>
			<view class="order_info">
				<view class="order_info_title">
					{{name}}
				</view>
				<view class="order_info_ul">
					<view class="info_li">
						合同金额：<text class="info_li_money">￥{{value1}}</text>
					</view>
					<view class="info_li">
						付款比例：<text class="info_li_money">{{value2}}</text>
					</view>
					<view class="info_li">
						首款金额：<text class="info_li_money">￥{{value3}}</text>
					</view>
					<view class="info_li">
						剩余款项：<text class="info_li_money">￥{{value4}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="order_footer">
			{{time}}
			<view class="order_btns">
				<template v-if="status==0">
					<view class="order_btn" @click="firstMoney">缴纳首款</view>
				</template>
				<template v-if="status==1">
					<view class="order_btn" @click="lastMoney">缴纳尾款</view>
				</template>
				<template v-if="status==2">
					<view class="order_wc">订单已完成</view>
				</template>
				<view class="order_btn" @click="openModel">资料详情</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'order-son',
		props:{
			cover:{
				default:''
			},
			name:{
				default:''
			},
			value1:{
				default:''
			},
			value2:{
				default:''
			},
			value3:{
				default:''
			},
			value4:{
				default:''
			},
			time:{
				default:''
			},
			status:{	// 0缴纳收款，1缴纳尾款，2订单完成
				default:0
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			firstMoney(){
				this.$emit("firstMoney")
			},
			lastMoney(){
				this.$emit("lastMoney")
			},
			info(){
				this.$emit("info")
			},
			openModel(){
				this.$emit("openModel")
			}
		}
	}
</script>

<style>
	.order_son{
		padding: 10upx;
		height: 280upx;
		background-color: #ffffff;
		box-shadow: 0px 0px 9upx 1px 
			rgba(0, 0, 0, 0.05);
		border-radius: 10upx;
		margin-bottom: 30upx;
	}
	.order_body{
		display: flex;
	}
	.order_img{
		width: 200upx;
		height: 180upx;
		background-color: #ce9898;
		border-radius: 10upx;
	}
	.order_info{
		width: calc(100% - 200upx);
		padding: 15upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.order_info_title{
		font-size: 24upx;
		color: #000000;
	}
	.order_info_ul{
		display: flex;
		flex-wrap: wrap;
	}
	.info_li{
		width: 50%;
		font-size: 20upx;
		color: #000000;
		height: 50upx;
		display: flex;
		align-items: center;
	}
	.info_li_money{
		color: #ff0000;
	}
	.order_footer{
		height: 70upx;
		display: flex;
		justify-content: space-between;
		font-size: 20upx;
		color: #000000;
		align-items: center;
		margin-top: 10upx;
		border-top: solid 1px #eeeeee;
	}
	.order_btns{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.order_btn{
		width: 150upx;
		height: 50upx;
		background-color: #00b0fc;
		border-radius: 10upx;
		font-size: 24upx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 25upx;
	}
	.order_wc{
		font-size: 24upx;
		color: #000;
	}
</style>
