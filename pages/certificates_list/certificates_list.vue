<template>
	<view class="page certificates_list">
		<view class="certificates_item" @click="info">
			<image src="../../static/company_icon.png" class="company_icon"></image>
			阿里巴巴（中国）网络技术有限公司
		</view>
		<view class="certificates_item" @click="info">
			<image src="../../static/company_icon.png" class="company_icon"></image>
			阿里巴巴（中国）网络技术有限公司
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
			info(){
				uni.navigateTo({
					url:'../certificates_info/certificates_info'
				})
			}
		}
	}
</script>

<style>
	@import url("certificates_list.css");
</style>
