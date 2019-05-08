import { FactoryComponentBase } from '../FactoryComponentBase';
import { shallowMount } from '@vue/test-utils';
import store from '@/store';
import Campanhas from '@/components/campanha/campanhas.vue';
import { StoreNamespaces } from '@/store/namespaces';
import { CampanhaMutationTypes } from '@/store/campanha/mutations';

export class CampanhasFactory extends FactoryComponentBase<Campanhas> {

  public criarWrapper(): void {
    this.componente = shallowMount(Campanhas, { store });
  }

  public dadoQueAStoreNaoPossuaCampanhas(): void {
    const namespace = StoreNamespaces.CAMPANHA;

    store.commit(`${ namespace }/${ CampanhaMutationTypes.SET_CAMPANHAS }`, []);
  }
  public dadoQueAStorePossuaCampanhas(): void {
    const namespace = StoreNamespaces.CAMPANHA;

    const campanhas = [
      {id: 1,
      descricao: 'Camp1',
      maximoParcelas: 2,
      descontoJuros: 1,
      descontoMulta: 1,
      },
    ];

    store.commit(`${ namespace }/${ CampanhaMutationTypes.SET_CAMPANHAS }`, campanhas);
  }
}
