<!--
 * @Descripttion : 
 * @Autor        : 李晓超
 * @Date         : 2020-06-18 20:47:32
 * @LastEditTime : 2020-06-18 20:50:59
 * @FilePath     : \src\components\El-Popover.vue
--> 
<template>
  <div class="content_box">
    <el-popover placement="right-start" width="400" trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "",

  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
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
.content_box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>