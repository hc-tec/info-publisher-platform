<template>
    <div class="columns">
        <column-item 
            v-for="(column, index) in columns"
            :key="column.card_name"
            :index="index"
            :column="column"
            @handleClick="removeColumn($event)">
        </column-item>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import columnItem from './columnItem.vue'
import Column from '../../reusable/animalIntroductionCard/interface/card'
@Component({
    components: {
        'column-item': columnItem
    }
})
export default class Columns extends Vue {

    public columns: Column[] = [
        {
            card_name: '软工1910班信息发布专栏',
            card_introduction: '软工1910班信息发布专栏软工1910班信息发布专栏软工1910班信息发布专栏软工1910班信息发布专栏',
            card_avatar: 'as',
            // card_creator: 'as',
        },
        {
            card_name: 'ass',
            card_introduction: 'asas',
            card_avatar: 'as',
            // card_creator: 'as',
        }
        
    ]

    public removeColumn(index: number) {
        this.columns.splice(index, 1)
    }

    

}
</script>
<style scoped>
.columns {
    margin: 0 auto;
    padding: 40px 80px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.columns > * {
    margin-bottom: 20px;
}
@media screen and (max-width: 400px) {
    .columns {
        padding: 0;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 100px !important;
    }
}

</style>