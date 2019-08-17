<template>
  <main>
    <AddTodo />
    <hr />
    <section id="list_container">
      <div class="card" v-for="todo in allTodos" :key="todo.id">
        <div class="card-header">
          <div class="form-check form-check-inline" id="todo_action">
            <button class="btn btn-danger" @click="deleteTodo(todo.id)">X</button>
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" />
              Completed
            </label>
          </div>
        </div>
        <div class="card-body">{{todo.id}} {{todo.title}}</div>
      </div>
    </section>
  </main>
</template>

<script>
import AddTodo from "./AddTodo";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TodoLists",
  components: {
    AddTodo
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["deleteTodo"]) // takes todo.id as argument
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
#todo_action {
  display: flex;
  justify-content: space-between;
}
</style>