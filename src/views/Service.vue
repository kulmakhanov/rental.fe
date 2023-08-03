<template>
  <v-card
    class="card mx-auto"
    max-width="850"
    :img="require('../../public/keyboard.webp')"
  >
    <v-container fluid class="mt-16">
      <v-card-title>Услуги</v-card-title>
      <v-card-text>
        <h3>Аренда ноутбука "Бизнес класса"</h3>
        <h4>Ноутбуки бизнес класса справятся с любыми задачами на отлично</h4>
        <v-divider/>
        <h4>Стоимость аренды:</h4>
        <v-row>
          <v-col cols="12" md="4">
            <static-text>1 день</static-text>
          </v-col>
          <v-col cols="12" md="4">
            <static-text>4 дня</static-text>
          </v-col>
          <v-col cols="12" md="4">
            <static-text>11 дней</static-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <static-text>4 000 тг.</static-text>
          </v-col>
          <v-col cols="12" md="4">
            <static-text>14 000 тг.</static-text>
          </v-col>
          <v-col cols="12" md="4">
            <static-text>29 700 тг.</static-text>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <h3>Долгосрочная аренда</h3>
        <p>Вам требуется техника на несколько недель или даже пару месяцев?<br/>
            В этом случае Вы можете рассчитывать на скидки до 80% от указанных на сайте.
        </p>
      </v-card-text>
    </v-container>
    <Footer class="footer" />
  </v-card>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Service',
  components: { Footer }
}
</script>