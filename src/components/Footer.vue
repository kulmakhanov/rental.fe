<template>
  <div>
    <v-footer app class="footer" paddless>
      <div class="marquee-container">
        <p class="marquee-text">{{ marqueeContent }}</p>
      </div>
        <!-- <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>hiretech.kz</strong>
        </v-col> -->
      </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      marqueeContent: new Date().getFullYear() + " hiretech.kz"
    }
  },
}
</script>

<style scoped>
/* .footer {
  position: fixed;
  margin-top: 2px;
  bottom: 0;
  width: 100%;
} */
.marquee-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-text {
  display: inline-block;
  animation: marquee 10s linear infinite; /* Измените значение времени и анимации по вашему усмотрению */
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