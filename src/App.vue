<template>
  <div id="app">
    <Navbar />
    <router-view class="container" />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(["getToken"])
  },
  created() {
    this.getToken();
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
