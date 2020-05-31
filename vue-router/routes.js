import Vue from 'vue';
import VueRouter from 'vue-router';

import NumberBaseball from '../3. 숫자야구/NumberBaseball';
import ResponseCheck from '../4.반응속도체크/ResponseCheck';
import RottoGame from '../6.로또/RottoGame';
import TictactoGame from '../7.틱텍토/TictactoGame';
import MineSearch from '../8.mine_search/MineSearch';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/number-baseball', component: NumberBaseball },
    { path: '/response-check', component: ResponseCheck },
    { path: '/rotto-game', component: RottoGame },
    { path: '/tictacto-game', component: TictactoGame },
    { path: '/mine-search', component: MineSearch },
    { path: '/game/:name', component: GameMatcher },  // /game/number-baseball
  ]
})