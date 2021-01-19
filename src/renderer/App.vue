<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./common/Header";
export default {
  name: "my-project",
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: "iconfont"; /* project id 2324933 */
  src: url("//at.alicdn.com/t/font_2324933_v14zp4lqvp.eot");
  src: url("//at.alicdn.com/t/font_2324933_v14zp4lqvp.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2324933_v14zp4lqvp.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2324933_v14zp4lqvp.woff") format("woff"),
    url("//at.alicdn.com/t/font_2324933_v14zp4lqvp.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2324933_v14zp4lqvp.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
/* CSS */
</style>
