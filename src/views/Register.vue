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
            <button type="submit" class="btn btn-primary" id="submit" @click="submit">Submit</button>
          </div>
        </form>
      </div>

      <div class="card-footer text-muted">
        <span>Already Registered?</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmed: ""
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log([this.username, this.email, this.password]);
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
  background-image: linear-gradient(
    178.2deg,
    rgba(39, 101, 255, 1) 3.6%,
    rgba(154, 234, 255, 1) 101.6%
  );
}
.submit-container {
  text-align: center;
  padding: 10px;
}
</style>