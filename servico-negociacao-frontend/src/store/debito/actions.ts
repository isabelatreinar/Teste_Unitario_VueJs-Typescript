import { ActionTree } from 'vuex';
import { DebitoState } from './state';
import { DebitoMutationTypes } from './mutations';
import { RootState } from '@/store';
import { DebitoService } from '@/services/DebitoService';

export enum DebitoActionTypes {
  LISTAR_DEBITOS_DO_ALUNO = 'LISTAR_DEBITOS_DO_ALUNO',
  SET_DEBITOS_SELECIONADOS = 'SET_DEBITOS_SELECIONADOS',
}

const actions: ActionTree<DebitoState, RootState> = {
  async [DebitoActionTypes.LISTAR_DEBITOS_DO_ALUNO]({ commit }, cpf) {
    const dados = await new DebitoService().obterDebitosDoAluno(cpf);
    commit(DebitoMutationTypes.SET_DEBITOS_ALUNO, dados);
  },
  async [DebitoActionTypes.SET_DEBITOS_SELECIONADOS]({ commit }, debitosSelecionados) {
    commit(DebitoMutationTypes.SET_DEBITOS_SELECIONADOS, debitosSelecionados);
  },
};

export default actions;
