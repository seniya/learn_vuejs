<template>
  <div>
    <table-component v-bind:table-data="tableData"></table-component>
    <div>{{turn}} 님의 턴입니다.</div>
  </div>
</template>

<script>
import TableComponent from "./TableComponent";
import EventBus from "./EventBus";

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
    onClickTd(rowIndex, cellIndex) {
      console.log(rowIndex, cellIndex);
      this.$set(this.tableData[rowIndex], cellIndex, this.turn);
      this.turn = this.turn === "O" ? "X" : "O";
    }
  },
  created() {
    EventBus.$on("clickTd", this.onClickTd);
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