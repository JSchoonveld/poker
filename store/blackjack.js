const Card = require('../helpers/commonFunctions')

export const state = () => ({
  cardTypes: [
    {
      name: 'ace',
      value: 11,
    },
    {
      name: '2',
      value: 2,
    },
    {
      name: '3',
      value: 3,
    },
    {
      name: '4',
      value: 4,
    },
    {
      name: '5',
      value: 5,
    },
    {
      name: '6',
      value: 6,
    },
    {
      name: '7',
      value: 7,
    },
    {
      name: '8',
      value: 8,
    },
    {
      name: '9',
      value: 9,
    },
    {
      name: '10',
      value: 10,
    },
    {
      name: 'Jack',
      value: 10,
    },
    {
      name: 'Queen',
      value: 10,
    },
    {
      name: 'King',
      value: 10,
    },
  ],
  cards: {
    dealerCards: [],
    playerCards: [
      {
        name: 'hand1',
        cards: [],
      },
      {
        name: 'hand2',
        cards: [],
      },
    ],
  },
  round: 0,
  playerHands: 1,
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
  setCardsPlayer(state, options) {
    for (let i = 0; i < options.hands; i++) {
      const tempArr = []
      for (let a = 0; a < options.amount; a++) {
        const card = new Card(undefined, state.cardTypes)
        tempArr.push(card)
      }
      state.cards.playerCards[i].cards = tempArr
    }
  },
  setCardsDealer(state, amount) {
    const tempArr = []
    for (let i = 0; i < amount; i++) {
      const card = new Card(undefined, state.cardTypes)
      tempArr.push(card)
    }
    state.cards.dealerCards = tempArr
  },
  changeCountPlayer(state) {
    let total = 0
    state.cards.playerCards[0].cards.forEach((card) => {
      total += card.value
    })
    if (total > 21) {
      state.cards.playerCards[0].cards.forEach((card) => {
        if (card.value === 11) {
          card.value = 1
          total = 0
          state.cards.playerCards[0].cards.forEach((card) => {
            total += card.value
          })
        } else if (card.value >= 10) {
          card.value = 10
        }
      })
    }
    state.count.player = total
  },
  changeCountDealer(state) {
    let total = 0
    state.cards.dealerCards.forEach((card) => {
      total += card.value
    })
    if (total > 21) {
      state.cards.dealerCards.forEach((card) => {
        if (card.value === 11) {
          card.value = 1
        } else if (card.value >= 10) {
          card.value = 10
        }
      })
    }
    state.count.dealer = total
  },
  addPlayerCard(state) {
    const newCardPlayer = new Card(undefined, state.cardTypes)
    state.cards.playerCards[0].cards.push(newCardPlayer)
  },
  addDealerCard(state) {
    const newCardDealer = new Card(undefined, state.cardTypes)
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
