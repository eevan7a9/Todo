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
    <button class="btn add mb-2" id="add" @click="addNewTodo()">Add +</button>
  </div>
</template>

<script>
// we use mapActions to access action object from store.js
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]), //  we access addTodo from store.js
    addNewTodo() {
      this.addTodo({
        title: this.title,
        completed: 0
      }).then(() => (this.title = ""));
    }
  }
};
</script>

<style>
#add {
  background-image: linear-gradient(
    178.2deg,
    rgba(39, 101, 255, 1) 3.6%,
    rgba(154, 234, 255, 1) 101.6%
  );
  font-size: 20px;
  font-weight: 800;
  color: whitesmoke;
}
</style>