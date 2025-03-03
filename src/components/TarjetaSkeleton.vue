<template>
    <div class="tarjeta skeleton">
        <div class="imagen skeleton-box"></div>
        <div class="datos">
            <div>
                <div class="skeleton-line small"></div>
                <div class="skeleton-line v-small"></div>
            </div>
            <div class="skeleton-line small"></div>
            <div class="skeleton-line w-50"></div>
            <div class="skeleton-line v-small"></div>
        </div>
    </div>
</template>

<style scoped>


.datos > div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.skeleton-line.w-50{
    width: 50%;
}

.skeleton {
    width: 250px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
}

.skeleton-box {
    width: 250px;
    height: 250px;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f3f3f3 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite linear;
    border-radius: 10px;
}

.skeleton-line {
    height: 15px;
    margin: 10px 0;
    background: linear-gradient(90deg, #e0e0e0 25%, #f3f3f3 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite linear;
    border-radius: 5px;
    width: 100%;
}

.skeleton-line.small {
    width: 70%;
}

.skeleton-line.v-small {
    width: 20%;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
</style>
