<template>
  <div class="dialogDetailAudio" onselectstart="return false">
    <div
      class="dialogAudioProgress"
      ref="dialogAudioProgress"
      @mousedown="controlAudioProgress($event)"
    >
      <span class="progressDot" :style="dotStyle"></span>
      <span class="bar" :style="progressStyle"></span>
    </div>
    <div class="conent">
      <div class="left">
        <div class="cover"><img src="../../assets/b-g-sm.png" alt="" /></div>
        <div>
          <span>烟花里的尘埃 - 华晨宇</span
          ><span>{{ time }} / {{ duration }}</span>
        </div>
      </div>
      <div class="center">
        <i class="iconfont" @click="playAudio" v-html="audioImg"></i>
      </div>
      <div class="right">
        <i
          class="iconfont dialogAudioListen"
          @click="listenDialogAudio"
          v-html="dialogAudioListen"
        ></i>
      </div>
      <div class="big iconfont">&#xebd8;</div>
    </div>

    <!-- <div class="conent">
      <i class="iconfont" @click="playAudio" v-html="audioImg"></i>
      <span class="dialogAudioTime">{{ time }}</span>
      <span class="dialogAudioDuration">{{ duration }}</span>
      <i
        class="iconfont dialogAudioListen"
        @click="listenDialogAudio"
        v-html="dialogAudioListen"
      ></i>
      <i
        class="iconfont dialogAudioDownload"
        @click="downloadCallRecord"
        v-html="callRecordDownload"
      ></i>
    </div> -->
    <audio
      ref="recordAudio"
      class="recordAudio"
      type="audio/mpeg"
      @canplay="canPlay"
      @timeupdate="timeUpdate"
      @ended="onEnded"
      :src="audioUrl"
    ></audio>
  </div>
</template>
 
<script>
// import { Icon } from "vant";
export default {
  name: "audioplay",
  //   components: {
  //     [Icon.name]: Icon,
  //   },
  props: ["url", "duration"],
  data() {
    return {
      time: "00:00",
      duration: "00:00",
      progressStyle: { width: "" },
      dotStyle: { left: "" },
      audioUrl:
        "http://file.duzhai.net/Files/Audio/2017-08/af01ab05-d112-4ad7-9cff-2cfecced5bc6.mp3",
      audioImg: "&#xe680;",
      dialogAudioListenGroup: ["&#xe612;", "&#xe72c;"],
      imgIndex: 0,
      callRecordDownload: "&#xe60c;",
    };
  },
  computed: {
    dialogAudioListen() {
      return this.dialogAudioListenGroup[this.imgIndex];
    },
  },
  methods: {
    //播放暂停控制
    playAudio() {
      let recordAudio = this.$refs.recordAudio; //获取audio元素
      if (recordAudio.paused) {
        this.audioImg = "&#xe611;";
        recordAudio.play();
      } else {
        this.audioImg = "&#xe680;";
        recordAudio.pause();
      }
    },

    //进度条更新
    timeUpdate() {
      this.duration = this.transTime(this.$refs.recordAudio.duration);
      let timeStr = parseInt(this.$refs.recordAudio.currentTime);
      this.time = this.transTime(timeStr);
      let scales =
        this.$refs.recordAudio.currentTime / this.$refs.recordAudio.duration;
      this.progressStyle.width = scales * 100 + "%";
      this.dotStyle.left = scales * 100 + "%";
    },

    //播放结束
    onEnded() {
      this.audioImg = "&#xe680;";
      this.time = "00:00";
      this.progressStyle.width = 0;
      this.dotStyle.left = 0;
    },

    //用户可以开始播放audio
    canPlay() {
      //获取audio音频文件总时长 并设置到界面并解决出现 NAN 的问题
      this.duration = this.transTime(this.$refs.recordAudio.duration);
    },

    //静音控制
    listenDialogAudio() {
      this.imgIndex = (this.imgIndex + 1) % this.dialogAudioListenGroup.length;
      if (this.dialogAudioListen == "&#xe72c;") {
        this.$refs.recordAudio.volume = 0;
      } else {
        this.$refs.recordAudio.volume = 1;
      }
    },

    //鼠标点击移动播放进度
    controlAudioProgress(event) {
      let audio = this.$refs.recordAudio;
      let dialogAudioProgress = this.$refs.dialogAudioProgress;
      if (!audio.paused || audio.currentTime != 0) {
        let pgsWidth = parseFloat(
          window
            .getComputedStyle(dialogAudioProgress, null)
            .width.replace("px", "")
        );
        let rate = event.offsetX / pgsWidth;
        audio.currentTime = audio.duration * rate;
        this.timeUpdate();
      }
    },

    //下载音频
    downloadCallRecord() {
      console.log("下载...");
    },

    //时间转换
    transTime(value) {
      let time = "";
      let h = parseInt(value / 3600);
      value %= 3600;
      let m = parseInt(value / 60);
      let s = parseInt(value % 60);
      if (h > 0) {
        time = this.formatTime(h + ":" + m + ":" + s);
      } else {
        time = this.formatTime(m + ":" + s);
      }
      return time;
    },

    //时间格式化
    formatTime(value) {
      let time = "";
      let s = value.split(":");
      let i = 0;
      for (; i < s.length - 1; i++) {
        time += s[i].length == 1 ? "0" + s[i] : s[i];
        time += ":";
      }
      time += s[i].length == 1 ? "0" + s[i] : s[i];
      return time;
    },
  },
};
</script>
 
  <style lang="less" scoped>
