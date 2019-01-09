/* eslint-disable max-len */
/* eslint-disable import/no-webpack-loader-syntax */
import Mustache from 'Mustache'
const textInputTemplate = require('!!html-loader!./components/TextInput/TextInputTemplate.html')
const checkboxInputTemplate = require('!!html-loader!./components/CheckboxInput/CheckboxInputTemplate.html')
const templates = {
    TEXT_INPUT: textInputTemplate,
    CHECKBOX_INPUT: checkboxInputTemplate,
}
const labelTemplate = require('!!html-loader!./components/templates/LabelTemplate.html')
export default {
    uniqueID: () => {
        return '_' + Math.random().toString(36).substr(2, 9)
    },
    getComponentCode: (form, component) => {
        const formForTemplate = {}

        Object.keys(form).forEach((e) => {
            formForTemplate[e] = form[e].value
        })

        let output = Mustache.render(templates[component], formForTemplate)
        if (form.labelAdded) {
            const label = { for: formForTemplate['id'], component: output, label: formForTemplate['label'] }
            output = Mustache.render(labelTemplate, label)
        }

        Object.keys(form).forEach((e) => {
            if (form[e].isVariable) {
                output = output.replace(e + '=', ':' + e + '=')
            }
        })
        return output
    }
}
