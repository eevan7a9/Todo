<template>
  <div class="home">
    <div id="todo">
      <h1>TODO LIST</h1>
    </div>
    <TodoLists />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoLists from "../components/TodoLists";
export default {
  name: "home",
  components: {
    TodoLists
  },
};
</script>
<style scoped>
#todo {
  display: flex;
  justify-content: center;
  padding: 30px;
}
#todo h1 {
  padding: 60px;
  color: rgb(131, 186, 235);
  font-size: 25x;
  font-weight: 900;
}
</style>