.dialogDetailAudio {
  width: 100vw;
  height: 60px;
  //   line-height: 58px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 30px 0px rgba(29, 34, 54, 0.18);
  border-radius: 6px;
  -webkit-app-region: no-drag;
}

.dialogAudioPlay {
  //   display: inline-block;
  position: relative;
  top: 6px;
  margin-left: 15px;
  cursor: pointer;
  width: 23px;
  height: 23px;
}

.dialogAudioTime {
  margin-left: 11px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.dialogAudioProgress {
  //   display: inline-block;
  width: calc(100vw - 10px);
  height: 2px;
  background: rgba(212, 249, 232, 1);
  border-radius: 1px;
  margin: 0 5px;
  position: relative;
  top: 2px;
}
.conent {
  position: relative;
  height: 58px;
  //   line-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  //   color: aquamarine;
  > div {
    width: 33.33%;
    display: flex;
    align-items: center;
  }
  > div:nth-child(2) {
    justify-content: center;
  }
  > div:nth-child(3) {
    justify-content: flex-end;
  }
  .left {
    display: flex;
    align-items: center;
    .cover {
      width: 40px;
      height: 40px;
      position: relative;
    }

    > div:last-child {
      height: 58px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
  .center {
    .iconfont {
      font-size: 36px;
      color: aquamarine;
    }
  }
  .right {
    .iconfont {
      font-size: 18px;
      color: aquamarine;
    }
  }
  .cover:hover {
    .big {
      display: block !important;
    }
  }
  .big {
    position: absolute;
    width: 39px;
    height: 40px;
    background: #999;
    font-size: 32px;
    padding-bottom: 4px;
    padding-left: 4px;
    display: none;
  }
}
.progressDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: rgba(5, 180, 147, 1);
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -5px;
  margin-left: -5px;
  cursor: pointer;
}

.bar {
  height: 100%;
  background: rgba(5, 180, 147, 1);
  border-radius: 3px;
  display: inline-block;
  position: absolute;
}

.dialogAudioDuration {
  margin-left: 11px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}

.dialogAudioListen,
.dialogAudioDownload {
  width: 16px;
  height: 13px;
  cursor: pointer;
}

.dialogAudioListen {
  margin-left: 8px;
}

.dialogAudioDownload {
  margin-left: 5px;
}
.recordAudio {
  width: 100px;
}
</style>
