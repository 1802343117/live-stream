<template>
	<view>
		<!-- <view>
			<image src="../../static/tabbar/1.jpg" class="img" style="width: 750rpx;height: 300rpx;"></image>
		</view> -->
		
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200" style="width: 750rpx;height: 250rpx;">
			<swiper-item>
				<image src="../../static/tabbar/1.jpg" style="width: 750rpx;height: 250rpx;"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/tabbar/2.jpg" style="width: 750rpx;height: 250rpx;"></image>
			</swiper-item>
		</swiper>
		
		<!-- 列表 -->
		<view class="flex flex-wrap">
			
			<view class="list-item" v-for="(item, index) in list" :key="index" @click="openLive">
				<image :src="item.url" style="width: 360rpx;height: 360rpx;" class="rounded" mode="aspectFill"></image>
				<view class="rounded-circle px-2 flex align-center" style="position: absolute;left: 15rpx;top: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="iconfont iconbizhongguanli text-warning mr-1"></text>
					<text class="text-white font">{{ item.gold }}</text>
				</view>
				
				<view class="rounded-circle px-2 flex align-center" style="position: absolute;right: 15rpx;top: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="iconfont iconbizhongguanli text-warning mr-1"></text>
					<text class="font-sm text-white">人气：</text>
					<text class="text-white font-sm">{{ item.popularity }}</text>
				</view>
				
				<view class="rounded-circle flex align-center" style="position: absolute;left: 15rpx;bottom: 15rpx;">
					<text class="text-white font">{{ item.title }}</text>
				</view>
				
				<view class="rounded-circle px-2 flex align-center" style="position: absolute;right: 15rpx;bottom: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text style="width: 20rpx;height: 20rpx;" class="rounded-circle bg-danger mr-1"></text>
					<text v-if="item.status" class="text-white font-sm">已结束</text>
					<text v-else class="text-white font-sm">已结束</text>
				</view>
			</view>
			
			<!-- <f-list v-for="(item, index) in list" :key="index" :item="item" :index="index" @select="select"></f-list> -->
		</view>
	</view>
	
</template>

<script>
	// 引用封装的组件
	import fList from "../../components/common/f-list.vue"
	
	export default {
		data() {
			return {
				list: [
					{
						gold: 10,
						popularity: 10,
						title: "LOL",
						status: false,
						url: "/static/beauty/me.jpg"
					},
					{
						gold: 11,
						popularity: 10,
						title: "LOL",
						status: false,
						url: "/static/beauty/m1.jpg"
					},
					{
						gold: 21,
						popularity: 10,
						title: "LOL",
						status: false,
						url: "/static/beauty/m2.jpg"
					},
					{
						gold: 13,
						popularity: 10,
						title: "LOL",
						status: false,
						url: "/static/beauty/m3.jpg"
					},
					{
						gold: 41,
						popularity: 10,
						title: "LOL",
						status: false,
						url: "/static/beauty/m4.jpg"
					},
					{
						gold: 51,
						popularity: 10,
						title: "LOL",
						status: false,
						url: "/static/beauty/m5.jpg"
					},
					{
						gold: 21,
						popularity: 10,
						title: "LOL",
						status: false,
						url: "/static/banner/XGY1.jpg"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			select(e) {
				this.list[e.index].checked = e.value;
			},
			openLive() {
				uni.navigateTo({
					url: '../live/live'
				});
			}
		}
	}
</script>

<style>
	.list-item {
		width: 375rpx;
		height: 375rpx;
		padding: 5rpx;
		box-sizing: border-box;
		position: relative;
	}
</style>
