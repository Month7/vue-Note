import {
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
    SWITCH_NOTE,
    TOGGLE_FAVORITE,
    TOGGLE_SHOW
} from './mutation-type.js';

export default {
    [ADD_NOTE](state,note={
        title:'新的笔记',
        content:'新的笔记',
        favorite:false
    }){
       state.notes.push(note);
       state.activeNote = note;
    },
    [DELETE_NOTE](state){
        var index = state.notes.indexOf(state.activeNote);
        console.log(index);
        state.notes.splice(index,1);
        state.activeNote = state.notes[0];
    },
    [SWITCH_NOTE](state,note){
        state.activeNote = note;
    },
    [UPDATE_NOTE](state,note){
        
        state.activeNote.title = note.title;
        state.activeNote.content = note.content;
    },
    //选择是否收藏
    [TOGGLE_FAVORITE](state){
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    [TOGGLE_SHOW](state,type){
      state.show = type;
    }
}