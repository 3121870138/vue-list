<template>
  <div class="upload-content"
    v-loading.fullscreen.lock="loading"
    element-loading-text="上传中">
    <div class="download-template upload-content-info">
      <slot name="guide">
        <!--:href="downloadTemplate"-->
        <a @click="downloadFile" class="download-file">
          <span></span>
        </a>
        <p>下载导入模板文件</p>
      </slot>
    </div>
    <div class="upload-group upload-content-info">
      <sy-upload
        ref="fe-upload"
        class="upload"
        :action="action"
        :data="data"
        :accept="uploadConfig.accept"
        :auto-upload="autoUpload"
        :multiple="uploadConfig.multiple"
        :showFileList="uploadConfig.showFileList"
        :before-upload="beforeUpload"
        :on-change="changeFile"
        :on-success="uploadSuccess"
        :on-error="uploadError"
      >
        <div class="upload-success upload-content-info" v-show="isUpload">
          <div class="upload-success-icon"></div>
        </div>
      </sy-upload>
      <div v-show="!isUpload && tips">
        <p slot="trigger">上传导入文件</p>
        <p class="upload-tips">（{{tip}}）</p>
      </div>
      <div v-show="!isUpload && !tips">
        <p class="upload-tips">支持{{tip}}</p>
      </div>
      <p v-show="isUpload">
        <span class="file-name">{{file.name}}</span>
        <span class="file-size">（{{autoUpload ? file.size : file.size / 1024}}k）</span>
        <i class="el-icon-delete" @click="deleteFile"></i>
      </p>
    </div>
  </div>
</template>

<script>
  import response from '@/utils/response.js'
  import syUpload from '@/components/sy-upload/upload.vue'
  export default {
    props: {
      tips: {
        type: Boolean,
        default: true
      },
      // 下载前的校验
      downloadValidate: {
        type: Object,
        default: {
          url: '',
          method: '',
          param: {}
        }
      },
      // 下载模板文件地址
      downloadTemplate: {
        type: String,
        default: ''
      },
      // 上传地址
      action: {
        type: String
      },
      // 是否自动上传
      autoUpload: {
        type: Boolean,
        default: true
      },
      // 上传时附带额外的参数
      data: {
        type: Object
      },
      tip: {
        type: String,
        default: '.xls/.xlsx格式，大小在5M以内'
      }
    },
    data () {
      return {
        uploadConfig: {
          // 是否支持多选文件
          multiple: false,
          // 上传文件类型
          accept: 'xls,xlsx',
          // 是否显示上传列表
          showFileList: false
        },
        file: {
          name: '',
          size: ''
        },
        valid: true,
        isUpload: false,
        loading: false
      }
    },
    methods: {
      // 下载文件，先进行校验
      async downloadFile () {
        if (this.downloadValidate && this.downloadValidate.url) {
          const {url, type, param} = this.downloadValidate
          const res = await response(this.$http(type, url, param), {
            loadingOptions: true
          })
          if (!res.isOk) {
            return
          }
        }
        window.open(this.downloadTemplate)
      },
      // 删除文件
      deleteFile () {
        this.reset()
        this.$emit('changeFiles', null)
      },
      // 手动上传
      submitUpload () {
        if (this.file.name === '') {
          return this.$message({
            type: 'error',
            message: '请选择文件后上传'
          })
        }
        this.$refs['fe-upload'].submit()
      },
      uploadSuccess (response) {
        if (response.code !== 'success') {
          this.reset()
          this.$message.error(response.errorMessage || '上传失败，请重新上传')
          return false
        } else {
          this.isUpload = true
          this.$emit('uploadSuccess', response)
          this.loading = false
        }
      },
      // 上传失败
      uploadError () {
        this.reset()
        this.loading = false
      },
      // 自定义上传
      beforeUpload (file) {
        if (!file) {
          this.$message({
            type: 'error',
            message: '请选择文件后上传'
          })
          return false
        }
        this.file.name = file.name
        this.file.size = Math.round(file.size / 1024)
        let extensionStr = file.name.substring(file.name.lastIndexOf('.') + 1)
        const extensionIsRight = extensionStr === 'xls' || extensionStr === 'xlsx'
        if (!extensionIsRight) {
          this.$message({
            type: 'error',
            message: '上传文件为.xls/.xlsx格式，大小5M以内'
          })
          // 清空文件
          this.$refs['fe-upload'].clearFiles()
          this.deleteFile()
          return false
        }
        // 限制上传文件为5M
        let sizeIsSatisfy = file.size < 5 * 1024 * 1024
        if (!sizeIsSatisfy) {
          this.$message({
            type: 'error',
            message: '上传文件为.xls/.xlsx格式，大小5M以内'
          })
          // 清空文件
          this.$refs['fe-upload'].clearFiles()
          this.deleteFile()
          return false
        }
        this.loading = true
      },
      changeFile (file) {
        this.file = file
        this.isUpload = true
        this.$emit('changeFiles', file)
      },
      // 对外方法用于重置状态 this.$refs['name'].reset()
      reset () {
        this.$nextTick(() => {
          this.loading = false
          this.isUpload = false
          this.file.size = ''
          this.file.name = ''
        })
      }
    },
    components: {
      syUpload
    }
  }
</script>

<style lang="scss">

  .upload-content {
    font-size: 12px;
    color: #333;
    padding-top: 60px;
    text-align: center;
    .upload-content-info{
      vertical-align: top;
      display: inline-block;
      text-align: center;
    }
    .download-file {
      cursor: pointer;
    }
    .download-template{
      margin-right: 238px;
      vertical-align: top;
      font-size: 12px;
      color: #333;
      display: inline-block;
      a{
        display: inline-block;
        height: 120px;
        margin-bottom: 8px;
        span{
          display: inline-block;
          width: 120px;
          height: 120px;
          background: url($img-url + "155254831478248718.png") no-repeat;
        }
      }
    }
    .upload-group{
      .upload{
        width: 120px;
        height: 120px;
        background: url($img-url + "155255006949663673.png") no-repeat;
        margin: 0 auto 8px;
        .el-upload{
          width: 100%;
          height: 100%;
        }
      }
      .upload-tips{
        line-height: 20px;
        color: #3F3F3F;
        letter-spacing: 0.67px;
        opacity: 0.7;
      }
    }

    .upload-success{
      .upload-success-icon{
        width: 120px;
        height: 120px;
        background: url($img-url + "155255068976757094.png") no-repeat;
        margin: 0 auto 8px;
      }
      p {
        .file-name {
          max-width: 150px;
          overflow: hidden;
        }
        .file-size,i{
          color: #3F3F3F;
          opacity: 0.7;
        }
        i.el-icon-delete {
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
</style>
