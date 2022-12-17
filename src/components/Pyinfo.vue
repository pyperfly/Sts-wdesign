<template>


        
    <div id="pyinfo">

        <div class="skillCont" v-for="(item, index) in this.pyskills" :key=index>
       
            <p class="skillstyle">{{ item }}</p>
        </div>

        
        <div class="pyimg">
           
            <img :src="image" />
        </div>

    </div>

    

</template>


<script>

import image from "../assets/compospics.png"

export default {
    name: 'PyinfoComp',
    data(){
        return{
            image:image,

            pyskills : ['Datenverarbeitung', 'OOP', 'Datenbanken', 'GUIs','Geodaten']
        }
    }
    
}
</script>



<style>
  #pyinfo{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 20vh;
  padding: 0 30px;
  color: rgb(233, 244, 222);
  background: radial-gradient(transparent, rgba(22,112, 211,0.08), rgba(222, 212, 11, 0.02), transparent);
  background-position: 0 0;
  background-size: 200px 100px;
    }


    .stest{
        color: yellow;   
        font-size: 5em;
     }


    .skillCont{
        flex: 1 1 45%;
        max-width:70%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .skillCont > * {
        flex:1 1 30%;
        margin: 5px 10px;
        padding:5px 20px;
    }


  .skillstyle{
    padding-top: 10px;
    min-height: 10px;
    max-height: 100px;
    font-size: 2.3rem;
    font-family: "American Typewriter", serif;
    border-left: 5px solid rgba(122,112, 11, 0.8);
    border-radius: 25%;
  }

  .pyimg{
     flex: 1 1 45%;
     font-size: 2rem;
     min-width: 800px;
     padding: 5px 15px;
     font-family: Helvetica, Roboto, Lato, sans-serif;
     }


  .pyimg img{
     width: 90%;
     }

  @media(max-width: 1300px){
    .pyimg{
        padding: 2px;
        margin: 2px;
     }

  }

</style>