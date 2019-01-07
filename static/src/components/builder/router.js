import Questions from './components/questions.vue'
import Header from './components/Header.vue'
import PreviewHeader from './components/PreviewHeader.vue'
import FormHeader from './components/FormHeader.vue'

import TextInputForm from './components/TextInput/TextInputForm.vue' 
import Content from './components/Content.vue' 
import TextInputPreview from './components/TextInput/TextInputPreview.vue'
const questions = {template: '<h4>Questions</h4>'}

export const routes = [
    { path: '/', name: 'home', components: { default: Questions, header: questions } },
    { path: '/textinput', name: 'TEXT_INPUT', 
        components: {default: Content,
        header: Header,
        },
        children: [
            {
                path: '/textinput/form',
                name: 'TEXT_INPUT_FORM',
                components: { default: TextInputForm,
                    subheader: FormHeader} 
            },
            {
                path: '/textinput/preview',
                name: 'TEXT_INPUT_PREVIEW',
                components: {default: TextInputPreview,
                    subheader: PreviewHeader
                }
            }
        ]
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];