<template>
  <!-- 动态监测成果复核  ———— 省 -->
  <div class="m-body">
    <!-- 点击合规性检查 -->
    <div class="ComplianceCheck" :style="control ? 'display:block; z-index: 205' : 'display: none'">
      <TitleBar>合规性审查</TitleBar>
      <el-table-self
        :data="List && List.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
        size="mini"
        style="width: 100%;fontSize:8px;text-align:center;color: #4FBDDB;"
      >
        <el-table-column prop="countyName" label="抽样县名称" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column prop="hegui" label="合规性" show-overflow-tooltip align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.hegui==true" style="color: #3390FF">合规</span>
            <span v-else-if="scope.row.hegui==false" style="color: red">不合规</span>
            <span v-else style="color: #FFB23E; fontSize: 16px">?</span>
          </template>
        </el-table-column>
      </el-table-self>
      <div class="table_pagination">
        <!-- 分页 -->
        <el-pagination
          small
          background
          align="center"
          style="padding: 5px;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[5,10,15]"
          :page-size="page.pageSize"
          layout="prev, pager, next, jumper"
          :total="List ? List.length : 1"
          :pager-count="5"
        ></el-pagination>
      </div>

      <el-button type="primary" class="close" size="small" @click="ComplianceCheckClose">返回</el-button>
    </div>

    <div
      class="complianceRandom"
      :style="control ? 'display:block; z-index: 300;width: calc(100% - 630px)' : 'display: none;'"
    >
      <div class="complianceRandom_top">
        <TitleBar>合规性检查</TitleBar>
        <span style="marginLeft: 20px;">
          <el-radio v-model="radio" label="1" size="mini" @change="radioChange">随机抽样</el-radio>
          <el-radio v-model="radio" label="2" size="mini" @change="radioChange">分层抽样</el-radio>
        </span>
        <i class="el-icon-info" style="color: #FF9900; fontSize: 20px;marginLeft: 20px;"></i>
        <div style="position: absolute;right: 50px;">
          <el-button type="primary" class="close" size="small">历史记录</el-button>
        </div>
        <div style="position: absolute;right: 5px; top: 4px;">
          <i class="el-icon-close" style="fontSize: 20px;" @click="ComplianceCheckClose"></i>
        </div>
      </div>
      <div class="complianceRandom_table">
        <el-table-self
          :data="complianceRandom"
          size="mini"
          style="width: 100%;fontSize:8px;text-align:center;"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="id" label="序号" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="bh" label="编号" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="td" label="土地利用类型" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="sw" label="生物措施" align="center"></el-table-column>
          <el-table-column prop="gc" label="工程措施" align="center"></el-table-column>
        </el-table-self>
      </div>
      <div class="complianceRandom_bot">
        <el-button type="primary" class="close" size="small">下一步</el-button>
      </div>
    </div>
    <!-- 点击合规性检查 -->

    <!-- 点击随机抽样 -->
    <el-dialog-self
      :title="dialogTitle"
      :visible.sync="randomSampling"
      width="30%"
      :before-close="handleClose"
      align="center"
    >
      <el-form ref="form" :model="randomSamplingData" label-width="auto">
        <p style="padding: 7px 0 10px 0;fontSize: 15px;textAlign: center;">抽样设置</p>
        <div style="textAlign: center; padding: 20px 0px;">
          <el-radio v-model="radioChose" label="percentage">百分比</el-radio>
          <el-radio v-model="radioChose" label="spot">图斑</el-radio>
        </div>
        <el-form-item label="百分比" v-show="radioChose == 'percentage'">
          <el-input v-model="randomSamplingData.percentage"></el-input>
        </el-form-item>
        <el-form-item label="图斑" v-show="radioChose == 'spot'">
          <el-input v-model="randomSamplingData.spot"></el-input>
        </el-form-item>
        <el-form-item style="marginRight: 50px;">
          <el-button type="primary" @click="radioChoseChange">确定</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog-self>
    <!-- 点击随机抽样 -->

    <!-- 点击分层抽样 -->
    <el-dialog-self
      :title="dialogTitle"
      :visible.sync="stratifiedSampling"
      width="auto"
      :before-close="handleClose"
    >
      <el-table-self :data="stratifiedSamplingData" style="width: 100%" align="center">
        <el-table-column prop="type" label="类型" width="150" align="center"></el-table-column>
        <el-table-column label="统计" align="center">
          <el-table-column prop="area" label="面积" width="120" align="center"></el-table-column>
          <el-table-column prop="numberOfSpots" label="图斑数" width="120" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="抽样设置" align="center">
          <el-table-column prop="spotRatio" label="图斑比例(%)" width="120" align="center"></el-table-column>
          <el-table-column prop="numberOfSpotsTow" label="图斑数" width="120" align="center"></el-table-column>
        </el-table-column>
      </el-table-self>

      <el-form ref="form" align="center" style="marginTop: 10px;">
        <el-form-item>
          <el-button type="primary" @click="stratifiedSamplingSubmit">确定</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog-self>
    <!-- 点击分层抽样 -->

    <!-- 点击维护 -->
    <el-dialog-self
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="类型">
          <el-select v-model="form.type" placeholder="请选择类型" defaultValue="1111">
            <el-option
              v-for="item in formType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结论">
          <el-select v-model="form.status" placeholder="请选择结论">
            <el-option
              v-for="item in formstatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="form.updateTime"></el-input>
        </el-form-item>
        <el-form-item label="抽样县">
          <el-input type="textarea" v-model="form.sampleCounty"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog-self>
    <!-- 点击维护 -->

    <!-- 点击抽样弹层 -->
    <el-dialog-self
      :title="autoTitle"
      :visible.sync="dialogAuto"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="formAuto" :model="formAuto" label-width="auto">
        <el-form-item label="重点检查区域 (个)：">
          <el-input v-model="formAuto.focus"></el-input>
        </el-form-item>
        <el-form-item label="一般检查区域 (个)：">
          <el-input v-model="formAuto.general"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="AutoOnSubmit" style="marginLeft: 20%">立即创建</el-button>
      <el-button @click="handleClose">取消</el-button>
    </el-dialog-self>
    <!-- 点击抽样弹层 -->

    <!-- 动态监测 -->
    <MapRightAsider :isHidden="isHidden" asiderWidth="400px">
      <div class="content">
        <div class="content_box">
          <TitleBar style="color: #fff;">自(审)查结论</TitleBar>
          <el-table-self
            :data="tableData"
            size="mini"
            style="width: 100%;fontSize:8px;text-align:center;"
          >
            <el-table-column prop="type" label="类型" show-overflow-tooltip align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.type== 1">流域审查</span>
                <span v-if="scope.row.type== 2">省级自查</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="sampleCounty"
              label="抽样县"
              show-overflow-tooltip
              align="center"
              width="60"
            ></el-table-column>
            <el-table-column prop="status" label="结论" show-overflow-tooltip align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.status==2">基本通过复核</span>
                <span v-if="scope.row.status==1">通过复核</span>
                <span v-if="scope.row.status==0">未复核</span>
                <span v-if="scope.row.status==-1">不通过复核</span>
              </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="时间" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column label="操作" show-overflow-tooltip align="center">
              <template slot-scope="scope">
                <el-button @click="doData(scope.row)" type="text" size="small">维护</el-button>
              </template>
            </el-table-column>
          </el-table-self>
        </div>

        <div class="content_box">
          <TitleBar style="color: #fff;">成果自查</TitleBar>
          <div class="bodyt_table">
            <div class="table_header">
              <div class="table_header_top">
                <el-button type="primary" size="mini" @click="AutomaticSampling">抽样</el-button>
                <el-button type="primary" size="mini">历史记录</el-button>
                <el-button
                  type="warning"
                  size="mini"
                  v-if="formSave"
                  @click="formSavePperating"
                >抽样保存</el-button>
              </div>
              <div class="table_header_bot">
                <el-input size="small" v-model="inquire"></el-input>
                <el-button type="primary" size="mini" @click="inquireGo">查询</el-button>
              </div>
            </div>
            <div class="table_content">
              <!-- 成果自查表格 -->
              <el-table-self
                :data="List && List.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
                size="mini"
                style="width: 100%;fontSize:8px;text-align:center;"
              >
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="countyName" label="县名称" show-overflow-tooltip align="center"></el-table-column>
                <el-table-column prop="hegui" label="合规性" show-overflow-tooltip align="center">
                  <template slot-scope="scope">
                    <span v-if="scope.row.hegui==true" style="color: #3390FF">合规</span>
                    <span v-else-if="scope.row.hegui==false" style="color: red">不合规</span>
                    <span v-else style="color: #FFB23E; fontSize: 16px">?</span>
                  </template>
                </el-table-column>
                <el-table-column prop="heli" label="合理性" show-overflow-tooltip align="center">
                  <template slot-scope="scope">
                    <span v-if="scope.row.heli==true" style="color: #3390FF">合规</span>
                    <span v-else-if="scope.row.heli==false" style="color: red">不合规</span>
                    <span v-else style="color: #FFB23E; fontSize: 16px">?</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click="remind"
                      type="text"
                      size="small"
                      :class="scope.row.heli==true ? 'hlxInfo': 'hlxGl'"
                      :disabled="scope.row.heli==true || scope.row.heli==false "
                    >合理性提醒</el-button>
                  </template>
                </el-table-column>
              </el-table-self>
            </div>
            <div class="table_pagination" style="overflow: auto;">
              <!-- 分页 -->
              <el-pagination
                small
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.currentPage"
                :page-sizes="[5,10,15]"
                :page-size="page.pageSize"
                layout="prev, pager, next, jumper"
                :total="List ? List.length : 1"
                :pager-count="5"
              ></el-pagination>
              <!-- // page-size	每页显示条目个数，支持 .sync 修饰符 
                // current-page	当前页数，支持 .sync 修饰符    总页数： total / page-size
              // total	总条目数-->
              <el-button type="primary" size="mini" @click="ComplianceCheck">合规性检查</el-button>
            </div>
          </div>
        </div>
      </div>
    </MapRightAsider>

    <!-- 地图 -->
    <SimpleMap />
    <!-- 地图 -->
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
import LayerChange from "../../mapTools/layerChange";
import monitoringAPI from "@/api/index.js";
import MapRightAsider from "../dynamicMonitor/components/map-right-asider";
import SimpleMap from "@/components/mapTools/map";
export default {
  name: "MainBody",
  data() {
    return {
      isHidden: false,
      stratifiedSampling: false, // 选中 分层抽样
      stratifiedSamplingData: [
        {
          id: 0,
          date: "2016-05-03",
          type: "水域",
          area: "100",
          numberOfSpots: "20",
          spotRatio: "",
          numberOfSpotsTow: 200333
        },
        {
          id: 1,
          date: "2016-05-03",
          type: "耕地",
          area: "100",
          numberOfSpots: "20",
          spotRatio: "",
          numberOfSpotsTow: 200333
        },
        {
          id: 2,
          date: "2016-05-03",
          type: "草地",
          area: "100",
          numberOfSpots: "20",
          spotRatio: "",
          numberOfSpotsTow: 200333
        }
      ], // 分层抽样数据
      randomSampling: false, // 选中随机抽样
      randomSamplingData: {
        percentage: "", // 百分比
        spot: "" // 图斑
      },
      complianceRandom: [
        { id: 0, bh: "001", td: "耕地", sw: "水保林", gc: "石坎梯田" },
        { id: 1, bh: "001", td: "耕地", sw: "水保林", gc: "石坎梯田" },
        { id: 2, bh: "001", td: "耕地", sw: "水保林", gc: "石坎梯田" },
        { id: 3, bh: "001", td: "耕地", sw: "水保林", gc: "石坎梯田" },
        { id: 3, bh: "001", td: "耕地", sw: "水保林", gc: "石坎梯田" }
      ], // 合规性检查数据
      radio: "",
      radioChose: "percentage",
      control: false, // 点击合规性检查 显示隐藏
      activeName: "first",
      tableData: [],
      inquire: "", // input 查询
      dialogTitle: "",
      dialogVisible: false, // 维护
      autoTitle: "自动抽样", // 自动抽样
      dialogAuto: false,
      formAuto: {
        focus: "",
        general: ""
      }, // 自动抽样数据
      formSave: false, // 点击抽样之后的 保存按钮是否显示
      form: {
        id: "",
        type: "", // 类型
        status: "", // 结论
        updateTime: "", // 时间
        sampleCounty: "" // 抽样县
      },
      List: [
        {
          id: 0,
          countyName: "1",
          hegui: false,
          heli: true
        }
      ],
      // 页面配置
      page: {
        total: 1, //
        pageSize: 5, // 每页几条
        currentPage: 1 // dd
      },
      // 审查option
      formType: [
        { value: 1, label: "流域审查" },
        { value: 2, label: "省级自查" }
      ],
      // 结论
      formstatus: [
        { value: 2, label: "基本通过复核" },
        { value: 1, label: "通过复核" },
        { value: 0, label: "未复核" },
        { value: -1, label: "不通过审核" }
      ]
    };
  },
  mounted() {
    this.selfCheckConclu(); // 自(审)查结论
    this.selfcheckresult(1); // 成果自查
  },
  components: {
    LayerChange,
    MapRightAsider,
    SimpleMap
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
    onSubmit() {
      monitoringAPI
        .selfCheckConcluUpdate({
          id: this.form.id,
          type: this.form.type, // 类型
          status: this.form.status, // 结论
          // updateTime: this.form.updateTime, // 时间
          sampleCounty: this.form.sampleCounty // 抽样县
        })
        .then(res => {
          this.successTips(res.data.msg);
          this.selfCheckConclu();
          this.handleClose();
        });
    },

    selfCheckConclu() {
      monitoringAPI.selfCheckConclu({ row: 10, page: 1 }).then(res => {
        this.tableData = res.data.data;
      });
    },
    // 获取成果自查全部数据
    async selfcheckresult(pageNo) {
      let res = await monitoringAPI.selfcheckresult();
      this.List = res.data.data;
    },
    ///分页    初始页page.currentPage、初始每页数据数page.pageSize和数据testpage
    handleSizeChange(size) {
      this.page.pageSize = size;
    },
    handleCurrentChange(currentPage) {
      this.page.currentPage = currentPage;
    },
    // 表格1  点击维护 弹框出现
    doData(rows) {
      this.form = {
        ...rows
      };
      this.form.updateTime = this.formatDateForYearAndMonthAndDayunction(
        new Date()
      );

      this.dialogVisible = true;
      this.dialogTitle = "维护";
    },
    formatDateForYearAndMonthAndDayunction(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      var second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },

    // 点击维护弹窗关闭
    handleClose() {
      this.dialogVisible = false;
      this.dialogAuto = false;
      this.randomSampling = false;
      this.stratifiedSampling = false;
      this.radio = "";
    },
    // 查询
    inquireGo() {
      monitoringAPI
        .selfcheckresultInquire({
          countyName: this.inquire
        })
        .then(res => {
          if (this.inquire != "") {
            if (res.data.data) {
              this.successTips("查取数据成功");
              this.List = res.data.data;
            } else {
              this.errorTips(res.data.msg);
            }
          } else {
            this.selfcheckresult(1); // 成果自查
          }
        });
    },
    // 合理性提醒
    remind() {
      // 调用接口
      console.log(1);
    },
    // 点击自动抽样
    AutomaticSampling() {
      this.formSave = false;
      this.clearValue(this.formAuto);
      this.dialogAuto = true;
      this.selfcheckresult(1);
    },
    // 自动抽样提交
    AutoOnSubmit() {
      // 调用接口
      // keyCount=5&commonCount=10
      monitoringAPI
        .automaticSampling({
          keyCount: this.formAuto.focus,
          commonCount: this.formAuto.general
        })
        .then(res => {
          if (res.data.code == 200) {
            this.List = res.data.data;
            this.formSave = true;
          } else {
            this.formSave = false;
          }
        });
      this.handleClose();
    },
    // 点击抽样保存
    formSavePperating() {
      // 接口
      console.log("抽样保存");
      // 保存之后 返回初始的数据
    },
    // 点击合规性检查 开启弹框
    ComplianceCheck() {
      this.control = true;
    },
    ComplianceCheckClose() {
      this.control = false;
    },
    // 单选随机抽样，分层抽样 展示弹框
    radioChange() {
      this.dialogTitle = "详情";
      if (this.radio === "1") {
        // 随机抽样弹框
        this.randomSampling = true;
      } else if (this.radio === "2") {
        // 分层抽样弹框
        this.stratifiedSampling = true;
      }
    },
    // 单选随机 点击确定
    randomSamplingSubmit() {
      console.log("点击确定");
      console.log(this.randomSamplingData, "随机分层数据");
      // console.log(this.percentage, '百分比')
      // console.log(this.spot, '图斑')
      this.handleClose();
    },
    // 分层抽样 点击确定
    stratifiedSamplingSubmit() {
      console.log("分层抽样");
      this.handleClose();
    },
    //选择完 点击确定按钮
    radioChoseChange() {
      console.log(this.randomSamplingData[this.radioChose], "确定");
    },
    // 自动清空value值
    clearValue(obj) {
      for (let key in obj) {
        obj[key] = "";
      }
      return obj;
    }
  },

  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.m-body {
  height: 100%;
  width: 100%;
  display: flex;
  .el_input1 {
    height: 20px;
    width: 100px;
  }

  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .content_box:not(:first-child) {
      margin-top: 10px;
    }

    .content_box {
      background: $backgroud-opacity;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px;
      box-sizing: border-box;

      .bodyt_table {
        font-size: 10px;
        max-width: 380px;
        .el-table .cell {
          background: red;
        }
        .isBlue {
          color: blue;
        }
        .isRed {
          color: red;
        }
        .table_header,
        .table_content {
          width: 100%;
          height: auto;

          .table_header_bot,
          .table_header_top {
            width: 100%;
            display: flex;
            padding: 10px;
            box-sizing: border-box;
          }
          .table_header_bot {
            /deep/.el-input__inner {
              height: 20px;
              background: red;
            }
          }
        }
        table {
          font-size: 10px;
        }
      }
      .table_pagination {
        width: 100%;
        height: auto;
        text-align: center;
        padding: 5px 0;
        button {
          margin-left: 70%;
          margin-top: 10px;
        }
        /deep/ .el-pagination__total {
          color: #fff;
        }
        /deep/ .el-pagination__jump {
          color: #fff;
        }
      }
    }

    .hlxInfo {
      color: #cccc;
      border: 1px solid #ccc;
      padding: 3px 4px;
      box-sizing: border-box;
    }
    .hlxGl {
      color: #ffb23e;
      border: 1px solid #ffb23e;
      padding: 3px 4px;
      box-sizing: border-box;
    }
    .hlxGl:hover {
      background: #ffb23e;
      color: #fff;
    }
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .ComplianceCheck {
    width: 410px;
    height: 100%;
    background: #eef0ed;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    margin-top: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    .close {
      position: absolute;
      right: 20px;
      bottom: 60px;
    }
  }

  .complianceRandom {
    width: calc(100% - 410px);
    height: auto;
    background: #efefed;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    .complianceRandom_top {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      .el-icon-close:hover {
        cursor: pointer;
      }
    }
    .complianceRandom_table {
      flex: 1;
      overflow: auto;
    }
    .complianceRandom_bot {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
  }
}
</style>

