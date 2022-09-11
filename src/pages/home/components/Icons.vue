<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                autoplay: false
            }      
       }       
    },
    // data () {
    //     return {
    //         iconsList: [{
    //             id: '0001',
    //             imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
    //             desc: '吉吉国王'
    //     },{
    //             id: '0002',
    //             imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/9153c8339087095676da59ffadca644e.png',
    //             desc: 'OTTO'
    //     },
    //     {
    //             id: '0003',
    //             imgUrl: 'https://picbed.qunarzz.com/ab5899d2347f987714a1ad302a77beba.png',
    //             desc: '吉吉活动'
    //     },
    //     {
    //             id: '0004',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
    //             desc: '吉吉出海'
    //     },
    //     {
    //             id: '0005',
    //             imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
    //             desc: '小猴吉吉'
    //     },
    //     {
    //             id: '0006',
    //             imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/ace59857fe268552aa556189953aa369.png',
    //             desc: '吉吉公益'
    //     },
    //     {
    //             id: '0007',
    //             imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
    //             desc: '吉吉国王'
    //     },
    //     {
    //             id: '0008',
    //             imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
    //             desc: '吉吉吉吉吉吉吉吉吉吉吉吉'
    //     },
    //     {
    //             id: '0009',
    //             imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
    //             desc: '吉吉国王'
    //     }]
    //     }
    // },
    computed :{
        pages () {
            const pages = []
            // this.iconsList.forEach((item,index)=>{
            this.list.forEach((item,index)=>{
                const page = Math.floor(index / 8)
                // index如果是2则page = 0 则展示在第0页
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        // 防抖动
        // 这里可以不写width： 100%
        // overflow: hidden  这行可以不写 因为.swiper-container自带这个css属性
        height: 0 
        padding-bottom: 50%
        // 50%指的是icons区域宽高比50%
        // background : green
    .icons 
        margin-top : .1rem
        .icon
            position : relative
            overflow: hidden
            float left
            // icons width100% 然后p-b是50% 指的是高是宽的一半
            // 而下面的width25% p-b也是25%，意思就是height也是25% 和宽一样长 这里可以不写
            width: 25%
            // 下面的height是后来设置图标加的  与上面的注释不冲突
            height: 0 //这块没说原因
            padding-bottom: 25%
            // background: red
            .icon-img
                position : absolute
                top: 0
                left :0
                right :0
                bottom :.44rem
                box-sizing: border-box
                // ：加了box-sizing:border-box属性，
                // padding和border的值就不会在影响元素的宽高
                padding: .1rem
                // background: blue
                .icon-img-content
                    display: block//行内块margin: 0 auto无效
                    margin: 0 auto
                    height: 100%
            .icon-desc
                position : absolute
                left :0
                right :0
                bottom :0
                height  :.44rem
                line-height  :.44rem
                color: $darkTextColor //stylus
                // 文字居中：
                text-align: center
                // ...效果
                ellipsis()
</style>