<template>
  <div class="List">
    <Header></Header>
    <conent></conent>
    <bottom
      :url="'http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3'"
      :duration="40"
    ></bottom>
  </div>
</template>

<script>
import Header from "../../common/Header";
import conent from "../conentItem/conent";
import bottom from "../conentItem/bottom";
export default {
  components: {
    Header,
    conent,
    bottom,
  },
  mounted() {},
  methods: {
    sendNotification() {
      const myNotification = new Notification("标题", {
        body: "通知正文内容",
      });
      myNotification.onclick = () => {
        console.log("通知被点击");
      };
    },
    sendNotification1() {
      const myNotification = new Notification("标题", {
        body: "通知正文内容222",
      });
      myNotification.onclick = () => {
        console.log("通知被点击");
      };
    },
    sendNotification2() {
      const myNotification = new Notification("标题", {
        body: "通知正文内容3333",
      });
      myNotification.onclick = () => {
        console.log("通知被点击");
      };
    },
  },
};
</script>

 <style lang="less" scoped>
.List {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: calc(100vh);
  width: calc(100vw);
}
</style>