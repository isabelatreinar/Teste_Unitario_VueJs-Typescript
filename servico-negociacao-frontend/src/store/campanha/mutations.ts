import { MutationTree } from 'vuex';
import { CampanhaState } from './state';
import { Campanha } from '@/model/Campanha';

export enum CampanhaMutationTypes {
  SET_CAMPANHAS = 'SET_CAMPANHAS',
  SET_CAMPANHA_SELECIONADA = 'SET_CAMPANHA_SELECIONADA',
}

const mutations: MutationTree<CampanhaState> = {
  [CampanhaMutationTypes.SET_CAMPANHAS](state: CampanhaState, campanhas: Campanha[]) {
    state.campanhas = campanhas;
  },
  [CampanhaMutationTypes.SET_CAMPANHA_SELECIONADA](state: CampanhaState, campanhaSelecionada: Campanha) {
    state.campanhaSelecionada = campanhaSelecionada;
  },
};

export default mutations;
