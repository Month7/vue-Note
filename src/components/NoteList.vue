<template>
  <div id="notes-list">
      <div id="list-header">
          <h2>笔记</h2>
          <!--role h5标签语义化-->
          <div class="btn-group btn-group-justified" role="group">
              <!--所有的笔记-->
              <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default"
                  @click="show = 'all'" :class="{active: show == 'all'}">
                      所有笔记
                  </button>
              </div>
              <!--收藏的笔记-->
               <div class="btn-group" role="group">
                   <button type="button" class="btn btn-default"
                   @click="show ='favorites'" :class="{active: show =='favorites'}">
                   收藏的笔记
                   </button>
               </div>
          </div>
      </div>
      <div class="container">
          <div class="list-group">
              <a v-for="note in filteredNotes" :key="note"
              class="list-group-item" href="#" 
              :class="{active:activeNote == note}"
              @click="updateActiveNote(note)">
                <h4 class="list-group-item-heading">
                    {{note.text.trim().substring(0,30)}}
                </h4>
              </a>
          </div>
      </div>
  </div>
</template>

<script>

import {updateActiveNote} from '../vuex/actions'
export default {
  data(){
      return {
          show:'all'
      }
  },
  vuex:{
      getters:{
          notes:state => state.notes,
          activeNote:state => state.activeNote
      },
      actions:{
          updateActiveNote
      }
  },
  computed:{
      filteredNotes(){
          if(this.show == 'all'){
              return this.notes;
          }else if(this.show == 'favorites'){
              return this.notes.filter(note => note.favorite)
          }
      }
  }
}
</script>

