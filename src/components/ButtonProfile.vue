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

  <div>
    <font-awesome-icon icon="bars" />
  </div>
  <div style="padding-left: 12px;">
    <IconProfile :class="LogoColor"/>
  </div>

    
    
</template>

<style scoped>

</style>