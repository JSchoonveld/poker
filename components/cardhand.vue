<template>
  <div class="cardhand-container">
    <div v-if="type === 'dealer'" class="hand">
      <div class="hand-info">
        <div v-if="$store.state.blackjack.gameState === 'finished'">
          Dealer total: {{ $store.state.blackjack.count.dealer }}
        </div>
      </div>
      <div class="hand-cards">
        <div
          v-if="$store.state.blackjack.gameState === 'ongoing'"
          class="hand-cards"
        >
          <closedcard :suite="cards[0].suite"></closedcard>
          <card :suite="cards[1].suite" :value="cards[1].value"></card>
        </div>
        <div
          v-for="(card, index) in $store.state.blackjack.cards.dealerCards"
          v-else
          :key="index"
        >
          <card :suite="cards[index].suite" :value="cards[index].value"></card>
        </div>
      </div>
    </div>
    <div v-else class="hand">
      <div class="hand-cards">
        <div
          v-for="(card, index) in $store.state.blackjack.cards.playerCards"
          :key="index"
        >
          <card :suite="cards[index].suite" :value="cards[index].value"></card>
        </div>
      </div>
      <div class="hand-info">
        Your total: {{ $store.state.blackjack.count.player }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cardhand',
  props: ['cards', 'type'],
  mounted() {
    this.$store.commit(`blackjack/changeCountPlayer`)
    this.$store.commit(`blackjack/changeCountDealer`)
  },
}
</script>

<style lang="scss" scoped>
.cardhand-container {
  height: fit-content;
  min-width: 340px;
  display: flex;
  justify-content: flex-end;
  .hand {
    display: flex;
    flex-direction: column;
    .hand-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }
    .hand-cards {
      display: flex;
    }
  }
}
</style>
