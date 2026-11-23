<script setup> 
defineProps({ 
  variant: { type: String, default: 'primary' }, // primary | ghost 
  to: { type: [String, Object], default: null },  // lien interne si renseigné 
}) 
</script> 
  
<template> 
  <component :is="to ? 'RouterLink' : 'button'" :to="to" 
             :class="['btn', 'btn--' + variant]"> 
    <slot /> 
  </component> 
</template> 