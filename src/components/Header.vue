<script setup>
import IconHeader from './icons/IconAirBnb.vue'
import ButtonProfile from './ButtonProfile.vue'
import NavAlojamientosExperiencias from './NavAlojamientosExperiencias.vue'
import ButtonDestino from './ButtonDestino.vue'

defineProps({
  LogoColor: {
    type: String,
    default: "Rosa",
  },
})
</script>

<template>

  <div class="header">

    <!-- <div> -->
      <div>
        <IconHeader :class="LogoColor"/>
      </div>
      <div>
        <NavAlojamientosExperiencias/>
      </div>
      <div class="profileHamburger borderGray">
        <ButtonProfile/>
      </div>
    <!-- </div> -->

    <!-- <div>
      <button>
      1
      </button>
      <button>
      2
      </button>
      <button>
      3
      </button>
      <button>
      4
      </button>
    </div> -->

  </div>
    
</template>

<style scoped>

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.profileHamburger{
  display: flex;
  width: 60px;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 14px;
  border-radius: 30px;
}
</style>