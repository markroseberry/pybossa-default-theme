<template>
    <div id="copy" v-bind:if="$route.name.includes('preview')">
        <i  v-clipboard:copy="snippet"
            v-clipboard:success="onCopied"
            class="fa fa-clipboard" 
            style=" cursor: pointer; color:#3AB0D5; font-size: 20px; padding-right: 20px; padding-top: 10px;"> <span for="copy" class="pull-left" style="color:#3AB0D5; font-size: 15px;">  {{copyMessage}}  </span></i>
    </div>   
</template>

<script>
import Prism from 'vue-prism-component'
import Vue from 'vue';
import * as types from '../store/types';
import  utils  from '../utils'

    export default {
        name: 'PreviewHeader',
        data(){
            return {
                copyMessage: '',
                msgTransition: 'fade',
                }
        },
        computed: {
            snippet: function() {
                const form = this.$store.getters[types['GET_'+this.$route.params.componentName+'_FORM']];
                console.log(this.$route)
                return utils.getComponentCode(form, this.$route.params.componentName);
            }
        },
        methods: {
            onCopied() {
                this.copyMessage = 'Copied'
                    setTimeout( () => {
                    this.copyMessage = '';
                }, 3000);
            }
        }
    
    }
</script>