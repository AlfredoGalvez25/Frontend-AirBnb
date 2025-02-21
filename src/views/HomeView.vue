<template>

  <main>

    <div v-if="loading">Cargando...</div>
    
    <div v-else v-for="character in characters" :data-id="character.id">
      <TarjetaAirbnb
        :Location = "character.Location"
        :Distance = "character.Distance"
        :PricePNigth = "character.PricePNigth"
        :Stars = "character.Stars"
        :Img = "character.Img"
        :msg = "character.msg"
        
      />
    </div>
    
  </main>

</template>


<script>
import { ref, onMounted } from 'vue'
import TarjetaAirbnb from '../components/TarjetaAirbnb.vue'

export default {
  components:{
    TarjetaAirbnb
  },
  setup(){
    const characters = ref([])
    const loading = ref(true)

    onMounted(async () => {
      try {
        const resp = await fetch('http://localhost:2506/api/v1/homeView')
        const data = await resp.json()
        characters.value = data
        
      } catch (error) {
        console.log('Error al cargar la informacion:', error)
      } finally{

        setTimeout(() => {
          loading.value = false
        }, 1000)

      }


    })

    return {
      characters,
      loading,
      TarjetaAirbnb
    }

  }

}

</script>