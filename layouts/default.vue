<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div v-if="!$auth.loggedIn">
        <v-list>
          <v-list-item to="/">
            <v-list-item-action>
              <v-icon>mdi-apps</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Welcome'" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/login">
            <v-list-item-action>
              <v-icon>mdi-application</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Log In'" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/register">
            <v-list-item-action>
              <v-icon>mdi-application</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Register'" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div v-if="$auth.loggedIn">
        <v-list>
          <v-list-item to="/">
            <v-list-item-action>
              <v-icon>mdi-apps</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Welcome'" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-action>
              <v-icon>mdi-application</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Log Out'" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-cards-club',
          title: 'Poker',
          to: '/poker',
        },
        {
          icon: 'mdi-cards-spade',
          title: 'Blackjack',
          to: '/blackjack',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout(/* .... */)
        this.$router.push({ path: '/login' })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
