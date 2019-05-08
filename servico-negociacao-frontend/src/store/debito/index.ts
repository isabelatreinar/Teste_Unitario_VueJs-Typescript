import { Module } from 'vuex';
import { DebitoState, state } from './state';
import { RootState } from '@/store';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const debito: Module<DebitoState, RootState> = {
  actions,
  state,
  mutations,
  getters,
  namespaced: true,
};

export default debito;
