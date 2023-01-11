<template>
     <button class="modalBTN" @click="onClick">
        <p>Impressum/ Datenschutz</p>
    </button>

</template>


<script>

export default {
    name: 'MButton',
    data(){
        return{
         
        }
    },

    methods: {
        onClick(){
            this.$emit('toggleModal')
        }

    }
    
}
</script>





<style>

.modalBTN{
     position: fixed;
     bottom: 0;
     left:0;
     min-height: 5vh;
     width: 20vw;
     z-index:90;
     border: 4px solid var(--themeColDark);
     font-size: 1.8rem;
     color: rgb(233, 244, 222);
     text-shadow: 1px 1px 10px var(--themeCol);
     background:  var(--themeColorDark);
     border-radius: 10px;
         }


.modalBTN p{
    margin: 10px;
     background:  var(--themeColDark);
         }


.modalBTN:hover{
    color: rgba(20, 20, 20, 0.9);
    background: var(--themeCol);
    cursor: pointer;
}

.modalBTN:hover p{
    font-weight: 600;
    color: rgba(20, 20, 20, 0.9);
    background: var(--themeCol);

}


 @media(max-width: 1500px){

   
    .modalBTN{
         width: 60vw;
             }


  }


</style>