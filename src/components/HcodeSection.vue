<template>
    <section>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo notícias do {{ championship }}</h3>
            </div>
        </div>

        <router-view></router-view>

        <div class="container">
            <div class="row my-club mt-5">
                 <div class="col-6">
                     <h2>Seu clube é: {{ myClub }}</h2>
                 </div>

                 <div class="col-6">
                     <HcodeInput />
                 </div>
            </div>
        </div>

    </section>
</template>

<script>
import HcodeInput from './HcodeInput'
import { mapGetters } from 'vuex'

export default {
    components: {
        HcodeInput
    },
    data() {
        return {
            // myClub: 'Hcode Treinamentos',
        }
    },
    props: {
        // championship: String,
        currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        })
    
    }
}
</script>

<style scoped>

</style>