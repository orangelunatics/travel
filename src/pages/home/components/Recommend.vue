<template>
    <div>
        <div class="title">下饭推荐</div>
        <ul>
            <!-- <router-link to="/detail"> -->
            <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id"
             :to=" '/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
            <!-- </router-link> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
    // data() {
    //     return {
    //         recommendList: [{
    //         id: '0001',
    //         imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=636301405,1171957024&fm=26&gp=0.jpg',
    //         title: '吉吉海洋世界',
    //         desc: '吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园'
    //     },{
    //         id: '0002',
    //         imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2868353402,3237328794&fm=26&gp=0.jpg',
    //         title: '吉吉体育场',
    //         desc: '吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园'
    //     },{
    //         id: '0003',
    //         imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3116474669,3616264518&fm=26&gp=0.jpg',
    //         title: '吉吉推拿',
    //         desc: '吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园吉吉圣亚海洋世界联袂吉吉动物园'
    //     }]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top : .2rem
        line-height : .8rem
        background : #eee
        text-indent: .2rem
        // 文本缩进
    .item
        overflow: hidden
        display:flex
        height: 1.9rem
        // background: red
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex:1 //自动撑开屏幕的宽度
            padding :.1rem
            min-width: 0
            .item-title
                line-height : .54rem
                font-size : .32rem
                ellipsis()
            .item-desc
                line-height : .40rem
                color : #cccccc
                ellipsis()
            .item-button
                line-height : .44rem
                margin-top : .16rem
                background :#ff9300
                padding : 0 .2rem  //上下 左右
                border-radius: .06rem
                color:#fff
</style>