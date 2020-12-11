<template>
  <div>
    Filter Todos
    <select v-model="size" v-on:change="filterTodo(size)">
      <option disabled value="">select...</option>
      <option :value="200">200</option>
      <option :value="100">100</option>
      <option :value="50">50</option>
      <option :value="20">20</option>
      <option :value="10">10</option>
      <option :value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodos",
  data() {
    return {
      size: "",
    };
  },
  methods: mapActions("todos", ["filterTodo"]),
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: 1px solid #41b883;
}
</style>
