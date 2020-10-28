<template>
  <!-- 点击分层抽样 -->
  <div class="content_box">
    pageRoute.vue
    <el-button @click="goT">点击跳转</el-button>
  </div>
</template>

<script>
import { __merge, __changeQuery } from '@/utils'
export default {
  props: [""],
  data() {
    return {
      options: []
    };
  },
  created () {
    this.$route.query.sex = '5555'
    console.log(this.$route.query, 'query')
  },
  methods: {
    goT () {
      this.$router.push({
        name: 'nprogress浏览器顶部滚动条'
      })
    }
  }
};
</script>

<style  scoped>
</style>