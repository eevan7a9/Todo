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
    <div
      class="card-body"
      id="title_display"
      v-bind:class="{'hide': edit}"
      @dblclick="editTodo"
    >{{todo.id}} {{todo.title}}</div>
    <div class="form-group pl-2 pr-2" v-bind:class="{'hide': !edit}">
      <input type="text" class="form-control" v-model="title" @blur="editTodo" />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  data() {
    return {
      title: this.todo.title,
      edit: false
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]), // takes todo.id as argument
    editTodo() {
      this.edit = !this.edit;
      this.updateTodo({
        id: this.todo.id,
        title: this.title,
        completed: this.todo.completed
      });
    }
  }
};
</script>

<style scoped>
#todo_action {
  display: flex;
  justify-content: space-between;
}
.hide {
  display: none;
}

.show {
  display: inline;
}
#title_edit {
  display: none;
}
</style>