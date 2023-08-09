<template>
  <v-app  class="wrapper">
    <Navbar class="nav" />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {

    }
  }, 
};
</script>

<style scoped>
.wrapper {
  background: url("../public/background_main.webp") ;
}
/* .wrapper {
  animation: scroll 100s linear infinite;
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"),
    #111111;
  color: #eee;
  height: 100vh;
  min-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;
}

@keyframes scroll {
  100% {
    background-position: 0px -400%;
  }
}

/* Fallback if the operatring system prefers reduced motion*/



</style>
