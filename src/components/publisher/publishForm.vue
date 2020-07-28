<template>
    <form class="task-publisher-form">
      <h2>消息发布</h2>
      <flutterInput 
        label="标题" 
        icon="fa fa-hashtag" 
        v-model="task.title" />
      <flutterInput 
        label="消息内容" 
        icon="fa fa-edit" 
        type="textarea"
        v-model="task.message" />
      <fileUploader label="附件上传" />
      <star />
      <p style="text-align: center;">
        <lightButton @click.prevent="submit">
          <i class="fa fa-paper-plane"></i> 发布
        </lightButton>
      </p>
    </form>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import Input from '../../interface/input'
import star from './star.vue'
import fileUploader from './fileUploader.vue'
import flutterInput from '../reusable/flutterInput/src/input.vue'
import lightButton from '../reusable/lightButton/src/button.vue'
@Component({
  components: {
    star,
    fileUploader,
    flutterInput,
    lightButton
  }
})
export default class PublishForm extends Vue {

  public inputConfig: Input[] = [
    {
      label: '标题',
      placeholder: '请输入信息标题',
      icon: 'fa fa-pencil-square-o',
      type: 'text',
      value: '',
    },
    {
      label: '信息内容',
      placeholder: '请输入信息内容',
      icon: 'fa fa-envelope-open-o	',
      type: 'textarea',
      value: '',
    }
  ]

  public task = {
    title: '',
    message: '',
    enclosure: [],
    importance: 0,
    creator: ''
  }

  public handleClick() {

  }

  public submit() {
    
  }

}
</script>
<style>
.task-publisher-form {
  width: 85%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 15px;
  box-shadow: rgba(167, 169, 170, 0.4) 0px 0px 10px 0px;
  overflow: hidden;
}
.task-publisher-form > * {
  margin-bottom: 10px;
}
.task-publisher-form > h2 {
  border-left: 5px solid #c3f4bf;
  padding-left: 10px;
  color: rgb(86, 186, 237);
  font-weight: 300;
}
.task-publisher-form .form-input input,
.task-publisher-form .form-input textarea {
  background: transparent;
}

.task-publisher-form .file-list-item {
  background-color: transparent;
}
.task-publisher-form .file-list-item:hover {
  background-color: #fff;
}
</style>