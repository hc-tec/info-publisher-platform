<template>
  <div class="column-creator">
    <preview-uploader></preview-uploader>
    <flutterInput icon="fa fa-columns" label="专栏名称" v-model="column.name" />
    <flutterInput icon="fa fa-stack-exchange" label="专栏介绍" v-model="column.profile" type="textarea" />
    <light-button>Create</light-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import flutterInput from '../../../reusable/flutterInput/src/input.vue'
import Column from '../../../../interface/column'
import lightButton from '../../../reusable/lightButton/src/button.vue'
import previewUploader from '../../../reusable/previewUpload/src/upload.vue'
@Component({
  components: {
    flutterInput,
    lightButton,
    previewUploader
  }
})
export default class ColumnCreator extends Vue {

  public column: Column = {
    name: '',
    id: 0,
    profile: '',
    avatar: '',
    creator: ''
  }
}
</script>
<style scoped>
.column-creator {
  --slideDownDuring: .4s;
  margin-top: 30px;
  transition: all var(--slideDownDuring);
  position: absolute;
}
</style>