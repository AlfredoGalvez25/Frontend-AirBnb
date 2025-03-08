<script setup>

defineProps({
  LogoColor: {
    type: String,
    default: "Gris",
  },
})
</script>

<template>

  <div class="nav">
    <strong>
      Alojamientos
    </strong>
  </div>

  <div>
    <strong>
      Experiencias
    </strong>

  </div>
   
    
</template>

<style scoped>
.nav{
  display: flex;
  justify-content: space-evenly;
  width: 250px;
}
</style>