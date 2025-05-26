<style scoped>
.contenedor-tarjetas {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
<template>
  <main>
    <div v-if="loading" 
    class="contenedor-tarjetas">
      <TarjetaSkeleton v-for="n in 18" :key="n" />
    </div>
    
    
    <TarjetaAirbnb v-else
      v-for="character in characters"
      :key="character.id"
      v-bind="character"
    />
    
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import TarjetaAirbnb from '../components/TarjetaAirbnb.vue'
import TarjetaSkeleton from '../components/TarjetaSkeleton.vue'

export default {
  components: {
    TarjetaAirbnb,
    TarjetaSkeleton
  },
  setup() {
    const characters = ref([])
    const loading = ref(true)

    const API_URL = import.meta.env.VITE_API_URL


    onMounted(async () => {

      const URL = `${API_URL}/homeView`
      try {
        const resp = await fetch(URL)
        const data = await resp.json()
        characters.value = data
        
      } catch (error) {
        console.log('Error al cargar la información:', error)
      } finally {
        setTimeout(() => {
          loading.value = false
        }, 1000)
      }
    })

    return {
      characters,
      loading
    }
  }
}
</script>
