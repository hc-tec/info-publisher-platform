<template>
  <div class="container">
    <div class="main-box">
      <div class="box-content">
        <div class="text">
          <p class="title">
            <i class="fa fa-file"></i> {{ file.name }}
          </p>
        </div>
        <div class="dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="download" @click="handleClick">
        <i class="fa fa-cloud-download"></i>
      </div>
    </div>
  </div>

</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class List extends Vue {

  @Prop({type: Object})
  file: object;

  public handleClick() {
    const a = document.createElement('a')
    a.href = (this.file as any).url
    a.download = `download`
    a.click()
  }
}
</script>
<style scoped>
.container {
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: all 600ms cubic-bezier(0.81,-0.12, 0.64, 0.99);
  transition: all 600ms cubic-bezier(0.81,-0.12, 0.64, 0.99);
  margin-bottom: 10px;
}

.main-box {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 50%;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 30px 40px;
  transition: all 800ms cubic-bezier(0.82, -0.02, 0.4, 1.18);
}

.box-content {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    /* flex-direction: row; */
    /* flex-wrap: nowrap; */
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.box-content .text {
    position: relative;
    left: -68px;
    margin-left: 32px;
}

.text .title {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 1em;
  color: #4F4F4F;
  padding-left: 20px;
  display: flex;
  align-items: center;
}

.text .title > .fa {
  color: rgb(79, 138, 254);
  font-size: 2em;
  margin-right: 10px;
}

.dots div {
    width: 6px;
    height: 6px;
    background: #4F8AFE;
    margin: 3px;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
}

.download {
  position: absolute;
  right: 0;
  opacity: 0;
  z-index: -1;
  font-size: 3em;
  padding: 10px 20px 10px 60px;
  background: #4F8AFE;
  color: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0 24px 24px 0;
  transition: all 800ms cubic-bezier(0.82, -0.02, 0.4, 1.18);
}

.main-box:hover .download {
  opacity: 1;
  right: -20px;
  position: absolute;
  z-index: -1;
  transform: translateX(20px);
}

.dots div {
    transition: all 500ms cubic-bezier(0.65, 0.51, 0.37, 1.02);
}

.main-box:hover .dots div:nth-child(1) {
    transform: translateY(9px);
}

.main-box:hover .dots div:nth-child(2) {
    transform: scale(3);
}

.main-box:hover .dots div:nth-child(3) {
    transform: translateY(-9px);
}

.container:hover {
    -webkit-transform: translateX(-75px);
            transform: translateX(-75px);
}


.dr {
  position: absolute;
  bottom: 16px; 
  right: 16px;
  width:100px;
}
 
</style>