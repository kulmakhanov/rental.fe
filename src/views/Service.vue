<template>
  <v-card class="main-card mx-auto">
    <v-container fluid class="big-container">
      <v-card-title class="card-title">{{ $t('services') }}</v-card-title>
      <v-divider />
      <v-row dense>
        <v-col cols="12">
          <v-card class="top-card">
            <v-img 
              :src="require('../../public/business_laptop.jpg')"
              class="service-top-img light white--text align-start"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8)"
            >
              <v-card-title class="card-title">{{ $t('business_class_rental') }}</v-card-title>
              <v-card-subtitle>{{ $t('high_performance_laptops') }}</v-card-subtitle>
              <v-card-actions>
                <v-btn
                class="button-spec light white--text"
                color="transparent"
                @click="goToSpecificatons"
                >
                  <v-icon left>mdi-format-list-bulleted</v-icon>
                  {{ $t('laptop_catalog') }}
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
              <v-card-title class="card-title text pt-0">{{ $t('rental_cost') }}</v-card-title>
              <v-card-subtitle>{{ $t('rental_price') }}</v-card-subtitle>
              <v-card-title class="card-title-bottom pt-0">{{ $t('long_term_rental') }}</v-card-title>
              <v-card-subtitle class="py-0">{{ $t('for_long_term_rent') }}</v-card-subtitle>
              <v-card-text class="py-0">{{ $t('percent_sale') }}</v-card-text>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
        <v-card-title class="pb-0">{{ $t('trust_us') }}</v-card-title>
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