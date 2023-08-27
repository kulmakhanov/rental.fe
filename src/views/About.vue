<template class="about-page">
  <v-card class="main-card mx-auto">
    <v-container fluid class="big-container">
      <v-card-title class="card-title">Преимущества</v-card-title>
      <v-divider />
      <v-card-text class="pa-0">
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="subcard">
              <v-img
                :src="card.src"
                class="subcard-text light white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
  </v-card>
</template>
  
<script>
import CardFooter from '@/components/CardFooter.vue';

export default {
    name: 'About',
    data: () => ({
        cards: [
          { title: 'Выбор подходящего ноутбука', src: require("../../public/laptop_res1.webp"), flex: 12 },
          { title: 'Установка необходимого ПО', src: require("../../public/laptop_res2.jpg"), flex: 6 },
          { title: 'Доставка или самовывоз', src: require("../../public/laptop_res3.avif"), flex: 6 },
        ],
    }),
    components: { CardFooter }
}
</script>