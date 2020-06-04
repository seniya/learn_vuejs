import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from './store.interface';
import AxiosServoce from '../service/axios.service';
import { AxiosResponse } from 'axios';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  mutations: {
    // TODO add
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    // TODO change status
    changeStatus(
      state,
      { id, status }: { id: number; status: 'active' | 'clear' },
    ) {
      state.todoList[id].status = status;
    },
    // TODO remove
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) =>
      state.todoList.slice().filter((item: Item) => item.status === 'active'),
    clearTodoList: (state) =>
      state.todoList.slice().filter((item: Item) => item.status === 'clear'),
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList;
    },
  },
  actions: {
    async initData({ commit }) {
      // TODO http request
      const response: AxiosResponse<{
        todoList: Item[];
      }> = await AxiosServoce.instance.get('/data.json');

      commit('setTodoList', response.data.todoList);
    },
  },
  modules: {},
};

export default new Vuex.Store(store);
