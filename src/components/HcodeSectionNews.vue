<template>
    <section>
        <div class="container">
            <HcodeSectionNewsIndividual 
                imgName="news1.jpg"
                imgInfo="Notícia 1"
                newsTitle="Começaram os treinos da nova temporada"
                newsContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam necessitatibus 
                tempore repudiandae? Autem ratione architecto omnis possimus, explicabo officia sequi 
                aspernatur perspiciatis corrupti harum distinctio ex eum. Itaque, voluptas. Lorem ipsum dolor 
                sit, amet consectetur adipisicing elit. Maiores quasi, natus labore repudiandae corporis sint 
                mollitia aliquam minima quod sit voluptatum autem nemo et facilis provident optio expedita 
                sapiente maxime."
                newsDate="01/01/2021"
            />
            
            <HcodeSectionNewsIndividual 
                imgName="news2.jpg"
                imgInfo="Notícia 2"
                newsTitle="Jogo de quarta-feira termina empatado"
                newsContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam necessitatibus 
                tempore repudiandae? Autem ratione architecto omnis possimus, explicabo officia sequi 
                aspernatur perspiciatis corrupti harum distinctio ex eum. Itaque, voluptas. Lorem ipsum dolor 
                sit, amet consectetur adipisicing elit. Maiores quasi, natus labore repudiandae corporis sint 
                mollitia aliquam minima quod sit voluptatum autem nemo et facilis provident optio expedita 
                sapiente maxime."
                newsDate="05/01/2021"
            />

            <HcodeSectionNewsIndividual 
                imgName="news3.jpg"
                imgInfo="Notícia 3"
                newsTitle="Novo estádio será inaugurado na semana que vem"
                newsContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam necessitatibus 
                tempore repudiandae? Autem ratione architecto omnis possimus, explicabo officia sequi 
                aspernatur perspiciatis corrupti harum distinctio ex eum. Itaque, voluptas. Lorem ipsum dolor 
                sit, amet consectetur adipisicing elit. Maiores quasi, natus labore repudiandae corporis sint 
                mollitia aliquam minima quod sit voluptatum autem nemo et facilis provident optio expedita 
                sapiente maxime."
                newsDate="03/02/2021"
            />
        </div>
    </section>

</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'

export default {
    components: {
        HcodeSectionNewsIndividual
    }
}
</script>

<style scoped>
    section {
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>