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
    dealerCards: [
      {
        suite: ['diamond', 'heart', 'club', 'spade'][
          Math.floor(Math.random() * 4)
        ],
        value: Math.floor(Math.random() * 13 + 1),
      },
      {
        suite: ['diamond', 'heart', 'club', 'spade'][
          Math.floor(Math.random() * 4)
        ],
        value: Math.floor(Math.random() * 13 + 1),
      },
    ],
    playerCards: [
      {
        suite: ['diamond', 'heart', 'club', 'spade'][
          Math.floor(Math.random() * 4)
        ],
        value: Math.floor(Math.random() * 13 + 1),
      },
      {
        suite: ['diamond', 'heart', 'club', 'spade'][
          Math.floor(Math.random() * 4)
        ],
        value: Math.floor(Math.random() * 13 + 1),
      },
    ],
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
    const newCardPlayer = {
      suite: ['diamond', 'heart', 'club', 'spade'][
        Math.floor(Math.random() * 4)
      ],
      value: Math.floor(Math.random() * 13 + 1),
    }
    state.cards.playerCards.push(newCardPlayer)
  },
  addDealerCard(state) {
    const newCardDealer = {
      suite: ['diamond', 'heart', 'club', 'spade'][
        Math.floor(Math.random() * 4)
      ],
      value: Math.floor(Math.random() * 13 + 1),
    }
    state.cards.dealerCards.push(newCardDealer)
  },
  gameEnd(state, result) {
    if (result === 'won') {
      state.message = 'You won!'
    } else if (result === 'lost') {
      state.message = 'You lost'
    } else {
      state.message = 'Push!'
    }
    state.gameState = 'finished'
  },
}

export const actions = {}
export const getters = {}
