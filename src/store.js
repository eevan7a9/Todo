import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);
// the base url of our api from our backend server
axios.defaults.baseURL = 'http://localhost:8000/api';

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
    new_todo_id: 5,
    filter_todo_by: 2
  },
  getters: {
    allTodos: function (state) {
      return state.todos;
    },
    newTodoId: function (state) {
      return state.new_todo_id;
    },
    getFilterBy: function (state) {
      return state.filter_todo_by;
    }
  },

  actions: {
    async getTodos({ commit }) {
      await axios.get('/todos')
        .then(response => {
          commit("setTodos", response.data)
        }).catch(error => {
          console.log(error);
        })
    },
    addTodo({ commit }, addedTodo) {
      commit("setNewTodo", addedTodo);
      commit("increaseNewId");
    },
    deleteTodo({ commit }, id) {
      commit("removeTodo", id);
    },
    updateTodo({ commit }, todo) {
      commit("editTodo", todo);
    },
    filterTodo({ commit }, base) {
      commit("filterTodos", base);
    }
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
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
    },
    filterTodos(state, base) {
      state.filter_todo_by = base;
    }
  }
});
