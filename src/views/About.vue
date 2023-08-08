<template>
    <v-card
      class="card mx-auto"
      max-width="850"
      :img="require('../../public/keyboard.webp')"
    >
    <v-container fluid class="mt-16">
      <v-card-title>Преимущества</v-card-title>
      <v-divider />
      <v-card-text class="hidden-sm-and-up pa-0">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="light white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="190px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="hidden-xs-only pa-0">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="light white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
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
  name: 'About',
  components: { Footer },
  data: () => ({
    cards: [
      { title: 'Выбор подходящего ноутбука', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Установка необходимого ПО', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
      { title: 'Доставка или самовывоз', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
    ],
  }),
}
</script>

<style scoped>
.card {
  height: 720px;
}
</style>