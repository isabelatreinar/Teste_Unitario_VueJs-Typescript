import Vue from 'vue';
import Vuex from 'vuex';
import debito from './debito';
import campanha from './campanha';

Vue.use(Vuex);

export class RootState {
}

const store = new Vuex.Store({
  modules: {
    debito,
    campanha,
  },
});

Object.assign(window, { $store: store });

export default store;
