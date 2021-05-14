<template>
  <div class="cardgame-container">
    <div v-if="type === 'blackjack'">
      <div class="hand-info">
        <div style="display: flex">
          Dealer total:
          <div
            v-if="$store.state.blackjack.gameState === 'finished'"
            style="padding-left: 5px"
          >
            {{ $store.state.blackjack.count.dealer }}
          </div>
        </div>
      </div>
      <cardhand type="dealer" :cards="cards.dealerCards"></cardhand>
      <div v-for="(card, index) in cards.playerCards" :key="index">
        <cardhand
          type="player"
          :cards="cards.playerCards[index].cards"
        ></cardhand>
      </div>
      <div class="hand-info">
        Your total: {{ $store.state.blackjack.count.player }}
      </div>
    </div>
    <div v-if="type === 'poker'">
      <cardhand type="player" :cards="cards.playerCards"></cardhand>
      <cardhand type="player" :cards="cards.playerCards"></cardhand>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cardgame',
  props: ['cards', 'type'],
  data() {
    return {}
  },
  mounted() {
    console.log(this.cards.playerCards[0].cards)
  },
}
</script>

<style lang="scss" scoped>
.cardgame-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: fit-content;
  height: fit-content;
  .hand-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
}
</style>
