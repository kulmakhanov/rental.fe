<template>
    <v-card
      class="mx-auto"
      max-width="850"
      :img="require('../../public/keyboard.webp')"
    >
      <v-container fluid class="mt-16">
        <v-card-title>Характеристики ноутбуков</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="12">
              <v-carousel v-model="model">
                <v-carousel-item v-for="(laptop, i) in laptops" :key="laptop">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-img
                  :src=laptop.img
                  height="250px"
                ></v-img>
                <v-card-title class="d-flex justify-center pb-0">{{ laptop.title }}</v-card-title>
                <div class="d-flex justify-end">
                  
                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                  
                </div>
                <v-divider class="pb-1"/>
                <v-expand-transition>
                  <div v-show="show">
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-carousel-item>
            </v-carousel>
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
  name: 'Specifications',
  components: { Footer },
  data() {
    return {
      model: 0,
      show: false,
      laptops: [
        {
          title: "Dell Ultrabook",
          img: require("../../public/dell_ultrabook.png"),
        },
        {
          title: "Dell Latitude",
          img: require("../../public/dell_latitude.png"),
        },
        {
          title: "Lenovo ThinkPad 12'''",
          img: require("../../public/lenovo_think.png"),
        },
        {
          title: "Lenovo ThinkPad 14''",
          img: require("../../public/lenovo_thinkpad.png"),
        },
      ],
    }
  }
}
</script>