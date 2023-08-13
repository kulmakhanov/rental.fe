<template>
  <v-container fluid class=" d-flex">
    <div class="mx-auto">
      <h1 class="main-header d-flex">Аренда ноутбуков <br>в Алматы</h1>
      <h4 class="main-subheader d-flex">+7 (700) 086-51-51</h4>
      <h4 class="main-subheaderSec d-flex">rentpro.kz@gmail.com</h4>
    </div>
    <Footer class="footer" />
  </v-container>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Main',
  components: { Footer }
}
</script>

