<template>
  <div>
    <table-component v-bind:table-data="tableData"></table-component>
    <div>{{turn}} 님의 턴입니다.</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "./store";
import TableComponent from "./TableComponent";

export default {
  store,
  components: {
    TableComponent
  },
  computed: {
    ...mapState(["winner", "turn", "tableData"])
  },
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>