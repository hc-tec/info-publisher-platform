<template>
  <div class="feedback__element">   
    <label class="label" :for="label">{{ label }}:</label>
    <div class="input">
      <input 
        type="file" 
        class="fake-uploader" 
        title=""
        multiple
        @change="addFile" />
      <svg class="uploader" viewBox="-352.439 -334.975 110.687 90">
        <g class="arrow">
          <line class="left" fill="none" stroke="rgba(191,191,191,1)" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="-288.85" y1="-291.152" x2="-280.154" y2="-299.849"/>
          <line class="right" fill="none" stroke="rgba(191,191,191,1)" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="-280.154" y1="-299.849" x2="-271.457" y2="-291.152"/>
        </g>
        <path id="shape" class="cloud" fill="none" stroke="rgba(191,191,191,1)" stroke-width="5" stroke-miterlimit="10" d="M-326.444-305.524
          c-12.976,0-23.495,10.529-23.495,23.504c0,12.976,10.519,23.495,23.495,23.495h45.217c20.421,0,36.975-16.554,36.975-36.975
          s-16.554-36.975-36.975-36.975c-16.942,0-31.213,11.408-35.586,26.951H-326.444z"/>
        
        <path class="cloud-loader" fill="none" stroke="rgba(191,191,191,1)" stroke-width="5" stroke-miterlimit="10" d="M-326.444-305.524
          c-12.976,0-23.495,10.529-23.495,23.504c0,12.976,10.519,23.495,23.495,23.495h45.217c20.421,0,36.975-16.554,36.975-36.975
          s-16.554-36.975-36.975-36.975c-16.942,0-31.213,11.408-35.586,26.951H-326.444z"/>
          
      </svg>
    </div>
    <ul class="fileList">
      <file-list-item 
        v-for="(file, index) in fileList"
        :key="file.url"
        :file="file"
        :index="index"
        @removeFile="removeFile">
      </file-list-item>
    </ul>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import fileListItem from './uploader/fileListItem.vue'
@Component({
  components: {
    fileListItem
  }
})
export default class FileUploader extends Vue {
  @Prop({default: '文件上传', type: String})
  public label: string;

  public fileList: Record<string, string>[] = [
    {
      url: 'www.baidu.com',
      name: 'java.jpg'
    }
  ]

  public addFile(e: any) {
    const files = e.target.files;
    files.forEach(
      file => {
        this.fileList.push({
          url: '',
          name: file.name
        })
      }
    )
  }

  public removeFile(index: number) {
    this.fileList.splice(index, 1);
  }
}
</script>
<style scoped>
.feedback__element {
  position: relative;
}

.label {
  color: #666;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  width: 60px;
  text-align: right;
  margin-right: 10px;
}
.fileList {
  width: 60%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 14px;
  color: #606266;
  max-height: 100px;
  overflow: auto;
}
.input {
  position: relative;
  display: inline-flex;
  flex-flow: row-reverse;
  justify-content: flex-end;
}
.arrow {
  animation: float 1s alternate-reverse infinite;
}
.fake-uploader {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.uploader,
.fake-uploader {
  width: 55px;
  height: 45px;
  cursor: pointer !important;
}
.cloud-loader {
  transition: stroke .3s;
}
.input:hover .cloud-loader {
  stroke: rgba(61,176,250,1);
}
@keyframes float {
  from {
    transform: translateY(-5px);
  } to {
    transform: translateY(5px);
  }
}
</style>
