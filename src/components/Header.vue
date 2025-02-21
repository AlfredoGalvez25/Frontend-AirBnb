<script setup>
import IconHeader from './icons/IconAirBnb.vue'
import ButtonProfile from './ButtonProfile.vue'
import NavAlojamientosExperiencias from './NavAlojamientosExperiencias.vue'

defineProps({
  LogoColor: {
    type: String,
    default: "Rosa",
  },
})
</script>

<template>

  <div class="header">

    <div>
      <IconHeader :class="LogoColor"/>
    </div>
    <div>
      <NavAlojamientosExperiencias/>
    </div>
    <div>
      <ButtonProfile/>
    </div>

  </div>
    
</template>

<style scoped>

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>