<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasnoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  props: {
    cities: Object
  },
  computed: {
    hasnoData() {
      return !this.list.length;
    }
  },
  methods: {
    handleCityClick(city) {
      this.$store.commit("changeCity", city);
      // alert(city),
      this.$router.push("/");
    },
    handleCityClick(city) {
      // this.$store.commit('changeCity',city)
      this.changeCity(city);
      // 由于下面...mapMutations，所以可以这样写
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return 1;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height: .72rem
    padding: 0 .1rem
    // 上下0 左右.1
    background :$bgColor
    .search-input
        margin-top : .05rem
        box-sizing :border-box
        width :100%
        height : .62rem
        line-height :.62rem
        padding :0 .1rem
        text-align :center
        border-radius: .06rem
        color : #666
.search-content
    z-index:1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eeeeee
    .search-item
        line-height :.62rem
        padding-left : .2rem
        background #ffffff
        color :#666
</style>
