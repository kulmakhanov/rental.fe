<template>
  <v-card
    class="mx-auto"
    max-width="850"
    :img="require('../../public/keyboard.webp')"
  >
    <v-container fluid class="mt-16">
      <v-card-title>Trust us</v-card-title>
      <v-card-text align="center">
        <v-row dense>
          <v-col
            v-for="logo in logos"
            :key="logo.title"
            :cols="logo.flex"
          >
            <v-img
              :src="logo.src"
              class="logo align-center my-5"
            >
            </v-img>
            <span>{{ logo.title }}</span>
          </v-col>
        </v-row>   
      </v-card-text>
    </v-container>
  </v-card>
</template>
  
<script>
export default {
  name: 'Features',
  data() {
    return {
      logos: [
        {
          title: 'Chelsea FC',
          src:"https://logodix.com/logo/1931301.png",
          flex: 4
        },
        {
          title: 'FC Barcelona',
          src: "https://logodix.com/logo/1931301.png",
          flex: 4
        },
        {
          title: 'FC Bayern',
          src: "https://logodix.com/logo/1931274.png",
          flex: 4
        },
        {
          title: 'Liverpool FC',
          src: "https://logodix.com/logo/4586.png",
          flex: 4
        },
        {
          title: 'Chelsea FC',
          src: "https://logodix.com/logo/1931301.png",
          flex: 4
        },
        {
          title: 'Barcelona FC',
          src: "https://logodix.com/logo/1931301.png",
          flex: 4
        },
        {
          title: 'Liverpool FC',
          src: "https://logodix.com/logo/4586.png",
          flex: 4
        },
        {
          title: 'Bayern FC',
          src: "https://logodix.com/logo/1931274.png",
          flex: 4
        },
        {
          title: 'Barcelona FC',
          src: "https://logodix.com/logo/1931301.png",
          flex: 4
        },
        {
          title: 'Liverpool FC',
          src: "https://logodix.com/logo/4586.png",
          flex: 4
        },
        {
          title: 'Barcelona FC',
          src: "https://logodix.com/logo/1931301.png",
          flex: 4
        },
        {
          title: 'Chelsea FC',
          src: "https://logodix.com/logo/1931301.png",
          flex: 4
        },
      ]
    }
  },
}  
</script>

<style scoped>
.logo {
    width: 68px;
    height: 68px;
}
</style>