import { Debito } from '@/model/Debito';
import { Aluno } from '@/model/Aluno';

export class DebitoState {
  public debitosSelecionados?: Debito[];
  public debitosAluno?: Debito[];
  public aluno?: Aluno;
}

export const state: DebitoState = Object.assign(new DebitoState(), {
  debitosSelecionados: [] as Debito[],
  debitosAluno: [] as Debito[],
  aluno: {},
});

export default state;