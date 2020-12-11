/* eslint-disable */
import axios from "axios";

const state = {
  todoList: [],
};

const getters = {
  allTodos: (state) => state.todoList,
};

const actions = {
  //   async fetchTodos({ commit }) {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  //     console.log("async await fetchTodos ", res.data);
  //     commit("setTodos", res.data);
  //   },
  fetchTodos({ commit }) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log("actions, then arrow fun fetchTodos ", res.data);
        commit("setTodos", res.data);
      })
      .catch((err) => {
        console.log(
          "catch block fetchTodos ",
          err.message || err.response.data.message
        );
      });
  },
  addTodo({ commit }, title) {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        commit("addTodo", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  deleteTodo({ commit }, id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        // commit("removeTodo", id);
        console.log(`success todos/deleteTodo id=${id} `, res);
      })
      .catch((err) => {
        console.log("success todos/deleteTodo ", err.message);
      });
    commit("removeTodo", id);
  },
  filterTodo({ commit }, size) {
    console.log("filter size is ", size);
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=${size}`)
      .then((res) => {
        commit("setTodos", res.data);
      });
  },
  updateTodo({ commit }, updatedTodo) {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`)
      .then((res) => {
        commit("updTodo", updatedTodo);
      })
      .catch((err) => {
        commit("updTodo", updatedTodo);
        console.log(
          "catch block fetchTodos ",
          err.message || err.response.data.message
        );
      });
  },
};

const mutations = {
  setTodos(state, data) {
    state.todoList = data;
  },
  addTodo(state, data) {
    // state.todoList.push(data); //adds to end of list
    state.todoList.unshift(data); //adds to first of list
  },
  removeTodo(state, id) {
    console.log("removeTodo ", id);
    state.todoList = state.todoList.filter((todo) => todo.id !== id);
  },
  updTodo(state, updTodo) {
    const index = state.todoList.findIndex((todo) => todo.id === updTodo.id);
    console.log("updated index is ", index);
    if (index !== -1) {
      state.todoList.splice(index, 1, updTodo);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
