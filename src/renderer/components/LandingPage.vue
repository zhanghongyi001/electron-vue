<template>
  <div id="wrapper">
    <img src="../assets/logo1.png" alt="" />
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          style="width: 200px"
          v-decorator="[
            'userName',
            {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            },
          ]"
          placeholder="Username"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          style="width: 200px"
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            },
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox>
        <!-- <a class="login-form-forgot" href=""> Forgot password </a> -->
        <a-button
          style="width: 50px"
          type="primary"
          html-type="submit"
          class="login-form-button"
        >
          Log in
        </a-button>
        <!-- Or -->
        <!-- <a href=""> register now! </a> -->
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import electron from "electron";
const BrowserWindow = electron.remote.BrowserWindow;
const getCurrentWindow = electron.remote.getCurrentWindow;
let bilibiliWindow = null;
export default {
  name: "landing-page",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            // callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  components: {},
  mounted() {
    // let name = this.getCookie("name");
    // if (name) {
    //   bilibiliWindow = new BrowserWindow({
    //     height: 670,
    //     useContentSize: true,
    //     width: 1000,
    //     minWidth: 1000,
    //     minHeight: 670,
    //     titleBarStyle: "hidden",
    //   });
    //   setTimeout((e) => {
    //     getCurrentWindow().close();
    //   }, 2000);
    //   //
    //   let windowsHref = window.location.href;
    //   const locationURL = windowsHref.substring(
    //     0,
    //     windowsHref.indexOf("#") + 1
    //   );
    //   bilibiliWindow.loadURL(locationURL + "/list");
    //   bilibiliWindow.on("close", () => {
    //     bilibiliWindow = null;
    //   });
    // }
    // console.log("-----name-----");
  },
  methods: {
    getCookie(key) {
      var arr1 = document.cookie.split("; "); //由于cookie是通过一个分号+空格的形式串联起来的，所以这里需要先按分号空格截断,变成[name=Jack,pwd=123456,age=22]数组类型；
      for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split("="); //通过=截断，把name=Jack截断成[name,Jack]数组；
        if (arr2[0] == key) {
          return decodeURI(arr2[1]);
        }
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      // console.log("getCurrentWindow()", getCurrentWindow());
      this.form.validateFields((err, values) => {
        if (!err) {
          document.cookie = "name=赵子龙";
          //  验证成功关闭当前框
          //
          bilibiliWindow = new BrowserWindow({
            height: 670,
            useContentSize: true,
            width: 1000,
            minWidth: 1000,
            minHeight: 670,
            titleBarStyle: "hidden",
          });
          getCurrentWindow().close();
          let windowsHref = window.location.href;
          const locationURL = windowsHref.substring(
            0,
            windowsHref.indexOf("#") + 1
          );
          bilibiliWindow.loadURL(locationURL + "/list");
          bilibiliWindow.on("close", () => {
            bilibiliWindow = null;
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
// @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background: radial-gradient(
  //   ellipse at top left,
  //   rgba(255, 255, 255, 1) 40%,
  //   rgba(229, 229, 229, 0.9) 100%
  // );
  height: calc(100vh);
  width: calc(100vw);
  overflow: hidden;
  > img {
    display: flex;
    margin-bottom: 20px;
    width: 158px;
    height: 63px;
  }
  #components-form-demo-normal-login .login-form {
    max-width: 100px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
}
</style>
