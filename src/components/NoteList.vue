<template>
  <div class="notes-list">
      <div class="btn-group btn-group-justified" role="group">
          <!--所有的按钮-->
          <div class="btn-group">
              <button type="button"
              class="btn btn-default"
              @click="toggleType('all')"
              :class="{active: show =='all'}">
                  所有笔记
              </button>
          </div>
          <!--收藏的按钮-->
          <div class="btn-group">
              <button type="button"
              class="btn btn-default"
              @click="toggleType('favorite')"
              :class="{active: show =='favorite'}">
                  收藏的笔记
              </button>
          </div>
      </div>
      <!--笔记列表-->
      <div class="container">
        <div class="list-group">
          <div v-for="(note,index) in filterNotes" :key="index"
          class="list-group-item"
          :class="{active:activeNote == note}"
          @click="updateActiveNote(note)"
          >
          {{note.title}}
          </div>
        </div>
      </div>
  </div>
</template>
<style>

</style>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  name:'NoteList',
  data(){
    return {}
  },
  methods:{
      ...mapActions([
        'toggleListShow',
        'switchNote'
      ]),
      toggleType(type){
        this.toggleListShow(type);
      },
      updateActiveNote(note){
        this.switchNote(note);
      }
  },
  computed:{
      ...mapGetters([
        'filterNotes'
      ]),
      ...mapState([ 
        'activeNote',
        'show'
      ])
  },
}
</script>
<style scoped>
  .notes-list {
    flex:1;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  .list-header {
    padding: 5px 25px 25px 25px;
  }

  .list-header .search{
    margin-top: 20px;
  }

  .list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }

  .container {
    height: calc(100% - 204px);
    max-height: calc(100% - 204px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }

  .container .list-group-item{
    border: 0;
    border-radius: 0;
  }

  .list-group-item-heading{
    font-weight: 300;
    font-size: 15px;
  }
</style>