<template>
   <div class="feedback__element">   
      <label class="label" :for="input.label">{{ input.label }}:</label>
      <div class="input">
        
        <textarea
          v-if="input.type === 'textarea'"
          :id="input.label"
          class="feedback__textarea" 
          @input="$emit('input', $event.target.value)"
          :type="input.type" 
          :value="value"
          :placeholder="input.placeholder">
        </textarea>
        <input
          v-else
          :id="input.label"
          class="feedback__input" 
          @input="$emit('input', $event.target.value)"
          :type="input.type" 
          :value="value"
          :placeholder="input.placeholder" />
        <div class="input__icon">
          <i :class="input.icon">
          </i>
        </div>
      </div>
    </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model } from 'vue-property-decorator'
import Input from '../../interface/input'
@Component
export default class PublishInput extends Vue {

  @Prop()
  public input: Input;

  @Model('input')
  public value = this.input.value;

}
</script>
<style scoped>

.feedback__element {
  position: relative;
}

.label {
  color: #666;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  margin: 20px 0 10px 10px;
  width: 70px;
  text-align: right;
  margin-right: 10px;
}

.input {
  position: relative;
  display: inline-flex;
  width: 70%;
}
.input-textarea {
  position: relative;
}
.feedback__input,
.feedback__textarea {
  background-color: #fff;
  border: 1px solid #808080;
  border-radius: 5px;
  padding-left: 35px;
  height: 30px;
  width: 100%;
  outline: none;
}
.feedback__input {
  height: 30px;
}
.feedback__textarea {
  background-color: #fff;
  min-height: 180px;
  max-height: 500px;
  padding-top: 7px;
  resize: vertical;
}
.input__icon {
  font-size: 20px;
  position: absolute;
  left: 10px;
  top: 1px;
}
.feedback__textarea .input__icon {
  top: 0px;
}
.feedback__input:focus,
.feedback__textarea:focus {
  border: 1px solid #fccf31;
  border-radius: 5px;
  outline: none;
}
</style>