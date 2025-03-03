<script setup>
import IconProfile from './icons/IconProfile.vue'

defineProps({
  LogoColor: {
    type: String,
    default: "Gris",
  },
})
</script>

<template>

    <div style="width: 15em;">
      <div class="nav">
        <strong>
          Estancias
        </strong>

        <strong>
          Experiencias
        </strong>

      </div>

    </div>
    
    
</template>

<style scoped>
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
</style>