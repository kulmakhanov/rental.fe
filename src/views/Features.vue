<template>
  <v-card
    class="main-card mx-auto"
    max-width="850"
  >
    <v-container fluid class="hidden-sm-and-up">
      <v-card-title>Нам доверяют</v-card-title>
      <v-card-text class="pa-0" align="center">
        <v-row dense>
          <v-col
            v-for="logo in logos"
            class="custom-border-small"
            :key="logo.title"
            :cols="logo.flex"
          >
            <v-img
              :src="logo.src"
              class="align-center my-5"
              :height="logo.heightSmall"
              :width="logo.widthSmall"
            >
            </v-img>
          </v-col>
        </v-row> 
      </v-card-text>
    </v-container>
    <v-container fluid class="hidden-xs-only mt-16">
      <v-card-title>Нам доверяют</v-card-title>
      <v-card-text class="pa-0" align="center">  
        <v-row dense>
          <v-col
            v-for="logo in logos"
            class="custom-border-large"
            :key="logo.title"
            :cols="logo.flexL"
          >
            <v-img
              :src="logo.src"
              :contain="true"
              class="logo align-center my-5"
              :height="logo.heightLarge"
              :width="logo.widthLarge"
            >
            </v-img>
          </v-col>
        </v-row>   
      </v-card-text>
    </v-container>
    <Footer class="footer" />
  </v-card>
</template>
  
<script>
import Footer from '../components/Footer' 
export default {
  name: 'Features',
  components: { Footer },
  data() {
    return {
      logos: [
        {
          title: 'Mitsubishi',
          src: require("../../public/company-logo/mitsubishi.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "70%",
          widthSmall: "100%",
          heightLarge: "85%",
          widthLarge: "100%",
        },
        {
          title: 'Halyq Bank',
          src: require("../../public/company-logo/qazqom.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "70%",
          widthSmall: "100%",
          heightLarge: "85%",
          widthLarge: "100%",
        },
        {
          title: 'KazakhAltyn',
          src: require("../../public/company-logo/kazakhaltyn.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "85%",
          widthLarge: "100%",
        },
        {
          title: 'UNDP',
          src: require("../../public/company-logo/undp.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "85%",
          widthLarge: "100%",
        },
        {
          title: 'Nestle',
          src: require("../../public/company-logo/nestle.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "85%",
          widthLarge: "80%",
        },
        {
          title: 'PepsiCo',
          src: require("../../public/company-logo/pepsico.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "90%",
          widthLarge: "100%",
        },
        {
          title: 'Tikkurila',
          src: require("../../public/company-logo/tikkurila.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "77%",
          widthLarge: "77%",
        },
        {
          title: 'Bayern FC',
          src: require("../../public/company-logo/nonon.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "80%",
          widthLarge: "80%",
        },
        {
          title: 'Barcelona FC',
          src: require("../../public/company-logo/fitnation.png"),
          flexL: 3,
          heightSmall: "85%",
          widthSmall: "97px",
          heightLarge: "80%",
          widthLarge: "100%",
        },
        {
          title: 'Jysan',
          src: require("../../public/company-logo/fhbank.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "80%",
          widthLarge: "100%",
        },
        {
          title: 'EY',
          src: require("../../public/company-logo/eyoung.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "80%",
          widthLarge: "100%",
        },
        {
          title: 'Efes ',
          src: require("../../public/company-logo/efes.png"),
          flex: 4,
          flexL: 3,
          heightSmall: "72%",
          widthSmall: "100%",
          heightLarge: "85%",
          widthLarge: "100%",
        },
        {
          title: 'School ',
          src: require("../../public/company-logo/school.png"),
          flex: 4,
          flexL: 4,
          heightSmall: "80%",
          widthSmall: "100%",
          heightLarge: "100%",
          widthLarge: "100%",
        },
        {
          title: 'AAE ',
          src: require("../../public/company-logo/aaengine.png"),
          flex: 4,
          flexL: 4,
          heightSmall: "80%",
          widthSmall: "100%",
          heightLarge: "100%",
          widthLarge: "100%",
        },
        {
          title: 'DAR ',
          src: require("../../public/company-logo/dar.png"),
          flex: 4,
          flexL: 4,
          heightSmall: "80%",
          widthSmall: "100%",
          heightLarge: "100%",
          widthLarge: "100%",
        },
      ]
    }
  },
}  
</script>

<style scoped>
.custom-border-small {
  border: 1px solid #ccc;
  padding: 1px;
  height: 130px;
}
.custom-border-large {
  border: 1px solid #ccc; /* Пример пользовательских стилей границы */
  padding: 1px; /* Добавьте отступ для лучшего визуального разделения */
  height: 150px;
}
.card {
  height: 720px;
}
/* .logo-sm {
    width: 65px;
    height: 76px;
} */
</style>