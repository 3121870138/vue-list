<!--
 * @Author: wang jun feng
 * @Date: 2019-09-23 17:00:11
 * @LastEditTime: 2020-07-29 15:01:40
 -->
<template>
  <div class="f-table">
    <div class="all-selcet" v-if="isOpenAllCheck && pagination.total > 0">
      <el-checkbox v-model="allCheck" @change="allCheckEvent" class="select-all">
        选择全部数据
        <slot name="allSelcetTips"></slot>
      </el-checkbox>
      <span class="fs12">共<span class="font-color-error">{{pagination.total}}</span>条</span>
      <span class="fs12" v-if="allCheck">，已选中<span class="font-color-error">{{pagination.total}}</span>条</span>
    </div>
    <el-table-bar fixed :sticky="isOpenHeadSticky">
      <div :class="{'table-maxHeight': fakeLoadMore}">
        <el-table
          :row-key="uniqueKey"
          ref="table"
          v-on="$listeners"
          v-bind="$attrs"
          :data="listData"
        >
          <slot name="table">
            <template v-for="column in columns">
              <template v-if="!column.hidden">
                <el-table-column
                  v-if="!column.slot"
                  :key="column"
                  v-bind="column.attrs"
                ></el-table-column>
                <el-table-column
                  v-else
                  :key="column"
                  v-bind="column.attrs"
                >
                  <template slot-scope="scope">
                    <slot :name="column.slot" :scope="scope" />
                  </template>
                </el-table-column>
              </template>
            </template>
          </slot>
        </el-table>
      </div>
    </el-table-bar>
    <div class="load-more" v-if="loadDefault || loadMore">
      <p
        @click="handleLoadMore"
      >{{loadMoreText}}</p>
    </div>
    <div class="table-pagination">
      <span class="select-num" :style="{'font-size': numFontsize + 'px'}" v-if="isMultiplePageSelect && isSelectNum && pagination.total > 0 && selectedRows.length">已选中 <span class="num font-color-error">{{allDataNum > 0 ? allDataNum : selectedRows.length}}</span> 条数据</span>
      <el-pagination
        v-if="!fakeLoadMore && (!pageLimit || (pageLimit && getPageCount))"
        class="pagination"
        background
        :page-sizes="pagination.pageSizes"
        :page-size.sync="pagination.pageSize"
        :current-page.sync="pagination.page"
        :layout="fixSizes ? 'total, prev, pager, next, jumper' : 'total, prev, pager, next, sizes, jumper'"
        :total="pagination.total"
        :disabled="!pagination.total"
        @current-change="handlePageChange"
        @size-change="handleSizeChange"
      >
      </el-pagination>
      <span v-if="!fakeLoadMore && pageLimit && !getPageCount" class="total-page">共 {{pagination.total}} 条</span>
      <el-pagination
        v-if="!fakeLoadMore && pageLimit && !getPageCount"
        class="pagination"
        background
        :page-sizes="pagination.pageSizes"
        :page-size.sync="pagination.pageSize"
        :current-page.sync="pagination.page"
        :layout="fixSizes ? 'total, prev, pager, next' : 'total, prev, pager, next, sizes'"
        :page-count="100"
        :disabled="!pagination.total"
        @current-change="handlePageChange"
        @size-change="handleSizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import ElTableBar from '../el-table-bar'
  export default {
    name: 'f-table',
    props: {
      pageLimit: {
        type: Boolean,
        default: false
      },
      // 表格列配置项
      columns: {
        type: Array
      },
      // 表格数据
      data: {
        type: Array,
        default: () => []
      },
      // 分页器配置项
      paginationOpt: Object,
      // 请求函数
      fetch: Function,
      // 初始化时是否请求
      createGet: {
        type: Boolean,
        default: true
      },
      // 是否详情页展示
      fakeLoadMore: {
        type: Boolean,
        default: false
      },
      // 加载更多文字
      loadMoreText: {
        type: String,
        default: '点击加载更多'
      },
      // 加载更多
      loadMore: {
        type: Boolean,
        default: false
      },
      // 是否开启表头固定
      isOpenHeadSticky: {
        type: Boolean,
        default: true
      },
      // row-key属性是标识表格每行数据是通过哪个属性来进行区别的，一般而言id比较常见,如果不是id，需传入
      uniqueKey: {
        type: String,
        default: 'id'
      },
      // 是否开启跨页选
      isMultiplePageSelect: {
        type: Boolean,
        default: false
      },
      // 是否开启选择全量数据
      isOpenAllCheck: {
        type: Boolean,
        default: false
      },
      // 多选时，数量文字字号
      numFontsize: {
        type: Number,
        default: 13
      },
      // 是否需要展示 已选中 多少项
      isSelectNum: {
        type: Boolean,
        default: true
      },
      // 如果展示已选中多少项 则需传入 多选时，选中的数据数组
      selectedRows: {
        type: Array,
        default: () => []
      },
      // 是否固定分页条目
      fixSizes: {
        type: Boolean,
        default: false
      }
    },
    components: {
      ElTableBar
    },
    computed: {
      pagination () {
        // 合并分页器配置参数
        const obj = Object.assign({
          pageSizes: [10, 20, 50, 100],
          total: 0
        }, this.paginationOpt)
        return obj
      },
      getPageCount () {
        return Math.ceil(this.pagination.total / this.pagination.pageSize) <= 100
      }
    },
    data () {
      return {
        // 展示全部数据
        loadDefault: false,
        // 列表数据
        listData: [],
        // 对el-table的引用
        elTableRef: null,
        // 是否是请求加载
        loadMoreGet: false,
        allCheck: false,
        allDataNum: 0
      }
    },
    methods: {
      // 页码更改
      handlePageChange (page) {
        this.paginationOpt.page = page
        if (!this.fetch) {
          this.$emit('page-change', this.paginationOpt)
        } else {
          this.fetch()
        }
      },
      // 每页条数更改
      handleSizeChange (size) {
        this.paginationOpt.page = 1
        this.paginationOpt.pageSize = size
        if (!this.fetch) {
          this.$emit('pageSize-change', this.paginationOpt)
        } else {
          this.fetch()
        }
      },
      allCheckEvent () {
        if (this.allCheck) {
          this.listData.forEach(row => {
            if (row) {
              this.$refs.table.toggleRowSelection(row, true)
            }
          })
          this.allDataNum = this.pagination.total
        } else {
          this.$refs.table.clearSelection()
          this.allDataNum = 0
        }
      },
      clearAllSelection () {
        this.$refs.table.clearSelection()
      },
      // 加载更多
      handleLoadMore () {
        if (!this.loadMoreGet) {
          this.loadDefault = false
          this.listData = this.data
        } else {
          this.$emit('load-more')
        }
      }
    },
    beforeUpdate () { // 动态表头 使用v-if并不会重新渲染表格，并可能存在表头乱飞闪烁现象，使用element的dolayout解决
      this.$nextTick(() => {
        this.$refs['table'].doLayout()
      })
    },
    mounted () {
      this.elTableRef = this.$refs['table']
    },
    created () {
      if (!this.createGet || !this.fetch) return
      this.fetch()
    },
    watch: {
      loadMore: {
        // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
        immediate: true,
        handler (newVal) {
          if (newVal) {
            this.loadMoreGet = true
          }
        }
      },
      data: {
        immediate: true,
        handler (newVal) {
          if (this.fakeLoadMore) {
            // 内部懒加载
            if (newVal.length > 4 && !this.loadMoreGet) {
              // 显示前5条数据
              for (let i = 0, len = this.data.length; i < len; i++) {
                if (i > 3) continue
                this.listData.push(this.data[i])
              }
              this.loadDefault = true
            } else {
              this.listData = newVal
            }
          } else {
            // 列表页数据
            this.listData = newVal
            // if (!this.pagination.total) return false
            // // 无数据时，拉取上一页数据
            // if (!newVal.length && this.paginationOpt.page > 1) {
            //   this.paginationOpt.page -= 1
            //   this.fetch()
            // }
          }
        }
      },
      listData: {
        handler () {
          if (this.allCheck) {
            this.listData.forEach(row => {
              if (row) {
                this.$refs.table.toggleRowSelection(row, true)
              }
            })
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .fs12 {
    font-size: 12px;
  }
  .table-pagination {
    margin-top: 16px;
    .total-page{
      padding: 2px 0 2px 5px;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      vertical-align: top;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin-right: 10px;
      font-weight: 400;
      color: #606266;
    }
    .select-num {
      // font-size: 13px;
      position: relative;
      top: 3px;
    }
    .el-pagination {
      display: inline-block;
    }
  }
  .pagination {
    // margin-top: 20px;
    .alerdy-select {
      font-size: 12px;
      color: #333;
      position: relative;
      top: 2px;
      .redColor {
        color: red;
      }
    }
    .el-pagination {
      display: inline-block;
    }
  }
  .load-more {
    height: 36px;
    border: 1px solid #ecedee;
    border-top: none;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    color: #999;
    cursor: pointer;
  }
  .all-selcet {
    background: #f1f1f1;
    height: 40px;
    line-height: 40px;
    margin-bottom: 5px;
    padding-left: 15px;
    /deep/ .el-checkbox__label {
      font-size: 12px;
    }
  }
</style>
<style lang='scss'>
  .f-table {
    button.el-button--text {
      font-size: 12px;
    }
    .table-maxHeight {
      max-height: 600px !important;
      overflow-y: auto;
    }
    // 隐藏ie下表格el-scrollbar组件带来的纵向滚动条
    .el-scrollbar__bar.is-vertical .el-scrollbar__thumb {
      display: none;
    }
    .all-selcet .select-all {
      margin-right: 10px;
    }
    .is-disabled.is-checked {
      .el-checkbox__inner {
        border-color: #dcdfe6;
      }
    }
  }
  div.el-table td {
    padding: 10px 0;
  }
</style>
