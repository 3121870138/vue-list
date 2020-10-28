<!--
 * @Author: su
 * @Date: 2019-06-05 12:15:38
 -->
## FTbale Attributes

  el-table Attributes都可使用

  data 表格数据 Array required

  paginationOpt 分页器配置 Object

  fetch 列表请求函数  Function required

  createGet 列表create时是否网络请求  默认为true
  ### 表格跨页多选相关

    isMultiplePageSelect 是否开启跨页多选，开启多选时，需要参照示例加 :reserve-selection="true" 属性
    ```html
    <el-table-column type="selection" width="55" :reserve-selection="true">
    ```

    uniqueKey 如果开启跨页多选，且区分每行的属性不是id,需传入区分每行的属性

    numFontsize 可以自定义多选时表格下方数量文字的字号

    isSelectNum  是否需要展示 已选中 多少项
    
    selectedRows 如果展示已选中多少项 则需传入 多选时，选中的数据数组
      
  isOpenAllCheck 是否开启选择全部
  columns 表格列 Array required  
  columns: [
    {
      // 选择框
      hidden: true,
      attrs: {
        type: 'selection' 
      }
    },
    {
      // 普通表格
      attrs: {
        label: '订单编号',
        prop: 'purchaserOrderCode',
        width: 200,
        align: 'center'
      }
    },
    {
      // 自定义列
      slot: 'row',
      attrs: {
        label: 'id'
      }
    }
  ]

    <!-- 自定义表格列 -->
    <template slot="row" slot-scope="{ scope }">
      <span>{{scope.row.id}}</span>
    </template>

## FTbale Events

  el-table Events都可使用
  
## Ftable 方法
如果需要使用el-table中的方法，可以通过`elTableRef`获取到el-table的引用，再调用其方法
