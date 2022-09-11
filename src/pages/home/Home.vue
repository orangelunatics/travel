<template>
    <div>
        <home-header></home-header>  
        <!-- 模板里小写就可以  vue会对应大小写 -->
        <home-swiper :list="swiperList"></home-swiper>
        <!-- <div>text</div> 测试文字抖动 -->
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
// 引入下面这些组件
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import Icons from './components/Icons.vue'
import axios from 'axios'


export default {
    name: 'Home',
    // 局部组件HomeHeader等 需要声明
    components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
    }, //ES6中键值一样 可以这样写
    data () {
        return {
            // city: '',
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                // this.city = data.city
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
            // console.log(res);
        }  
    },
    mounted () {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if(this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style>

</style>