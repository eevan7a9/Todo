import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);
// the base url of our api from our backend server
axios.defaults.baseURL = 'http://localhost/Todo_backend/public/api';

export default new Vuex.Store({
  state: {
    todos: [],
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
        })
      // .catch(error => {
      //   console.log(error);
      // })
    },
    async addTodo({ commit }, addedTodo) {
      await axios.post('/todos', {
        title: addedTodo.title,
        completed: addedTodo.completed
      })
        .then(response => {
          commit("setNewTodo", response.data)
        })
      // .catch(err => {
      //   console.error(err);
      // })
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`todos/${id}`)
        .then(response => {
          commit('removeTodo', response.data)
        })
      // .catch(err => {
      //   console.error(err);
      // })
    },
    async updateTodo({ commit }, todo) {
      await axios.put(`todos/${todo.id}`, {
        title: todo.title,
        completed: todo.completed
      })
        .then(response => {
          commit("editTodo", response.data)
        })
      // .catch(err => {
      //   console.error(err);
      // })
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
    removeTodo(state, delete_todo) {
      state.todos = state.todos.filter(todo => todo.id != delete_todo.id);
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
