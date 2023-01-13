<template>
        
    <div class="compShow">

        <div class="compInfo">
            <div class="aboutComp">
                <p>Frontend</p>
                <p>Backend</p>
                <p>Python</p>
            </div>
            <p class="introComp">Spannendes Design + smarte Funktion</p>

        </div>


        <div class="contInfo">
            <p class="contInfoTitle">Kontakt</p>
            <div class="contInfoCont">
                <p>{{ imprInfo.Name }}</p>
                <p>{{ imprInfo.email }}</p>
            </div>
        </div>

    </div>

</template>

<script>
export default {

    name: 'MainInfoComp',
    data() {
        return{
            imprInfo : {
        'Name': 'Stephan Schank',
        'Strasse': 'Blumenstr. 15-A',
        'Ort': '79194 Gundelfingen',
        'Tel': '0151 5150 2251',
        'email': 'pythonfr@mailbox.org'
    }


        }
    },
}
</script>


<style scoped>
    .compShow{
        display: flex;
        justify-content: space-between;
        min-height: 15vh;
        margin: 0;
         background-image:
         linear-gradient(145deg, transparent, rgba(200, 150, 180, 0.7)),
         linear-gradient(145deg, var(--themeColorLow) 30%, transparent),
         repeating-linear-gradient(0, rgba(122, 142, 241, 0.01) 1px, transparent 2px, rgba(122, 212, 211, 0.001) 10px, rgba(122, 142, 241, 0.05) 12px),
         repeating-linear-gradient(0, transparent 3px,  var(--themeColorFade) 4px,transparent 6px, var(--themeColorFade) 8px);
       z-index: 50;
        }

     .compInfo{
      flex: 1 1 65%;
      display: flex;
      flex-direction: column;
      padding: 5px 0;
      justify-content: space-between;


    }

     .introComp{
      align-self: center;
      padding-top: 5px;
      font-size: 2.5rem;
      font-family: Tahoma, sans-serif;

    }

    .aboutComp{
        display: flex;
        justify-content: space-around;
        margin-left: 10px;
        font-family: Verdana, sans-serif;
        font-size: 2.9rem;

    }


    .contInfo{
      flex: 1 1 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 0px;
      padding-bottom: 5px;
      padding-left: 30px;
      font-family: 'Montserrat', sans-serif;
      clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 15% 0%);
      background: linear-gradient(0, rgba(120,200, 150, 0.5) 10%, rgba(250, 250, 250, 0.3) 80%);
      backdrop-filter: blur(2rem);
    }

    .contInfo * {
        margin: 5px;

    }


    .contInfoTitle {
        margin: 3px;
        font-size: 2.8rem;
        color: rgba(40,120, 100, 1);

    }


      .contInfoCont{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 40px;
          color: rgba(250, 230, 240, 1);
           font-size: 1.6rem;
        }


        .contInfoCont p{
          margin: 0;
          padding: 0;
        }




  @media(max-width: 1100px){

     .compShow{
        flex-direction: column;
        max-height: 30vh;
     }

      .aboutComp{
        flex-wrap: wrap;
        margin: 0;
        font-size: 1.8rem;
    }

      .introComp{
      font-size: 1rem;

    }

     .contInfo{
      flex-direction: row;
       justify-content: space-evenly;
       gap: 0;
       clip-path: none;
         max-height: 10vh;
      }

       .contInfoTitle {
        font-size: 1.3rem;

    }

    .contInfoCont{
          flex-direction: column;
          max-height: 80%;
          font-size: 1.3rem;
          padding: 0px;
    }

  }


 @media(min-width: 1500px){
     .aboutComp{
        margin-right: 30%;
    }

       .contInfo{
          justify-content: flex-end;
          padding-left: 80px;
          }

    .contInfoCont{
          flex-direction: row;
          margin: 0;
         
    }

    .contInfoCont p{
          margin-left: 25px;
        }




  }
</style>