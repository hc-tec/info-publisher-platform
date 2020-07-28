<template>
  <div 
    class="draggable-btn"
    ref="draggableBtn">
    <div class="menu cross menu--1">
      <label>
        <input class="drag-input" type="checkbox">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="50" cy="50" r="50" 
            ref="draggableBtnCircle"
            @mousedown="draggable = true"
            @mousemove="drag($event)"
            @mouseup="draggable = false"
            v-on="$listeners"
          />
          <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
          <path class="line--2" d="M0 50h70" />
          <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
        </svg>
      </label>
    </div>
  </div>

</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {

  public draggable: boolean = false;

  public drag(ev: any) {
    if(this.draggable){
      ev.preventDefault();
      const el = this.$refs.draggableBtn as HTMLDivElement
          , x_pos = ev.clientX || ev.touches[0].clientX
          , y_pos = ev.clientY || ev.touches[0].clientY
          , width = el.clientWidth
          , height = el.clientHeight
          , left = x_pos - width / 2
          , top = y_pos - height / 2;
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
    }
  }

  mounted() {
    const circle = this.$refs.draggableBtnCircle as HTMLElement;
    circle.addEventListener('touchstart', () => {this.draggable = true});
    circle.addEventListener('touchend', () => {this.draggable = false});
    circle.addEventListener('touchmove', this.drag);
  }
  
}
</script>
<style scoped>
.draggable-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2019;
  background-color: #fff;
  box-shadow: var(--shadow);
  transition: box-shadow .2s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.draggable-btn:active {
  box-shadow: var(--inner-shadow);
}

input {
  display: none;
}


.draggable-btn > * {
  position: relative;
}

label {
  display: block;
}

path {
  fill: none;
  stroke: #c1b8b8;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all .5s cubic-bezier(.645, .045, .355, 1);
}

circle {
  fill: #fff !important;
  opacity: 0;
  cursor: pointer;
}

label:hover circle {
  opacity: 1;
}

.menu--1 .line--1,
  .menu--1 .line--3 {
    --total-length: 126.64183044433594;
  }



.menu--1 .line--2 {
    --total-length: 70;
  }



.menu--1 input:checked+svg .line--1,
    .menu--1 input:checked+svg .line--3 {
      --offset: -94.1149185097;
    }



.menu--1 input:checked+svg .line--2 {
      --offset: -50;
    }
.cross input:checked+svg .line--2 {
    --length: 0;
  }
</style>