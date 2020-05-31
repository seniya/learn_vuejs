<template>
  <td v-on:click="onClickTd">{{cellData}}</td>
</template>

<script>
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number
  },
  computed: {},
  methods: {
    onClickTd() {
      console.log("onClickTd : ", this.$root.$data);
      // console.log("onClickTd : ", this.$parent.$data);
      let rootData = this.$root.$data;
      this.$set(
        rootData.tableData[this.rowIndex],
        this.cellIndex,
        rootData.turn
      );

      rootData.turn = rootData.turn === "O" ? "X" : "O";
    }
  }
};
</script>

<style scoped>
</style>