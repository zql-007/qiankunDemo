<template>
  <div id="app">
    <!--    <div id="nav">
      <router-link to="/test-web/test">子项目一地址one</router-link> |
      <router-link to="/test-web/testtwo">子项目一地址two</router-link> |
      <router-link to="/test-two/test">子项目二地址one</router-link> |
      <router-link to="/test-two/testtwo">子项目二地址two</router-link> |
    </div>-->
    <el-container direction="vertical" style="height: 100%; width: 100%">
      <el-header> </el-header>
      <el-container :style="'height:' + (parseInt(windowHeight) - 48) + 'px'">
        <el-menu
          class="el-menu-vertical-demo"
          @select="selectMenu"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-video-camera-solid"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-box"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-ship"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
        <el-container>
          <router-view />
        </el-container>
      </el-container>
    </el-container>

    <!-- <div id="test-web"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: "",
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    selectMenu(key, keyPath) {
      console.log(key, keyPath);
      let urlKey = "";
      // 判断如果要跳转的路径和当前路径一致，则不执行跳转
      if (key === "1") {
        urlKey = "/test-web/test";
      } else if (key === "2") {
        urlKey = "/test-web/testtwo";
      } else if (key === "3") {
        urlKey = "/test-two/test";
      } else if (key === "4") {
        urlKey = "/test-two/testtwo";
      }

      // 先判断目标路径是否和当前路径一致
      if (this.$route.path !== urlKey) {
        // 只有不同时才执行导航
        this.$router.push(urlKey);
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/*///////-----------------------/////////*/
.el-header {
  height: 48px !important;
  padding-left: 0;
  line-height: 48px;
  background: #fff;
  border-bottom: 1px solid #dcdfe6;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.04);
  .company-info {
    width: 370px;
    //text-align: center;

    .logo {
      height: 48px;
      width: auto;
      padding: 10px 110px 10px 0;
      img {
        width: auto;
        height: 100%;
      }
    }
  }

  .search {
    height: 36px;
    width: 250px;
  }
}
</style>
