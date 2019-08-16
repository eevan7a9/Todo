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
  background: blueviolet;
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
  background: rgb(103, 112, 241);
}
</style>