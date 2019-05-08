import { Campanha } from '@/model/Campanha';
import { Aluno } from '@/model/Aluno';

export class CampanhaState {
  public campanhas?: Campanha[];
  public campanhaSelecionada?: Campanha;
}

export const state: CampanhaState = Object.assign(new CampanhaState(), {
  campanhas: [] as Campanha[],
  campanhaSelecionada: {},
});

export default state;