<template>
  <v-container fluid class="mt-16">
    <div class="mx-auto">
      <h1 class="header d-flex">Test header Almaty</h1>
      <h4 class="subheader d-flex">Phone number</h4>
      <h4 class="subheaderSec d-flex">Email</h4>
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

