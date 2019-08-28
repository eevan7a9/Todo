<template>
  <main>
    <br />
    <br />
    <h1>Todo List</h1>
    <br />
    <h2>Technology</h2>
    <div id="technology">
      <br />
      <h4>Frontend</h4>
      <ul>
        <li>We use Vuejs framework</li>
        <li>We use Vuex for state management</li>
        <li>We use Vue router for routing</li>
        <li>We use bootstrap for css styling</li>
        <li>
          My vuejs code
          <a href="https://github.com/eevan7a9/Todo">github.com/eevan7a9/Todo</a>
        </li>
      </ul>
      <br />
      <h4>Backend</h4>
      <ul>
        <li>We use Laravel framework</li>
        <li>We use Laravel-passport for authentication</li>
        <li>We us Mysql as database</li>
        <li>
          My laravel code
          <a
            href="https://github.com/eevan7a9/Todo-backend-laravel"
          >github.com/eevan7a9/Todo-backend-laravel</a>
        </li>
      </ul>
    </div>
    <br />
    <h2>Functionality</h2>
    <ul id="functionality">
      <li>User Registration & Authentication</li>
      <li>User Login & Logout</li>
      <li>User Add new Todo item</li>
      <li>User Update Todo item</li>
      <li>User Delete Todo item</li>
    </ul>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#technology {
  padding: 0 30px;
}
#functionality {
  padding: 0 70px;
}
li {
  padding: 5px 10px;
}
</style>