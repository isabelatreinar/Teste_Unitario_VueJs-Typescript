import { StubBase } from './StubBase';

export class DadoUmaCampanhaRetornadaComSucesso extends StubBase {

  protected dadoUmResponse(): any {
    const campanhas = 
    [
      {
       id: 1,
      descricao: 'Camp1',
      maximoParcelas: 2,
      descontoJuros: 1,
      descontoMulta: 1,      
      }
    ]

    return campanhas;
  }
}