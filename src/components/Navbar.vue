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
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
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
    <v-main>
      <router-view></router-view>
      <!-- <v-footer app>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer> -->
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      appTitle: "VueApp",
      sidebar: false,
      menuItems: [
        { title: "About", path: "/about", icon: "mdi-information-box-outline" },
        { title: "Features", path: "/features", icon: "mdi-star-circle-outline" },
        { title: "Service", path: "/service", icon: "mdi-account-group-outline" },
        { title: "Contacts", path: "/contacts", icon: "mdi-card-account-phone-outline" },
        { title: "Specifications", path: "/specifications", icon: "mdi-cogs" },
      ],
    }
  }
}
</script>