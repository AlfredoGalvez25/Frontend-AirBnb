<script setup>
import { ref } from 'vue'


defineProps({
    Location: String,
    Distance: String,
    PricePNigth: String,
    Stars: String,
    Img: String,
    msg: String
})

function formatearPrecio(precio, currency) {
    return new Intl.NumberFormat('es-MX', { 
        style: 'currency', 
        currency 
    }).format(precio) + ' ' + currency
}
function formatearMiles(numero) {
    return new Intl.NumberFormat('es-MX', { 
        maximumSignificantDigits: 3 
    }).format(numero)
}

defineExpose({
    formatearPrecio,
    formatearMiles
})

</script>

<template>
    <div class="tarjeta">

        <div class="imagen">
            <img :src="Img" :alt="`Imagen de ${Location}`">
        </div>
        <div class="datos">
            <div>
                <div>
                    <strong>
                        <span>
                            {{ Location }}
                        </span>
                    </strong>
                </div>
                <div>
                    <span>
                        {{ Stars }}
                    </span>
                </div>
            </div>
            <div>
                <span>
                    A {{ formatearMiles(Distance) }} km de distancia
                </span>
            </div>
            <div>
                <span>
                1-6 de mar
            </span>
            </div>
            <div>
                <span>
                    <strong>
                        {{ formatearPrecio(PricePNigth, 'MXN') }} 
                    </strong>
                    noche
                </span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.imagen{
  width: 322px;
  height: 306px;
  margin-bottom: 10px;
}

.imagen>img {
  width: 322px;
  height: 306px;
  border-radius: 20px;
}

.datos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.datos> :first-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.tarjeta {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 322px;
}
</style>
