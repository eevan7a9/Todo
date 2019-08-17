<template>
  <section>
    <div class="card-header">
      <div class="form-check form-check-inline" id="todo_action">
        <button class="btn btn-danger" @click="deleteTodo(todo.id)">X</button>
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox"
            :checked="todo.completed"
            @change="editTodo(1)"
          />
          Completed
        </label>
      </div>
    </div>
    <div class="card-body" v-bind:class="{'completed': todo.completed}">
      <span
        id="title_display"
        v-bind:class="{'hide': edit}"
        @dblclick="editTodo"
      >{{todo.id}} {{todo.title}}</span>
    </div>
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
    editTodo(check_toggled = false) {
      if (check_toggled == true) {
        this.todo.completed = !this.todo.completed;
      } else {
        this.edit = !this.edit;
      }
      this.updateTodo({
        id: this.todo.id,
        title: this.title,
        completed: this.todo.completed
      });
      console.log({
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
.completed {
  background-image: radial-gradient(
    circle 1124px at 1.6% 5%,
    rgba(9, 249, 0, 0.36) 7.4%,
    rgba(216, 245, 34, 0.34) 48.1%,
    rgba(16, 186, 88, 0.35) 80.1%
  );
}
.show {
  display: inline;
}
#title_edit {
  display: none;
}
</style>