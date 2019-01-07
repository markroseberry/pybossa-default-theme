<template>
    <div class="row"> 
        <form-commons></form-commons>
    </div>   
</template>

<script>
import * as types from '../../store/types';
import FormCommons from '../FormCommons.vue'
import Vue from 'vue'
console.log(FormCommons)
export default { 
    name: 'TextInputForm',
    data(){
        return { }
    },
    components: {FormCommons}
}
</script>
