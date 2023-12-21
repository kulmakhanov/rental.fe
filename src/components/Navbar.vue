<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app width="100%">
      <div class="d-flex align-center">
      <router-link to="/" tag="span" class="main-button d-flex ml-5">
        {{ appTitle }}
      </router-link>
      <v-spacer />
      <v-btn 
        class="d-none d-flex"
        x-large
        icon
        @click="sidebar = !sidebar"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
      <v-list>
        <v-list-item
          class="nav-mobile-list"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ $t(item.title) }}</v-list-item-content>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item>
        <v-divider class="py-1"/>
        <v-list-item>
          <LocaleSetterSmall @toggle="toggle" />
        </v-list-item>
        <v-divider />
        <ThemeSwitch isMobile />
      </v-list>
      <Footer />
    </v-navigation-drawer>
    <v-app-bar app class="app-bar">
      <span class="small-nav hidden-sm-and-up">
        <v-app-bar-nav-icon @click="toggle">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="main-button">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="large-nav hidden-xs-only">
        <v-btn
          class="menu-buttons"
          plain
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          <span>{{ $t(item.title) }}</span>
        </v-btn> 
        <LocaleSetter/>
      </v-toolbar-items>     
    </v-app-bar>
    <v-main class="main-container">
      <router-view></router-view>
      <Footer class="footer" />
    </v-main>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import LocaleSetter from './LocaleSetter'
import LocaleSetterSmall from './LocaleSetterSmall'
import ThemeSwitch from './ThemeSwitch'
// import WeatherService from '../services/WeatherService'

export default {
  name: 'Navbar',
  components: { 
    Footer,
    LocaleSetter,
    LocaleSetterSmall,
    ThemeSwitch,
  },
  data() {  
    return {
      appTitle: "hiretech",
      sidebar: false,
      menuItems: [
        { title: "features", path: "/features", icon: "mdi-information-box-outline" },
        { title: "services", path: "/service", icon: "mdi-account-group-outline" },
        { title: "contacts", path: "/contacts", icon: "mdi-card-account-phone-outline" },
        { title: "catalog", path: "/specifications", icon: "mdi-format-list-bulleted" },
      ],
    }
  },
  // mounted() {
  //   this.fetchWeather()
  // },
  methods: {
    toggle() {
      this.sidebar = !this.sidebar
    },
    // async fetchWeather() {
    //   try {
    //     const res = await WeatherService.getWeather()
    //     this.weather = res
    //     console.log(this.weather)
    //   }
    //   catch(e) {
    //     console.log("Error in weather API", e)
    //   }
    // },
  },
}
</script>