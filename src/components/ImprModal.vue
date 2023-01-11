<template>
        
   
    <div class="wrapModal" :class="{ mlcompAct: showModal }" @click="closeModal">
        <div class="infoModal" @click.stop>
            <div class="mlHeader">
                <p class="modalClose" @click="closeModal">X</p>
            </div>

            <div class="mlMain">
                <button class="toggleIMP togglerBTN" v-if="!showImpr && smallScreen" @click="toggleImpr">
                        Impressum
                    
                </button>


                <div class="mlCat mlacat" v-if="showImpr || !smallScreen">
                    <h1>Impressum</h1>
                    <p>{{ this.imprInfo.Name }}</p>
                    <p>{{ this.imprInfo.Strasse }}</p>
                    <p>{{ this.imprInfo.Ort }}</p>

                    <p class="imprcontHead">Kontakt</p>

                    <div class="mlimg">
                       <img :src="image" />
                    </div>

                </div>

                <button class="toggleDEG togglerBTN" v-if="showImpr  && smallScreen" @click="toggleDVO">
                        Datenschutzerklärung
                </button>

                <div class="mlCat mlsCat" v-if="!showImpr || !smallScreen">
                    <h1>
                        Datenschutzerklärung
                    </h1>
                    <p>{{ this.dsgvoCont.intro }}</p>

                    <h3>
                        Verantwortlich
                    </h3>

                    <p>{{ this.imprInfo.Name }}</p>
                    <p>{{ this.imprInfo.Strasse }}</p>
                    <p>{{ this.imprInfo.Ort }}</p>

                    <h3>
                        Heroku
                    </h3>


                    <p>{{ this.dsgvoCont.heroku }}</p>

                    <h3>
                        Ihre Rechte
                    </h3>

                    <p>{{ this.dsgvoCont.rightsIntro }}</p>
    
                    <div class="rightsIntro" v-for="(item, key) in this.dsgvoCont.rights" :key=key>
                        <p class="subCatHead">{{key}}</p>
                        <p>{{ item }}</p>
                    </div>
                        

                </div>

            </div>

        </div>

    </div>
</template>


<script>

import image from "../assets/conact.png"


export default {
    name: 'ImprModalComp',
    props: {
        imprInfo: Object,
        showModal: Boolean,
        
    },

    
    data() {
        return{
        
        bscreenQuery : window.matchMedia('(min-width: 1300px)'),
        image:image,
        showImpr: true,
        smallScreen: Boolean,
        activeModal: this.showModal,
        
        dsgvoCont: {
                'intro' :  'Hiermit soll Information hinsichichtlich der erhebung und verwendung personenbezogener Daten gegeben werden.\
                        Wir behalten uns vor diese anzupassen, um immer den aktuellen Anforderungen zu entsprechen. \
                         Die Nutzung dieser Webseite ist ohne Angabe personenbezogener Daten möglich',


                'rightsIntro' : 'Als betroffene Person haben Sie das Recht, uns gegenüber Ihre Betroffenenrechte geltend zu machen. Dabei haben Sie insbesondere die folgenden Rechte: Sie haben nach Maßgabe des Art.15 DSGVO und § 34 BDSG das Recht, Auskunft darüber zu verlangen, ob und gegebenenfalls in welchen Umfang wir personenbezogene Daten zu Ihrer Person verarbeiten oder nicht. \
                                Sie haben das Recht, nach Maßgabe des Art. 16 DSGVO von uns die Berichtigung Ihrer Daten zu verlangen. Sie haben das Recht, nach Maßgabe des Art. 17 DSGVO und § 35 BDSG von uns die Löschung Ihrer personenbezogenen Daten zu verlangen. \
                                Sie haben das Recht, nach Maßgabe des Art. 18 DSGVO die Verarbeitung Ihrer personenbezogenen Daten einschränken zu lassen. ',

                'heroku' : 'Für das Hosting wird der Service „HEROKU“ des Dienstleisters Salesforce.com genutzt. \
                        Salesforce Tower, 415 Mission Street, 3rd Floor,  San Francisco, CA 94103, USA. \
                        Salesforce sichert hier den Datenschutz über die "EU-Standardvertragsklauseln" und "Binding Corporate Rules" zu. \
                        Weitere Informationen findest du in der HEROKU-Datenschutzerklärung: https://www.salesforce.com/company/privacy/',

                'rights' : {
                    'Datenübertragbarkeit': 'Sie haben das Recht, nach Maßgabe des Art. 20 DSGVO die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und diese Daten einem anderen Verantwortlichen zu übermitteln.',
                    'Widerspruchsrecht' : 'Sie haben nach Maßgabe des Art. 21 Abs. 1 DSGVO das Recht, gegen jede Verarbeitung, die auf der Rechtsgrundlage des Art. 6 Abs. 1 Buchst. e) oder f) DSGVO beruht, Widerspruch einzulegen. Sofern durch uns personenbezogene Daten über Sie zum Zweck der Direktwerbung verarbeitet werden, können Sie gegen diese Verarbeitung gem. Art. 21 Abs. 2 und Abs. 3 DSGVO Widerspruch einlegen.',
                    'Widerrufsrecht' : 'Sofern Sie uns eine gesonderte Einwilligung in die Datenverarbeitung erteilt haben, können Sie diese Einwilligung nach Maßgabe des Art. 7 Abs. 3 DSGVO jederzeit widerrufen. Durch einen solchen Widerruf wird die Rechtmäßigkeit der Verarbeitung, die bis zum Widerruf aufgrund der Einwilligung erfolgt ist, nicht berührt.'

                }
            

            }

        }

                    
    },

    computed: {
            cssVars () {
            return {
                'background': this.waveCol
            }
            }
        },


    methods:{

        setWindowWidth() {
           
            let windowWidth = window.innerWidth
             if(windowWidth < 1300){
                this.smallScreen = true
             }
             else{
                this.smallScreen = false
             }
            },

        toggleImpr(){
            this.showImpr = !this.showImpr

        },

        toggleDVO(){
            this.showImpr = !this.showImpr

        },


        closeModal(){
             this.$emit("closeModal")
        },


       
    
    },
    
    created() {
       
        this.setWindowWidth()


        window.addEventListener(
            'resize',
            this.setWindowWidth
            )


        
    },

    mounted() {
       

       this.testMachine


       
   },


  
}
</script>


