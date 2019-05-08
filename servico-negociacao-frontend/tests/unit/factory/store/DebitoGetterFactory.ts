import { FactoryStoreBase } from '../FactoryStoreBase';
import { Container } from 'typescript-ioc';
import { HttpService } from 'componente-frontend-core/services/HttpService';
import { DadoQueApiRetornaDoisDebitos } from '../../../unit/stubs/DadoQueApiRetornaDoisDebitos';
import actions from '@/store/debito/actions';
import getters from '@/store/debito/getters';
import mutations, { DebitoMutationTypes } from '@/store/debito/mutations';
import state from '@/store/debito/state';
import { ObterDebitosDoAluno } from '@/model/ObterDebitosDoAluno';

export class DebitoGetterFactory extends FactoryStoreBase {

  protected stubarApi(): void {
      Container.bind(HttpService).to(DadoQueApiRetornaDoisDebitos);
  }

  protected configurarStore() {
    return {
      state: Object.assign(state, { debitosAluno: [] }),
      mutations,
      actions,
      getters,
    };
  }

  public dadoOStateComDoisDebitos(): void {

    const debitos =
    [
      {
        id: 1,
      },
      {
        id: 2
      },
    ]

    const obterDebitos = {
      debitos: debitos,
      aluno: {
        nome: "Kessia"
      }
    }

    this.store.commit(DebitoMutationTypes.SET_DEBITOS_ALUNO, obterDebitos);
  }

  public dadoOStateComDoisDebitosComValorTotalIgual20(): void {

    const debitos =
    [
      {
        id: 1,
        valorOriginal: 18,
        mora: 1,
        multa: 1,
        total: 20
      },
      {
        id: 2,   
        valorOriginal: 18,
        mora: 1,
        multa: 1,
        total: 20
      },
    ]

    const obterDebitos = {
      debitos: debitos,
      aluno: {
        nome: "Kessia"
      }
    }

    this.store.commit(DebitoMutationTypes.SET_DEBITOS_ALUNO, obterDebitos);
  }
}