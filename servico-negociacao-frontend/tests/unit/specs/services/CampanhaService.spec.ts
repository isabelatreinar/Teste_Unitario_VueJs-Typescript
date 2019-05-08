import { CampanhaServiceFactory } from "../../factory/services/CampanhaServiceFactory";

describe ('service > CampanhaService', () => {

  const factory = new CampanhaServiceFactory();

  it ('Obter uma campanhas', async (done) => {

    factory.dadoQueApiRetorneUmaCampanha();
    const campanhas = await factory.servico.obterCampanhas();

    expect(campanhas.length).toBe(1);
    done();
  });

  it ('Obter duas campanhas', async (done) => {

    factory.dadoQueApiRetorneDuasCampanhas();
    const campanhas = await factory.servico.obterCampanhas();

    expect(campanhas.length).toBe(2);
    done();
  });

  it ('Não deve possuir dados quando API não retorna campanhas', async (done) => {
    factory.dadoQueNaoForamRetornadasCampanhas();

    const campanhas = await factory.servico.obterCampanhas();
    expect(campanhas.length).toBe(0);

    done();
  });

});