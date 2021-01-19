<template>
  <div class="conent">
    <div class="left">
      <div class="user">
        <img src="../../assets/userImage.png" alt="" /><span
          >梦游仙境的传说</span
        >
        <a-icon type="caret-right" />
      </div>
      <div class="list">
        <span
          @click="changeActive(item)"
          :class="statusIndex == item.id ? 'active' : 'item'"
          v-for="(item, index) in list"
          :key="index"
        >
          <i :class="`iconfont`" v-html="item.icon"></i>{{ item.name }}
        </span>
      </div>
      <div class="title">我的音乐</div>
      <div class="list">
        <span
          @click="changeActive(item)"
          :class="statusIndex == item.id ? 'active' : 'item'"
          v-for="(item, index) in list2"
          :key="index"
        >
          <i :class="`iconfont`" v-html="item.icon"></i>{{ item.name }}
        </span>
      </div>
      <div class="title">
        <span> <i :class="`iconfont`">&#xe663;</i> 创建的歌单 </span
        ><i :class="`iconfont`">+</i>
      </div>
    </div>
    <div class="right">
      <component v-bind:is="viewOperation"></component>
    </div>
  </div>
</template>

<script>
import discoverMusic from "./discoverMusic";
export default {
  components: {
    discoverMusic,
  },
  data() {
    return {
      // iconList:['&#xe601;']
      list: [
        { name: "发现音乐", id: "1", icon: "&#xe62d;" },
        { name: "私人音乐", id: "2", icon: "&#xe6d9;" },
        { name: "视频", id: "3", icon: "&#xe603;" },
        { name: "朋友", id: "4", icon: "&#xe8df;" },
      ],
      list2: [
        { name: "iTunes音乐", id: "5", icon: "&#xebd7;" },
        { name: "下载管理", id: "6", icon: "&#xe634;" },
        { name: "我的音乐云盘", id: "7", icon: "&#xe687;" },
        { name: "我的收藏", id: "8", icon: "&#xe685;" },
      ],
      statusIndex: "1",
      viewOperation: discoverMusic,
    };
  },
  methods: {
    changeActive(val) {
      this.statusIndex = val.id;
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
.conent {
  display: flex;
  // align-items: center;
  height: calc(100vh - 110px);
  width: 100%;
  .left {
    width: 200px;
    height: calc(100%);
    background: rgba(237, 237, 237, 1);
    .user {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0 10px;
      > img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }
      > span {
        margin: 0 5px;
        font-weight: 400;
        color: #333;
      }
    }
    .title {
      padding: 0 20px;
      margin-top: 10px;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > span {
      }
      > i {
        color: #333;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      width: calc(100% - 10px);
      > span {
        padding: 7px 20px;
        color: #333;
        // height: ;
        .iconfont {
          width: 16px;
          height: 16px;
          padding: 0 7px 0 0;
          // font-size: 16px;
        }
      }
      .active {
        // font-weight: bold;
        // font-size: 1.33em;
        font-weight: 400;
        color: rgba(202, 46, 46, 1);
        background: #ddd;
      }
    }
  }
  .right {
    width: calc(100vw - 200px);
    height: calc(100%);
    background: #fff;
    padding: 0 27px;
    overflow-y: auto;
  }
}
</style>