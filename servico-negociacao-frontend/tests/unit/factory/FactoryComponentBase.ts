import { Wrapper } from '@vue/test-utils';
import Vue, { VueConstructor } from 'vue';

export abstract class FactoryComponentBase<T extends Vue | null> {
  public componente!: Wrapper<T>;
  public espiao!: any;

  public get vueInstance(): any {
    return this.componente.vm;
  }


  public async montarComponente(): Promise<void> {
    this.criarWrapper();
    await this.aguardarRenderizacao();
  }

  public aguardarRenderizacao(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        jest.runAllTimers();
        resolve();
      });
    });
  }

  public abstract criarWrapper(): void;
}
