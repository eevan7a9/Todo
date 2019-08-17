<template>
  <main>
    <!-- Add Todo -->
    <AddTodo />
    <hr />
    <section id="list_container">
      <div class="card" v-for="todo in allTodos" :key="todo.id">
        <!-- Todo Items -->
        <TodoItem :todo="todo" />
      </div>
    </section>
  </main>
</template>

<script>
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { mapGetters } from "vuex";
export default {
  name: "TodoLists",
  components: {
    AddTodo,
    TodoItem
  },
  computed: {
    ...mapGetters(["allTodos"]) // We get the Todos array from state
  }
};
</script>

<style scoped>
main {
  text-align: center;
}
#list_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
}
</style>