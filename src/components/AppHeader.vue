<template> 
  <header class="app-header"> 
    <RouterLink to="/" class="app-header__logo">Biblio+</RouterLink> 
    <nav aria-label="Navigation principale"> 
      <ul class="app-header__nav"> 
        <li><RouterLink to="/">Accueil</RouterLink></li> 
        <li><RouterLink to="/catalogue">Catalogue</RouterLink></li> 
        <li><RouterLink to="/contact">Contact</RouterLink></li> 
      </ul> 
    </nav> 
  </header> 
</template> 
  
<style scoped> 
.app-header { display: flex; justify-content: space-between; 
  align-items: center; padding: var(--space-4) var(--space-6); 
  background: var(--color-primary); color: var(--color-primary-contrast); } 
.app-header a { color: inherit; text-decoration: none; } 
.app-header__nav { display: flex; gap: var(--space-4); 
  list-style: none; margin: 0; padding: 0; } 
</style> 