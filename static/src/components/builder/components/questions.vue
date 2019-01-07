<template>
<div class="row"> 
    <div class="col-md-12">       
        <router-link  :to="{ name: 'TEXT_INPUT_FORM', path: 'textinput/form', params: {componentName: 'TEXT_INPUT'} }">
            Text Input Test
        </router-link>   
    </div>  
 </div>   
</template>

<script>
    export default {
        name: 'Questions',
        data() {
            return { }
        }
    }
</script>