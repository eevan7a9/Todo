<template>
  <div class="card">
    <div class="card-body p-3">
      <div class="form-group">
        <label for></label>
        <input
          type="text"
          class="form-control"
          v-model="title"
          placeholder="Eat chocolate. . ."
          aria-describedby="helpId"
        />
      </div>
      <small id="helpId" class="text-muted">New Todo</small>
    </div>
    <button class="btn btn-primary mb-2" @click="addNewTodo()">Add +</button>
  </div>
</template>

<script>
// we use mapActions to access action object from store.js
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    ...mapGetters(["newTodoId"])
  },
  methods: {
    ...mapActions(["addTodo"]), //  we access addTodo from store.js
    addNewTodo() {
      this.addTodo({
        id: this.newTodoId,
        title: this.title,
        completed: 0
      });
    }
  }
};
</script>

<style>
</style>