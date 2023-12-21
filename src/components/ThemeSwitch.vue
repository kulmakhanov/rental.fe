<template>
  <div :class="isMobile ? 'd-flex mt-2 ml-2 mr-3' : 'd-flex ml-2 mr-3'">
    <v-row :class="isMobile ? 'ml-3' : 'ml-1'">
      <v-icon
        size="32px"
        class="mr-1"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
      >
        mdi-theme-light-dark
      </v-icon>
      <v-switch
        v-model="themeSwitch"
        class="ml-2"
        :label="isMobile ? $t('choose_theme') : null"
      />
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "ThemeSwitch",
    props: {
      isMobile: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        themeSwitch: false,
      }
    },
    watch: {
      themeSwitch(newData) {
        if(typeof newData === "boolean") {
          this.$vuetify.theme.dark = newData
          localStorage.setItem('theme', JSON.stringify(newData))
        }
      },
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme')
      if(savedTheme) {
        this.themeSwitch = JSON.parse(savedTheme)
        this.$vuetify.theme.dark = this.themeSwitch
      }
    },
  }
</script>

<style scoped>

</style>