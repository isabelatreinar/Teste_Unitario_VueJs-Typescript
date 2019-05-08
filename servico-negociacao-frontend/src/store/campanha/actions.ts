import { ActionTree } from 'vuex';
import { CampanhaState } from './state';
import { CampanhaMutationTypes } from './mutations';
import { RootState } from '@/store';
import { CampanhaService } from '@/services/CampanhaService';
import { Container } from 'typescript-ioc';

export enum CampanhaActionTypes {
  CARREGAR_CAMPANHAS = 'CARREGAR_CAMPANHAS',
  SET_CAMPANHA_SELECIONADA = 'SET_CAMPANHA_SELECIONADA',
}

const actions: ActionTree<CampanhaState, RootState> = {
  async [CampanhaActionTypes.CARREGAR_CAMPANHAS]({ commit }) {

    const service = Container.get(
      CampanhaService,
    ) as CampanhaService;

    const dados = await service.obterCampanhas();
    commit(CampanhaMutationTypes.SET_CAMPANHAS, dados);
  },
  async [CampanhaActionTypes.SET_CAMPANHA_SELECIONADA]({ commit }, campanhaSelecionada) {
    commit(CampanhaMutationTypes.SET_CAMPANHA_SELECIONADA, campanhaSelecionada);
  },
};

export default actions;
