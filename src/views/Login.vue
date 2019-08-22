<template>
  <main id="main">
    <div id="login-container">
      <div class="card mt-5">
        <div class="card-header">
          <h3>Login</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Username / Email</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                id="username"
                aria-describedby="username"
                placeholder="Mymail@email.com"
                autocomplete="my-username"
              />
              <small id="username" class="form-text text-muted">username or email</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                id="password"
                placeholder="secret..."
                autocomplete="my-password"
              />
            </div>
            <div class="text-right">
              <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    submit(e) {
      e.preventDefault();
      this.loginUser({
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#login-container {
  width: 800px;
  text-align: left;
}
</style>