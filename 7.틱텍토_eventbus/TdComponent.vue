<template>
  <td v-on:click="onClickTd">{{cellData}}</td>
</template>

<script>
import EventBus from "./EventBus";
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number
  },
  computed: {},
  methods: {
    onClickTd() {
      // console.log("onClickTd : ", this.$root.$data);
      // if (this.cellData) return;

      EventBus.$emit("clickTd", this.rowIndex, this.cellIndex);
    }
  }
};
</script>

<style scoped>
</style>