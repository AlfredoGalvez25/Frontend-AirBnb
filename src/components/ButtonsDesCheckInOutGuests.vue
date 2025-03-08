<script setup>
import ButtonSearch from './ButtonSearch.vue'
</script>

<template>
  <div class="option-container d-flex ai-center jc-spacebetween">

    <div class="option first-option">
      <div>Destino </div>
      <input type="text"
        placeholder="Buscar destinos"/>
    </div>
    <div class="option">
      <div>Llegada </div>
      <input type="text"
        placeholder="Agregar fechas"/>
    </div>
    <div class="option">
      <div>Salida </div>
      <input type="text"
        placeholder="Agregar fechas"/>
    </div>
    <div class="option last-option">
      <div>Huespedes </div>
      <input type="text"
        placeholder="¿Cuantos?"/>
    </div>

    <div class="search-container d-flex ai-center jc-center">
      <ButtonSearch/>
    </div>

  </div>
</template>

<style scoped>
.option-container {
  border: 1px solid var(--BorderGray);
  box-shadow: 0.3em 0.3em 1em var(--Gris);
  border-radius: 25px;
  background-color: var(--Fondo);
  cursor: pointer;
  padding: 10px;
  max-width: 900px;
  width: 100%;
  height: 45px;
  overflow: hidden;
  margin: auto;
}

.search-container {
  flex-shrink: 0;
  min-width: 50px; 
  max-width: 60px;

}

.option{
  padding: 10px;
  border-radius: 100px;
  flex: 1 1 auto;
}

.first-option{
  padding-left: 10px;
  margin-left: 5px;
}
.last-option{
  padding-right: 10px;
}

.option:hover{
  background-color: var(--GrisHover);
}

.option input{
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: #000;
  width: 100%;
  min-width: 0; 
}

input{
  border: none;
  outline: none;
}

@media (max-width: 780px) {
  .option-container {
    display: none;
  }
}

</style>