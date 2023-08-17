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


.marquee-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.marquee-content {
  display: inline-block;
  animation: marquee 30s linear infinite;
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
}
.marquee-text {
  margin: 0;
}
.marquee-img {
  height: auto;
  margin-right: 10px;
}
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>