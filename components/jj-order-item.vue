<template>
	<view class="order_item" @click="event">
		<template v-if="isNew==0">
			{{name}}
			<text>税号：{{number}}</text>
		</template>
		<template v-else>
			新注册
		</template>
	</view>
</template>

<script>
	export default {
		name:"order_item",
		props:{
			name:{
				default:''
			},
			number:{
				default:''
			},
			isNew:{
				default:0
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			event(){
				this.$emit("event")
			}
		}
	}
</script>

<style>
	.order_item{
		width: 678upx;
		height: 110upx;
		background-color: #ffffff;
		box-shadow: 0px 0px 9upx 1px 
			rgba(0, 0, 0, 0.05);
		border-radius: 10upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 22upx;
		color: #333333;
		padding: 0 26upx;
		margin-bottom: 30upx;
	}
</style>
