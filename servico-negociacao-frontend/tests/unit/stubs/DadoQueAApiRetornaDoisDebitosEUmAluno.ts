import { StubBase } from './StubBase';

export class DadoQueAApiRetornaDoisDebitosEUmAluno extends StubBase{
    protected dadoUmResponse(){
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

    return obterDebitos;
  }
}

