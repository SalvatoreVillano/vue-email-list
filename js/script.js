const { createApp } = Vue
const app = createApp({
    data(){
        return {
            emails: [],
        }
    },
    methods: {
        callApi(){
            for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{
                this.emails.push(response.data.response);
            })
        }
        }
    },
    created(){
            this.callApi();
    },
    computed: {
    },
    mounted(){
    },
});
app.mount('#app');