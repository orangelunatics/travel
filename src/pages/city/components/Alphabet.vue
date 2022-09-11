<template>
    <div class="list">
       <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item" 
            @click="handleLetterClick" 
            @touchstart.prevent="handleTouchStart" 
            @touchmove="handleTouchMove" 
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    
    data() {
        return {
            touchStatus: false,
            startY: 0, //给初始值
            timer: null
        }
    },
    updated () {
        // 初次渲染这个子组件时,因为父组件cities(letters?)是空,一开始没有
        // 当由于ajax,数据变化会重新渲染,这时候执行这个生命周期狗子
        // 页 完成渲染之后执行,不用每次点击都重新计算
        this.startY = this.$refs['A'][0].offsetTop
        // ['A'][0]才是DOM
    },
    computed: {
        letters () {
            const letters = []
            for(let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick (e) {
            // console.log(e.target.innerText);\
            this.$emit('change',e.target.innerText)
            // 调用this.$emit向外触发事件
            // 事件名字定义为change，事件内容是e.t.iT
        },
        handleTouchStart() {
            this.touchStatus = true
        },
        handleTouchMove(e) {
            if(this.touchStatus) {
                // const startY = this.$refs['A'][0].offsetTop
                // 这样每次执行都要重新运算高度 效率低
                // console.log(startY)
                // 函数执行频率很高，需要节流
                if(this.timer){
                    clearTimeout(this.timer)
                    // 如果16ms内已经执行了手指滚动，那么会清除掉已执行，去重新执行
                    // 这就是节流，可以大大提高函数执行频率，但肉眼是看不出来的
                }
                // 否则：
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                },16)
                
            }
        },
        handleTouchEnd() {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content : center
        position :absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        // background :red
        .item
            list-style :none
            line-height :.4rem
            text-align :center
            color :$bgColor
</style>
