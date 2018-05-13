const filterNotes = (state) =>{
  if(state.show == 'all'){
    return state.notes;
  }
  if(state.show == 'favorite'){
    return state.notes.filter((note)=>note.favorite);
  }
}
const show = (state) => state.show;
const activeNote = (state) => state.activeNote;

export default {
    filterNotes,
    show,
    activeNote
}