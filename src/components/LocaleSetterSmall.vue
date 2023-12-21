<template>
  <v-menu bottom offset-y>
    <template #activator="{ on }">
      <v-btn
        text
        color="transparent"
        class="pl-0"
        v-on="on"
      >
        <v-img class="flags" :src="$t('btnIcon')"/>
        <p
          class="locale-text"
          :class="{ 'white--text': $vuetify.theme.dark, 'black--text': !$vuetify.theme.dark }"
        >
          {{ $t('choose_language') }}
        </p>
        <v-icon color="grey" class="mt-1">mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in locales"
        :key="locale.title"
        @click="setLocale(locale.key)"
      >
        <v-list-item-title class="d-flex">
          <v-col cols="4" class="pa-0 mr-2"><v-img class="flags" :src="locale.icon"/></v-col>
          <v-col cols="8" class="pa-0"><p class="mt-2">{{ locale.title }}</p></v-col>      
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
  
<script>
export default {
  name: 'LocaleSetterSmall',
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
      this.$emit('toggle')
    }
  },
}
</script>