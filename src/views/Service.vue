<template>
  <v-card
    class="main-card mx-auto"
    max-width="850"
  >
    <v-container fluid class="hidden-sm-and-up">
      <v-card-title>Услуги</v-card-title>
      <v-divider />
      <v-row dense>
        <v-col cols="12">
          <v-card class="top-card-small">
            <v-img 
              :src="require('../../public/business_laptop.jpg')"
              class="light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
              height="160px"
            >
              <v-card-title class="text-h5">"Бизнес класс" аренда</v-card-title>
              <v-card-subtitle>Ноутбуки бизнес класса справятся с любыми задачами на отлично</v-card-subtitle>
              <v-card-actions>
                <v-btn
                class="light white--text"
                color="transparent"
                @click="goToSpecificatons"
                >
                  <v-icon left>mdi-format-list-bulleted</v-icon>
                  {{ "каталог" }}
                </v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="middle-card-small" color="#385F73" dark>
            <v-img
              :src="require('../../public/rental_laptop.jpg')"
              class="light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
              height="189px"
            >
              <v-card-title class="text-h5">Стоимость аренды</v-card-title>
              <v-card-subtitle>
                <v-simple-table class="price-table-small" dense>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-center">Срок</th>
                        <th class="text-left">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in prices"
                        :key="item.duration"
                      >
                        <td class="text-center">{{ item.duration }}</td>
                        <td class="text-left">{{ item.price }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="bottom-card-small" color="#385F73" dark>
            <v-img
              :src="require('../../public/long-term_laptop.jpg')"
              class="light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
              height="180px"
            >
              <v-card-title class="text-h5">Долгосрочная аренда</v-card-title>
              <v-card-subtitle>Вам требуется техника на несколько недель или месяцев?</v-card-subtitle>
              <v-card-actions>
                <v-card-text>В этом случае вы можете рассчитывать на скидки до 80%</v-card-text>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="hidden-xs-only mt-16">
      <v-card-title>Услуги</v-card-title>
      <v-divider />
      <v-row dense>
        <v-col cols="12">
          <v-card class="top-card-large" color="#385F73" dark>
            <v-img
              :src="require('../../public/business_laptop.jpg')"
              class="light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
              height="200px"
            >
              <v-card-title class="text-h5">"Бизнес класс" аренда</v-card-title>
              <v-card-subtitle>Ноутбуки бизнес класса справятся с любыми задачами на отлично</v-card-subtitle>
              <v-card-actions>
                <v-btn
                class="light white--text mt-13"
                color="transparent"
                @click="goToSpecificatons"
                >
                  <v-icon left>mdi-format-list-bulleted</v-icon>
                  {{ "каталог" }}
                </v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="middle-card-large" color="#385F73" dark>
            <v-img
              :src="require('../../public/rental_laptop.jpg')"
              class="light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
              height="210px"
            >
              <v-card-title class="text-h5">Стоимость аренды</v-card-title>
              <v-card-subtitle>
                <v-simple-table class="price-table-small" dense>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-center">Срок</th>
                        <th class="text-center">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in prices"
                        :key="item.duration"
                      >
                        <td class="text-center">{{ item.duration }}</td>
                        <td class="text-center">{{ item.price }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="bottom-card-large" color="#385F73" dark>
            <v-img
              :src="require('../../public/long-term_laptop.jpg')"
              class="light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
              height="185px"
            >
              <v-card-title class="text-h5">Долгосрочная аренда</v-card-title>
              <v-card-subtitle>Вам требуется техника на несколько недель или месяцев?</v-card-subtitle>
              <v-card-actions>
                <v-card-text>В этом случае вы можете рассчитывать на скидки до 80%</v-card-text>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer class="footer" />
  </v-card>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Service',
  components: { Footer },
  data() {
    return {
      prices: [
        {
          duration: "1 день",
          price: "4 000 тг.",
        },
        {
          duration: "4 дня",
          price: "14 000 тг.",
        },
        {
          duration: "14 дней",
          price: "29 700 тг.",
        },
      ],
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
.card {
  height: 720px;
}
.price-table-small {
  background-color: transparent;
  height: 140px;
}
.top-card-large {
  height: 200px;
}
.middle-card-large {
  height: 210px
}
.bottom-card-large {
  height: 185px
}
.top-card-small {
  height: 160px;
}
.middle-card-small {
  height: 188px;
}
.bottom-card-small {
  height: 180px;
}
</style>