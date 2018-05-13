<template>
  <div class="note-editor">
      <div class="form-group">
          <input type="text"
          placeholder="请输入标题"
          v-model="currentNote.title"
          class="title form-control"
          @input="modifyNote">
          <textarea  class="form-control" 
          row="3" placeholder="请输入正文" 
          @input="modifyNote"
          v-model="currentNote.content">
          </textarea>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  name:'Editor',
  methods:{
    ...mapActions([
        'updateNote'
    ]),
    modifyNote(){
        this.updateNote({
            title:this.currentNote.title,
            content:this.currentNote.content
        });
    }
  },
  computed:{
      currentNote(){
          return this.activeNote;
      },
      ...mapGetters([ 
        'activeNote',
      ]),
  }
}
</script>
<style>
  .note-editor {
    flex:2;
  }

  .note-editor textarea {
    box-sizing: border-box;
    height: 100%;
    border: 0;
    border-radius: 0;
    padding-top: 15px;
  }

  .form-group {
    display: flex;
    flex-flow: column;
    height: 100%;
    margin-bottom: 0;
  }

  .form-group textarea {
    flex-grow: 2;
  }

  .title {
    border:0;
  }

</style>
