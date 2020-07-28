<template>
    <li class="task-item">
        <div>
            <figure>
                <img :src="task.publisher.avatar" />
                <p>{{ task.publisher.name }}</p>
            </figure>
            <div class="task-content">
                <h2 :class="['task-title', task.checked ? 'task-checked' : '']">{{ task.title }}</h2>
                <p class="task-message">{{ task.message }}</p>
                <p class="task-info">
                    <i class="fa fa-calendar"> {{ task.publish_time }}</i>
                    <i class="fa fa-level-down"> {{ task.time_left }}</i>
                    <star :num="task.importance" />
                </p>
            </div>
        </div>
        <lightButton 
            class="task-item-details-btn"
            @click="taskDetails">
            <i class="fa fa-mail-forward"></i>
        </lightButton>
    </li>
</template> 
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import Task from '../../../interface/task'
import star from './star.vue'
import lightButton from '../../reusable/lightButton/src/button.vue'
import { Route_taskDetails } from '../../../utils/store'
@Component({
    components: {
        star,
        lightButton
    }
})
export default class Taskitem extends Vue {

    @Prop({type: Object})
    public task?: Task;

    @Prop({type: Number})
    public index!: number;

    private route: string = Route_taskDetails;

    public taskDetails() {

        this.$root.$taskDetails = this.task;
        this.$router.push(`${this.route}/${this.task.title}`)            
        
    }


}
</script>
<style>
.task-item {
    width: 126%;
    overflow: hidden;
    transition: all .2s;
    padding: 15px 0;
    display: flex;
    justify-content: center;
}
.task-item > div {
    width: 84%;
    box-shadow: rgba(167, 169, 170, 0.4) 0px 0px 40px 0px;
    margin-right: 2%;
    margin-left: 1%;
}
.task-item > .task-item-details-btn {
    width: 20%;
    padding: 20px 0;
    margin-right: 2%;
}
.task-item > div {
    position: relative;
    font-size: .9em;
    border-radius: var(--small-radius);
    padding: 20px;
    cursor: pointer;
    transition: all .2s linear;
    display: flex;
    transition: all .3s;
    box-shadow: rgba(167, 169, 170, 0.4) 0px 0px 10px 0px;
}
.task-item:hover {
    transform: translateX(-20%);
}
.task-item:hover > div {
    box-shadow: rgba(167, 169, 170, 0.4) 0px 0px 40px 0px;
}
.task-item figure {
    margin-right: 15px;
}
.task-item figure > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin-bottom: 5px;
}
.task-item figure > p {
    color: var(--second-color);
    text-align: center;
}
.task-content .task-title {
    position: relative;
    display: flex;
    align-items: center;
}
.task-content .task-title::after {
    content: "unchecked";
    background: var(--info-color);
    color: #fff;
    font-size: 12px;
    padding: 3px 5px;
    font-weight: 700;
    margin-left: 10px;
    border-radius: 3px;
}
.task-content .task-message {
    word-break: break-all;
    white-space: pre-wrap;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-weight: 300;
    margin: 5px 0;
}
.task-content .task-info > * {
    margin-right: 15px;
}
.task-content .task-checked::after {
    content: "checked";
    background: #67C23A;
    color: #fff;
    font-size: 12px;
    padding: 3px 5px;
    font-weight: 700;
    margin-left: 10px;
    border-radius: 3px;
}

</style>