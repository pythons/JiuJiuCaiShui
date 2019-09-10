<template>
	<view class="page">
		<view class="select_bill">
			<view class="bill_item">
				公司名称：阿里巴巴（中国）网络技术有限公司
				<image src="../../static/right_icon.png" class="right_icon"></image>
			</view>
		</view>
		<view class="bill_main">
			<view class="bill_top">2019</view>
			<view class="bill_table">
				<view class="table_tr">
					<view class="table_th">月份</view>
					<view class="table_th">销专</view>
					<view class="table_th">销普</view>
					<view class="table_th">进专</view>
					<view class="table_th">进普</view>
					<view class="table_th">银行</view>
					<view class="table_th table_th_105">提供</view>
					<view class="table_th table_th_105">确认</view>
					<view class="table_th table_th_105">清除</view>
				</view>
				<view class="table_tr" v-for="(bi,index) in billInfo" :key="index">
					<view class="table_td">{{index+1}}</view>
					<view class="table_td red">{{bi.xz}}</view>
					<view class="table_td red">{{bi.xp}}</view>
					<view class="table_td red">{{bi.jz}}</view>
					<view class="table_td red">{{bi.jp}}</view>
					<view class="table_td red">{{bi.yh}}</view>
					<view class="table_td table_td_105">
						<view class="edit_btn" @click="togglePopup('middle')">编辑</view>
					</view>
					<view class="table_td table_td_105">已确认</view>
					<view class="table_td table_td_105">
						<view class="edit_btn">清除</view>
					</view>
				</view>
			</view>
		</view>
		
		<uni-popup :show="type === 'middle'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<view class="company_popup">
				<view class="company_title">新增票据信息</view>
				<view class="company_info_item">
					<view class="company_item_title">销专（张）：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">销普（张）：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">进专（张）：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">进普（张）：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_info_item">
					<view class="company_item_title">银行（份）：</view>
					<input type="text" class="company_item_input" />
				</view>
				<view class="company_submit_btn">保存</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				type:'',
				billInfo:[
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1},
					{"xz":3,"xp":4,"jz":5,"jp":6,"yh":8,"status":1}
				]
			}
		},
		components:{
			uniPopup
		},
		methods: {
			togglePopup(type) {
				this.type = type;
			},
		}
	}
</script>

<style>
	@import url("bill_info.css");
</style>
