import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'moduleA' })
export default class ModuleA extends VuexModule {
  data: string = 'moduleA123';

  @Mutation
  private setData(data: string) {
    this.data = data;
  }

  @Action
  public editData(data: string) {
    this.context.commit('setData', data);
  }

  get modulAdata() {
    return this.data;
  }
}
/*
import { Module } from 'vuex';
import { RootState } from './index';

interface moduleA {
  data: string;
}

const module: Module<moduleA, RootState> = {
  namespaced: true,
  state: {
    data: 'moduleA',
  },
  mutations: {
    setData(state, data: string) {
      state.data = data;
    },
  },
  actions: {
    setRootData({ commit }, data: string) {
      commit('setData', data);
    },
  },
  getters: {
    data: (state) => state.data,
  },
};

export default module;
*/
