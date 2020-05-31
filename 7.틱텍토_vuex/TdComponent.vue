<template>
  <td v-on:click="onClickTd">{{cellData}}</td>
</template>

<script>
import { mapState } from "vuex";
import { CLICK_CELL, CHANGE_TURN } from "./store";
export default {
  props: {
    rowIndex: Number,
    cellIndex: Number
  },
  computed: {
    ...mapState({
      tableData: state => state.tableData,
      turn: state => state.turn,
      cellData: function(state) {
        return state.tableData[this.rowIndex][this.cellIndex];
      }
    })
  },
  methods: {
    onClickTd() {
      // console.log("onClickTd : ", this.$root.$data);
      // console.log("onClickTd : ", this.$parent.$data);
      this.$store.commit(CLICK_CELL, {
        row: this.rowIndex,
        cell: this.cellIndex
      });
      this.$store.commit(CHANGE_TURN);
    }
  },
  created() {}
};
</script>

<style scoped>
</style>