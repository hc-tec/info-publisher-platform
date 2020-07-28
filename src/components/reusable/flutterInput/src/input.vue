<template>
  <label class="form-input">
    <i :class="['material-icons', icon]"></i>
    <textarea
      required
      v-if="type === 'textarea'">
    </textarea>
    <input 
      v-else required 
      :type="type" 
      @input="$emit('input', $event.target.value)"/>
    
    <span class="label">{{ label }}</span>
    <span class="underline"></span>
  </label>
</template> 
<script lang='ts'>
import { Component, Vue, Prop, Model } from 'vue-property-decorator'

@Component
export default class Input extends Vue {

  @Prop({type: String})
  public icon: string;

  @Prop({type: String, default: 'text'})
  public type: string;

  @Prop({type: String})
  public label: string

  @Model('input', {type: String || Number, default: ''})
  public value;

}
</script>
<style scoped>
.form-input {
  --width: 80%;
  display: flex;
  position: relative;
  margin-bottom: 1rem;
}
.form-input > .material-icons {
  position: absolute;
  font-size: 1.3em;
  top: 1.3em;
  color: rgb(86, 186, 237);
}
.form-input > textarea {
  resize: vertical;
  min-height: 125px;
}
.form-input > input,
.form-input > textarea,
.form-input > .label, 
.form-input > .underline {
  margin-left: 2.25rem !important;
  width: calc(100% - 2.25rem);
}
.form-input input,
.form-input textarea {
  border: none;
  box-shadow: none;
  margin-top: 1.5rem;
  padding-right: 0;
  padding-bottom: 0.8rem;
  padding-left: 0;
  outline-style: none;
  width: var(--width);
}
.form-input input ~ .label,
.form-input textarea ~ .label {
  text-align: left;
  color: #868e96;
  font-size: 1rem;
  margin: 0;
  pointer-events: none;
  position: absolute;
  top: 1.5rem;
  left: 0;
  transition: top .2s,font .2s;
}
.form-input input ~ .underline,
.form-input textarea ~ .underline {
  background-color: #bdc1c5;
  height: 1px;
  width: var(--width);
  position: absolute;
  bottom: 0;
  left: 0;
}
.form-input input:hover ~ .underline, 
.form-input input:focus ~ .underline,
.form-input textarea:hover ~ .underline,
.form-input textarea:focus ~ .underline {
  background-color: #07beb8;
}
.form-input input:hover ~ .label, 
.form-input input:focus ~ .label,
.form-input textarea:hover ~ .label,
.form-input textarea:focus ~ .label {
  color: #07beb8;
}

.form-input input:focus ~ .underline,
.form-input textarea:focus ~ .underline {
  height: 2px;
}
.form-input input:focus ~ .label, 
.form-input input:valid ~ .label,
.form-input textarea:focus ~ .label,
.form-input textarea:valid ~ .label {
  top: 0;
  font-size: 0.85rem;
}
.form-input input:-webkit-autofill ~ .label,
.form-input textarea:-webkit-autofill ~ .label {
  top: 0;
  font-size: 0.85rem;
}

</style>