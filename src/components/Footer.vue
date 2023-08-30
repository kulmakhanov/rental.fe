<template>
  <v-footer app class="footer" padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>hiretech.kz</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>

</style>