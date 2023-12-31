const {createApp} = Vue;

const dt = luxon.DateTime;


const app = createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeIndex: 0 ,
            searchText:"",
            myMess:{
                date:'',
                message:"",
                status: 'sent'
            },
            // rispOther:{
            //     date:'',
            //     message:"ok",
            //     status: 'received'
            // },
            rispListOther:[
                {
                    date:'',
                    message:"va benissimo",
                    status: 'received'  
                },
                {
                    date:'',
                    message:"ok, grande!!!",
                    status: 'received'
                },
                {
                    date:'',
                    message:"tutto chiaro!!!",
                    status: 'received'
                },
                {
                    date:'',
                    message:"vai uomo!!!",
                    status: 'received'  
                },
                {
                    date:'',
                    message:"siummmmmm",
                    status: 'received'  
                },
            ],
            sendingMessage: false,
            numberRandom: 0,
        };
    },
    created(){
        
    },
    methods: {
        searchName(){
            let search = this.searchText.toLowerCase();
            this.contacts.forEach(persona => {
                if(persona.name.toLowerCase().includes(search)){
                    persona.visible = true
                }else{
                    persona.visible = false;
                }
                
            });
        },
        changeChat(index){
            this.activeIndex = index;
        },
        dateToDayMonthYear(fulldate){
            const luxonDate = dt.fromFormat(fulldate,"dd/MM/yyyy HH:mm:ss");
            return luxonDate.toFormat("dd/MM/yyyy");
        },
        dateNoSec(fulldate){
            const luxonDate = dt.fromFormat(fulldate,"dd/MM/yyyy HH:mm:ss");
            return luxonDate.toFormat("dd/MM/yyyy HH:mm:ss");
        },
        sentMess(){
            if(this.myMess.message.trim() !== ""){
                const timeNow = dt.now().setLocale("it").toFormat("dd/MM/yyyy HH:mm:ss");
                this.myMess.date = timeNow;
                this.contacts[this.activeIndex].messages.push({...this.myMess});
                this.myMess.message = "";
                this.myMess.date = "";
                this.sendingMessage = false;
                const myTimeout = setTimeout(this.sendListRisp,1000)
            }
        },
        //funzione che restituisce soltanto ok come risposta dal pc usando rispOther dentro data
        // sendRisp(){
        //     const timeNow = dt.now().setLocale("it").toFormat("dd/MM/yyyy HH:mm:ss");
        //     this.rispOther.date = timeNow;
        //     this.contacts[this.activeIndex].messages.push({...this.rispOther});
        //     this.rispOther.date = "";
        // },
        //funzione che da una lista di risposte ne prende una casuale e la restituisce 
        sendListRisp(){
            const timeNow = dt.now().setLocale("it").toFormat("dd/MM/yyyy HH:mm:ss");
            const indexList =  this.generateRandomNumber();
            this.rispListOther[indexList].date = timeNow;
            this.contacts[this.activeIndex].messages.push({...this.rispListOther[indexList]});
            this.rispListOther[indexList].date = "";
        },
        changeSendingMess(){
            this.sendingMessage = true;
        },
        generateRandomNumber(){
            return this.numberRandom = Math.floor(Math.random() * (4 - 0 + 1) + 0);
        }

    },
})

app.mount("#app");