<template>
  <v-card class="main-card-contacts mx-auto">
    <v-container fluid class="big-container">
      <v-card-title>Контакты</v-card-title>
      <v-divider />
      <v-row>
        <v-col col="12" sm="6">
          <v-icon size="48px" class="contacts-icon" color="black">mdi-map-marker</v-icon>
          <p class="contact-subtext-address">мкрн. Самал 2</p>
        </v-col>
        <v-col col="12" sm="6" class="px-0">
          <v-icon size="48px" class="contacts-icon" color="black">mdi-email-outline</v-icon>
          <p class="contact-subtext-email">ht-kz@gmail.com</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12" sm="6">
          <v-icon size="48px" class="contacts-icon" color="black" @click="toWhatsApp(phoneNumber)">mdi-phone</v-icon>
          <p class="contact-subtext-phone">+7 (700) 086-51-51</p>
        
        </v-col>
        <v-col col="12" sm="6" class="px-0">
          <v-icon size="48px" class="contacts-icon" color="black" @click="toInsagram(instaLink)">mdi-instagram</v-icon>
          <p class="contact-subtext-insta"> @rentpro.kz</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="pb-0 d-flex align-center justify-center">
          <YandexMap width="420" height="280"/>
        </v-col>
      </v-row>
      <v-divider />
    </v-container>
  </v-card>
</template>

<script>
import YandexMap from '@/components/YandexMap'
export default {
  name: 'Contacts',
  components: {
    YandexMap,
  },
  data() {
    return {
      mapUrl: "https://yandex.kz/map-widget/v1/?ll=76.916743%2C43.233219&mode=whatshere&utm_source=main_stripe_big&whatshere%5Bpoint%5D=76.915446%2C43.236787&whatshere%5Bzoom%5D=17&z=15.89",
      phoneNumber: "77000865151",
      instaLink: "https://www.instagram.com/rentpro.kz/"
    }
  },
  methods: {
    toWhatsApp(phoneNumber) {
      let whatsAppLink = 'https://wa.me/' + phoneNumber
      window.open(whatsAppLink, '_blank')
    },
    toInsagram(instaLink) {
      window.open(instaLink, '_blank')
    }
  },
}
</script>

<style scoped>
.main-card-contacts {
  opacity: 80%;
}
</style>