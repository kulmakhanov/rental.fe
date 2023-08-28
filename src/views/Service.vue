<template>
  <v-card class="main-card mx-auto">
    <v-container fluid class="big-container">
      <v-card-title class="card-title">Услуги</v-card-title>
      <v-divider />
      <v-row dense>
        <v-col cols="12">
          <v-card class="top-card">
            <v-img 
              :src="require('../../public/business_laptop.jpg')"
              class="service-top-img light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
            >
              <v-card-title class="card-title">"Бизнес класс" аренда</v-card-title>
              <v-card-subtitle>Ноутбуки бизнес класса справятся с любыми задачами на отлично</v-card-subtitle>
              <v-card-actions>
                <v-btn
                class="light white--text"
                color="transparent"
                @click="goToSpecificatons"
                >
                  <v-icon left>mdi-format-list-bulleted</v-icon>
                  {{ "каталог ноутбуков" }}
                </v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="middle-card" color="#385F73" dark>
            <v-img
              :src="require('../../public/rental_laptop.jpg')"
              class="service-middle-img light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
            >
              <v-card-title class="card-title text pt-0">Стоимость аренды</v-card-title>
              <v-card-subtitle>
                {{ "От 5 000 тг. и выше (в зависимости от срока аренды)" }}
              </v-card-subtitle>
              <v-card-title class="card-title pt-0">Долгосрочная аренда</v-card-title>
              <v-card-subtitle class="py-0">При долгосрочной аренде</v-card-subtitle>
              <v-card-text class="py-0">Вы можете рассчитывать на скидки до 80%</v-card-text>
            </v-img>
          </v-card>
        </v-col>
        <!-- <v-col cols="6">
          <v-card class="bottom" color="#385F73" dark>
            <v-img
              :src="require('../../public/long-term_laptop.jpg')"
              class="service-bottom-img light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
            >
              <v-card-title class="text-h5">Долгосрочная аренда</v-card-title>
              <v-card-subtitle>Вам требуется техника на несколько недель или месяцев?</v-card-subtitle>
              <v-card-actions class="mt-8">
                <v-card-text>В этом случае вы можете рассчитывать на скидки до 80%</v-card-text>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col> -->
      </v-row>
        <v-card-title>Нам доверяют</v-card-title>
        <v-divider/>
        <CardCarousel/>
    </v-container>
  </v-card>
</template>

<script>
import CardCarousel from '@/components/CardCarousel';
export default {
  components: { CardCarousel },
  name: 'Service',
  data() {
    return {
    }
  },
  methods: {
    goToSpecificatons() {
      this.$router.push('/specifications')
    },
  },
}
</script>

<style scoped>
.price-table-small {
  background-color: transparent;
  height: 140px;
}
/* .card-title {
  opacity: 78%;
} */
</style>