<template>
  <main id="main">
    <div id="login-container">
      <div class="alert alert-danger mt-5" v-if="errorMsg">{{errorMsg}}</div>
      <div class="card mt-5">
        <div class="card-header">
          <h3>Login</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Email</label>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMsg: ""
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    submit(e) {
      e.preventDefault();
      this.loginUser({
        username: this.username,
        password: this.password
      }).then(() => {
        if (this.getUserToken) {
          this.$router.push({ name: "home", query: { redirect: "/" } });
        } else if (this.getErrorMsg) {
          this.errorMsg = this.getErrorMsg;
        }
      });
    }
  },
  computed: {
    ...mapGetters(["getUserToken", "getErrorMsg"])
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
  width: 80%;
  text-align: left;
}

@media screen and (max-width: 700px) {
  #login-container {
    width: 90%;
  }
}
</style>