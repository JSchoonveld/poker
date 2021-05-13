export const state = () => ({
  userPanelOpen: false,
  authenticated: { default: false },
  loggedInUser: '',
})

export const mutations = {
  toggleUserPanel(state) {
    if (state.userPanelOpen === false) {
      state.userPanelOpen = true
    } else {
      state.userPanelOpen = false
    }
  },
  closeUserPanel(state) {
    state.userPanelOpen = false
  },
  login(state) {
    state.authenticated = true
  },
  changeUser(state, userData) {
    state.loggedInUser = {
      firstName: userData.first_name,
      lastName: userData.last_name,
      email: userData.email,
    }
  },
}
export const actions = {}
export const getters = {}
