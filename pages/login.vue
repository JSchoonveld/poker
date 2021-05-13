<template>
  <div class="container">
    <h1 class="login-title">Log in</h1>
    <userAuthForm
      :formsubmit="checkUser"
      type="login"
      submit="Submit"
    ></userAuthForm>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
  methods: {
    async checkUser(loginInfo) {
      console.log(loginInfo)
      await this.$axios
        .$get('http://localhost:3000/api/login', {
          params: {
            loginInfo,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response)
          if (response !== 'wrong login') {
            this.userLogin(response)
          } else {
            console.log('wrong login')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async userLogin(userInfo) {
      const userCookieInfo = {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
      }
      this.$cookies.set('userinfo', userCookieInfo, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
      this.$store.commit('changeUser', userInfo)
      try {
        const response = await this.$auth.loginWith('local', {
          data: userInfo,
        })
        console.log(response)
        this.$router.push({ path: '/' })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .login-title {
    margin-bottom: 20px;
  }
}
.square {
  width: 100px;
  height: 100px;
}
</style>
