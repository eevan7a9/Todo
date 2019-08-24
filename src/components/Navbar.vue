<template>
  <nav id="top-nav">
    <div id="nav" class="container">
      <router-link to="/">
        <a>Todo</a>
      </router-link>

      <router-link to="/about">
        <a>About</a>
      </router-link>

      <router-link to="/register" v-if="getUserToken == null">
        <a>Register</a>
      </router-link>

      <router-link to="/login" v-if="getUserToken == null">
        <a>Login</a>
      </router-link>

      <router-link to="/logout" v-if="getUserToken != null">
        <a>Logout</a>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapGetters(["getUserToken"])
  }
};
</script>

<style scoped>
#top-nav {
  background-image: linear-gradient(
    178.2deg,
    rgba(39, 101, 255, 1) 3.6%,
    rgba(154, 234, 255, 1) 101.6%
  );
}
#nav {
  display: flex;
  justify-content: right;
}
#nav a {
  color: antiquewhite;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
}
#nav a:hover {
  text-decoration: none;
  font-weight: 900;
  background: rgb(12, 134, 235);
}
</style>