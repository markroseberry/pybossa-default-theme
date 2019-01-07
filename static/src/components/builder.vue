<template>
  <div class = "row"> 
        <div class="panel panel-default">            
            <div class="panel-heading">
                <router-view class="view two" name="header"></router-view>
            </div>
           <div class="panel-body" >
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>                 
            </div>             
        </div>
    </div>

</template>
<style >

    .slide-leave-active {
        transition: opacity 0.2s ease;
        opacity: 0;
        animation: slide-out 0.2s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 0.2s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
<script>
import { routes } from './builder/router'
import { store } from './builder/store/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'abstract'
});

export default {
  name: 'Builder',
  router,
  store,
  data() {
    return {}
  },
}
  router.push('/')

</script>
