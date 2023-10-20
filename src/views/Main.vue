<template>
  <v-container fluid class="main d-flex pr-0">
    <div>
      <div>
        <h1 class="main-header">{{ $t('rental_service') }}<br>{{ $t('in_almaty') }}</h1>
      </div>
      <div class="main-subheader">
        <h4>+7 (700) 088-88-19
          <v-icon color="white" class="mb-1" @click="toWhatsApp(phoneNumber)">mdi-whatsapp</v-icon>
        </h4>
      </div>
      <div class="main-subheaderSec">
        <h4>rentpro.kz@gmail.com</h4>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      phoneNumber: "77000888819"
    }
  },
  methods: {
    toWhatsApp(phoneNumber) {
      let whatsAppLink = 'https://wa.me/' + this.phoneNumber
      window.open(whatsAppLink, '_blank')
    },
  }
}
</script>

