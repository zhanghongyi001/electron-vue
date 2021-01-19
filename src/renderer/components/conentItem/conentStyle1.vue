<template>
  <div class="conentStyle1">
    <div class="conentStyle1-item" v-for="(item, index) in list" :key="index">
      <img
        :src="'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1235917759,2245837423&fm=26&gp=0.jpg'"
        alt=""
      />
      <span class="conentStyle1-item-conent">{{ item.conent }}</span>
      <span class="number"
        ><i class="iconfont">&#xe61f;</i> {{ item.number }}
      </span>
      <div class="iconfont play">&#xe680;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conentStyle1",
  data() {
    return {
      list: [
        {
          name: "111",
          id: "1",
          conent: "不完美的人生 | 无需被谁定义 爱是最真实的知己",
          number: "12万",
          img: "1111",
        },
        {
          name: "111",
          id: "1",
          conent: "不完美的人生 | 无需被谁定义 爱是最真实的知己",
          number: "12万",
          img: "1111",
        },
        {
          name: "2222",
          id: "2",
          conent: "asasaaasasasasasas",
          number: "11万",
          img: "1111",
        },
        {
          name: "3333",
          id: "3",
          conent: "asasaaasasasasasas",
          number: "11万",
          img: "1111",
        },
        {
          name: "4444",
          id: "4",
          conent: "asasaaasasasasasas",
          number: "12万",
          img: "1111",
        },
        {
          name: "5555",
          id: "5",
          conent: "asasaaasasasasasas",
          number: "11万",
          img: "1111",
        },
        {
          name: "6666",
          id: "6",
          conent: "asasaaasasasasasas",
          number: "11万",
          img: "1111",
        },
        {
          name: "7777",
          id: "7",
          conent: "asasaaasasasasasas",
          number: "12万",
          img: "1111",
        },
        {
          name: "8888",
          id: "8",
          conent: "asasaaasasasasasas",
          number: "11万",
          img: "1111",
        },
        {
          name: "9999",
          id: "9",
          conent: "asasaaasasasasasas",
          number: "11万",
          img: "1111",
        },
      ],
    };
  },
};
</script>

 <style lang="less" scoped>
.conentStyle1 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  &-item {
    width: 137px;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    &-conent {
      word-wrap: break-word;
      word-break: normal;
      line-height: 18px;
      font-size: 12px;
      margin-top: 5px;
      color: #333;
      font-weight: 400;
    }
    .number {
      position: absolute;
      font-size: 12px;
      top: 5px;
      right: 10px;
      color: aliceblue;
      .iconfont {
        font-size: 12px;
        margin-right: -3px;
      }
    }
    > img {
      width: 135px;
      height: 135px;
      border-radius: 10px;
    }
    .play {
      position: absolute;
      bottom: 83px;
      right: 9px;
      font-size: 32px;
      display: none;
      color: #ca2e2e;
      width: 32px;
      height: 32px;
    }
  }
  .conentStyle1-item:hover {
    .play {
      display: block;
    }
  }
}
</style>