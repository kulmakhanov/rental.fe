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
          <v-list-item-content>{{ item.title }}</v-list-item-content>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item>
      </v-list>
      <Footer />
    </v-navigation-drawer>
    <v-app-bar app class="app-bar">
      <span class="small-nav hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
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
          <span>{{ item.title }}</span>
        </v-btn>
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
export default {
  name: 'Navbar',
  components: { Footer },
  data() {
    return {
      appTitle: "hiretech",
      sidebar: false,
      menuItems: [
        { title: "Преимущества", path: "/features", icon: "mdi-information-box-outline" },
        { title: "Услуги", path: "/service", icon: "mdi-account-group-outline" },
        { title: "Контакты", path: "/contacts", icon: "mdi-card-account-phone-outline" },
        { title: "Каталог", path: "/specifications", icon: "mdi-format-list-bulleted" },
      ],
    }
  }
}
</script>

<style scoped>

/* .app-bar {
  background-color: #ff5722;
  color: #ffffff;
} */
</style>