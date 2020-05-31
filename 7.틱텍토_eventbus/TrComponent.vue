<template>
  <tr>
    <td-component
      v-for="(celldData, index) in rowData"
      :cell-data="celldData"
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
    rowData: Array,
    rowIndex: Number
  },
  data() {
    return {
      parent: "this is father"
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>