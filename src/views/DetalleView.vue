<template>
    <div>
      <div v-if="loading">Cargando detalles...</div>
      
      <div v-else-if="character && Object.keys(character).length">
        <img :src="character.Img" alt="Imagen del lugar" @error="reemplazarImagen">
        <p>Ubicación: {{ character?.locationName }}</p>
        <p>Distancia: {{ character.Distance }} km</p>
        <p>Calificación: {{ character.Stars }}</p>
        <p>Precio por noche: {{ character.PricePNigth }} MXN</p>
        <p>Descripción: {{ character.msg }}</p>
  
        <router-link to="/">⬅ Volver al inicio</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const id = ref(route.params.id)
  const character = ref({});
  const loading = ref(true)

  const API_URL = import.meta.env.VITE_API_URL
  
  const fallbackImg = '/assets/placeholder.jpg'
  
  function reemplazarImagen(event) {
      event.target.src = fallbackImg
  }
  
  onMounted(async () => {
    console.log(id);
    
    const URL = `${API_URL}/detalles/${id.value}`

    try {
      const resp = await fetch(URL)
      character.value = await resp.json()
    } catch (error) {
      console.log('Error al obtener los detalles:', error)
    } finally {
      loading.value = false
    }
  })
  </script>
  
  <style scoped>
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  </style>
  