<template>
	<view class="page">
		<uParse :content="content" />
	</view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue';
	export default {
		data() {
			return {
				content:'        有限责任公司，简称有限公司，中国的有限责任公司是指根据《中华人民共和国公司登记管理条例》规定登记注册，由五十个以下的股东出资设立，每个股东以其所认缴的出资额为限对公司承担有限责任，公司法人以其全部资产对公司债务承担全部责任的经济组织。有限责任公司包括国有独资公司以及其他有限责任公司。'
			}
		},
		components: {
			uParse
		},
		methods: {
			
		}
	}
</script>

<style>
	.page{
		padding: 36upx;
	}
</style>
