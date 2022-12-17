<template>
    

    <div class="backcont">
        <div class="planet"></div>
        <div class="backskills" v-for="(item, index) in this.backskills" :key=index>
            
            <p class="bskillstyle">{{ item }}</p>
        </div>


    </div>
</template>


<script>



export default {
  name: 'BackendComp',
 
  data(){
    return{
      backskills : [],
  }   

  },

  created(){
     this.backskills = [
      'Django', 
        'APIs', 
        'Validierung', 
        'Modularisierung',

    ]
  }



}


</script>


<style>
   .backcont{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    min-height: 40vh;
    min-width: 200px;
    filter: drop-shadow(-10px -6px 20px rgba(250, 250, 250, 0.5));
    z-index: 0;
    }


    .planet{
        grid-column: 1/3;
        grid-row-start: 1;
        width: 100%;
        height: 100%;
        min-height: 200px;
         background:
         linear-gradient(145deg, transparent, rgb(20, 32, 51)),
         repeating-linear-gradient(25deg, rgba(182, 252, 254, 0.8) 10px, rgba(122, 242, 241, 0.4) 12px, rgba(122, 212, 211, 0.6) 70px, rgba(122, 242, 241, 0.8) 86px),
         repeating-linear-gradient(145deg, rgba(182, 212, 251, 0.8) 6px,  rgba(122, 212, 251, 0.4) 10px, rgba(122, 152, 241, 0.75) 20px, rgba(122, 152, 241, 0.8) 52px),
         repeating-linear-gradient(25deg, rgb(22, 112, 211) 6px, transparent 10px, transparent 120px, rgb(22, 112, 111) 123px),
         repeating-linear-gradient(85deg, rgb(222, 212, 251) 6px, transparent 10px, transparent 70px, rgb(22, 172, 211) 72px);
        clip-path: circle(85% at 60% 280%);
        opacity: 0.5;
    }

    .backskills{
    grid-column: 1/3;
    grid-row-start: 1;
    position: relative;
    }

     .bskillstyle{
    padding: 0;
    margin: 0;
    min-height: 10px;
     font-size: 2.4rem;
    font-family: 'Copperplate', monospace;
    font-weight: 700;
     text-shadow: 2px 2px 48px rgb(122, 212, 211);
    }
    
    .backskills:nth-child(1){
        position:absolute;
        top: 70%;
        left: 30%;
    }

    .backskills:nth-child(2){
        position:absolute;
        top: 45%;
        left: 35%;
        }

     .backskills:nth-child(3){
        position:absolute;
        top: 40%;
        left: 60%;
    }

     .backskills:nth-child(4){
        position:absolute;
        top: 80%;
        left: 50%;
    }


 @media(max-width: 1900px){
    .planet{
        clip-path: circle(75% at 60% 220%);

    }


 }



 @media(max-width: 1300px){
    .planet{
        clip-path: circle(75% at 60% 120%);

    }



 }


 @media(max-width: 800px){

     .bskillstyle{
     font-size: 1.4rem;
    }


 }




</style>