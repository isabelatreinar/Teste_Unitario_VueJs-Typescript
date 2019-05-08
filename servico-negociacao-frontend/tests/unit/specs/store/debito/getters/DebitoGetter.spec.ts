import { DebitoGetterFactory } from "../../../../../unit/factory/store/DebitoGetterFactory";
import { DebitoGetterTypes } from '@/store/debito/getters';

describe('store > campanha > getter', () => {

  const factory = new DebitoGetterFactory();

  beforeEach(() => {
    factory.injetarAPI();
    factory.dadoUmaStoreVazia();
  });

  afterEach(() => {
    factory.restaurarEstadoInicial();
  });

  it('Recupera débitos da store através do getter', async (done) => {
    factory.dadoOStateComDoisDebitos();

    const debitosObtidos = factory.store.getters[DebitoGetterTypes.DEBITOS_ALUNO];

    expect(2).toEqual(debitosObtidos.length);

    done();
  });

  it('Recupera a divida total da store', async (done) => {
    factory.dadoOStateComDoisDebitosComValorTotalIgual20();

    const dividaTotal = factory.store.getters[DebitoGetterTypes.DIVIDA_TOTAL];
    const valorEsperado = 40;
    
    expect(valorEsperado).toEqual(dividaTotal);

    done();
  });


});