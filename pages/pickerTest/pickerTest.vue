<template>
	<view class="content">
		<view class="tab" :class="{'active':index==tabIndex}" @tap="toggleTab(item,index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
		<w-picker
			mode="half" 
			startYear="2017" 
			endYear="2019"
			:defaultVal="[2,1,3,1]" 
			:current="false" 
			@confirm="onConfirm"
			:disabledAfter="true"
			ref="half" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="range" 
			startYear="2019" 
			endYear="2030"
			:defaultVal="[0,0,0,0,0,0,0]" 
			:current="true"
			@confirm="onConfirm" 
			ref="range" 
			themeColor="#f00"
		></w-picker>
		<w-picker
			mode="limitHour" 
			dayStep="60"
			:defaultVal="[0,0,0]"
			@confirm="onConfirm" 
			ref="limitHour" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="limit" 
			dayStep="60"
			startHour="8"
			endHour="20"
			minuteStep="5"
			afterStep="30"
			:defaultVal="[0,0,0]" 
			@confirm="onConfirm" 
			ref="limit" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="date" 
			startYear="2017" 
			endYear="2019"
			:defaultVal="[2,1,3]" 
			:current="false" 
			@confirm="onConfirm"
			:disabledAfter="true"
			ref="date" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="yearMonth" 
			startYear="2016"
			endYear="2019"
			:defaultVal="[0,1]" 
			:current="false" 
			@confirm="onConfirm" 
			ref="yearMonth" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="dateTime" 
			startYear="2019" 
			endYear="2030"
			step="1"
			:defaultVal="[1,1,1,1,2,5]" 
			:current="false" 
			@confirm="onConfirm" 
			ref="dateTime" 
			themeColor="#f00"
		></w-picker>
		<w-picker 
			mode="time"
			:defaultVal="[1,1,0]" 
			:current="false" 
			@confirm="onConfirm" 
			ref="time"
			step="1"
		></w-picker>
		<w-picker 
			mode="region"
			:defaultVal="['浙江省','杭州市','滨江区']" 
			@confirm="onConfirm" 
			ref="region" 
		></w-picker>
		<w-picker 
			v-if="selectList.length!=0"
			mode="selector" 
			:defaultVal="[1]" 
			@confirm="onConfirm" 
			ref="selector" 
			themeColor="#f00"
			:selectList="selectList"
		></w-picker>
		<view class="result">选择结果：{{resultInfo.result}}</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				title: 'Hello',
				mode:"range",
				defaultVal:[0,0,0,0,0,0,0],
				tabList:[{
					mode:"half",
					name:"选择上午下午"
				},{
					mode:"range",
					name:"选择区间的日期"
				},{
					mode:"limitHour",
					name:"选择短期的日期上下午"
				},{
					mode:"limit",
					name:"选择短期的日期时间"
				},{
					mode:"date",
					name:"日期选择"
				},
				{
					mode:"yearMonth",
					name:"年月"
				},{
					mode:"dateTime",
					name:"日期时间选择"
				},{
					mode:"time",
					name:"时间选择"
				},
				{
					mode:"region",
					name:"省市区"
				},
				{
					mode:"selector",
					name:"单列选择"
				}],
				tabIndex:0,
				selectList:[{
					label:"男",
					value:0
				},{
					label:"女",
					value:1
				}],
				resultInfo:{
					result:"2019-12-20 10:00:00"
				}
			}
		},
		computed:{
			
		},
		methods: {
			toggleTab(item,index){
				this.tabIndex=index;
				this.mode=item.mode;
				this.defaultVal=item.value;
				this.$refs[item.mode].show();
			},
			onConfirm(val){
				console.log(val);
				//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
				// switch(this.mode){
				// 	case "date":
				// 		break;
				// }
				this.resultInfo=val;
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
	.tab{
		padding:20upx 0;
		font-size: 32upx;
	}
	.tab.active{
		color:#f00;
	}
	.result{
		margin-top: 200upx;
		font-size: 32upx;
	}
</style>
