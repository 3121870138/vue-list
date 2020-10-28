<!--
 * @Descripttion : 面包屑
 * @Autor        : 李晓超
 * @Date         : 2020-06-21 16:40:36
 * @LastEditTime : 2020-06-22 09:50:06
 * @FilePath     : \src\components\El-BreadBox.vue
--> 
<!--
v1.0 
breadBox 路由配置好，面包屑直接对应
-->

<template>
  <div class="example-container">
    <el-breadcrumb separator="/" style="fontSize: 20px;">
      <el-breadcrumb-item
        v-for="(item,index) in breadList"
        :key="index"
        :to="{ path: item.path }"
      >{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "Example",
  data() {
    return {
      breadList: ['home'],
      toGo: ""
    };
  },
  watch: {
    $route(to, from) {
      this.breadList = ['home']
      console.log(to.path.split("/").filter(Boolean));
      to.path
        .split("/")
        .filter(Boolean)
        .forEach(val => {
          let op = val.slice(0, 1).toUpperCase() + val.slice(1, val.length)
          this.breadList.push({
            name: op,
            path: val
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.example-container {
  padding: 15px 10px 0px 10px;
  box-sizing: border-box;
}
</style>