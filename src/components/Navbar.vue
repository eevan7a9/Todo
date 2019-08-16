<template>
  <nav id="top-nav">
    <div id="nav" class="container">
      <router-link to="/">
        <a>Home</a>
      </router-link>

      <router-link to="/about">
        <a>About</a>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
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