const { createApp } = Vue

createApp({
    data() {
        return {
            emailSentence: null
        }
    },
    methods: {
        callApi() {
            axios
                .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then(response => {

                    console.log(response);
                    this.emailSentence = response.data.response
                })
        }

    },
    mounted() {
        this.callApi()

    }

}).mount('#app')