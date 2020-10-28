<!--
 * @Descripttion : 
 * @Autor        : 李晓超
 * @Date         : 2020-05-20 14:18:24
 * @LastEditTime : 2020-06-15 21:29:10
 * @FilePath     : \src\components\Layout.vue
--> 
<template>
  <!-- 布局 -->
  <div class="content_box">
    <el-button :plain="true" @click="openVn">VNode</el-button>

    <el-row>
      <el-col :span="24">
        <div class="gird">占一行</div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="gird">3个占一行</div>
      </el-col>
      <el-col :span="8">
        <div class="gird">3个占一行</div>
      </el-col>
      <el-col :span="8">
        <div class="gird">3个占一行</div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="gird">2个占一行</div>
      </el-col>
      <el-col :span="12">
        <div class="gird">2个占一行</div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="gird">3个6占一行</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">3个6占一行</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">3个6占一行</div>
      </el-col>
    </el-row>

    <!-- 分栏偏移 -->
    <el-tag>分栏偏移 :offset=6 ↓</el-tag>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="gird">3个占一行</div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="gird">3个占一行</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="gird">3个占一行</div>
      </el-col>
      <el-col :span="6" :offset="12">
        <div class="gird">3个占一行</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6">
        <div class="gird">3个占一行</div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="gird">3个占一行</div>
      </el-col>
    </el-row>

    <el-tag>对齐方式 type='flex' justify align ↓</el-tag>

    <el-row :gutter="20" type="flex">
      <el-col :span="6">
        <div class="gird">type="flex"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">type="flex"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">type="flex"</div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="6">
        <div class="gird">justify="center"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="center"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="center"</div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" justify="end">
      <el-col :span="6">
        <div class="gird">justify="end"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="end"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="end"</div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="6">
        <div class="gird">justify="space-between"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="space-between"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="space-between"</div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" justify="space-around">
      <el-col :span="6">
        <div class="gird">justify="space-around"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="space-around"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">justify="space-around"</div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" align="top">
      <el-col :span="6">
        <div class="gird">align="top"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">align="top"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">align="top"</div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" align="middle">
      <el-col :span="6">
        <div class="gird">align="middle"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">align="middle"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">align="middle"</div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" align="bottom">
      <el-col :span="6">
        <div class="gird">align="bottom"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">align="bottom"</div>
      </el-col>
      <el-col :span="6">
        <div class="gird">align="bottom"</div>
      </el-col>
    </el-row>参数 说明 类型 可选值 默认值
    span 栅格占据的列数 number — 24
    offset 栅格左侧的间隔格数 number — 0
    <p>push 栅格向右移动格数 number — 0</p>
    <p>pull 栅格向左移动格数 number — 0</p>
    <p>xs 小于768px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4})</p>
    <p>sm ≥768px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4})</p>
    <p>md ≥992px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4})</p>
    <p>lg ≥1200px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4})</p>
    <p>xl ≥1920px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4})</p>
    <p>tag 自定义元素标签 string * div</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: [""],
  data() {
    return {
      str:
        "<div><p>参数 说明 类型 可选值 默认值<p/><p>span 栅格占据的列数 number — 24<p/></div>"
    };
  },
  created() {
    axios.post('http://10.41.33.206:5001/themamap/fetch', {
      
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    openVn() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: `<div style='font-size: 13px; lineHeight: 20px;' class='div_content'>
              <p>参数 说明 类型 可选值 默认值</p>
              <p>span 栅格占据的列数 number</p>
              <p>offset 栅格左侧的间隔格数 number</p>
              <p>push 栅格向右移动格数 number — 0</p>
              <p>pull 栅格向左移动格数 number — 0 </p>
              <p>xs 小于768px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4}) </p>
              <p>sm ≥768px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4}) </p>
              <p>md ≥992px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4}) </p>
              <p>lg ≥1200px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4})</p>
              <p>xl ≥1920px 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4}) </p>
              <p>tag 自定义元素标签 string * div</p>
          </div>`
      });
    }
  }
};
</script>

<style scoped lang="scss">
.content_box {
  width: 100%;
  height: 100%;
  .gird {
    background: #ccc;
    padding: 5px;
  }
  .el-row:not(:first-child) {
    margin-top: 20px;
    text-align: center;
  }
  .el-tag {
    margin-top: 20px;
  }
}

.div_content {
  p {
    margin-top: 10px;
    color: red;
    line-height: 20px;
  }
}
</style>