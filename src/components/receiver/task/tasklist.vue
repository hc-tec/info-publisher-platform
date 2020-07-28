<template>
    <ul class="task-list">
        
        <taskitem 
            v-for="(task,index) in tasks"
            :key="task.title"
            :task="task"
            :index="index"  />
    </ul>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import taskitem from './taskitem.vue'
import Task from '../../../interface/task'
@Component({
    components: {
        taskitem
    }
})
export default class Tasklist extends Vue {

    public tasks: Task[] = [
        {
            title: '体温打卡通知',
            message: '请同学们在下午六请同学们在下午六请同学们在下午六请同学们在下午六请同学们在下午六点之前进行体温打卡。',
            publisher: {
                name: 'xxx',
                avatar: 'http://39.100.22.224/static/c7d08b50-afce-4060-87ae-830690a87875.png'
            },
            publish_time: '2020-02-02',
            time_left: '2小时',
			importance: 5,
			checked: true
        },
        {
            title: '体温打卡通',
            message: '请同学们在下午六点之前进行体温打卡。',
            publisher: {
                name: '',
                avatar: ''
            },
            publish_time: '2020-02-02',
            time_left: '2小时',
			importance: 5,
			checked: false
        }
    ]
}
</script>
<style scoped>
.task-list {
    width: 500px;
    margin: 0 auto;
    margin-top: 20px;
}
@media screen and (max-width: 600px) {
    .task-list {
        width: 95%;
    }
}
</style>