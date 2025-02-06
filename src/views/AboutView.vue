<template>
  <div>
    <div v-if="loading">Cargando usuarios...</div>
    <li v-else v-for="character in characters" :key="character.id">
      {{ character.name }}
    </li>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const characters = ref([])
    const loading = ref(true)

    onMounted(async () => {
      try {
        const response = await fetch('https://backend-airbnb-fdtp.onrender.com/api/v1/users')
        const data = await response.json()
        characters.value = data
      } catch (error) {
        console.error('Error al cargar personajes:', error)
      } finally {
        setTimeout(() => {
          loading.value = false
        }, 1000);
      }
    })

    return {
      characters,
      loading
    }
  }
}
</script>