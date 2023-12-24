<template>
  <v-carousel 
    cycle
    height="auto"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(logosChunk, index) in chunkedLogos" :key="index" class="carousel-item">
      <div class="logo-container">
        <v-img 
          v-for="(logo, logoIndex) in logosChunk"
          :key="logoIndex"
          class="carousel-logo"
          :src="logo.src"
          lazy
        /> 
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import partners from "../partners/partners"
export default {
  name: 'CardCarousel',
  computed: {
    chunkedLogos() {
      const result = []
      for (let i = 0; i < this.items.length; i += this.itemsPerSlide) {
        result.push(this.items.slice(i, i + this.itemsPerSlide))
      }
      return result
    },
  },
  data() {
    return {
      model: 0,
      itemsPerSlide: 4,
      items: partners.partners,
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.carousel-logo {
  max-width: 80px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.carousel-item {
  transition: opacity 0.5s;
}
</style>