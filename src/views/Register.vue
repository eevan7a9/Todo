<template>
  <main class="container">
    <div class="card mt-5">
      <div class="card-header">
        <h3>REGISTER</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for>Username</label>
            <input
              type="text"
              name
              id
              class="form-control"
              v-model="username"
              placeholder="myName..."
              autocomplete="username"
            />
            <small id="username" class="text-muted">username</small>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              id="email"
              aria-describedby="email"
              placeholder="name@email.com"
              autocomplete="email"
            />
            <small id="email" class="form-text text-muted">Email Address</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="password"
              placeholder="secret..."
              autocomplete="new-password"
            />
          </div>
          <div class="form-group">
            <label for="confirmed">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              v-model="confirmed"
              id="confirmed"
              placeholder="secret..."
              autocomplete="confirm-password"
            />
          </div>
          <div class="submit-container">
            <button
              type="submit"
              class="btn btn-primary"
              id="submit"
              @click="submit"
              :disabled="disableSubmit()"
              :class="{'disable-btn': disableSubmit()}"
            >Submit</button>
            <small class="text-muted" v-if="disableSubmit()">Enter Valid Credentials</small>
            <small class="text-success" v-else>Alright, looks good</small>
          </div>
        </form>
      </div>

      <div class="card-footer text-muted">
        <span>
          <router-link to="/login">Already Registered?</router-link>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      username: null,
      email: null,
      password: "",
      confirmed: ""
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    validateUsername() {
      // username must atleast 5 char
      return this.username && this.username.length > 4;
    },
    validateEmail() {
      // must be valid address
      var re = /\S+@\S+\.\S+/;
      return re.test(this.email);
    },
    validatePassword() {
      // password must be confirmed and atleast 6 char long
      return this.confirmed === this.password && this.password.length > 5;
    },
    disableSubmit() {
      // disable button if input are not valid
      return (
        !this.validateUsername() ||
        !this.validateEmail() ||
        !this.validatePassword()
      );
    },
    submit(e) {
      e.preventDefault();
      if (
        this.validateUsername() &&
        this.validateEmail() &&
        this.validatePassword()
      ) {
        this.registerUser({
          username: this.username,
          email: this.email,
          password: this.password
        });
        this.$router.push({ name: "login", query: { redirect: "/login" } });
      }
    }
  }
};
</script>

<style scoped>
.card-footer {
  text-align: center;
}
.card-footer span {
  cursor: pointer;
}
.card-header h3 {
  font-weight: 900;
  color: #444;
}
#submit {
  font-weight: 900;
  width: 200px;
}
.submit-container {
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.disable-btn {
  background: red;
  cursor: not-allowed;
}
</style>