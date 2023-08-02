<template>
    <v-card
      class="mx-auto"
      max-width="850"
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
                  <v-col cols="12" md="9">
                    <static-text>Adress:</static-text>
                    <br/>
                    <static-text>Adress</static-text>
                  </v-col>  
                </v-row>
                <v-row class="mt-5">
                  <v-col cols="12" md="3">
                    <v-icon size="48px">mdi-email-outline</v-icon>
                  </v-col>
                  <v-col cols="12" md="9">
                    <static-text>Email:</static-text>
                    <br/>
                    <static-text>Email</static-text>
                  </v-col>
                </v-row>
                <v-row class="mt-5">
                  <v-col cols="12" md="3">
                    <v-icon size="48px">mdi-phone</v-icon>
                  </v-col>
                  <v-col cols="12" md="9">
                    <static-text>PhoneNumber:</static-text>
                    <br/>
                    <static-text>PhoneNumber</static-text>
                  </v-col>
                </v-row>
                <v-row class="mt-5">
                  <v-col cols=12 md="3">
                    <v-icon size="48px">mdi-instagram</v-icon>
                  </v-col>
                  <v-col cols="12" md="9">
                    <static-text>Instagram:</static-text>
                    <br/>
                    <static-text>Instagram</static-text>
                  </v-col>
                </v-row>
                <v-row class="mt-5">
                  <static-text>MessageMessage</static-text>
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
        </v-card-text>
      </v-container>
    </v-card>
  </template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      mapUrl: "https://yandex.kz/map-widget/v1/?ll=76.916743%2C43.233219&mode=whatshere&utm_source=main_stripe_big&whatshere%5Bpoint%5D=76.915446%2C43.236787&whatshere%5Bzoom%5D=17&z=15.89" 

    }
  },
}
</script>

<style scoped>

</style>