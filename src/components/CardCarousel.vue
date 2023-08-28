<template>
  <v-carousel 
    cycle
    height="auto"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(logosChunk, index) in chunkedLogos" :key="index">
      <div class="logo-container">
        <v-img 
          v-for="(logo, logoIndex) in logosChunk"
          :key="logoIndex"
          class="carousel-logo"
          :src="logo.src"
        /> 
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
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
      itemsPerSlide: 5,
      items: [
        {
          title: 'Mitsubishi',
          src: require("../../public/company-logo/mitsubishi.png"),
        },
        {
          title: 'Halyq Bank',
          src: require("../../public/company-logo/qazqom.png"),
        },
        {
          title: 'KazakhAltyn',
          src: require("../../public/company-logo/kazakhaltyn.png"),
        },
        {
          title: 'UNDP',
          src: require("../../public/company-logo/undp.png"),
        },
        {
          title: 'Nestle',
          src: require("../../public/company-logo/nestle.png"),
        },
        {
          title: 'PepsiCo',
          src: require("../../public/company-logo/pepsico.png"),
        },
        {
          title: 'Tikkurila',
          src: require("../../public/company-logo/tikkurila.png"),
        },
        {
          title: 'Bayern FC',
          src: require("../../public/company-logo/nonon.png"),
        },
        {
          title: 'Barcelona FC',
          src: require("../../public/company-logo/fitnation.png"),
        },
        {
          title: 'Jysan',
          src: require("../../public/company-logo/jysan.png"),
        },
        {
          title: 'EY',
          src: require("../../public/company-logo/eyoung.png"),
        },
        {
          title: 'Efes ',
          src: require("../../public/company-logo/efes.png"),
        },
        {
          title: 'School ',
          src: require("../../public/company-logo/school.png"),
        },
        {
          title: 'AAE ',
          src: require("../../public/company-logo/aaengine.png"),
        },
        {
          title: 'DAR ',
          src: require("../../public/company-logo/dar.png"),
        },
        {
          title: 'Vysotski',
          src: require("../../public/company-logo/vysotcki.svg"),
        },
        {
          title: 'VisitAlmaty',
          src: require("../../public/company-logo/visit_almaty.png"),
        },
        {
          title: 'Chimbulak',
          src: require("../../public/company-logo/chimbulak-gornolyizhka.png")
        },
        {
          title: 'Akimat',
          src: require("../../public/company-logo/akimat_almaty.jpg")
        },
      ],
    }
  },
  methods: {

  },
}
</script>

<style scoped>
.carousel-logo {
  max-width: 84px;
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
</style>