import { GetterTree } from 'vuex';
import { CampanhaState } from './state';
import { RootState } from '@/store';

export enum CampanhaGetterTypes {
  CAMPANHAS = 'CAMPANHAS',
  CAMPANHA_SELECIONADA = 'CAMPANHA_SELECIONADA',
}

const getters: GetterTree<CampanhaState, RootState> = {
  [CampanhaGetterTypes.CAMPANHAS](state) {
    return state.campanhas;
  },

  [CampanhaGetterTypes.CAMPANHA_SELECIONADA](state) {
    return state.campanhaSelecionada;
  },
};

export default getters;
