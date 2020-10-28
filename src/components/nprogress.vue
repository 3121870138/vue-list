<template>
  <div>
    <el-button
      @click="gohome"
    >返回</el-button>
   滚动条

   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
   <h1>滚动条</h1>
  </div>
</template>

<script>
import { __merge, __changeQuery } from '@/utils'
export default {
  name: 'nprogress',
  data() {
    return {
    }
  },
  created () {
    console.log(this.$route.query, 'query1')
  },
  methods: {
    gohome () {
      __changeQuery(this.$route.query)
      this.$router.push({
        name: '测试utils方法路由跳转',
        query: {
          age: '33333'
        }
      })
    }
  }
};
</script>

<style>
</style>