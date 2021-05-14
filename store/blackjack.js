const Card = require('../helpers/commonFunctions')

export const state = () => ({
  cardTypes: {
    1: 'Ace',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'Jack',
    12: 'Queen',
    13: 'King',
  },
  cards: {
    dealerCards: [],
    playerCards: [],
  },
  round: 0,
  gameState: 'ongoing',
  cardAmount: 2,
  count: {
    dealer: 0,
    player: 0,
  },
  message: '',
})

export const mutations = {
  changeGameRound(state) {
    state.round++
  },
  changeGameState(state, gameState) {
    state.gameState = gameState
  },
  setCardsPlayer(state, amount) {
    const tempArr = []
    for (let i = 0; i < amount; i++) {
      const card = new Card()
      tempArr.push(card)
    }
    state.cards.playerCards = tempArr
  },
  setCardsDealer(state, amount) {
    const tempArr = []
    for (let i = 0; i < amount; i++) {
      const card = new Card()
      tempArr.push(card)
    }
    state.cards.dealerCards = tempArr
  },
  changeCountPlayer(state) {
    let total = 0
    state.cards.playerCards.forEach((card) => {
      if (card.value === 10 || card.value > 10) {
        total += 10
      } else if (card.value === 1 && total > 10) {
        total += 1
      } else if (card.value === 1 && total <= 10) {
        total += 11
      } else {
        total += card.value
      }
    })
    state.count.player = total
  },
  changeCountDealer(state) {
    let total = 0
    state.cards.dealerCards.forEach((card) => {
      if (card.value === 10 || card.value > 10) {
        total += 10
      } else if (card.value === 1 && total > 10) {
        total += 1
      } else if (card.value === 1 && total <= 10) {
        total += 11
      } else {
        total += card.value
      }
    })
    state.count.dealer = total
  },
  addPlayerCard(state) {
    const newCardPlayer = new Card()
    state.cards.playerCards.push(newCardPlayer)
  },
  addDealerCard(state) {
    const newCardDealer = new Card()
    state.cards.dealerCards.push(newCardDealer)
  },
  gameEnd(state, result) {
    if (result === 'won') {
      state.message = 'You won!'
    } else if (result === 'lost') {
      state.message = 'You lost'
    } else if (result === 'push') {
      state.message = 'Push!'
    } else if (result === 'newGame') {
      state.message = ''
    }
    state.gameState = 'finished'
  },
}

export const actions = {}
export const getters = {}
