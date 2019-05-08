import { DebitoServiceFactory } from '../../factory/services/DebitoServiceFactory';
import { ObterDebitosDoAluno } from '../../../../src/model/ObterDebitosDoAluno';
import debito from '../../../../src/store/debito/index';


describe('DebitoService', () =>{

    const factory = new DebitoServiceFactory();
    it('Dado que 2 débitos foram retornados com sucesso', async (done) =>{
    
        //arrange
        factory.dadoQueForamRetornadosDoisDebitos();

        //act
        const obterDebitosDoAluno = await factory.servico.obterDebitosDoAluno('1');


        //assert
        expect(obterDebitosDoAluno.debitos!.length).toBe(2);

        done();
    });
});