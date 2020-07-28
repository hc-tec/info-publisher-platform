<template>
  <li 
    class="file-list-item" 
    @mouseenter="operateChange"
    @mouseleave="operateChange">
    <i class="fa fa-file-text-o"></i>
    <span class="file-name">{{ file.name }}</span>
    <i 
      :class="['file-status', 'fa', status]"
      @click="removeFile"></i>
  </li>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FileListItem extends Vue {
  @Prop({type: Object})
  public file: Record<string, string>;

  @Prop({type: Number})
  public index: number;

  public status: string = 'fa-check-circle-o'

  public operateChange(e: Event) {
    const status = (type: string) => {
      return {
        'mouseenter': 'fa-times-circle-o',
        'mouseleave': 'fa-check-circle-o'
      }[type]
    }
    this.status = status(e.type)
  }

  public removeFile() {
    const el = document.getElementsByClassName('file-list-item')[this.index];
    el.classList.add('file-remove-animation')
    setTimeout(() => {
      this.$emit('removeFile', this.index);
    }, 490);
    
  }
}
</script>
<style scoped>
.file-list-item {
  padding: 4px 10px;
  background-color: #fff;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}
.file-list-item > * {
  margin-right: 10px;
}
.file-list-item:hover {
  background-color: #f5f7fa;
}
.file-list-item:hover .file-name {
  color: var(--second-color);
}
.file-name {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  display: inline-flex;
  max-width: 80px;
  overflow: auto;
}
.file-status {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}
.fa-check-circle-o {
  transition: color .3s cubic-bezier(.55,0,.1,1);
  color: var(--success-color);
}
.fa-times-circle-o {
  transition: color .3s cubic-bezier(.55,0,.1,1);
  color: var(--error-color);
  cursor: pointer;
}
.file-remove-animation {
  animation: fileRemove .5s;
}
@keyframes fileRemove {
  from {
    transform: translateY(0);
    opacity: 1;
  } to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>