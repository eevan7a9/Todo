<template>
  <main>
    <!-- Add Todo -->
    <AddTodo />
    <FilterTodo />
    <hr />
    <section id="list_container">
      <div
        class="card"
        v-for="todo in allTodos"
        :key="todo.id"
        :class="{'hide': getFilterBy == todo.completed}"
      >
        <!-- Todo Items -->
        <TodoItem :todo="todo" />
      </div>
    </section>
  </main>
</template>

<script>
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoItem from "./TodoItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoLists",
  components: {
    AddTodo,
    FilterTodo,
    TodoItem
  },
  methods: {
    ...mapActions(["getTodos"])
  },
  computed: {
    ...mapGetters(["allTodos", "getFilterBy"]) // We get the Todos array from state
  },
  created() {
    this.getTodos();
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
.hide {
  display: none;
}
</style>