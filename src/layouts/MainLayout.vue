<script setup>
import Header from '../components/Header.vue'
</script>

<template>
    <header>
        <Header />
    </header>
    <slot />
</template>

<style scoped>

header{
  position: sticky;
  top: 0;
  background: white;
}

</style>