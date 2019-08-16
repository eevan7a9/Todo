<template>
  <main>
    <div class="card">
      <div class="card-body p-3">
        <div class="form-group">
          <label for></label>
          <input type="text" name id class="form-control" placeholder aria-describedby="helpId" />
          <small id="helpId" class="text-muted">New Todo</small>
        </div>
      </div>

      <button class="btn btn-primary mb-2">Add +</button>
    </div>
    <hr />
    <section id="list_container">
      <div class="card" v-for="todo in allTodos" :key="todo.id">
        <div class="card-header">
          <div class="form-check form-check-inline" id="todo_action">
            <button class="btn btn-danger">X</button>
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" />
              Completed
            </label>
          </div>
        </div>
        <div class="card-body">{{todo.title}}</div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoLists",
  computed: {
    ...mapGetters(["allTodos"])
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