import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations';

Vue.use(Vuex);
const defaultNote ={
    title:'测试标题',
    content:'测试内容',
    favorite:false
}
const state = {
    notes:[defaultNote],         //笔记列表
    activeNote:defaultNote,      //当前笔记
    show:'all'                   //显示状态
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})