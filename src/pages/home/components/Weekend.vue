<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
    // data() {
    //     return {
    //         weekendList: [{
    //         id: '0001',
    //         imgUrl: 'http://img1.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
    //         title: '大连圣亚海洋世界',
    //         desc: '吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园'
    //     },{
    //         id: '0002',
    //         imgUrl: 'http://img1.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
    //         title: '广州体育场',
    //         desc: '吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园'
    //     },{
    //         id: '0003',
    //         imgUrl: 'http://img1.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
    //         title: '万金湖汤泉',
    //         desc: '吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园'
    //     }]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        // margin-top : .2rem
        line-height : .8rem
        background : #eee
        text-indent: .2rem
        // 文本缩进
        // background: red
    .item-img-wrapper
        overflow: hidden
        height :0
        padding-bottom :37.09%
        .item-img
            width :100%
    .item-info
        // flex:1 //自动撑开屏幕的宽度
        padding :.1rem
        // min-width: 0
        .item-title
            line-height : .54rem
            font-size : .32rem
            ellipsis()
        .item-desc
            line-height : .40rem
            color : #cccccc
            ellipsis()
</style>