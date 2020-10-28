<!--
 * @Descripttion : 
 * @Autor        : 李晓超
 * @Date         : 2020-05-28 13:01:25
 * @LastEditTime : 2020-06-21 15:55:14
 * @FilePath     : \src\components\Father.vue
--> 
<template>
  <div id="father">
      {{this.num}}
    <el-button @click="btn">点击</el-button>
    <h1>子组件：</h1>
    <Child :num="num"/>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "",

  data() {
    return {
      num: 1
    };
  },
  mounted() {},
  methods: {
    btn() {
      this.num = this.num + 1;
    }
  },
  components: {
    Child
  },
  beforeDestroy() {}
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>