<template>
  <v-menu
    bottom
    offset-y
    :close-on-content-click="false"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        color="transparent"
        class="mx-2"
        v-on="on"
      >
        <v-img class="flags" :src="$t('btnIcon')"/>
        <v-icon color="grey" class="mt-1">mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-subheader>{{ $t('choose_language') }}</v-subheader>
      <v-list-item
        v-for="locale in locales"
        :key="locale.title"
        class="pa-1"
        @click="setLocale(locale.key)"
      >
        <v-list-item-title class="d-flex">
          <v-col cols="4" class="pa-0 mr-2"><v-img class="flags" :src="locale.icon"/></v-col>
          <v-col cols="8" class="pa-0"><p class="mt-2">{{ locale.title }}</p></v-col>      
        </v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-subheader>{{ $t('choose_theme') }}</v-subheader>
      <ThemeSwitch />
    </v-list>
  </v-menu>
</template>

<script>
import ThemeSwitch from './ThemeSwitch'

export default {
  name: 'LocaleSetter',
  components: { ThemeSwitch, },
  data() {
    return {
      locales: [
        { key: 'ru', title: 'Русский', icon: require('../../public/flags-locales/ru.png') },
        { key: 'kz', title: 'Қазақша', icon: require('../../public/flags-locales/kz.png') },
        { key: 'en', title: 'English', icon: require('../../public/flags-locales/en.png') },
      ],
    }
  },
  methods: {
    setLocale(key) {
      this.$i18n.locale = key
      localStorage.setItem('lang', key)
    }
  },
}
</script>