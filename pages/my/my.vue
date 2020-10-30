<template>
	<view>
		<view class="top flex align-center justify-center"></view>

		<view class="flex align-center">
			<view class="flex align-center justify-center position-relative" style="width: 180rpx;height: 160rpx;">
				<image src="../../static/beauty/m1.jpg" class="rounded-circle" style="width: 145rpx; height: 145rpx; position: absolute;top: -60rpx;"></image>
			</view>

			<view class="flex flex-column">
				<text class="font-md">Tunl</text>
				<text class="font text-muted">.....</text>
			</view>
			<view class="ml-auto mr-3">
				<view class="border border-main rounded flex align-center justify-center p-2" style="margin-bottom: 10rpx;"
				 hover-class="bg-light">
					<text class="text-main font">编辑资料</text>
				</view>
			</view>
		</view>

		<view class="f-divider"></view>
		<f-list-item icon="iconbizhongguanli" title="我的金币" :showRight="false">
			<text class="text-main font">100金币 立即充值</text>
		</f-list-item>
		<f-list-item icon="iconzhengzaizhibo" title="我的直播"><text class="text-muted font">0 ></text></f-list-item>
		<f-list-item icon="iconfenxiang" title="我的关注"><text class="text-muted font">0 ></text></f-list-item>
		<f-list-item icon="iconmore" title="历史记录"><text class="text-muted font"> ></text></f-list-item>
	</view>
</template>

<script>
	import fListItem from '@/components/common/f-list-item.vue'
	export default {
		components: {
			fListItem
		},
		data() {
			return {
				statusBarHeight: 0
			};
		},
		onLoad() {
			let res = uni.getSystemInfoSync();
			this.statusBarHeight = res.statusBarHeight;
		},
		methods: {}
	};
</script>

<style>
	.top {
		width: 750rpx;
		height: 260rpx;
		background-image: url(../../static/girl9.jpg);
		background-size: cover;
		background-image: linear-gradient(to right, #ba7ace 0%, #8745ff 100%);
	}
</style>
