<template>
  <v-card
    class="card mx-auto"
    max-width="850"
    :img="require('../../public/background_main.webp')"
  >
    <v-container fluid class="mt-16">
      <v-card-title>Trust us</v-card-title>
      <v-divider />
      <v-card-text class="hidden-sm-and-up pa-0" align="center">
        <v-row dense>
          <v-col
            v-for="logo in logos"
            :key="logo.title"
            :cols="logo.flex"
          >
            <v-img
              :src="logo.src"
              :contain="true"
              class="logo align-center my-5"
            >
            </v-img>
          </v-col>
        </v-row>  
        <v-divider /> 
      </v-card-text>
      <v-card-text class="hidden-xs-only pa-0" align="center">
        <v-row dense>
          <v-col
            v-for="logo in logos"
            :key="logo.title"
            :cols="logo.flexL"
          >
            <v-img
              :src="logo.src"
              :contain="true"
              class="logo align-center my-5"
            >
            </v-img>
          </v-col>
        </v-row>  
        <v-divider /> 
      </v-card-text>
    </v-container>
    <Footer class="footer" />
  </v-card>
</template>
  
<script>
import Footer from '../components/Footer' 
export default {
  name: 'Features',
  components: { Footer },
  data() {
    return {
      logos: [
        {
          title: 'Mitsubishi',
          src:"https://logodix.com/logo/9471.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'Halyq Bank',
          src: "https://cdn.freebiesupply.com/logos/large/2x/halyk-bank-logo-svg-vector.svg",
          flex: 4,
          flexL: 3
        },
        {
          title: 'KazakhAltyn',
          src: "https://aaeservice.kz/wp-content/uploads/2020/12/ktt-test-black.svg",
          flex: 4,
          flexL: 3
        },
        {
          title: 'UNDP',
          src: "https://logodix.com/logo/1062819.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'Nestle',
          src: "https://logodix.com/logo/47653.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'PepsiCo',
          src: "https://logodix.com/logo/60998.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'Tikkurila',
          src: "https://toplogos.ru/images/logo-tikkurila.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'Bayern FC',
          src: "https://static.wixstatic.com/media/61f8ca_3a29112ce7bb4dd0b6fa838942dd0005~mv2.png/v1/fill/w_108,h_108,al_c,q_80,usm_0.66_1.00_0.01/61f8ca_3a29112ce7bb4dd0b6fa838942dd0005~mv2.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'Barcelona FC',
          src: "https://static.wixstatic.com/media/61f8ca_33da99165bfa4169a4a888cdf5d9ad2f~mv2.png/v1/fill/w_108,h_108,al_c,q_80,usm_0.66_1.00_0.01/61f8ca_33da99165bfa4169a4a888cdf5d9ad2f~mv2.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'Jysan',
          src: "https://jusan.kz/file-server/filename?dir=logo&filename=logo-desktop2.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'EY',
          src: "https://logodix.com/logo/917113.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'Efes ',
          src: "https://static.wixstatic.com/media/61f8ca_d4f8591209b142068a272d3c7afddc7a~mv2.png/v1/fill/w_108,h_108,al_c,q_80,usm_0.66_1.00_0.01/61f8ca_d4f8591209b142068a272d3c7afddc7a~mv2.png",
          flex: 4,
          flexL: 3
        },
        {
          title: 'School ',
          src: "https://static.wixstatic.com/media/61f8ca_b19c1886ad39425fa76e991d4b54177f~mv2.png/v1/fill/w_108,h_108,al_c,q_80,usm_0.66_1.00_0.01/61f8ca_b19c1886ad39425fa76e991d4b54177f~mv2.png",
          flex: 4,
          flexL: 4
        },
        {
          title: 'AAE ',
          src: "https://static.wixstatic.com/media/61f8ca_1127d9184a6f489e80531c4d4e3813e8~mv2.png/v1/fill/w_108,h_108,al_c,q_80,usm_0.66_1.00_0.01/61f8ca_1127d9184a6f489e80531c4d4e3813e8~mv2.png",
          flex: 4,
          flexL: 4
        },
        {
          title: 'DAR ',
          src: "https://static.wixstatic.com/media/61f8ca_4120e8d2ae334ac5a9c8d9fb3138f697~mv2.png/v1/fill/w_108,h_108,al_c,q_80,usm_0.66_1.00_0.01/61f8ca_4120e8d2ae334ac5a9c8d9fb3138f697~mv2.png",
          flex: 4,
          flexL: 4
        },
        // {
        //   title: 'Atlas ',
        //   src: "https://static.wixstatic.com/media/61f8ca_a1a95f9480124457bf4e9c02cd19a4d6~mv2.png/v1/fill/w_108,h_108,al_c,q_80,usm_0.66_1.00_0.01/61f8ca_a1a95f9480124457bf4e9c02cd19a4d6~mv2.png",
        // },
      ]
    }
  },
}  
</script>

<style scoped>
.card {
  height: 720px;
}
.logo {
    width: 68px;
    height: 68px;
}
</style>