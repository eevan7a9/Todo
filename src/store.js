import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Todo First",
        completed: 0
      },
      {
        id: 2,
        title: "Todo Second",
        completed: 0
      },
      {
        id: 3,
        title: "Todo Third",
        completed: 1
      },
      {
        id: 4,
        title: "Todo Fourth",
        completed: 0
      }
    ]
  },
  getters: {
    allTodos: state => state.todos
  },
  mutations: {},
  actions: {}
});
