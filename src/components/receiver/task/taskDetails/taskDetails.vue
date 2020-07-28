<template>
  <div class="task-details">
    <div class="task-info">
      <avatar 
        :src="task.publisher.avatar"
        width="80"
        height="80">
        <p class="task-creator">{{ task.publisher.name }}</p>
      </avatar>
      <div class="task-extra-info">
        <p>发布于: {{ task.publish_time }}</p>
        <p>重要程度: <star :num="task.importance" /></p>
      </div>
    </div>
    <task-details-tab title="消息正文">
      <div class="task-article">
        <h2>{{ task.title }}</h2>
        <p v-html="task.message"></p>
      </div>
    </task-details-tab>
    <task-details-tab title="附件">
      <ul class="task-enclosure">
        <file-displayer 
          v-for="file in fileList"
          :key="file.url"
          :file="file">
        </file-displayer>
      </ul>
    </task-details-tab>
    
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import avatar from '../../../reusable/avatar/src/avatar.vue'
import star from '../star.vue'
import taskDetailsTab from './tab.vue'
import fileDisplayer from '../../../reusable/fileItem/src/list.vue'
@Component({
  components: {
    avatar,
    star,
    taskDetailsTab,
    fileDisplayer
  }
})
export default class TaskDetails extends Vue {

  @Prop()
  public title: string;

  public fileList: Record<string, string>[] = [
    {
      url: 'http://39.100.22.224/static/ebf983b3-4aea-4ca1-866c-16dcb7f00ab9.jpg',
      name: 'css.jpg'
    },
    {
      url: 'http://39.100.22.224/static/4fc7c565-49c9-4b08-be8f-dda02a509689.jpg',
      name: 'java.jpg'
    },
    {
      url: 'http://39.100.22.224/static/5b3949be-4acc-4b5f-a952-79cdc90d894f.png',
      name: '波浪.png'
    },
  ]

  public task = this.$root.$taskDetails;

}
</script>
<style scoped>
.task-details {
  width: 85%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  box-shadow: rgba(167, 169, 170, 0.4) 0px 0px 10px 0px;
  background-color: #FAFAFA;
  overflow: hidden;
}
.task-info {
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 15px;
  padding-bottom: 50px;
  background-color: aliceblue;
}
.task-info::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 380px;
  height: 34px;
  background-repeat: no-repeat;
  background-image: url('http://39.100.22.224/static/34da3f57-9125-4a18-a2ef-d00b1882b28a.png');
}
.task-info > * {
  margin-right: 20px;
}
.task-creator {
  text-align: center;
  color: var(--second-color);
}
.task-extra-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.task-article {
  padding: 10px 20px;
}
.task-article > *:nth-child(1) {
  margin-bottom: 20px;
}
.task-article > h2 {
  text-align: center;
}
.task-article > p {
  font-weight: 300;
  max-height: 130px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.task-enclosure {
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>