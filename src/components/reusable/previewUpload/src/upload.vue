<template>
  <div class="preview-uploader" @click="handleClick">
    <img :src="imageUrl" v-if="imageUrl">
    <i class="fa fa-plus" v-else></i>
    <input 
      ref="input"
      type="file" 
      class="preview-uploader--input"
      @change="handleFileChange">
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Upload extends Vue {
  public handleClick() {
    const fileInput = this.$refs.input as HTMLInputElement
    fileInput.click()
  }

  private imageUrl: string = '';

  public handleFileChange(ev: Event) {
    const file = (ev.target as any).files[0]
    this.imageUrl = URL.createObjectURL(file)
    this.$emit('handleAvatarUpload', this.imageUrl, file)
  }
}
</script>
<style scoped>
.preview-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  display: block;
  text-align: center;
  cursor: pointer;
  outline: none;
  width: 178px;
  height: 178px;
  margin: 0 auto;
  transition: border-color .2s;
}
.preview-uploader:hover {
  border-color: rgb(86, 186, 237)
}
.preview-uploader > img {
  width: 100%;
  height: 100%;
}
.fa {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 100%;
  line-height: 178px;
  text-align: center;
}
.preview-uploader--input {
  display: none;
  cursor: pointer;
}
</style>