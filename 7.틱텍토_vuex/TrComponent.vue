<template>
  <tr>
    <td-component
      v-for="(celldData, index) in rowData"
      :cell-index="index"
      :row-index="rowIndex"
      :key="index"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";
export default {
  components: {
    TdComponent
  },
  props: {
    rowIndex: Number
  },
  data() {
    return {
      parent: "this is father"
    };
  },
  computed: {
    rowData() {
      return this.$store.state.tableData[this.rowIndex];
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>