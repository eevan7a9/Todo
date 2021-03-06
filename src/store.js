import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);
// the base url of our api from our backend server
axios.defaults.baseURL = 'https://todo-laravel-backend.herokuapp.com/public/api';

export default new Vuex.Store({
  state: {
    todos: [],
    filter_todo_by: 2, // 2 show all , 0 show completed, 1 show uncomplete
    user_token: localStorage.getItem("todo_user_token") || null,
    error_message: ""
  },
  getters: {
    allTodos: function (state) {
      return state.todos;
    },
    getFilterBy: function (state) {
      return state.filter_todo_by;
    },
    getUserToken: function (state) {
      return state.user_token;
    },
    getErrorMsg: function (state) {
      return state.error_message;
    }
  },

  actions: {
    getToken({ commit }) {
      const get_token = localStorage.getItem("todo_user_token");
      const token = get_token ? get_token : null;
      commit("setUserToken", token)
    },
    async getTodos({ commit }) {
      await axios.get('/todos', {
        // we passed the header with token to give authentication to request
        headers: {
          "Authorization": `Bearer ${this.state.user_token}`,
          "Accept": 'application/json'
        }
      })
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
      }, {
          headers: {
            "Authorization": `Bearer ${this.state.user_token}`,
            "Accept": 'application/json'
          }
        })
        .then(response => {
          commit("setNewTodo", response.data)
        })
      // .catch(err => {
      //   console.error(err);
      // })
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`todos/${id}`,
        {
          headers: {
            "Authorization": `Bearer ${this.state.user_token}`,
            "Accept": 'application/json'
          }
        })
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
      }, {
          headers: {
            "Authorization": `Bearer ${this.state.user_token}`,
            "Accept": 'application/json'
          }
        })
        .then(response => {
          commit("editTodo", response.data)
        })
      // .catch(err => {
      //   console.error(err);
      // })
    },
    async registerUser({ commit }, new_user) {
      await axios.post('/register', {
        name: new_user.username,
        email: new_user.email,
        password: new_user.password
      });
      //   .then(response => {
      //     console.log(response.data)
      //   })
      //   .catch(err => {
      //     console.error(err);
      //   })
      // console.log(new_user.username, new_user.email, new_user.password);
    },
    async loginUser({ commit }, user) {
      await axios.post("/login",
        {
          username: user.username,
          password: user.password
        })
        .then(response => {
          // console.log(response.data.access_token);
          const token = response.data.access_token
          localStorage.setItem("todo_user_token", token);
          commit("setUserToken", token);
        })
        .catch(err => {
          if (err) {
            // console.log(err.response.data);
            commit("setErrorMsg", err.response.data);
            localStorage.removeItem('todo_user_token');
            commit("setUserToken", null);
          }
        })
    },
    async logoutUser({ commit }) {

      await axios.post("/logout", null, {
        headers: {
          "Authorization": `Bearer ${this.state.user_token}`,
          "Accept": 'application/json'
        }
      })
      localStorage.removeItem("todo_user_token");
      commit("setUserToken", null)
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
    },
    setUserToken(state, token) {
      state.user_token = token;
    },
    setErrorMsg(state, error_msg) {
      state.error_message = error_msg;
    }
  }
});
