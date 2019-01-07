const textInputTemplate = require( "!!html-loader!./components/TextInput/TextInputTemplate.html");
const checkboxInputTemplate = require( "!!html-loader!./components/templates/CheckboxTemplate.html");
const dropdownInputTemplate = require( "!!html-loader!./components/templates/DropdownInputTemplate.html");

const radioInputTemplate = require( "!!html-loader!./components/templates/RadioInputTemplate.html");
const instructionPanelTemplate = require( "!!html-loader!./components/templates/InstructionPanelTemplate.html");
const templates = {
                    TEXT_INPUT: textInputTemplate,
                    checkboxInputTemplate,
                    dropdownInputTemplate,
                    radioInputTemplate,
                    instructionPanelTemplate,
                };
                
const labelTemplate = require('!!html-loader!./components/templates/LabelTemplate.html');

import Mustache from 'Mustache'
export default {
    uniqueID: () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    },
    getComponentCode: (form, component) =>{
        let formForTemplate ={};
        
        Object.keys(form).forEach(e => { 
            formForTemplate[e] = form[e].value;
        });

        let output = Mustache.render(templates[component], formForTemplate);
        if(form.label.value){
            const label = {for: formForTemplate['id'], component: output, label: formForTemplate['label'] }
            output = Mustache.render(labelTemplate, label); 
        }

        Object.keys(form).forEach(e => { 
            if(form[e].isVariable){
                output = output.replace(e + '=',':'+ e + '=');
            }
        });
        return output;
    },
       
}