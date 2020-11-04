<template>
	<view>
		<view class="top flex align-center justify-center"></view>

		<view v-if="!user" class="flex align-center">
			<view class="flex align-center justify-center position-relative" style="width: 180rpx;height: 160rpx;">
				<image src="../../static/beauty/m1.jpg" class="rounded-circle" style="width: 145rpx; height: 145rpx; position: absolute;top: -60rpx;"></image>
			</view>
			
			<!-- <view style="position: absolute;top: 90rpx;right: 20rpx;" @click="settings">
				<image src="../../static/beauty/m2.jpg" style="width: 70rpx;height: 70rpx;"></image>
			</view> -->

			<view class="flex flex-column">
				<text class="font-md">未登录</text>
				<text class="font text-muted">登录体验更多功能</text>
			</view>
			<view class="ml-auto mr-3">
				<view
					class="border border-main rounded flex align-center justify-center p-2"
					hover-class="bg-light"
					@click="openLogin">
					<text class="text-main font">立即登录</text>
				</view>
			</view>
		</view>
		
		<view v-else>
			<view class="flex align-center">
				<view class="flex align-center justify-center position-relative" style="width: 180rpx;height: 160rpx;">
					<image
						:src="user.avatar || '/static/banner/XGY1.jpg'"
						class="rounded-circle"
						style="width: 145rpx; height: 145rpx; position: absolute;top: -60rpx;"
					></image>
				</view>
		
				<view class="flex flex-column">
					<text class="font-md">{{ user.username }}</text>
					<!-- <text class="font text-muted">Tunl</text> -->
				</view>
				<view class="ml-auto mr-3">
					<view
						class="border border-main rounded flex align-center justify-center p-2"
						hover-class="bg-light"
					>
						<text class="text-main font">编辑资料</text>
					</view>
				</view>
			</view>

			<view class="f-divider"></view>
			<f-list-item icon="iconbizhongguanli" title="我的金币" :showRight="false">
				<text class="text-main font">{{ user ? user.coin : 0 }}金币 立即充值</text>
			</f-list-item>
			<f-list-item icon="iconzhengzaizhibo" title="我的直播"><text class="text-muted font">0 ></text></f-list-item>
			<f-list-item icon="iconfenxiang" title="我的关注"><text class="text-muted font">0 ></text></f-list-item>
			<f-list-item icon="iconmore" title="历史记录"><text class="text-muted font"> ></text></f-list-item>
			<f-list-item icon="icontuichu" title="退出" @click="logout()"></f-list-item>
		</view>
	</view>
</template>

<script>
	import fListItem from '@/components/common/f-list-item.vue'
	import { mapState } from 'vuex';
	export default {
		components: {
			fListItem
		},
		data() {
			return {
				statusBarHeight: 0
			};
		},
		computed: {
			...mapState({
				user: state => state.user
			})
		},
		onShow() {
			this.$store.dispatch('getUserInfo');
		},
		methods: {
			settings() {
				this.authJump({
					url: '../user-set/user-set'
				})
			},
			openLogin() {
				uni.navigateTo({
					url: '../logins/logins'
				});
			},
			logout() {
				this.$store.dispatch('logout').then(res => {
					uni.navigateBack({
						delta: 1
					});
				});
			}
		}
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
