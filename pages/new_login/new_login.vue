<template>
	<view class="page">
		<view class="new_logins">
			<jjOrderSon 
				cover="../static/goods_img.png"
				name="小型规模公司代理注册证件服务业"
				value1="188"
				value2="50%"
				value3="94"
				value4="94"
				time="2019-09-02 10:34:07"
				status="0"
				@info="orderInfo"
				@openModel="togglePopup('middle')"
			></jjOrderSon>
			
			<jjOrderSon 
				cover="../static/goods_img.png"
				name="小型规模公司代理注册证件服务业"
				value1="188"
				value2="50%"
				value3="94"
				value4="94"
				time="2019-09-02 10:34:07"
				status="1"
			></jjOrderSon>
			
			<jjOrderSon 
				cover="../static/goods_img.png"
				name="小型规模公司代理注册证件服务业"
				value1="188"
				value2="50%"
				value3="94"
				value4="94"
				time="2019-09-02 10:34:07"
				status="2"
			></jjOrderSon>
		</view>
		
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
				<view class="source_submit">提交</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import jjOrderSon from '../../components/jj-order-son.vue'
	export default {
		data() {
			return {
				type: '',
				selects:''
			}
		},
		components:{
			jjOrderSon,
			uniPopup
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
			},
			orderInfo(){
				uni.navigateTo({
					url:'../order_info/order_info'
				})
			}
		}
	}
</script>

<style>
	.new_logins{
		padding: 30upx 36upx;
	}
	
	.source_main{
		width: 678upx;
		height: 550upx;
		background-color: #ffffff;
		border-radius: 10upx;
		padding: 0 40upx;
	}
	.source_title{
		height: 80upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		color: #000000;
		border-bottom: solid 1px #ededed;
	}
	.source_item{
		justify-content: space-between;
		font-size: 20upx;
	}
	.source_item.active{
		color: #00b0fc;
	}
	.source_item.active .source_checkbox{
		background: #00b0fc;
	}
	.source_checkbox{
		width: 20upx;
		height: 20upx;
		border: solid 1px #00b0fc;
	}
	.source_message{
		font-size: 20upx;
		color: #000000;
		margin-top: 40upx;
	}
	.source_submit{
		margin: 0 auto;
		width: 120upx;
		height: 50upx;
		background-color: #00b0fc;
		border-radius: 25upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20upx;
		color: #ffffff;
		margin-top: 40upx;
	}
</style>
