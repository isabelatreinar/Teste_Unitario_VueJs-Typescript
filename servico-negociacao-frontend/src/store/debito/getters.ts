import { GetterTree } from 'vuex';
import { DebitoState } from './state';
import { RootState } from '@/store';

export enum DebitoGetterTypes {
  DEBITOS_ALUNO = 'DEBITOS_ALUNO',
  TOTAL_SELECIONADO = 'TOTAL_SELECIONADO',
  DIVIDA_TOTAL = 'DIVIDA_TOTAL',
  ALUNO = 'ALUNO',
}

const getters: GetterTree<DebitoState, RootState> = {
  [DebitoGetterTypes.DEBITOS_ALUNO](state) {
    return state.debitosAluno;
  },
  [DebitoGetterTypes.DIVIDA_TOTAL](state) {
    let total = 0.0;
    state.debitosAluno!.forEach((element) => {
      total += element.total!;
    });
    return total;
  },
  [DebitoGetterTypes.TOTAL_SELECIONADO](state) {
    let total = 0.0;
    state.debitosSelecionados!.forEach((element) => {
      total += element.total!;

    });
    return total;
  },
  [DebitoGetterTypes.ALUNO](state) {
    return state.aluno;
  },
};

export default getters;
