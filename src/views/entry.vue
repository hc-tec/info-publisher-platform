<template>
    <div class="entry">
        <div class="tile">
            <div class="tile-header">
                <h2>SIGN 
                    <span ref="sign_1">I </span>
                    <span ref="sign_2">N</span>
                </h2>
            </div>
            <login ref="login" @toRegister="toRegister" />
            <register ref="register" @toLogin="toLogin" />
        </div>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import login from '../components/user/login.vue'
import register from '../components/user/register.vue'
@Component({
    components: {
       login,
       register
    }
})
export default class Entry extends Vue {
    
    public submit() {

    }
    public toRegister() {
        const loginRefs = (this.$refs.login as any).$refs
            , registerRefs = (this.$refs.register as any).$refs
            , login = loginRefs.login as HTMLDivElement
            , register = registerRefs.register as HTMLDivElement
            , sign_1 = this.$refs.sign_1 as HTMLSpanElement
            , sign_2 = this.$refs.sign_2 as HTMLSpanElement
        this.tabsTransform(login, register, 'toRegister')
        this.signTitleTransform(sign_1, sign_2, 'toRegister')
    }

    public toLogin() {
        const loginRefs = (this.$refs.login as any).$refs
            , registerRefs = (this.$refs.register as any).$refs
            , login = loginRefs.login as HTMLDivElement
            , register = registerRefs.register as HTMLDivElement
            , sign_1 = this.$refs.sign_1 as HTMLSpanElement
            , sign_2 = this.$refs.sign_2 as HTMLSpanElement
        
        this.tabsTransform(login, register, 'toLogin')
        this.signTitleTransform(sign_1, sign_2, 'toLogin')
    }

    public tabsTransform(
        login: HTMLDivElement,
        register: HTMLDivElement,
        type: string) {
        if(type === 'toRegister') {
            login.style.left = '-200%'
            setTimeout(() => {
                register.style.position = 'relative'
                register.style.left = '0px'
                login.style.position = 'absolute'
            }, 500);
        } else if(type === 'toLogin') {
            register.style.left = '100%'
            setTimeout(() => {
                login.style.position = 'relative'
                login.style.left = '0px'
                register.style.position = 'absolute'
            }, 500);
        }
    }

    public signTitleTransform(
        sign_1: HTMLSpanElement, 
        sign_2: HTMLSpanElement, 
        type: string) {
        const delay = 100
            , during = 500
        if(type === 'toRegister') {
            sign_1.style.transform = 'rotateX(90deg)'
            setTimeout(() => {
                sign_1.innerHTML = 'U'
                sign_1.style.transform = 'rotateX(0deg)'
            }, during);
            setTimeout(() => {
                sign_2.style.transform = 'rotateX(90deg)'
                setTimeout(() => {
                    sign_2.innerHTML = 'P'
                    sign_2.style.transform = 'rotateX(0deg)'
                }, during);
            }, delay);
        } else if (type === 'toLogin') {
            sign_1.style.transform = 'rotateX(90deg)'
            setTimeout(() => {
                sign_1.innerHTML = 'I'
                sign_1.style.transform = 'rotateX(0deg)'
            }, during);
            setTimeout(() => {
                sign_2.style.transform = 'rotateX(90deg)'
                setTimeout(() => {
                    sign_2.innerHTML = 'N'
                    sign_2.style.transform = 'rotateX(0deg)'
                }, during);
            }, delay);
        }
    }
}
</script>
<style>

.entry {
    --page-entry: 1s;
    --page-trans-during: .5s;
    --sign-rotate-during: .5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10% 0;
}
.tile {
  background-color: #ffffff;
  border-radius: .1rem;
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
  position: relative;
  width: 90%;
  overflow: hidden;
}
.tile .tile-header {
  background-image: url("https://res.cloudinary.com/dgmilxzy7/image/upload/c_scale,w_500,o_75,b_rgb:07beb8/v1506735375/CodePen/ViddenPixel.jpg");
  background-position: center;
  background-size: cover;
  height: 12rem;
  
}
.tile .tile-header > h2 {
    color: white; 
    opacity: .75; 
    font-size: 4rem; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100%;
}
.tile .tile-header > h2 > span {
    transition: transform var(--sign-rotate-during);
}
.tile .tile-header > h2 > span:nth-child(1) {
    margin-left: 10px;
}
.tile .tile-body {
  transition: left var(--page-trans-during), top var(--page-trans-during);
  padding: 2rem;
  position: relative;
}
.tile .tile-header,
.tile .tile-body > * {
    animation: slideUp var(--page-entry);
}
.tile .tile-body > :nth-child(1) {
    animation-delay: .1s;
}
.tile .tile-body > :nth-child(2) {
    animation-delay: .2s;
}
.tile .tile-body > :nth-child(3) {
    animation-delay: .3s;
}
.operation {
    text-align: center;
}
.operation > * {
    margin-bottom: 10px;
}
.entry .login-page {
	left: 0;
}
.entry .register-page {
	position: absolute;
	top: 0;
	left: 100%;
}
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    } to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>