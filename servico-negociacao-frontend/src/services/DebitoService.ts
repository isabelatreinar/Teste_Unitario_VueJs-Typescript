import { HttpService } from 'componente-frontend-core/services/HttpService';
import { ObterDebitosDoAluno } from '@/model/ObterDebitosDoAluno';
import { ServiceBase } from './ServiceBase';
import { Inject } from 'typescript-ioc';

export class DebitoService extends ServiceBase {
  protected urlBase: string = 'http://localhost:54887';

  constructor(@Inject http: HttpService) {
    super(http);
  }


  public async obterDebitosDoAluno(cpf: string): Promise<ObterDebitosDoAluno> {
    const resposta = await this.http
      .get<ObterDebitosDoAluno>(`http://localhost:54887/api/ObterDebitosDoAluno/${cpf}`);
    return resposta.data!;
  }
}
