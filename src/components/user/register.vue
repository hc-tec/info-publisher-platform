<template>
  <div class="tile-body register-page" ref="register">
    <preview-uploader @handleAvatarUpload="handleAvatarUpload" />
    <flutter-input v-model="userInfo.user_name" icon="fa fa-user" label="姓名" />
    <flutter-input v-model="userInfo.user_student_id" icon="fa fa-id-card" label="学号" />
    <flutter-input v-model="userInfo.password" icon="fa fa-unlock-alt" label="密码" type="password" />
    <flutter-input v-model="userInfo.confirm_password" icon="fa fa-lock" label="确认密码" type="password" />
    <flutter-input v-model="userInfo.user_class" icon="fa fa-users" label="所在班级" />

    <p class="operation">
      <light-button @click="submit">Create</light-button>
      <light-button @click="$emit('toLogin')" light>Go To Login</light-button>
    </p>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import flutterInput from '../reusable/flutterInput/src/input.vue'
import lightButton from '../reusable/lightButton/src/button.vue'
import previewUploader from '../reusable/previewUpload/src/upload.vue'
@Component({
  components: {
    flutterInput,
    lightButton,
    previewUploader
  }
})
export default class Register extends Vue {
  public userInfo = {
    user_student_id: '',
    password: '',
    confirm_password: '',
    user_name: '',
    user_avatar: '',
    user_gender: '',
    user_profile: '',
    user_class: '',
  }

  public handleAvatarUpload(url: string, file: File) {
    
    console.log(url);
    
  }

  public submit() {

  }
}
</script>
<style scoped>
</style>