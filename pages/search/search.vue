<template>
	<view class="page">
		<view class="index_search">
			<input type="text" class="search_input" placeholder="请输入要搜素的内容" placeholder-class="search_place_input" />
			<view class="search_btn">
				<image src="../../static/search_icon.png" class="search_icon"></image>
			</view>
		</view>
		<view class="search_main">
			<view class="history_top">
				历史搜索
				<image src="../../static/del_icon.png" class="del_icon"></image>
			</view>
			<view class="history_list">
				<view class="history_item">长白山人参</view>
				<view class="history_item">长白山人参</view>
			</view>
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
	@import url("search.css");
</style>
