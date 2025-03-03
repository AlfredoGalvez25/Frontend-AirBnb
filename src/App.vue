<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
  
  <header>
    <Header/>
  </header>

  <RouterView />

</template>


<style scoped>

header{
  position: sticky;
  top: 0;
  background: white;
}
</style>