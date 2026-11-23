<script setup> 
const model = defineModel({ type: String, default: '' }) 
</script> 
  
<template> 
  <form class="search" role="search" @submit.prevent> 
    <label for="q" class="sr-only">Rechercher un livre</label> 
    <input id="q" v-model="model" type="search" 
           placeholder="Titre, auteur…" /> 
  </form> 
</template> 