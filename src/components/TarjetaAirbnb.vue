<script setup>
import { useRouter } from 'vue-router'

const fallbackImg = 'https://demofree.sirv.com/nope-not-here.jpg'

const router = useRouter()

const props = defineProps({
    id: String,
    locationName: { type: String, default: 'N/A' },
    distance: { type: String, default: 'N/A' },
    pricePNigth: { type: String, default: 'N/A' },
    stars: { type: String, default: 'N/A' },
    img: String,
    titulo: { type: String, default: 'N/A' },
    dates: { type: String, default: 'N/A' },
    subTitulo: { type: String, default: 'N/A' },
    huespedes: { type: String, default: 'N/A' },
    habitaciones: { type: String, default: 'N/A' },
    camas: { type: String, default: 'N/A' },
    baños: { type: String, default: 'N/A' },
    msg: { type: String, default: '' }
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
        <div>
            <div class="imagen">
                <img 
                    :src="img || fallbackImg" 
                    :alt="`Imagen de ${locationName}`"
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
                            {{ stars }}
                        </span>
                    </div>
                </div>
                <div>
                    <span>
                        A {{ formatearMiles(distance) }} km de distancia
                    </span>
                </div>
                <div>
                    <span>
                    {{ dates }}
                    </span>
                </div>
                <div>
                    <span>
                        <strong>
                            {{ formatearPrecio(pricePNigth, 'MXN') }} 
                        </strong>
                        noche
                    </span>
                </div>
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
.tarjeta > div {
    cursor: pointer;
}
</style>
