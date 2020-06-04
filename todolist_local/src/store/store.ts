import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from './store.interface';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      {
        id: 0,
        title: 'test',
        status: 'active',
      },
      {
        id: 1,
        title: 'cvbcvf rer2',
        status: 'active',
      },
      {
        id: 2,
        title: 'tdsfasf est',
        status: 'active',
      },
      {
        id: 3,
        title: 'testa adsf',
        status: 'clear',
      },
      {
        id: 4,
        title: 'test3 3ss',
        status: 'clear',
      },
      {
        id: 5,
        title: ' fdf',
        status: 'active',
      },
    ],
  },
  mutations: {
    // TODO add
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    // TODO change status
    changeStatus(
      state,
      { id, status }: { id: number; status: 'active' | 'clear' }
    ) {
      state.todoList[id].status = status;
    },
    // TODO remove
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
  },
  actions: {},
  modules: {},
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) =>
      state.todoList.slice().filter((item: Item) => item.status === 'active'),
    clearTodoList: (state) =>
      state.todoList.slice().filter((item: Item) => item.status === 'clear'),
  },
};

export default new Vuex.Store(store);
