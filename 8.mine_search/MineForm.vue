<template>
  <div>
    <input type="number" placeholder="가로" :value="row" v-on:change="onChangeRow" />
    <input type="number" placeholder="세로" :value="cell" v-on:change="onChangeCell" />
    <input type="number" placeholder="지뢰" :value="mine" v-on:change="onChangeMine" />
    <button v-on:click="onClickBtn">시작</button>
  </div>
</template>

<script>
import { START_GAME } from "./store";
export default {
  props: {},
  components: {},
  data() {
    return {
      row: 10,
      cell: 10,
      mine: 20
    };
  },
  computed: {},
  methods: {
    onChangeRow(e) {
      this.row = e.target.value;
    },
    onChangeCell(e) {
      this.cell = e.target.value;
    },
    onChangeMine(e) {
      this.mine = e.target.value;
    },
    onClickBtn() {
      this.$store.commit(START_GAME, {
        row: this.row,
        cell: this.cell,
        mine: this.mine
      });
    }
  }
};
</script>

<style scoped>
</style>