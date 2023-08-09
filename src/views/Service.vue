<template>
  <v-card
    class="card mx-auto"
    max-width="850"
    :img="require('../../public/background_main.webp')"
  >
    <v-container fluid class="mt-16">
      <v-card-title>Услуги</v-card-title>
      <v-divider />
      <v-card-text class="hidden-sm-and-up pa-0">
        <h3>Аренда ноутбука "Бизнес класса"</h3>
        <h5>Ноутбуки бизнес класса справятся с любыми задачами на отлично</h5>
        <v-img 
          :src="require('../../public/dell_background.webp')"
          height="150"
          width="150"
        >
        </v-img>
        <v-divider/>
        <h4>Стоимость аренды:</h4>
        <v-tabs vertical>
          <v-tab class="mr-1"><v-icon left>mdi-numeric-1</v-icon>день</v-tab>
          <v-tab class="mr-3"><v-icon left>mdi-numeric-4</v-icon>дня</v-tab>
          <v-tab><v-icon left>mdi-numeric-9</v-icon>дней</v-tab>
          <v-tab><v-icon left>mdi-numeric-9-plus</v-icon>дней</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Стоимость однодневной аренды составляет 4 000 тг.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Стоимость аренды на 4 дня составляет 14 000 тг.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Стоимость аренды на 9 дней составляет 29 700 тг.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>В случае долгосрочной аренды, вы можете рассчитывать на скидки до 80% от указанных на сайте</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
        </v-tabs>
        <p>Вам требуется техника на несколько недель или даже пару месяцев?<br/>
          В этом случае Вы можете рассчитывать на скидки до 80% от указанных на сайте.
        </p>
        <v-divider />
      </v-card-text>
      <v-card-text class="hidden-xs-only pa-0">
        <h3>Аренда ноутбука "Бизнес класса"</h3>
        <h5>Ноутбуки бизнес класса справятся с любыми задачами на отлично</h5>
        <v-img 
          :src="require('../../public/dell_background.webp')"
          height="200"
          width="200"
        >
        </v-img>
        <v-divider/>
        <h4>Стоимость аренды:</h4>
        <v-tabs horizontal>
          <v-tab class="mr-1"><v-icon left>mdi-numeric-1</v-icon>день</v-tab>
          <v-tab class="mr-3"><v-icon left>mdi-numeric-4</v-icon>дня</v-tab>
          <v-tab><v-icon left>mdi-numeric-9</v-icon>дней</v-tab>
          <v-tab><v-icon left>mdi-numeric-9-plus</v-icon>дней</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Стоимость однодневной аренды составляет 4 000 тг.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Стоимость аренды на 4 дня составляет 14 000 тг.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Стоимость аренды на 9 дней составляет 29 700 тг.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>В случае долгосрочной аренды, вы можете рассчитывать на скидки до 80% от указанных на сайте</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
        </v-tabs>
        <p>Вам требуется техника на несколько недель или даже пару месяцев?<br/>
          В этом случае Вы можете рассчитывать на скидки до 80% от указанных на сайте.
        </p>
        <v-divider />  
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

<style scoped>
.card {
  height: 720px;
}
</style>