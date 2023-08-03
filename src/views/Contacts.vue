<template>
    <v-card
      class="card mx-auto"
      max-width="850"
      :img="require('../../public/keyboard.webp')"
    >
      <v-container fluid class="mt-16">
        <v-card-title class="ml-10">Контакты</v-card-title>
        <v-card-text class="pr-0">
            <v-row>
              <v-col cols="12" md="3">
                <v-row class="mt-5">
                  <v-col cols="12" md="3">
                    <v-icon size="48px">mdi-map-marker</v-icon>
                  </v-col>  
                  <v-col cols="12" md="9" class="mt-1">
                    <static-text>Адрес:</static-text>
                    <br/>
                    <static-text>мкрн. Самал 2</static-text>
                  </v-col>  
                </v-row>
                <v-row class="mt-10">
                  <v-col cols="12" md="3">
                    <v-icon size="48px">mdi-email-outline</v-icon>
                  </v-col>
                  <v-col cols="12" md="9" class="pr-0 mt-1">
                    <static-text>E-mail:</static-text>
                    <br/>
                    <static-text>rentpro.kz@gmail.com</static-text>
                  </v-col>
                </v-row>
                <v-row class="mt-10">
                  <v-col cols="12" md="3">
                    <v-icon size="48px">mdi-phone</v-icon>
                  </v-col>
                  <v-col cols="12" md="9" class="mt-1">
                    <static-text>Телефон:</static-text>
                    <br/>
                    <static-text>+7 (700) 086-51-51</static-text>
                  </v-col>
                </v-row>
                <v-row class="mt-10">
                  <v-col cols=12 md="3">
                    <a href="https://www.instagram.com/rentpro.kz/"  target="_blank">
                    <v-icon size="48px" @click="">mdi-instagram</v-icon>
                    </a>
                  </v-col>
                  <v-col cols="12" md="9" class="mt-1">
                    <static-text>Instagram:</static-text>
                    <br/>
                    <static-text>@rentpro.kz</static-text>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="9" class="pr-0">
                <div 
                  style="position:relative;
                    overflow:hidden;
                    padding-right: 0;"
                >
                  <a 
                    href="https://yandex.kz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps" 
                    style="color:#eee;font-size:12px;position:absolute;top:0px;">
                    Алматы
                  </a>
                  <a
                    href="https://yandex.kz/maps/162/almaty/house/Y08YfwZlSUICQFppfX5ydn5nZg==/?ll=76.916743%2C43.233219&utm_medium=mapframe&utm_source=maps&z=15.89" 
                    style="color:#eee;
                    font-size:12px;
                    position:absolute;
                    top:14px;"
                  >
                    Улица Байзакова, 280 — Яндекс Карты
                  </a>
                  <iframe
                    src="https://yandex.kz/map-widget/v1/?ll=76.916743%2C43.233219&mode=whatshere&utm_source=main_stripe_big&whatshere%5Bpoint%5D=76.915446%2C43.236787&whatshere%5Bzoom%5D=17&z=15.89" 
                    width="560"
                    height="400"
                    frameborder="1"
                    allowfullscreen="true"
                    style="position:relative;"
                  >
                  </iframe>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-icon size="48px">mdi-exclamation</v-icon>
                <static-text class="mt-5">Просьба заранее уведомлять о приезде к нам в офис</static-text>
            </v-row>
        </v-card-text>
        <Footer class="footer" />
      </v-container>
      
    </v-card>
  </template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Contacts',
  components: {
    Footer,
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
  height: 100%;
}
</style>