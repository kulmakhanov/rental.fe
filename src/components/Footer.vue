<template>
  <div>
    <v-footer app class="footer" paddless>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>hiretech.kz</strong>
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
  margin-top: 2px;
  bottom: 0;
  width: 100%;
}
</style>