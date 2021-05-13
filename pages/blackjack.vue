<template>
  <div class="blackjack-container">
    <h1>Blackjack</h1>
    <cardgame :cards="cards" type="blackjack"></cardgame>
    <div class="blackjack-buttons">
      <v-btn elevation="2">Double</v-btn>
      <v-btn elevation="2">Split</v-btn>
      <v-btn elevation="2" @click="stand">Stand</v-btn>
      <v-btn elevation="2" @click="hit">Hit</v-btn>
    </div>
    <div class="message">
      {{ $store.state.blackjack.message }}
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
      if (
        this.$store.state.blackjack.count.dealer <=
          this.$store.state.blackjack.count.player &&
        this.$store.state.blackjack.count.dealer < 17
      ) {
        const interval = setInterval(() => {
          this.$store.commit('blackjack/changeGameRound')
          this.$store.commit('blackjack/addDealerCard')
          this.$store.commit(`blackjack/changeCountDealer`)

          if (this.$store.state.blackjack.count.dealer >= 17) {
            if (
              this.$store.state.blackjack.count.dealer <= 21 &&
              this.$store.state.blackjack.count.dealer >
                this.$store.state.blackjack.count.player
            ) {
              this.$store.commit('blackjack/gameEnd', 'lost')
              clearInterval(interval)
            } else {
              this.$store.commit('blackjack/gameEnd', 'won')
              clearInterval(interval)
            }
          }
        }, 2000)
      } else if (
        this.$store.state.blackjack.count.dealer <
          this.$store.state.blackjack.count.player &&
        this.$store.state.blackjack.count.dealer >= 17
      ) {
        this.$store.commit('blackjack/gameEnd', 'won')
      } else if (
        this.$store.state.blackjack.count.dealer >
        this.$store.state.blackjack.count.player
      ) {
        this.$store.commit('blackjack/gameEnd', 'lost')
      } else if (
        this.$store.state.blackjack.count.dealer ===
          this.$store.state.blackjack.count.player &&
        this.$store.state.blackjack.count.dealer >= 17
      ) {
        this.$store.commit('blackjack/gameEnd', 'push')
      }
    },
    hit() {
      this.$store.commit('blackjack/addPlayerCard')
      this.$store.commit('blackjack/changeGameRound')
      this.$store.commit(`blackjack/changeCountPlayer`)
      this.$store.commit(`blackjack/changeCountDealer`)
      if (this.$store.state.blackjack.count.player > 21) {
        this.$store.commit('blackjack/gameEnd', 'lost')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.blackjack-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .message {
    padding-top: 10px;
    font-size: 20px;
  }
}
</style>
