import {
  CampanhasFactory,
} from '../../factory/components/CampanhasFactory';

describe('Componente de campanhas', () => {
  const factory = new CampanhasFactory();

  beforeEach(async (done) => {

    await factory.montarComponente();

    done();
  });

  it('Garante que o titulo esta renderizado', () => {
    const titulo = factory.componente.find('#titulo-campanhas');
    expect(titulo.exists()).toBeTruthy();
  });

  it('Garante campanhas não são renderizadas quando não há campanhas na store', () => {
    factory.dadoQueAStoreNaoPossuaCampanhas();
    const titulo = factory.componente.find('#layout-campanhas');
    expect(titulo.exists()).toBeFalsy();
  });

  it('Garante campanhas são renderizadas quando há campanhas na store', () => {
    factory.dadoQueAStorePossuaCampanhas();
    const titulo = factory.componente.find('#layout-campanhas');
    expect(titulo.exists()).toBeTruthy();
  });
});

