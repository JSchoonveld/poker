<template>
  <div class="poker-container">
    <cardgame type="poker" :cards="cards"></cardgame>
  </div>
</template>

<script>
export default {
  name: 'Poker',
  middleware: 'auth',
  data() {
    return {
      cards: {
        playerCards: [2, 8],
        dealerCards: [10, 12],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
