<template>
  <!-- 点击分层抽样 -->
  <div class="content_box">
    <el-table :data="data" style="width: 100%" align="center" @filter-change="filterChange">
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column label="统计" align="center">
        <el-table-column prop="area" label="面积" align="center"></el-table-column>
        <el-table-column prop="numberOfSpots" label="图斑数" align="center"></el-table-column>
      </el-table-column>
      <el-table-column
        label="抽样设置"
        align="center"
        :filter-multiple="false"
        :filters="[{ text: '图斑比例', value: true }, { text: '图斑数', value: false }]"
      >
        <el-table-column prop="spotRatio" label="图斑比例(%)" align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入百分比" v-model="scope.row.spotRatio" :disabled="!disabled"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="numberOfSpotsTow" label="图斑数" align="center">
          <template slot-scope="scope">
            <el-input
              placeholder="请输入图斑数"
              v-model="scope.row.numberOfSpotsTow"
              :disabled="disabled"
            ></el-input>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>

    <el-form ref="form" align="center" style="marginTop: 10px;">
      <el-form-item>
        <el-button type="primary" @click="stratifiedSamplingSubmit">确定</el-button>
        <el-button @click="beforeClose">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: [""],
  data() {
    return {
      data: [
        {
          id: 0,
          date: "2016-05-03",
          type: "水域",
          area: "100",
          numberOfSpots: "20",
          spotRatio: "",
          numberOfSpotsTow: ""
        },
        {
          id: 1,
          date: "2016-05-03",
          type: "耕地",
          area: "100",
          numberOfSpots: "20",
          spotRatio: "",
          numberOfSpotsTow: ""
        },
        {
          id: 2,
          date: "2016-05-03",
          type: "草地",
          area: "100",
          numberOfSpots: "20",
          spotRatio: "",
          numberOfSpotsTow: ""
        }
      ],
      disabled: true
    };
  },
  methods: {
    successTips(opt) {
      this.$message({
        message: opt,
        type: "success"
      });
    },
    errorTips(opt) {
      this.$message.error(opt);
    },
    beforeClose() {
      this.$emit("dialogAuto", "stratifiedSampling");
    },
    stratifiedSamplingSubmit() {
      console.log(this.data);
      if (this.disabled) {
        // 百分比
        console.log("百分比");
      } else {
        // 图斑数
        console.log("图斑数");
      }
    },
    filterChange(opt) {
      for (const key in opt) {
        this.disabled = opt[key][0];
      }
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.content_box {
  width: 100%;
  height: 500px;
}
</style>