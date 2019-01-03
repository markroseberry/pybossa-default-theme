import Vue from 'vue';
//var editor = require('./components/editor.vue');
//var image = require('./components/image.vue');
import Builder from './components/builder.vue'
import Header from './components/Header.vue';
import ComponentBuilderForm from './components/builder/components/ComponentBuilderForm'

import Imagecrop from './components/image.vue'
import Announcementimagecrop from './components/image_announcement.vue'
import VueRouter from 'vue-router'
import { routes } from './componentBuilderRouter'
Vue.use(VueRouter);


const router = new VueRouter({
    routes,
    mode: 'abstract'
});

new Vue({
    el: '#editorpybossa',
    router,
    components: {
        Builder,
        Announcementimagecrop,
        Imagecrop,
        ComponentBuilderForm
      },


    //render: h => h(image)
});

router.replace('/')