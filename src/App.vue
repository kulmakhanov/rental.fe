<template>
  <v-app class="wrapper">
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
      <v-footer app>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
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
  }, 
};
</script>

<!-- <style scoped>
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap")
  repeat scroll 0 0 rgba(0, 0, 0, 0);

body {
  background: #fff;
}

.wrapper {
  animation: scroll 100s linear infinite;
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"),
    #111111;
  color: #eee;
  height: 100vh;
  min-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;
}

@keyframes scroll {
  100% {
    background-position: 0px -400%;
  }
}

/* Fallback if the operatring system prefers reduced motion*/
@media (prefers-reduced-motion) {
  .wrapper {
    animation: scroll 800s linear infinite;
  }
}

@media (min-width: 670px) {
  .title {
    font-size: 5rem;
  }
}

</style> -->
