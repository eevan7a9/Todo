<template>
  <div id="app">
    <Navbar />
    <transition name="fade">
      <router-view class="container" />
    </transition>
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
.fade-enter-active {
  transition: opacity 2.2s;
}
.fade-leave-active {
  transition: opacity 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
