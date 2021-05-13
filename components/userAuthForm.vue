<template>
  <div class="form-container">
    <form @submit.prevent>
      <div v-if="type === 'register'">
        <div class="form-group">
          <div class="form-item">
            <label for="first_name">First Name</label>
            <input
              id="first_name"
              v-model="formInput.first_name"
              type="text"
              name="first_name"
              placeholder="John"
            />
          </div>
          <div class="form-item">
            <div v-if="type === 'register'">
              <label for="last_name">First Name</label>
              <input
                id="last_name"
                v-model="formInput.last_name"
                type="text"
                name="last_name"
                placeholder="Smith"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-item">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="formInput.email"
            type="text"
            name="email"
            placeholder="example@example.com"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="form-item">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="formInput.password"
            type="password"
            name="password"
          />
        </div>
      </div>
      <div class="form-group">
        <button @click="formsubmit(formInput)">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserAuthForm',
  props: ['formsubmit', 'type'],
  data: () => ({
    formInput: {
      email: '',
      password: '',
    },
  }),
}
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: darkslategray;
  color: white;

  input {
    border: 1px solid white;
    background-color: white;
  }
  button {
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 2px;
    margin-top: 10px;
  }
}
form {
  padding-bottom: 10px;
  .form-group {
    display: flex;
    justify-content: center;
    .form-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      padding: 10px;
      input {
        width: 100%;
      }
    }
  }
}
</style>
