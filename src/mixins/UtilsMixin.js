export default {
    methods: {
        formatDate(date) {
            let newDate = new Date(date);

            // toLocaleDateString() - retorna o padão de escrita de data da localidade atual, no caso o Brasil
            return newDate.toLocaleDateString();
        }
    }
}