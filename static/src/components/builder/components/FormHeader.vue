<template>
    <div  v-bind:if="$route.name.includes('form')" >
        <i id="trash-form" @click="clearForm" class="fa fa-trash" style="cursor: pointer; color:#3AB0D5; font-size: 20px; padding-right: 20px; padding-top: 10px;"></i>
    </div>
</template>
<script>
import * as types from '../store/types';

export default {
    name: 'FormHeader',
    data(){
        return {
            }
    },
    methods: {
        clearForm: function(){this.$store.dispatch(types['CLEAR_' + this.$route.params.componentName + '_FORM']);}
    }

}
</script>