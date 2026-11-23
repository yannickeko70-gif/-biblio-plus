<script setup> 
import { ref, computed, onMounted } from 'vue' 
import SearchBar from '@/components/SearchBar.vue' 
import BookList from '@/components/BookList.vue' 
  
const books = ref([]) 
const query = ref('') 
const featured = computed(() => 
  books.value 
    .filter(b => b.title.toLowerCase().includes(query.value.toLowerCase())) 
    .slice(0, 8)) 
  
onMounted(async () => { 
  const res = await fetch(import.meta.env.BASE_URL + 'data/books.json') 
  books.value = await res.json() 
}) 
</script> 
  
<template> 
  <section class="hero"> 
    <h1>Bienvenue à la bibliothèque</h1> 
    <SearchBar v-model="query" /> 
  </section> 
  <section aria-labelledby="coeur"> 
    <h2 id="coeur">Coups de cœur</h2> 
    <BookList :books="featured" /> 
  </section> 
</template> 