<template>
  <div class="toolbar">
      <i class="glyphicon glyphicon-plus" @click="addNote"></i>
      <i class="glyphicon glyphicon-star" @click="toggleFavorite" :class="{starred:activeNote.favorite}"></i>
      <i class="glyphicon glyphicon-remove" @click="removeNote"></i>
  </div>
</template>
<script>
import { mapActions,mapState } from "vuex";
export default {
  name:'Toolbar',
  methods:mapActions([
    'addNote',
    'toggleFavorite',
    'removeNote'
  ]),
  computed:mapState([
    'activeNote'
  ])
}
</script>
<style>
  .toolbar{
    width: 80px;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
  }
  .starred {
    color: #F7AE4F;
  }
  .toolbar i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }
  .toolbar i:hover{
    opacity: 1;
  }
</style>