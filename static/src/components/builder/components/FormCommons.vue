<template>
    <div class="row"> 
        <div class="col-md-12"> 
            <br>                       
            <div class= "row">
                <form >
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <input type="checkbox" id="add-label" v-model="form.labelAdded">
                            <label for="add-label">Add Label</label>

                            <input v-if = "form.labelAdded === true"
                                id="component-label" 
                                class="form-control form-control-sm"  
                                type="text" 
                                v-model= "form.label.value" />
                        </div>
                    </div>
                    <div  class="form-row">
                        <div class="form-group col-md-12">
                                <label class= "col-form-label-sm" :for = "pyb-answer" >Answer field name</label>
                                <input
                                    id="pyb-answer" 
                                    class="form-control form-control-sm"  
                                    type="text" 
                                    v-model= "form['pyb-answer'].value"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>   
</template>

<script>
import * as types from '../store/types';
import Vue from 'vue'
export default { 
    name: 'FormCommons',
    data(){
        return { }
    },
    computed: {
        form: {
              get() {
                  return this.$store.getters[types.GET_TEXT_INPUT_FORM];
              },
              set(value) {
                  this.$store.dispatch(types.UPDATE_TEXT_INPUT_FORM, value);
              }
          }
    },
    methods: {
        } 
}
</script>
