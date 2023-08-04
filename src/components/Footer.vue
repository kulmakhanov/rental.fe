<template>
  <div>
    <v-footer app class="footer">
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
  </div>
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
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>