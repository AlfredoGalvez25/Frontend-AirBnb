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

    <div style="width: 32px;">
        <a>
            <IconProfile :class="LogoColor"/>
        </a>
    </div>
    
    
</template>

<style scoped>

</style>