import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        championship: 'Campeonato Brasileiro',
        clubName: 'Hcode Treinamentos',
        news: [{
            id: 1,
            title:'Começaram os treinos da nova temporada',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam necessitatibus tempore repudiandae? Autem ratione architecto omnis possimus, explicabo officia sequi aspernatur perspiciatis corrupti harum distinctio ex eum. Itaque, voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi, natus labore repudiandae corporis sint mollitia aliquam minima quod sit voluptatum autem nemo et facilis provident optio expedita sapiente maxime.',
            date:'2021-01-02',
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
        }]
    },
    getters: {
        getChampionship(state) {
            return state.championship;
        },
        getClubName(state) {
            return state.clubName;
        },
        getNews(state) {
            return state.news;
        }
    }
})