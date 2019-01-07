import * as types from '../types';
import  utils  from '../../utils'

const prop = (value, isVariable) => {return { value,
               isVariable } }

const initialState = () => { return  {
    'id': prop(utils.uniqueID(), false),
    'pyb-answer': prop('', false),
    'label': prop('', false),
    'labelAdded': false
    }
};

const state = {
    textInput: {
        form: {
            'id': prop(utils.uniqueID(), false),
            'pyb-answer': prop('', false),
            'label': prop('', false)
        }
    }
};

const getters = {
    [types.GET_TEXT_INPUT_FORM]: state => {
        return state.textInput.form;
    },
    [types.GET_TEXT_INPUT_SNIPPET]: state => {
        return utils.getComponentCode(state.textInput.form, 'TEXT_INPUT');
    }
};

const mutations = {
    [types.MUTATE_TEXT_INPUT_FORM]: (state, payload) => {
        state.textInput.form = payload;
    }
};

const actions = {
    [types.UPDATE_TEXT_INPUT_FORM]: ({ commit }, payload) => {
        commit(types.MUTATE_TEXT_INPUT_FORM, payload);
    },
    [types.CLEAR_TEXT_INPUT_FORM]: ({ commit }) => {
        commit(types.MUTATE_TEXT_INPUT_FORM, initialState());
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}