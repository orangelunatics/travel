<template>
    <div>
        <detail-banner
         :sightName="sightName"
         :bannerImg="bannerImg"
         :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import List from '../city/components/List.vue'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    // 下面是注册局部组件
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            // list:[{
            //     title: '成人票',
            //     children: [{
            //         title: '成人三馆联票'
            //     },{
            //         title: '成人三馆联票'
            //     }]
            // },{
            //     title: '学生票'
            // },{
            //     title: '儿童票'
            // },{
            //     title: '特惠票'
            // }]
            list:[]
        }
    },
    methods: {
        getDetailInfo() {
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                // console.log(data);
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height : 50rem
</style>
