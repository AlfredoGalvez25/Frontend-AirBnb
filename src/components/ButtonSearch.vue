<script setup>

defineProps({
  LogoColor: {
    type: String,
    default: "Gris",
  },
})
</script>

<template>

  <button>
    <font-awesome-icon icon="magnifying-glass" 
      :style="{ fontSize: '1.5em', color: 'white' }" 
    />
  </button>

    
    
</template>

<style scoped>

button{
  background-color: var(--Rosa); 
  border-radius: 24px;
  border: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
}


button:hover{
  background-color: var(--RosaHover);
}

</style>