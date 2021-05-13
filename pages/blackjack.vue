<template>
  <div class="blackjack-container">
    <cardgame :cards="cards" type="blackjack"></cardgame>
    <div class="blackjack-buttons">
      <v-btn elevation="2">Double</v-btn>
      <v-btn elevation="2">Split</v-btn>
      <v-btn elevation="2" @click="stand">Stand</v-btn>
      <v-btn elevation="2" @click="hit">Hit</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blackjack',
  middleware: 'auth',
  data() {
    return {}
  },
  computed: {
    cards() {
      return this.$store.state.blackjack.cards
    },
  },
  methods: {
    stand() {
      while (this.$store.state.blackjack.count.dealer < 21) {
        setTimeout(() => {
          this.$store.commit('blackjack/changeGameRound')
          this.$store.commit('blackjack/addDealerCard')
          this.$store.commit(`blackjack/changeCountDealer`)
          console.log('test')
        }, 1000)
      }
    },
    hit() {
      this.$store.commit('blackjack/addPlayerCard')
      this.$store.commit('blackjack/changeGameRound')
      this.$store.commit(`blackjack/changeCountPlayer`)
      this.$store.commit(`blackjack/changeCountDealer`)
    },
  },
}
</script>

<style lang="scss" scoped>
.blackjack-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
