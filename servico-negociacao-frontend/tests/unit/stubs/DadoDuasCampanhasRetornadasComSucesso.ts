import { StubBase } from './StubBase';

export class DadoDuasCampanhasRetornadasComSucesso extends StubBase {

  protected dadoUmResponse(): any {
    const campanhas = 
    [
      {
        id: 1,
        descricao: 'Camp1',
        maximoParcelas: 2,
        descontoJuros: 1,
        descontoMulta: 1,      
      },
      {
        id: 2,
        descricao: 'Camp2',
        maximoParcelas: 2,
        descontoJuros: 1,
        descontoMulta: 1,      
      },
    ]

    return campanhas;
  }
}