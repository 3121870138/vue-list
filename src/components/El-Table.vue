<!--
 * @Descripttion : table表格, 搜索滚动条滚动
 * @Autor        : 李晓超
 * @Date         : 2020-05-28 13:01:25
 * @LastEditTime : 2020-06-28 16:18:14
 * @FilePath     : \src\components\El-Table.vue
--> 
<template>
  <div class="box">
    <el-input size="small" v-model="num" @input="numberChange()"></el-input>
    <el-table :data="tableData" height="250" border style="width: 100%" ref="leftTable">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      tableData: [
        {
          index: 1,
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          index: 2,
          date: "2016-05-02",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          index: 3,
          date: "2016-05-04",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          index: 4,
          date: "2016-05-01",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          index: 5,
          date: "2016-05-08",
          name: "王小虎5",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          index: 6,
          date: "2016-05-06",
          name: "王小虎6",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          index: 7,
          date: "2016-05-07",
          name: "王小虎7",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    numberChange() {
      console.log(this.$refs.leftTable, 'leftTable')
      this.tableData.forEach((v, i) => {
        if(v.name == this.num) {
          this.$refs.leftTable.bodyWrapper.scrollTop = 20 * ( i + 1 );
        }
      });
    }
  },
  components: {},
  beforeDestroy() {}
};
</script>

<style scoped>
.box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>


// let height = parseInt($(this.$refs.leftTable.$el).find('.el-table__body tbody td:first-child').height()) || 24;  //获取行高
// this.$refs['leftTable'].setCurrentRow(this.leftTable[i]) //设置行高亮显示
// 用pl-table：
// this.$refs.leftTable.$el.children[0].children[2].scrollTop = (height * (i-任意数字));

// 用el-table：
// this.$refs.leftTable.bodyWrapper.scrollTop = (height * (i-任意数字));