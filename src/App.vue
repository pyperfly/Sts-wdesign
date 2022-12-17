<template>

  <HomeComp/>



</template>

<script>
import HomeComp from './components/Home.vue'


export default {
  name: 'App',
  components: {
    HomeComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


:root{

--marineTheme : rgba(120, 189, 233,1);
--desertTheme : rgba(180, 149, 33,1);


--themeCol : rgb(180, 159, 33);
--themeColBright : rgb(210, 189, 63);
--themeColDark : rgb(80, 69, 33);
--themeColorLow : rgba(170, 159, 43,0.6);
--themeColorFade : rgba(170, 149, 33,0.2);


--themeCol2 : rgb(180, 149, 33);
--themeColDark2 : rgb(80, 59, 23);
--themeColorLow2 : rgba(180, 149, 33,0.6);
--themeColorFade2 : rgba(180, 149, 33,0.2);
}


*{
  margin: 0;
  padding: 0;

}


body{
    color: rgb(233, 244, 222);
    height: 100vh;

    background:
    linear-gradient(rgba(15, 15, 15, 0.7), rgba(15, 15, 15, 0.6)),
    linear-gradient(0, rgb(23, 28, 22) 3px, transparent 0) 0 0,
    linear-gradient(90deg, rgb(23, 28, 22) 3px, transparent 0) 0 0,
    linear-gradient(145deg,rgb(43, 29, 26) 50%, transparent 0) 0 0,
    linear-gradient(35deg, rgb(39, 27, 25) 50%, rgb(43, 30, 22) 0) 0 0 rgb(33, 24, 15);
    background-size: 200px 120px;

    background-attachment: fixed;
       }

/* gluten-regular - latin */
@font-face {
  font-family: 'Gluten';
  font-style: normal;
  font-weight: 400;
}
</style>
