import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Todo First",
        completed: 1
      },
      {
        id: 2,
        title: "Todo Second",
        completed: 0
      },
      {
        id: 3,
        title: "Todo Third",
        completed: 0
      },
      {
        id: 4,
        title: "Todo Fourth",
        completed: 0
      }
    ],
    new_todo_id: 5
  },
  getters: {
    allTodos: function(state) {
      return state.todos;
    },
    newTodoId: function(state) {
      return state.new_todo_id;
    }
  },

  actions: {
    addTodo({ commit }, addedTodo) {
      commit("setNewTodo", addedTodo);
      commit("increaseNewId");
    },
    deleteTodo({ commit }, id) {
      commit("removeTodo", id);
    },
    updateTodo({ commit }, todo) {
      commit("editTodo", todo);
    }
  },
  mutations: {
    setNewTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    increaseNewId(state) {
      state.new_todo_id += 1;
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
    editTodo(state, edited_todo) {
      for (let i = 0; i < state.todos.length; i++) {
        const todo = state.todos[i];
        if (todo.id == edited_todo.id) {
          todo.title = edited_todo.title;
          todo.completed = edited_todo.completed;
        }
      }
    }
  }
});
