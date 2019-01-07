<template>
    <div class = "row"> 
        <div class="col-md-12">                        
            <div class="card">
                <div class="card-body">
                    <h5>Task presenter code</h5>
                    <prism language="html">{{ snippet }}</prism>
                    <br>
                    <h5>Preview</h5>
                    <div class="form-group">
                        <label v-if="form.labelAdded" :for="form.id.value">{{form.label.value}}</label>
                        <text-input :id="form.id.value" :pyb-answer="form['pyb-answer'].value"></text-input>
                    </div>      
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism.css'
import Prism from 'vue-prism-component'
import Vue from 'vue';
import components from '@dtwebservices/pybossa.vue'
import * as types from '../../store/types';

export default {
    data() {
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
        },
        snippet: {
            get() { 
                return this.$store.getters[types.GET_TEXT_INPUT_SNIPPET];
                }
        }
     },
    components: {Prism, ...components}
}
</script>