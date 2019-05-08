import { FactoryServiceBase } from '../FactoryServiceBase';
import { DebitoService } from '../../../../src/services/DebitoService';
import { DadoQueAApiRetornaDoisDebitosEUmAluno } from '../../stubs/DadoQueAApiRetornaDoisDebitosEUmAluno';

export class DebitoServiceFactory extends FactoryServiceBase<DebitoService>{
   
    public get servico(): DebitoService{
        return new DebitoService(this.apiStub);
    }

    public dadoQueForamRetornadosDoisDebitos(): void{
        this.apiStub = new DadoQueAApiRetornaDoisDebitosEUmAluno();
    }
    
}