<template>
  <div class="row">
    <form-commons/>
    <label
      class= "col-form-label-md"
      for = "initial-value" >Initial Value</label>
    <select
      v-if="!form['initial-value'].isVariable"
      id ="initial-value"
      v-model= "form['initial-value'].value"
      class="form-control form-control-sm" >
      <option
        v-for="e in booleanValues"
        :key = "e"
        :value="e">
        {{ e }}
      </option>
    </select>

    <input
      v-else
      :id="prop"
      v-model= "form['initial-value'].value"
      class="form-control form-control-sm"
      type="text">

    <input
      id="initial-value-isVariable"
      v-model="isVariable"
      type="checkbox">
    <label for="initial-value-isVariable"> Is Variable Name?</label>
  </div>
</template>

<script>
import FormCommons from '../FormCommons.vue'
import * as types from '../../store/types'
export default {
    name: 'TextInputForm',
    components: {FormCommons},
    data () {
        return {
            booleanValues: [false, true],
            isVariable: false
        }
    },
    computed: {
        form: {
            get () {
                const form = this.$store.getters[types.GET_CHECKBOX_INPUT_FORM]
                if (!form['initial-value'].isVariable) {
                    form['initial-value'].value = this.booleanValues.find(
                        (e) => e === form['initial-value'].value)
                }
                return form
            },
            set (value) {
                this.$store.dispatch(types.UPDATE_CHECKBOX_INPUT_FORM, value)
            }
        },
        snippet: {
            get () {
                return this.$store.getters[types.GET_CHECKBOX_INPUT_SNIPPET]
            }
        }
    },
    watch: {
        isVariable: function (value) {
            this.form['initial-value'].isVariable = value
            if (value) {
                this.form['initial-value'].value = ''
            } else {
                this.form['initial-value'].value = this.booleanValues[0]
            }
        },
    }
}
</script>
