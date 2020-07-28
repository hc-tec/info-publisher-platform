<template>
  <div class="tile-body login-page" ref="login">
    <flutterInput v-model="userInfo.student_id" icon="fa fa-id-card" label="学号" />
    <flutterInput v-model="userInfo.password" icon="fa fa-lock" label="密码" type="password" />
    <p class="operation">
      <lightButton @click="submit">LOG IN</lightButton>
      <lightButton @click="$emit('toRegister')" light>Sign Up</lightButton>
    </p>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import flutterInput from '../reusable/flutterInput/src/input.vue'
import lightButton from '../reusable/lightButton/src/button.vue'
@Component({
  components: {
    flutterInput,
    lightButton
  }
})
export default class Login extends Vue {
  public userInfo = {
    student_id: '',
    password: ''
  }
  public submit() {

  }
}
</script>
<style scoped>
</style>