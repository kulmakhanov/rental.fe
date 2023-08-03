<template>
  <v-app class="wrapper">
    <Navbar class="nav" />
    <!-- <Footer class="footer" /> -->
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {

    }
  }, 
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap")
  repeat scroll 0 0 rgba(0, 0, 0, 0);

body {
  background: #fff;
}

.wrapper {
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

/* .nav {
  opacity: 90%;
}

.footer {
  opacity: 90%;
} */

@keyframes scroll {
  100% {
    background-position: 0px -400%;
  }
}

/* Fallback if the operatring system prefers reduced motion*/
@media (prefers-reduced-motion) {
  .wrapper {
    animation: scroll 800s linear infinite;
  }
}

@media (min-width: 670px) {
  .title {
    font-size: 5rem;
  }
}

</style>
