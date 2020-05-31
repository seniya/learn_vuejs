<template>
  <div>
    <div>
      <router-link to="/game/index">게임매처</router-link>
      <router-link to="/game/number-baseball">숫자야구</router-link>
      <router-link to="/game/response-check">반응속도체크</router-link>
      <router-link to="/game/rotto-game">로또게임</router-link>
      <router-link to="/game/tictacto-game">틱택토게임</router-link>
      <router-link to="/game/mine-search">지뢰찾기</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./routes";
export default {
  router,
  components: {},
  computed: {},
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