<template>
    <!-- 模板里只能放一个盒子 所以div包起来 -->
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                <!-- {{this.$store.state.city}} -->
                <!-- {{this.doubleCity}} -->
                {{this.city}} 
                <span class="iconfont arrow-icon">&#xe62d;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'
import { mapState } from 'vuex'
// 下面的意思是导出组件
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city']),
        // ...mapGetters(['doubleCity'])
    }
}
</script>


<style lang="stylus" scoped>
    // @import '../../../assets/styles/varibles.styl'
    // @import '~@/assets/styles/varibles.styl'
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #ffffff
        .header-left
            width: .64rem
            float: left 
            .back-icon
                text-align :center
                font-size :.4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top : .12rem
            margin-left : .2rem
            padding-left : .2rem
            background: #ffffff
            color: #ccc
            border-radius: .1rem
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #ffffff
            .arrow-icon
                margin-left : -.04rem
                // 这里改成right会有问题 自己试一下
                font-size: .24em
</style>