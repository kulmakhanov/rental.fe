<template>
  <v-app  style="background-image: backGroundSrc;">
    <Navbar class="nav" />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import "./assets/styles.scss"

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      backGroundSrc: require('../public/main_background.avif')
    }
  }, 
};
</script>