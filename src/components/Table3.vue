<!--
 * @Descripttion : 
 * @Autor        : 李晓超
 * @Date         : 2020-05-15 17:14:17
 * @LastEditTime : 2020-06-15 11:09:00
 * @FilePath     : \src\components\Table3.vue
--> 
<template>
  <!-- 点击分层抽样 -->
  <div class="content_box">
    <!-- <table style="width: 500px; height: auto; border: 1px solid #000;textAlign: center;">
      <thead>
        <tr>
          <th colspan="2">水土流失类型面积强度和分布</th>
          <th colspan="2">水土流失消长情况及主要原因</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>是否合理</td>
          <td>合理</td>
          <td>是否合理</td>
          <td>合理</td>
        </tr>
        <tr>
          <td>说明</td>
          <td>面积分布合理</td>
          <td>说明</td>
          <td>消长合理</td>
        </tr>
        <tr>
          <td colspan="2">资料</td>
          <td colspan="2">2020年合理性说明.pdf</td>
        </tr>
        <tr>
          <td colspan="2">审核结果</td>
          <td colspan="2">通过</td>
        </tr>
        <tr>
          <td colspan="2">审核意见</td>
          <td colspan="2">改县合理</td>
        </tr>
      </tbody>
    </table>-->

    <!-- :span-method="objectSpanMethod" -->
    <el-table :data="tableData" :span-method="spanMethod">
      <el-table-column prop="classId" label="班级ID"></el-table-column>
      <el-table-column prop="className" label="班级名"></el-table-column>
      <el-table-column prop="stuId" label="学号"></el-table-column>
      <el-table-column prop="stuName" label="姓名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <span @click="sendMsg(row.classId)">群发短信</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        //班级学生信息mock数据，该数据假设已经按着班级信息进行排序
        {
          classId: "001",
          className: "一班",
          stuId: 1001,
          stuName: "zhangsan001"
        },
        {
          classId: "001",
          className: "一班",
          stuId: 1002,
          stuName: "zhangsan001"
        },
        {
          classId: "001",
          className: "一班",
          stuId: 1003,
          stuName: "zhangsan001"
        },
        {
          classId: "002",
          className: "二班",
          stuId: 1004,
          stuName: "zhangsan002"
        },
        {
          classId: "002",
          className: "二班",
          stuId: 1005,
          stuName: "zhangsan002"
        },
        {
          classId: "003",
          className: "三班",
          stuId: 1006,
          stuName: "zhangsan003"
        },
        {
          classId: "003",
          className: "三班",
          stuId: 1007,
          stuName: "zhangsan003"
        },
        {
          classId: "003",
          className: "三班",
          stuId: 1008,
          stuName: "zhangsan003"
        },
        {
          classId: "004",
          className: "四班",
          stuId: 1009,
          stuName: "zhangsan004"
        }
      ]
    };
  },
  created() {},
  computed: {
    groupNum() {
      //获取班级列表数组
      return new Set(this.tableData.map(o => o.className));
    }
  },
  methods: {
    classGroup(name) {
      //根据班级名称获取学生数量
      return this.tableData.filter(o => o.className == name).length;
    },
    classNameLen(name) {
      //根据班级名称获取该班级第一个学生在全量学生中的偏移位置
      const tmp = Array.from(this.groupNum);
      const index = tmp.indexOf(name); //某班级在全班级中的偏移位置
      let len = 0;
      for (let i = 0; i < index; i++) {
        len += this.classGroup(tmp[i]);
      }
      return len;
    },
    sendMsg(classId) {
      //do something
      let arr = []
      arr = this.tableData.map(val => {
        if (val.classId == classId) {
          return val
        }
      })
      console.log(arr.filter(Boolean), 'arr')
    },
    spanMethod(data) {
      //对于表格数据进行分组合并操作，UI组件回调函数
      const { row, column, rowIndex, columnIndex } = data;
      console.log(data, "data");
      if (columnIndex < 2 || columnIndex > 3) {
        //班级合并展示区
        const len = this.classGroup(row.className);
        const lenName = this.classNameLen(row.className);
        if (rowIndex === lenName) {
          //某班级首位学生行
          return {
            rowspan: len,
            colspan: 1
          };
        } else
          return {
            //某班级非首位学生行
            rowspan: 0,
            colspan: 0
          };
      } else {
        //学生信息展示区
        return {
          rowspan: 1,
          colspan: 1
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content_box {
  width: 100%;
  height: 100%;
  overflow: auto;
  tr,
  td,
  th {
    border: 1px solid #000;
  }
}
</style>