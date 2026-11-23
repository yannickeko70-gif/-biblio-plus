<script setup> 
import BookCard from './BookCard.vue' 
defineProps({ books: { type: Array, required: true } }) 
defineEmits(['toggle-favorite']) 
</script> 
  
<template> 
  <ul class="book-list"> 
    <li v-for="book in books" :key="book.id"> 
      <BookCard :book="book" 
                @toggle-favorite="$emit('toggle-favorite', $event)" /> 
    </li> 
  </ul> 
</template> 
  
<style scoped> 
.book-list { list-style: none; margin: 0; padding: 0; display: grid; 
  gap: var(--space-4); 
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)); } 
</style> 