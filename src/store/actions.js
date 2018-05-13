import {
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
    SWITCH_NOTE,
    TOGGLE_FAVORITE,
    TOGGLE_SHOW
} from './mutation-type.js';

export default {
    //新增笔记
    addNote({commit}){
        commit(ADD_NOTE);
    },
    //编辑笔记
    updateNote({commit},note){
        commit(UPDATE_NOTE,note);
    },
    //删除笔记
    removeNote({commit}){
        commit(DELETE_NOTE);
    },
    //是否收藏
    toggleFavorite({commit}){
        commit(TOGGLE_FAVORITE);
    },
    //切换show状态
    toggleListShow({commit},data){
        commit(TOGGLE_SHOW,data);
    },
    //选择note
    switchNote({commit},data){
        commit(SWITCH_NOTE,data);
    }
}