<template>
  <div class="main__container">
    <h1 class="titulo">{{ character.titulo }}</h1>

    <div class="galeria">
      <div class="imagen-principal">
        <img :src="character.img" alt="Imagen del lugar" @error="reemplazarImagen">
      </div>
      <div class="imagenes-secundarias">
        <img 
          v-for="(img, index) in character.imgs" 
          :key="index" 
          :src="img" 
          alt="Imagen del lugar" 
          @error="reemplazarImagen"
        >
      </div>
    </div>

    <div class="info">
      <h3>{{ character.subTitulo }}</h3>
      <p>
        {{ character.huespedes }} huespedes ·
        {{ character.habitaciones }} habitaciones ·
        {{ character.camas }} camas ·
        {{ character.baños }} baños
      </p>
    </div>

    <router-link to="/" class="volver">⬅ Volver al inicio</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref(route.params.id)
const character = ref({})
const loading = ref(true)

const API_URL = import.meta.env.VITE_API_URL
const fallbackImg = '/assets/placeholder.jpg'

function reemplazarImagen(event) {
  event.target.src = fallbackImg
}

onMounted(async () => {
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
.main__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.titulo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.galeria {
  display: flex;
  gap: 10px;
}

.imagen-principal img {
  width: 500px;
  height: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
}

.imagenes-secundarias {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.imagenes-secundarias img {
  width: 180px;
  height: 180px;
  cursor: pointer;
}

.imagenes-secundarias :nth-child(2) {
  border-top-right-radius: 10px;
}

.imagenes-secundarias :nth-child(4) {
  border-bottom-right-radius: 10px;
}


.info {
  margin-top: 20px;
}

.info h3 {
  font-size: 18px;
  font-weight: bold;
}

.info p {
  font-size: 16px;
  color: #555;
}

.volver {
  display: block;
  margin-top: 20px;
  color: #ff385c;
  text-decoration: none;
  font-weight: bold;
}
</style>
