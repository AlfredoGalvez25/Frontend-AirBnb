<script setup>

import IconHeader from './icons/IconAirBnb.vue'
import ButtonProfile from './ButtonProfile.vue'
import NavAlojamientosExperiencias from './NavAlojamientosExperiencias.vue'
import ButtonsDesCheckInOutGuests from './ButtonsDesCheckInOutGuests.vue'
import ButtonLogin from './ButtonLogin.vue'

defineProps({
  LogoColor: {
    type: String,
    default: "Rosa",
  },
})
</script>

<template>

  <div>

    <div class="header">

      <div>
        <IconHeader :class="LogoColor"/>
      </div>

      <div class="nav">
        <NavAlojamientosExperiencias/>
      </div>

      <div class="d-flex ai-center">

        <div class="login">
          <ButtonLogin/>
        </div>

        <div class="language">
          <font-awesome-icon icon="globe" />
        </div>

        <div class="profileHamburger borderGray">
          <ButtonProfile/>
        </div>

      </div>

    </div>

    <ButtonsDesCheckInOutGuests/>

  </div>
    
</template>

<style scoped>

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.nav{
  margin-left: 145px;
  display: flex;
  
}

.login{
  padding: 10px;
}

.login:hover{
  background-color: var(--GrisHover);
  border-radius: 24px;
}

.language{
  padding: 10px;
}

.language:hover{
  background-color: var(--GrisHover);
  border-radius: 24px;
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