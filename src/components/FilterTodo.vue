<template>
  <Section>
    <h5>Filter</h5>
    <div class="btn-group">
      <label class="btn btn-primary" v-bind:class="{'active': filter == 2}">
        <input type="radio" name="filter" id="all" v-model="filter" value="2" @change="getFilter" />All
      </label>
      <label class="btn btn-primary" v-bind:class="{'active': filter == 0}">
        <input
          type="radio"
          name="filter"
          id="completed"
          v-model="filter"
          value="0"
          @change="getFilter"
        />Completed
      </label>
      <label class="btn btn-primary" v-bind:class="{'active': filter == 1}">
        <input
          type="radio"
          name="filter"
          id="notcompleted"
          v-model="filter"
          value="1"
          @change="getFilter"
        />Not Completed
      </label>
    </div>
  </Section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodo",
  data() {
    return { filter: 2 };
  },
  methods: {
    ...mapActions(["filterTodo"]),
    getFilter() {
      this.filterTodo(this.filter);
    }
  }
};
</script>

<style>
</style>