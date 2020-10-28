<template>
  <div id="child">child -- {{this.num}}</div>
</template>

<script>
export default {
  props: ["num"],
  name: "",
  mounted() {},
  beforeDestroy() {}
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>