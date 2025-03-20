<script setup>
import { RouterLink, RouterView } from 'vue-router'

defineProps({
  LogoColor: {
    type: String,
    default: "Gris",
  },
})
</script>

<template>

  <RouterLink to="/login">
    Pon tu casa en Airbnb
  </RouterLink>

    
    
</template>

<style scoped>
a.router-link-exact-active:hover{
  background-color: transparent;
}
</style>