<template>
  <main>
    <h1>Logout</h1>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Logout",
  methods: {
    ...mapActions(["logoutUser"])
  },
  created() {
    this.logoutUser();
    this.$router.push({ name: "login", query: { redirect: "/login" } });
  }
};
</script>

<style>
</style>