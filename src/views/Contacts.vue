<template>
  <v-card
    class="card mx-auto"
    max-width="850"
    :img="require('../../public/keyboard.webp')"
  >
    <v-container fluid class="hidden-sm-and-up">
      <v-card-title>Контакты</v-card-title>
      <v-divider />
      <v-row>
        <v-col col="12" sm="4">
          <v-icon size="44px" class="mt-5 ml-15" color="black">mdi-map-marker</v-icon>
          <p class="mt-2 ml-8">мкрн. Самал 2</p>
        </v-col>
        <v-col col="12" sm="8" class="px-0">
          <v-icon size="46px" class="mt-5 ml-12" color="black">mdi-email-outline</v-icon>
          <p class="mt-2">rentpro.kz@gmail.com</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12" sm="4">
          <v-icon size="44px" class="mt-5 ml-15" color="black">mdi-phone</v-icon>
          <p class="mt-2 ml-5">+7 (700) 086-51-51</p>
        </v-col>
        <v-col col="12" sm="8" class="px-0">
          <a href="https://www.instagram.com/rentpro.kz/"  target="_blank">
            <v-icon size="44px" class="mt-5 ml-12" color="black" @click="">mdi-instagram</v-icon>
          </a>
          <p class="mt-2 ml-8"> @rentpro.kz</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="pb-0">
          <YandexMap width="400" height="260"/>
        </v-col>
      </v-row>
      <v-divider class="mt-5"/>
      <v-row class="mt-5">
        <v-icon size="38px" color="black">mdi-exclamation</v-icon>
        <p class="mt-4">Просьба заранее уведомлять о приезде</p>
      </v-row>
    </v-container>
    <v-container fluid class="hidden-xs-only mt-16">
      <v-row>
        <v-col cols="12" md="4">
          <v-row>
            <v-icon size="64px" class="mt-9 ml-3" color="black">mdi-map-marker</v-icon>
            <p class="mt-14 ml-2">мкрн. Самал 2</p>
          </v-row>
          <v-row>
            <v-icon size="64px" class="mt-10 ml-3" color="black">mdi-email-outline</v-icon>
            <p class="mt-14 ml-2">rentpro.kz@gmail.com</p>
          </v-row>
          <v-row>
            <v-icon size="64px" class="mt-9 ml-3" color="black" @click="">mdi-phone</v-icon>
            <p class="mt-14 ml-2">+7 (700) 086-51-51</p>
          </v-row>
          <v-row>
            <a href="https://www.instagram.com/rentpro.kz/"  target="_blank">
              <v-icon size="64px" class="mt-12 ml-3" color="black" @click="">mdi-instagram</v-icon>
            </a>
            <p class="mt-16 ml-2">@rentpro.kz</p>
          </v-row>
        </v-col>
        <v-col cols="12" md="8">
          <YandexMap width="560" height="450"/>
        </v-col>
      </v-row>
      <v-divider class="mt-10" />
      <v-row class="d-flex mt-5">
        <v-icon size="48px" color="black">mdi-exclamation</v-icon>
        <p class="mt-5">Просьба заранее уведомлять о приезде к нам в офис</p>
      </v-row>
    </v-container>
    <Footer class="footer" />
  </v-card>
</template>

<script>
import Footer from '../components/Footer'
import YandexMap from '@/components/YandexMap';
export default {
  name: 'Contacts',
  components: {
    Footer,
    YandexMap,
  },
  data() {
    return {
      mapUrl: "https://yandex.kz/map-widget/v1/?ll=76.916743%2C43.233219&mode=whatshere&utm_source=main_stripe_big&whatshere%5Bpoint%5D=76.915446%2C43.236787&whatshere%5Bzoom%5D=17&z=15.89" 

    }
  },
}
</script>

<style scoped>
.card {
  height: 720px;
}
.map {
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.15)
}
</style>