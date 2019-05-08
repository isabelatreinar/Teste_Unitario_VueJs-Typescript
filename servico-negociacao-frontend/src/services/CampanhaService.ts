import { Inject } from 'typescript-ioc';
import { HttpService } from 'componente-frontend-core/services/HttpService';
import { Campanha } from '@/model/Campanha';
import { ServiceBase } from './ServiceBase';


export class CampanhaService extends ServiceBase {
  protected urlBase: string = 'http://localhost:54887';

  constructor(@Inject http: HttpService) {
    super(http);
  }

  public async obterCampanhas(): Promise<Campanha[]> {
    const resposta = await this.http
      .get<Campanha[]>(`${this.urlBase}/api/ObterCampanhas`);
    return resposta.data!;
  }
}
