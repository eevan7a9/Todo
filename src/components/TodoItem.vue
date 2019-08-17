<template>
  <section>
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
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  methods: {
    ...mapActions(["deleteTodo"]) // takes todo.id as argument
  }
};
</script>

<style scoped>
#todo_action {
  display: flex;
  justify-content: space-between;
}
</style>