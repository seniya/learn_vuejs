<template>
  <div>
    <table-component v-bind:table-data="tableData"></table-component>
    <div>{{turn}} 님의 턴입니다.</div>
  </div>
</template>

<script>
import TableComponent from "./TableComponent";
export default {
  components: {
    TableComponent
  },
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "O"
    };
  },
  computed: {},
  methods: {
    onChangeData() {
      // this.$set(this.tableData[1], 0, 'X');
      //this.tableData[0][1] = "O";
    }
  },
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