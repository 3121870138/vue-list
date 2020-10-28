<template>
  <div>
    <tree-transfer
      :title="['图层列表', '已选图层列表']"
      :from_data="fromData"
      :to_data="toData"
      :defaultProps="{label:'name', children: 'childList'}"
      @addBtn="add"
      @removeBtn="remove"
      :mode="mode"
      height="540px"
      filter
      openAll
    ></tree-transfer>
  </div>
</template>

<script>
import treeTransfer from "el-tree-transfer"; // 引入
export default {
  data() {
    return {
      mode: "transfer",
      title: "我我我我",
      fromData: [],
      toData: []
    };
  },
  methods: {
    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
    changeMode() {
      if (this.mode == "transfer") {
        this.mode = "addressList";
      } else {
        this.mode = "transfer";
      }
    },
    // 监听穿梭框组件添加
    add(fromData, toData, obj) {
      console.log("监听穿梭框组件添加:", obj);
    }, // 监听穿梭框组件移除
    remove(fromData, toData, obj) {
      console.log("监听穿梭框组件移除:", obj);
    }
  },
  components: { treeTransfer } // 注册
};
</script>

<style>
</style>