<template>
  <div class="cardgame-container">
    <div v-if="type === 'blackjack'">
      <cardhand type="dealer" :cards="cards.dealerCards"></cardhand>
      <cardhand type="player" :cards="cards.playerCards"></cardhand>
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
}
</script>

<style lang="scss" scoped>
.cardgame-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 1000px;
  height: fit-content;
}
</style>
