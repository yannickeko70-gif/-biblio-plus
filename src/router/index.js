import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Pointons l'ouverture vers le fichier HomeView.vue.
    {
      path: '/',
      name: 'home',
      component: HomeView // <-- Vérifie que c'est bien HomeView ici
    },
  ],
})

export default router
