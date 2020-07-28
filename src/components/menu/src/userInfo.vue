<template>
  <div class="user-info">
    <figure>
      <img :src="user.user_avatar || 'http://39.100.22.224/static/c7d08b50-afce-4060-87ae-830690a87875.png'" />
    </figure>
    <div class="user-info-details">
      <span class="user-info--name">{{ user.user_name }}</span>
      <span>{{ user.user_class }}</span>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import User from '../interface/userInfo'
@Component
export default class UserInfo extends Vue {

  public user: User = {
    user_student_id: '8002119301',
    user_name: 'titto',
    user_avatar: '',
    user_gender: '男',
    user_profile: 'xxx',
    user_class: '软工1910班'
  };
}
</script>
<style scoped>
.user-info {
  padding: 10px;
  display: flex;
}
.user-info figure {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.user-info figure img {
  width: 100%;
  height: 100%;
}
.user-info-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}
.user-info--name {
  color: var(--second-color);
  margin-right: 20px;
  font-size: 1.5em;
}
</style>