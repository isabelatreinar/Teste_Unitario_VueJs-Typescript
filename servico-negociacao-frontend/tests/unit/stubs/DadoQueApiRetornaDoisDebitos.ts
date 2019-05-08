import { StubBase } from './StubBase';

export class DadoQueApiRetornaDoisDebitos extends StubBase {

  protected dadoUmResponse(): any {

    const debitos = 
    [
      {
        id: 1,
        periodo: '2019/1',
        parcela: 2,
        matricula: 123456,
        curso: 'Sistemas de Informação',      
        valorOriginal: 253.85,
        mora: 1.25,
        multa: 3.50,
        total: 285.60
      },
      {
        id: 2,
        periodo: '2019/1',
        parcela: 3,
        matricula: 123456,
        curso: 'Sistemas de Informação',      
        valorOriginal: 253.85,
        mora: 0.85,
        multa: 3.50,
        total: 289.95
      },
    ]

    return debitos;
  }
}