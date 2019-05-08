import { CampanhaService } from '@/services/CampanhaService';
import { FactoryServiceBase } from '../FactoryServiceBase';
import { DadoUmaCampanhaRetornadaComSucesso } from '../../../unit/stubs/DadoUmaCampanhaRetornadaComSucesso';
import { DadoDuasCampanhasRetornadasComSucesso } from '../../../unit/stubs/DadoDuasCampanhasRetornadasComSucesso';
import { DadoUmaObtencaoDeTurmaComErro } from '../../../unit/stubs/DadoUmaObtencaoDeTurmaComErro';
import { DadoQueNaoForamRetornadasCampanhas } from '../../../unit/stubs/DadoQueNaoForamRetornadasCampanhas';

export class CampanhaServiceFactory extends FactoryServiceBase<CampanhaService> {
  
  public get servico(): CampanhaService {
    return new CampanhaService(this.apiStub);
  }

  public dadoQueApiRetorneUmaCampanha(): void {
    this.apiStub = new DadoUmaCampanhaRetornadaComSucesso();
  }
  public dadoQueApiRetorneDuasCampanhas(): void {
    this.apiStub = new DadoDuasCampanhasRetornadasComSucesso();
  }
  public dadoQueNaoForamRetornadasCampanhas(): void {
    this.apiStub = new DadoQueNaoForamRetornadasCampanhas();
  }

}
