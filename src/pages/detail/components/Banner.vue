<template>
    <div>
        <div class="banner" @click="handleClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>{{this.gallaryImgs.length}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="gallaryImgs" v-show="showGallary"
            @close="handleGallaryClose"></common-gallary>
         </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs:Array
    },
    data() {
        return {
            showGallary: false,
            // imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg","//img1.qunarzz.com/sight/p0/1605/9f/9f600a32f70a2d1290.water.jpg_600x330_0beeee99.jpg"]
        }
    },
    methods: {
        handleClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
    },
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
          padding 0 0.1rem
</style>
