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
  background-color: blue;
  /* background-image: url("../public/main_background.avif") ; */
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
