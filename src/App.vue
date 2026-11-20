<script setup> 
import { ref } from 'vue' 
  
const query = ref('') 
const featured = ref([ 
  { id: 1, title: 'Le Petit Prince', author: 'A. de Saint-Exupéry', 
    available: true }, 
  { id: 2, title: 'Germinal', author: 'É. Zola', available: false }, 
]) 
</script> 
  
<template> 
  <h1>Biblio+</h1> 
  <input v-model="query" type="search" placeholder="Titre, auteur…" /> 
  <p>Recherche en cours : {{ query }}</p> 
  
  <ul> 
    <li v-for="book in featured" :key="book.id"> 
      {{ book.title }} — {{ book.author }} 
      <strong v-if="book.available">Disponible</strong> 
      <em v-else>Emprunté</em> 

      <button type="button" @click="book.available = !book.available"> 
        Changer le statut 
      </button> 
    </li> 
  </ul> 
</template>