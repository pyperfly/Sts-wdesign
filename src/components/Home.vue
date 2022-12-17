<template>

    <div>
        <div class="mainInfo">
            <MainInfoComp/>
        </div>    
        
        <div class="mainShow">
            <section class="showSect">
                <p class="sectDescr">Frontend</p>
                <StylishComp/>
            </section>

            <section class="showSect">
                <p class="sectDescr">Backend</p>
                <BackendComp/>
            </section>

            <section class="showSect">
                <p class="sectDescr">Python</p>
                <PyinfoComp/>
            </section>
        </div>

        <ImprModalComp @closeModal="modalToggler" :imprInfo="imprInfo" :showModal="showModal"/>
        <MButton @toggleModal="modalToggler"/>
    </div>
</template>



<script>
import StylishComp from '../components/Stylish.vue'
import BackendComp from '../components/Backends.vue'
import PyinfoComp from '../components/Pyinfo.vue'
import MainInfoComp from '../components/MainInfo.vue'
import ImprModalComp from '../components/ImprModal.vue'
import MButton from '../components/ModalButton.vue'

import javaFuncs from "../assets/modaljs.js"


javaFuncs()


export default {
  name: 'HomeComp',
  javaFuncs:javaFuncs,
  components: {
    MainInfoComp,
    StylishComp,
    BackendComp,
    PyinfoComp,
    ImprModalComp,
    MButton
  },
  
  data(){
    return{
        tcompnt: false,
        showModal: false,
            imprInfo : {
        'Name': 'Stephan Schank',
        'Strasse': 'Blumenstr. 15-A',
        'Ort': '79194 Gundelfingen',
        'Tel': '0151 5150 2251',
        'email': 'pythonfr@mailbox.org'
        }
        }

    },

 



  methods: {
        modalToggler(){
            console.log('helloToggler :)'),
            this.showModal = !this.showModal
        },

    

    },




}
</script>


<style>

.showSect{
    border-left: 2px solid var(--themeColorLow);
    padding-left: 5px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 60px;
}

.mainInfo{
     position: fixed;
     top: 0;
     left:0;
     min-height: 15vh;
     width: 100%;
     z-index:90;
     background-image:  linear-gradient(0,  rgba(20, 20, 20, 0.9), rgb(20, 20, 20));
}


.mainShow{
     padding-top: 18vh;
     padding-bottom: 18vh;
     color: rgb(233, 244, 222);
}

.sectDescr{
    color:  var(--themeColorLow);
    font-family: 'Outfit', sans-serif;
    font-size: 3.4rem;
    margin-bottom: 15px;

}



 @media(max-width: 1000px){

    .showSect{
        margin-left: 5px;
        margin-right: 5px;
        }


    .sectDescr{
        font-size: 2.8em;
    }

  }





</style>