<style scoped>

h1{

margin-top: 8px;
}

h3{

margin-top: 28px;
}

.wrapModal{

    position: fixed;
    bottom: 0vh;
    left: 0vh;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20, 20, 20, 0.8);
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 2s;

}

.mlcompAct{
    visibility: visible;
    opacity: 1;
}






.infoModal{
    min-height: 55vh;
    max-height: 80vh;
    width: 85vw;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    color: rgba(20, 20, 20, 0.9);
    border: 4px solid var(--themeCol);
    border-radius: 10px;
    background:  var(--themeCol);
    overflow-y: hidden;

}



.mlHeader{
    display: flex;
    justify-content: flex-end;
}

.modalClose{
    font-family: arial;
    font-size: 4.5rem;
    font-weight: 600;
    padding: 20px;
    color:  rgb(220, 100, 100);
    background:  rgba(220, 220, 220, 0.6);
    border-radius: 5px;
}


.modalClose:hover{
   color:  rgb(250, 60, 60);
   background:  rgba(240, 240, 240, 0.6);
   cursor: pointer;
}


.mlMain{
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-height: 80vh;
    font-size: 1.3rem;
}

.imprcontHead{
     padding-top: 30px;
     margin-left: 30px;
    }



 .mlimg{
     padding: 10px 30px;
     width: 270px;
     }


  .mlimg img{
     width: 90%;
     }

.mlMain > *{
  padding: 5px;
}


.mlMain :nth-Child(1){
  flex-basis: 40%;
}

.togglerBTN{
  margin: 10px;
  min-height: 90px;
  max-width: 450px;
  position: relative;
  color: rgb(64, 27, 124);
  background:  var(--themeColBright);
  font-size: 2em;
  border-radius: 20px;
  /*mix-blend-mode: screen;*/
}





.togglerBTN:hover{
  cursor: pointer;
  color:  rgb(54, 20, 87);
  background:  rgba(220, 240, 220, 0.8);
}


.togglerBTN:hover p{
  color:  rgba(180, 40, 40, 0.6);
}





.mlCat{
    align-self: stretch;
    background-color:  var(--themeColBright);
    margin: 10px;
    color: rgb(20, 20, 20);
    overflow-y: auto;
}

.mlCat h1{
    margin-bottom: 20px;
    
}



.mlacat{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    max-height: 80%;
}


.mlCatHeading{
    font-size: 1.8rem;
    margin: 5px 10px;
}



.mlsCat{
  flex-basis: 60%;
  max-height: 65vh;
  border-left: 2px solid black;
  padding-left: 25px;
  overflow-y: scroll;
  padding-right: 37px;
  box-sizing: content-box;
}



.subCatHead{
    margin-top: 20px;
    padding: 15px;
    font-size: 1.3rem;
}


.rightsIntro{
    margin: 30px 2px;
}


 @media(max-width: 1300px){

    h1{

        font-size: 1.3em;
    }

    h3{

        font-size: 1.1em;
        }

    p{
        font-size: 0.8em;
        }

    .infoModal{
        max-height: 85vh;
        margin-top: 10vh;
        width: 95vw;
        padding: 0px 0;
    }


    .mlMain{
        flex-direction: column;

        }

    
    .mlCat{
        margin: 10px 0px;
       
        }




    .modalClose{
        font-size: 2.5rem;
        padding: 10px 15px;
    }
    .mlimg{
     width: 220px;
     }



    .togglerBTN{
       
        font-size: 1.5em;
      
        }

     .toggleDEG{
      display: inline-block;
    }

    .mlsCat{
      border-top: 2px solid black;
      border-left: none;
      padding-left: 5px;
    }



    .togglerBTN{
    font-size: 1.5em;
    /*mix-blend-mode: screen;*/
    }


  }


 @media(min-width: 1500px){

    .infoModal{
        max-height: 75vh;
    }


  }



</style>