





function javaFuncs(){

const mlcomp = document.querySelector(".wrapModal")


window.addEventListener("click", (e)=>
    {
        if (e.target == mlcomp){
             mlcomp.classList.remove('mlcompAct')
        }
    }
    )

/*

const impbtn = document.querySelector(".toggleIMP")
const degbtn = document.querySelector(".toggleDEG")
 const mlimp = document.querySelector(".mlacat")
const mldeg = document.querySelector(".mlsCat")


 degbtn.addEventListener("click", ()=>
    {
        console.log("dumpfesdes")
         degbtn.style.display="none"
         impbtn.style.display="inline-block"
         mlimp.style.display="none"
         mldeg.style.display="block"
    }
    )

  impbtn.addEventListener("click", ()=>
    {
         degbtn.style.display="inline-block"
         impbtn.style.display="none"
         mlimp.style.display="block"
         mldeg.style.display="none"
    }
    )









    const bscreenQuery = window.matchMedia('(min-width: 1300px)')
    function bigScreen(e) {
      if (e.matches) {
        console.log('Media Query Matched!')
        /*degbtn.style.display="none"
        impbtn.style.display="none"
        mlimp.style.display="block"
        mldeg.style.display="block"
        

        
      }
    }
    bscreenQuery.addListener(bigScreen)
    bigScreen(bscreenQuery)



     const smscreenQuery = window.matchMedia('(max-width: 1300px)')
    function smallScreen(e) {
      if (e.matches) {
        console.log('Media Query Matched!')
        impbtn.style.display="block"
        mlimp.style.display="none"
      }
    }
    smscreenQuery.addListener(smallScreen)
    smallScreen(smscreenQuery)

    */

}


export default javaFuncs

javaFuncs()