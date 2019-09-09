<template>
	<view class="page company_list">
		<view class="company_item">
			<view class="company_item_name" @click="companyInfo">阿里巴巴（中国）网络技术有限公司</view>
			<view class="company_item_name" @click="companyInfo">税号：91330100799655058B</view>
			<view class="company_item_make">
				<view class="item_make blue">
					<image src="../../static/checked.png" class="check_icon"></image>设为默认
				</view>
				<view class="item_btns">
					<view class="item_btn blue">编辑</view>
					<view class="item_btn blue">删除</view>
				</view>
			</view>
		</view>
		<view class="company_item">
			<view class="company_item_name" @click="companyInfo">阿里巴巴（中国）网络技术有限公司</view>
			<view class="company_item_name" @click="companyInfo">税号：91330100799655058B</view>
			<view class="company_item_make">
				<view class="item_make">
					<image src="../../static/check.png" class="check_icon"></image>设为默认
				</view>
				<view class="item_btns">
					<view class="item_btn">编辑</view>
					<view class="item_btn">删除</view>
				</view>
			</view>
		</view>
		
		<uni-popup :show="type === 'middle'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<view class="company_popup">
				<view class="company_title">新增公司信息</view>
				<view class="company_info_item">
					<view class="company_item_title">公司名称：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">税　　号：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">公司地址：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">公司电话：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">开户银行：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">银行账号：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_submit_btn">保存</view>
			</view>
		</uni-popup>
		
		<view class="add_company" @click="togglePopup('middle')">新增公司信息</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				type:''
			}
		},
		components:{
			uniPopup
		},
		methods: {
			togglePopup(type) {
				this.type = type;
			},
			companyInfo(){
				uni.navigateTo({
					url:'../company_info/company_info'
				})
			}
		}
	}
</script>

<style>
	@import url("company_list.css");
</style>
