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
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = 'Hiretech - ' + to.meta.title || 'Some different title'
      }
    },
  },
  data() {
    return {
      backGroundSrc: require('../public/main_background.avif')
    }
  }, 
};
</script>