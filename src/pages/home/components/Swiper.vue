<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
        	<swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default{
	name: 'HomeSwiper',
	props: {
		list: Array //给定数据类型
	},
    data () {
        return {
            swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
				// 左右循环
			}
			// swiperList: [{
			// 	id: '0001',
			// 	imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/37a42ce34dc16cd43bad17570bf6ab31.jpg_750x200_65d24bd7.jpg',
			// },{
			// 	id: '0002',
			// 	imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/37a42ce34dc16cd43bad17570bf6ab31.jpg_750x200_65d24bd7.jpg',
			// }]
        }
	},
	computed: {
		showSwiper () {
			return this.list.length
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
			background: #ffffff !important
	.wrapper
		overflow: hidden
		width :100%
		height: 0
		padding-bottom: 31.25%
		background: #eee
		.swiper-img
			width: 100%
</style>