import { MutationTree } from 'vuex';
import { DebitoState } from './state';
import { Debito } from '@/model/Debito';
import { ObterDebitosDoAluno } from '@/model/ObterDebitosDoAluno';

export enum DebitoMutationTypes {
  SET_DEBITOS_ALUNO = 'SET_DEBITOS_ALUNO',
  SET_DEBITOS_SELECIONADOS = 'SET_DEBITOS_SELECIONADOS',
}

const mutations: MutationTree<DebitoState> = {
  [DebitoMutationTypes.SET_DEBITOS_ALUNO](state: DebitoState, payload: ObterDebitosDoAluno) {
    state.debitosAluno = payload.debitos;
    state.aluno = payload.aluno;
  },
  [DebitoMutationTypes.SET_DEBITOS_SELECIONADOS](state: DebitoState, debitosSelecionados: Debito[]) {
    state.debitosSelecionados = debitosSelecionados;
  },
};

export default mutations;
