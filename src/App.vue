<template>
  <el-container style="width: 100%; height: 100%; border: 1px solid #eee" class="gundongtiao">
    <el-aside
      width="auto"
      style="maxWidth: 200px; overFlow: auto; background-color: rgb(238, 241, 246);"
    >
      <el-radio-group v-model="isCollapse" style="margin-bottom: 10px; marginTop: 10px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <br v-if="isCollapse" />
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </template>
          <el-tooltip
            v-for="item in List"
            :key="item.path"
            class="item"
            effect="dark"
            :content="item.path"
            placement="right"
          >
            <el-menu-item @click="goRouter(item.path)">{{item.name}}</el-menu-item>
          </el-tooltip>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-eleme"></i>
            <span slot="title">el-element</span>
          </template>
          <el-tooltip
            v-for="item in El"
            :key="item.path"
            class="item"
            effect="dark"
            :content="item.path"
            placement="right"
          >
            <el-menu-item @click="goRouter(item.path)">{{item.name}}</el-menu-item>
          </el-tooltip>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-mouse"></i>
            <span slot="title">插件</span>
          </template>
          <el-tooltip
            v-for="item in Plugin"
            :key="item.path"
            class="item"
            effect="dark"
            :content="item.path"
            placement="right"
          >
            <el-menu-item @click="goRouter(item.path)">{{item.name}}</el-menu-item>
          </el-tooltip>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-mouse"></i>
            <span slot="title">utlis</span>
          </template>
          <el-tooltip
            v-for="item in TestUtils"
            :key="item.path"
            class="item"
            effect="dark"
            :content="item.path"
            placement="right"
          >
            <el-menu-item @click="goRouter(item.path)">{{item.name}}</el-menu-item>
          </el-tooltip>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        跳转：
        <el-input
          v-model="input"
          placeholder="请输入路由"
          style="width: 350px;"
          @change="goRouter(input)"
        ></el-input>
      </el-header>

      <el-main>
        <!-- path: {{this.$router.currentRoute.path}}
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div> -->
        <BreadBox />
        <router-view style="padding: 20px;" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import BreadBox from '@@/El-BreadBox.vue'
export default {
  name: "App",
  data() {
    return {
      isHidden: false,
      isCollapse: true,
      input: "",

      List: [],
      El: [], // el-element
      Plugin: [], // 插件
      TestUtils: [], // utils 测试
    };
  },
  components: {
    BreadBox
  },
  methods: {
    goRouter(optt) {
      let opt = optt || "/";
      this.$router.push(opt);
    }
  },
  created() {
    console.log(this.$router.currentRoute.path, '当前路由');
    // this.List = this.$router.options.routes;
    this.$router.options.routes.forEach(val => {
      // console.log(val, "val");
      if (val.type == "el") {
        this.El.push(val);
      } else if (val.type == "plugin") {
        this.Plugin.push(val);
      } else if (val.type == 'utils') {
        this.TestUtils.push(val);
      } else {
        this.List.push(val);
      }
    });
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  & ::-webkit-scrollbar {
    width: 0;
  }
}

#menuBox {
  width: 200px;
  max-width: 200px;
  height: 100%;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 5px !important; /*滚动条宽度*/
  height: 1px !important; /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 5px !important; /*滚动条的背景区域的圆角*/
  background-color: transparent !important; /*滚动条的背景颜色*/
}

::-webkit-scrollbar-corner {
  background-color: transparent !important;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 5px !important; /*滚动条的圆角*/
  background-color: #ccc; /*滚动条的背景颜色*/
}

#asiderBox {
  flex: 1;
  margin: 5px;
  border: 1px solid #000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

#card {
  position: fixed;
  border-radius: 1%;
  border: 1px solid #000;
  background: gray;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 50%;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  transition: 0.6s;
  z-index: 100;
}

.cardList {
  width: 100px;
  height: auto;
  padding: 10px;

  background: #ccc;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 3%;
  margin-top: 20px;
  box-sizing: border-box;
}
.cardList:hover {
  cursor: pointer;
  color: red;
  box-shadow: 10px 10px 5px #000;
  transition: 0.6s;
  transition: color 0.6s;
}
</style>
