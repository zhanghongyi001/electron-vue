<template>
  <div class="demo">
    <!-- <swiper
      :swiperOption="applicatSwiperOption"
      @change="applictIndex = $event"
      ref="applicatSwiper"
    ></swiper> -->
    <title-item :name="'推荐歌单'"></title-item>
    <conent-style1></conent-style1>
    <title-item :name="'独家放送'"></title-item>
    <conent-style1></conent-style1>
  </div>
</template>

<script>
import swiper from "./swiper";
import titleItem from "./titleItem";
import conentStyle1 from "./conentStyle1";
export default {
  props: {},
  data() {
    return {
      applicatSwiperOption: {
        imgs: [
          "https://img.yzcdn.cn/vant/apple-2.jpg",
          "https://img.yzcdn.cn/vant/apple-1.jpg",
          "https://img.yzcdn.cn/vant/apple-2.jpg",
          "https://img.yzcdn.cn/vant/apple-1.jpg",
          "https://img.yzcdn.cn/vant/apple-2.jpg",
        ],
        startIndex: 0,
        speed: 3000, //轮播时间
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: { swiper, titleItem, conentStyle1 },
};
</script>

<style scoped lang="scss">
.demo {
  width: 100%;
  height: 100%;
  padding: 0.266667rem;
  box-sizing: border-box;
  .swiper {
    width: 100%;
    height: 300px;
  }
}
</style>