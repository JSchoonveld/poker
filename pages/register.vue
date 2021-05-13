<template>
  <div class="container">
    <h1 class="login-title">Register</h1>
    <userAuthForm
      :formsubmit="checkUser"
      :type="'register'"
      submit="Submit"
    ></userAuthForm>
  </div>
</template>

<script>
export default {
  name: 'Register',
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
