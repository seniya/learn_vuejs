<template>
  <div>
    게임매처
    <div v-if="currentGame === 'number-baseball'">
      <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'response-check'">
      <response-check></response-check>
    </div>
    <div v-else-if="currentGame === 'rotto-game'">
      <rotto-game></rotto-game>
    </div>
    <div v-else-if="currentGame === 'tictacto-game'">
      <tictacto-game></tictacto-game>
    </div>
    <div v-else-if="currentGame === 'mine-search'">
      <mine-search></mine-search>
    </div>
    <div v-else>일치하는 게임이 없당</div>
  </div>
</template>


<script>
import NumberBaseball from "../3. 숫자야구/NumberBaseball";
import ResponseCheck from "../4.반응속도체크/ResponseCheck";
import RottoGame from "../6.로또/RottoGame";
import TictactoGame from "../7.틱텍토/TictactoGame";
import MineSearch from "../8.mine_search/MineSearch";

export default {
  components: {
    NumberBaseball,
    ResponseCheck,
    RottoGame,
    TictactoGame,
    MineSearch
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
  computed: {
    currentGame() {
      return this.$route.params.name;
    }
  }
};
</script>