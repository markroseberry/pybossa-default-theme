<template>
    <div class = "row"> 
        <div class="col-md-1">
            <router-link :to="{ name: 'home'}">
                <i class="fa fa-angle-double-left" style="font-size:36px"></i>
            </router-link> 
            </div>
            <div class="col-md-9">
                <div  style="font-size:26px">Input Text</div>
            </div>
    </div>    
</template>
<style>
 .disabled {
    pointer-events:none; 
    opacity:0.6;        
 }
</style>
<script>
import {mapActions} from 'vuex'
import * as types from '../store/types';

export default {
    name: 'Header',
    data(){
        return {
        showModal: false}
    },
    methods: {
        clearForm: function(){this.$store.dispatch(types['CLEAR_' + this.$route.params.componentName + '_FORM']);}
    }
}
</script>