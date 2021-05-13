export const state = () => ({})

export const mutations = {
  changePlayerHand(state, hand) {
    state.hands.playerHand = hand
  },
  changeDealerHand(state, hand) {
    state.hands.dealerHand = hand
  },
  changeGameState(state) {
    state.gameState = 'playing'
  },
  hit(state, card) {
    state.hands.playerHand.push(card)
    state.hands.dealerHand.push(card)
  },
}

export const actions = {}
export const getters = {}
