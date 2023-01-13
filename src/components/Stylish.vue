


<template>
        
    <div class="styleGrid">
        <div class="sblock sone"><p>{{ this.styleStory[0] }}</p></div>
        <div class="sblock stwo"><p>{{ this.styleStory[1] }}</p></div>


        <div :style="cssVars" class="sblock styleIcons">
            <div class="techstack">HTML 5</div>
            <div class="techstack">CSS 3</div>
            <div class="techstack">JS</div>
        </div>

        <div class="sblock sthree"><p>{{ this.styleStory[2] }}</p></div>
        <div class="sblock sfour"><p>{{ this.styleStory[3] }}</p></div>



    </div>
</template>





<script>
export default{
    name: 'StylishComp',
    data(){
        return{
        styleStory : [],
        waveCol: Text,
        testTxt: Text,
        frequency: 0.02,
        boxstep: 1,

        }

    }
        ,


    created(){
        this.styleStory = [
            'modernes Layout mit Flexbox und Grid',
            'interaktiv und freundlich',
            'Individuell und Stylish',
            'dynamisch und smart mit Javascript'
        ],
        
        this.testTxt = 'intitail text',
        this.waveCol = 'blue'
        },

    mounted(){
         this.waveMachine()
        

    },    


    computed: {
            cssVars () {
            return {
                'background': this.waveCol
            }
            }
        },







    methods:{


        wanimvals (step) {

                let red   = Math.sin(this.frequency*step + 0) * 127 + 128;
                let green = Math.sin(this.frequency*step + 2) * 127 + 128;
                let blue  = Math.sin(this.frequency*step + 4) * 127 + 128;

                let wvcolor = 'rgba(' + Math.round(red) + ',' + Math.round(green) + ',' + Math.round(blue) + ',' + 0.5 + ')';
            

                return wvcolor;
            },


        
        
        waveanim () {
                ++this.boxstep
                let wvcolor = this.wanimvals (this.boxstep);
                this.waveCol = "linear-gradient(to top, transparent," + wvcolor + ", transparent, transparent)"
            },

        waveMachine(){ 
            setInterval(this.waveanim, 200)    
        },
    

        }
    }

</script>




<style scoped>
    .colorwave{
        height: 6px;
        width: 70vw;

    }


    .cwavetxt{
        font-size: 30px;
        font-weight: bold;
        font-family: 'Roboto Slab', serif;
    }


    .sblock{
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 30px;
     font-family: "Segoe UI", "Palatino", "Playfair Display", serif;
     font-size: 2rem;
     font-weight: 400;
     text-transform: uppercase;
     color: rgb(40, 40, 30);
     border-radius: 4px;
    }


    .sone{
     grid-area: left;
     background: rgba(220, 150, 160, 0.8);

    }

     .stwo{
     grid-area: topleft;
     background: rgba(200, 150, 180, 1);
    }

     .sthree{
     grid-area: topright;
      background: rgba(190, 150, 200, 0.9);
    }

     .sfour{
     grid-area: right;
     background: rgba(180, 150, 230, 0.8);
    }

    .styleIcons{
     padding: 20px;
     grid-area: bottom;
     display: flex;
     justify-content: space-around;
     font-size: 1.8rem;
     border-radius: 0px;
    }


    .techstack{
        text-align: center;
        padding: 30px 5px;
        border-radius: 5px;
        color: rgba(230, 200, 210, 1);
         font-family:  "Verdana", sans;
         font-weight: 700;
        flex: 1 1 30%;
        margin-right: 10px;
    }


    .techstack:nth-child(1){
        border: 3px solid rgba(150, 50, 30, 0.8);
    }

     .techstack:nth-child(2){
        border: 3px solid rgba(50, 50, 130, 0.8);
    }

     .techstack:nth-child(3){
        border: 3px solid rgba(160, 110, 20, 0.8);
    }

    .styleGrid {
      display: grid;
      grid-template-columns: 8fr 5fr 5fr 8fr;
      grid-template-rows: 4fr 5fr;
      grid-template-areas:
        "topleft topleft topright topright"
        "left bottom bottom right";
      grid-gap: 2px;
      color: rgba(20, 40, 20, 1);
      min-height: 50vh;
      }

    .styleGrid p{
      max-width: 300px;
    }



 @media(max-width: 1800px){

       .styleIcons{
         font-size: 1.5rem;
        }
    }


 @media(max-width: 1300px){
   .styleGrid {
      grid-template-columns: 5fr 4fr;
      grid-template-rows: 2fr 1fr 1fr 2fr;
      grid-template-areas:
        "left topleft"
        "bottom topleft"
        "bottom topright"
        "right topright";
      }

      .sblock{
     padding: 20px;
    }
    .styleIcons{
         font-size: 1.3rem;
        }

    }


 @media(max-width: 900px){
   .styleGrid {
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     flex: 1 1 auto;

     }

    .sblock{
     padding: 10px;
    }

  }





</style>