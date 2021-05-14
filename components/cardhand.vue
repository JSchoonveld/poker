<template>
  <div class="cardhand-container">
    <div v-if="type === 'dealer'" class="hand">
      <div class="hand-cards">
        <div
          v-if="$store.state.blackjack.gameState === 'ongoing'"
          class="hand-cards"
        >
          <card :suite="cards[0].suite" :value="cards[0].name"></card>
          <closedcard style></closedcard>
        </div>
        <div v-else>
          <transition-group style="display: flex" name="show">
            <div
              v-for="(card, index) in $store.state.blackjack.cards.dealerCards"
              :key="index"
              class="card"
            >
              <card
                style=""
                :suite="cards[index].suite"
                :value="cards[index].name"
              ></card>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <div v-else class="hand">
      <div class="hand-cards">
        <div v-for="(card, index) in cards" :key="index">
          <card :suite="cards[index].suite" :value="cards[index].name"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cardhand',
  props: ['cards', 'type'],
  mounted() {},
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
    .hand-cards {
      display: flex;
    }
  }
}

.show-enter-active,
.show-leave-active {
  transition-duration: 0.5s;
  transform: rotateY(90deg);
}
.show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
