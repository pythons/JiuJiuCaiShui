<template>
	<view class="page login">
		<view class="login_main">
			<image src="../../static/logo.png" class="logo_img"></image>
			<view class="login_tab">
				<view class="login_tab_item" :class="{active:isLogin==1}" @click="checkLogin(1)">登录</view>
				<view class="login_tab_item active">/</view>
				<view class="login_tab_item" :class="{active:isLogin==2}" @click="checkLogin(2)">注册</view>
			</view>
			<template v-if="isLogin==1">
				<view class="login_input_item">
					<image src="../../static/phone_icon.png" class="login_icon"></image>
					<input type="number" class="login_input" v-model="login_phono" placeholder="请输入您的手机号码" placeholder-class="login_input_pla" />
				</view>
				<view class="login_input_item">
					<image src="../../static/password_icon.png" class="login_icon"></image>
					<input type="text" class="login_input" v-model="login_password" placeholder="请输入您的密码" placeholder-class="login_input_pla" />
				</view>
				<view class="down_password">
					<navigator>忘记密码？</navigator>
				</view>
				<view class="login_btn">登录</view>
			</template>
			<template v-if="isLogin==2">
				<view class="login_input_item">
					<image src="../../static/phone_icon.png" class="login_icon"></image>
					<input type="number" class="login_input" v-model="register_phono" placeholder="请输入您的手机号码" placeholder-class="login_input_pla" />
				</view>
				<view class="login_input_item">
					<image src="../../static/yzm_icon.png" class="login_icon"></image>
					<input type="number" class="login_input" v-model="register_yzm" placeholder="请输入验证码" placeholder-class="login_input_pla" />
					<view class="get_yzm">获取验证码</view>
				</view>
				<view class="login_input_item">
					<image src="../../static/password_icon.png" class="login_icon"></image>
					<input type="text" class="login_input" v-model="register_password" placeholder="请输入您的密码" placeholder-class="login_input_pla" />
				</view>
				<view class="login_btn register_btn">注册</view>
			</template>
		</view>
		<view class="other_login" :style="isLogin==1?'':'margin-top:100rpx;'">
			<image src="../../static/wechar.png" class="wechar_login"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:1, // 是否是登录：1：登录；2：注册
				login_phono:'',
				login_password:'',
				register_phono:'',
				register_yzm:'',
				register_password:''
			}
		},
		methods: {
			checkLogin(val) {
				this.isLogin = val;
			}
		}
	}
</script>

<style>
	@import url("login.css");
</style>
