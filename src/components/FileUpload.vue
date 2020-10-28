<!--
 * @Descripttion : 文件上传
 * @Autor        : 李晓超
 * @Date         : 2020-06-16 21:35:59
 * @LastEditTime : 2020-06-17 09:28:18
 * @FilePath     : \src\components\FileUpload.vue
--> 
<template>
  <div id="content_box">
    <a href="javascript:;" class="file">
      上传新片
      <input type="file" name="image" accept="image/*" @change="setImage" />
    </a>

    <img :src="imgUrl.url"/>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      imgUrl: {
        url: ''
      }
    };
  },
  mounted() {},
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      let vm = {}
      vm.filedata = new FormData(); //创建form对象	       vm.filedata.append('file',file,file.name);//通过append向form对象添加数据		       		          vm.filedata.append('content','studentIcon');//添加form表单中其他数据//console.log(param.get('file'));
      //FormData  私有类对象，访问不到，可以通过get判断值是否传进去
      console.log(vm, 'vm')
      if (typeof FileReader === "function") {
        //生成本次url
        const reader = new FileReader();
        reader.onload = event => {
          this.imgUrl.url = event.target.result;
          console.log(event, 'event')
          console.log(this.imgUrl.url, 'this.imgUrl.url')
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    }
  },
  components: {},
  beforeDestroy() {}
};
</script>

<style scoped lang="scss">
.content_box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>