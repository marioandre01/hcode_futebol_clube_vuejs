<template>
    <div class="row">
        <div class="col-3">
            <img :src="require('../assets/' + this.imgName)" :alt="imgInfo">
        </div>

        <div class="col-9">
            
            <!-- slot com nome para diferenciar do outro slot -->
            <slot name="title"></slot>

            <!-- Aqui vai a info passada entre as tags <HcodeSectionNewsIndividual></HcodeSectionNewsIndividual> -->
            <!-- Se não for passado nada entre as tags vai ser colocado o texto "Notícia Padrão" -->
            <slot>Notícia Padrão</slot>

            <span class="font-italic">{{ newsDate }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgName: {
            type: String,
            required: true
        },
        imgInfo: {
            type: String,
            required: true
        },
        newsDate: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.row {
    margin-bottom: 30px;
}
img {
    width: 100%;
}
h2 {
    cursor: pointer;
    color:#fff;
}
</style>