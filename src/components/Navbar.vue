<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <span class="small-nav hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">
          {{ appTitle }}
          <v-icon color="black" class="mt-1" small>mdi-laptop</v-icon>
        </router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="large-nav hidden-xs-only">
        <v-btn
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
      appTitle: "HireTech",
      sidebar: false,
      menuItems: [
        { title: "About", path: "/about", icon: "mdi-information-box-outline" },
        // { title: "Features", path: "/features", icon: "mdi-star-circle-outline" },
        { title: "Service", path: "/service", icon: "mdi-account-group-outline" },
        { title: "Contacts", path: "/contacts", icon: "mdi-card-account-phone-outline" },
        { title: "Specifications", path: "/specifications", icon: "mdi-cogs" },
      ],
    }
  }
}
</script>