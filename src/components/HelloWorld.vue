 <template>
  <div>
    <el-button @click="updata">点击改变数据</el-button>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
    >
      <!-- 要使当页显示分页后的对应数据，其下标应为(当前页-1)*每页数据数 到 当前页*每页数据数。使用slice方法进行取用  -->
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="peo" label="姓名" width="180"></el-table-column>
      <el-table-column prop="tel" label="手机"></el-table-column>
      <el-table-column prop="dataTimes" label="时间"></el-table-column>
      <el-table-column label="头像">
        <!-- <template scope="scope">
          <p class="pic">
            <img :src="scope.row.pho" :alt="scope.row.peo" />
          </p>
        </template>-->
      </el-table-column>
    </el-table>
    <div class="yema">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10,15]"
        :page-size="pagesize"
        layout="total,jumper,prev, pager, next,sizes"
        :total="tableData.length"
      ></el-pagination>
    </div>

    <!-- handleSizeChange为pagesize发生改变时的相应函数	-->
    <!-- handleSizeChange为pagesize发生改变时的相应函数	-->
    <!-- -->
    <!-- page-sizes为所有可选择的page-size。可以自己更改其中的数字 设置多少条一页 -->
    <!-- layout为附带的功能，一般不用动它 -->
    <!--total为总数据数 -->
  </div>
</template>

  <script>
export default {
  data() {
    return {
      currentPage: 1,
      pagesize: 5,
      tableData: [
        {
          id: "1",
          title: "标题",
          content: "内容 ",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "2",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "3",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "4",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "5",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "6",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        }
      ]
    };
  },
  methods: {
    ///分页    初始页currentPage、初始每页数据数pagesize和数据testpage
    handleSizeChange(size) {
      this.pagesize = size;
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    updata() {
      console.log(this.tableData);
      this.tableData = [
        {
          id: "1",
          title: "标题",
          content: "内容 ",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "2",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "3",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "4",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "5",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "6",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "1",
          title: "标题",
          content: "内容 ",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "2",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "3",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "4",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "5",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        },
        {
          id: "6",
          title: "标题",
          content: "内容",
          city: "城市",
          adrs: "地址描述",
          room: "文字描述",
          imgUrl: "图片地址 ",
          dataTimes: "日期",
          peo: "姓名",
          tel: "手机号",
          pho: "img的src地址"
        }
      ];
    }
  },
  created() {}
};
</script>