<template>
    <section>
        <div class="container">
            <HcodeSectionNewsIndividual 
                v-for="notice in news"
                :key="notice.id"
                :imgName="notice.img"
                :imgInfo="notice.imgInfo"
                :newsDate="notice.date"
            >

                <template #title>
                    <h2>{{ notice.title }}</h2>
                </template>

                <p>{{ notice.content | truncate(200) }}</p>
            </HcodeSectionNewsIndividual> 
        </div>
    </section>

</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'

export default {
    components: {
        HcodeSectionNewsIndividual
    },
    data() {
        return {
            news: []
        }
        
    },
    created() {
        this.news = [{
            id: 1,
            title:'Começaram os treinos da nova temporada',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam necessitatibus tempore repudiandae? Autem ratione architecto omnis possimus, explicabo officia sequi aspernatur perspiciatis corrupti harum distinctio ex eum. Itaque, voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi, natus labore repudiandae corporis sint mollitia aliquam minima quod sit voluptatum autem nemo et facilis provident optio expedita sapiente maxime.',
            date:'2021-01-01',
            img: 'news1.jpg',
            amgInfo: 'Notícia 1'
        },{
            id: 2,
            title:'Jogo de quarta-feira termina empatado',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam necessitatibus tempore repudiandae? Autem ratione architecto omnis possimus, explicabo officia sequi aspernatur perspiciatis corrupti harum distinctio ex eum. Itaque, voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi, natus labore repudiandae corporis sint mollitia aliquam minima quod sit voluptatum autem nemo et facilis provident optio expedita sapiente maxime.',
            date:'2021-05-01',
            img: 'news2.jpg',
            amgInfo: 'Notícia 2'
        },{
            id: 3,
            title:'Novo estádio será inaugurado na semana que vem',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam necessitatibus tempore repudiandae? Autem ratione architecto omnis possimus, explicabo officia sequi aspernatur perspiciatis corrupti harum distinctio ex eum. Itaque, voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi, natus labore repudiandae corporis sint mollitia aliquam minima quod sit voluptatum autem nemo et facilis provident optio expedita sapiente maxime.',
            date:'2021-03-02',
            img: 'news3.jpg',
            amgInfo: 'Notícia 3'
        }
        
        ]
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