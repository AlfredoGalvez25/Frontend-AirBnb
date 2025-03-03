<script setup>
import { useRouter } from 'vue-router'

const fallbackImg = '/src/assets/imagenError.jpg'

const router = useRouter()

const props = defineProps({
    id: String,
    locationName: String,
    Distance: String,
    PricePNigth: String,
    Stars: String,
    Img: String,
    msg: { type: String, default: '' } // 🔹 Evita que msg sea undefined
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

function reemplazarImagen(event) {
    event.target.src = fallbackImg
}

function handleClick() {

    router.push({
        name: 'Detalles',
        params: {
            id: props.id
        }
    })
}

defineExpose({
    formatearPrecio,
    formatearMiles,
    reemplazarImagen,
    handleClick
})
</script>

<template>
    <div class="tarjeta" @click="handleClick">
        <div class="imagen">
            <img :src="Img" :alt="`Imagen de ${locationName}`"
            draggable="false"
            @error="reemplazarImagen"
            >
        </div>
        <div class="datos">
            <div>
                <div>
                    <strong>
                        <span>
                            {{ locationName }}
                        </span>
                    </strong>
                </div>
                <div class="stars">
                    <font-awesome-icon icon="star" />
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
.stars{
    display: flex;
    margin-left: 8px;
    margin-right: 10px;
    flex-direction: row;
}

.imagen{
    width: 250px;
    height: 250px;
    margin-bottom: 10px;
}

.imagen>img {
    width: 250px;
    height: 250px;
    border-radius: 20px;
}

.datos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.datos> :first-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.tarjeta {
  width: 250px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}
</style>
