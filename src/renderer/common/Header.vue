<template>
  <div
    class="header"
    :style="{ background: backgroundStatus, color: status }"
    id="header"
  >
    <div class="left">
      <a-icon type="left" /><a-icon type="right" />
      <!-- <a href="https://www.baidu.com">baidu</a> -->
    </div>
    <div class="center">
      <span
        :class="statusIndex == item.id ? 'active' : 'item'"
        @click="changeActive(item)"
        v-for="(item, index) in list"
        :key="index"
        >{{ item.name }}</span
      >
    </div>
    <div class="right">
      <a-input
        ref="userNameInput"
        v-model="userName"
        style="width: 150px; margin-right: 13px; border-radius: 20px"
        @search="onSearch"
        placeholder="搜索"
        size="small"
      >
        <a-icon slot="prefix" type="search" />
      </a-input>
      <a-icon type="setting" />
      <!-- <a-icon type="mail" /> -->
      <!-- <a-badge :count="1"><a-avatar shape="square" icon="mail" /></a-badge> -->
      <a-badge dot>
        <a-icon type="mail" />
      </a-badge>
      <a-popover trigger="click">
        <template slot="content">
          <span
            @click="showItem(item)"
            v-for="item in colorList"
            :key="item.id"
            >{{ item.name }}</span
          >
        </template>
        <a-icon type="skin" />
      </a-popover>
      <a-icon type="block" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      list: [
        { name: "个性推荐", id: "1" },
        { name: "歌单", id: "2" },
        { name: "主播电台", id: "3" },
        { name: "排行榜", id: "4" },
        { name: "歌手", id: "5" },
        { name: "最新音乐", id: "6" },
      ],
      colorList: [
        {
          name: "浅色",
          id: "12",
          color: "rgba(245,245,245, 1)",
          backgroundColor: "",
        },
        {
          name: "红色",
          id: "21",
          color: "rgba(208, 68, 69, 1)",
          backgroundColor: "",
        },
        {
          name: "深色",
          id: "31",
          color: "rgba(37, 37, 37, 1)",
          backgroundColor: "",
        },
        {
          name: "自动",
          id: "42",
          color: "rgba(208, 68, 69, 1)",
          backgroundColor: "",
        },
      ],
      status: "#999",
      backgroundStatus: "rgba(245,245,245, 1)",
      statusIndex: "1",
      userName: "",
    };
  },
  methods: {
    changeActive(val) {
      this.statusIndex = val.id;
      console.log(val);
    },
    onSearch(value) {
      console.log(value);
    },
    showItem(item) {
      this.status = item.color;
      this.backgroundStatus = item.color;
      // document.getElementById("header").style.backgroundColor = item.color;
      // console.log(
      //   "------2-------",
      //   item.color,
      //   document.getElementById("header").style.backgroundColor
      // );
      // this.$nextTick((e) => {
      //   if (document.getElementById("header")) {
      //     document.getElementById("header").style.backgroundColor = item.color;
      //     this.$forceUpdate();
      //   }
      // });
    },
  },
};
</script>

 <style lang="less" scoped>
.header {
  height: 50px;
  width: 100%;
  background: rgba(208, 68, 69, 1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > i {
      padding: 0 10px;
    }
  }
  .center {
    width: 47%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .item:hover {
      cursor: pointer;
      color: #000;
      font-weight: 500;
    }
    .active {
      // font-weight: bold;
      // font-size: 1.33em;
      font-weight: 500;
      color: #000;
    }
  }
  .right {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 16px;
    // .ant-input-search {
    //   border-radius: 20px;
    //   input {
    //     // margin-right: 20px;
    //     border-radius: 20px;
    //   }
    // }
    > i {
      padding-left: 20px;
    }
    .ant-badge {
      padding-left: 20px;
    }
  }
}
</style>