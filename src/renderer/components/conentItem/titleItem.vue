<template>
  <div class="titleItem">{{ name }} <i class="iconfont">&#xe606;</i></div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>
.titleItem {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  height: 30px;
  line-height: 30px;
  > i {
    font-size: 16px;
  }
}
</style>