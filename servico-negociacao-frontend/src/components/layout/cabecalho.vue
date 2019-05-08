<template>
    <v-toolbar fixed clipped-left app>
   <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon></v-toolbar-side-icon>
   </v-toolbar-title>
      <v-text-field
         class="pl-5 pr-4"
         light
         solo
         placeholder="CPF"
         v-model="cpf">
      </v-text-field>
      <v-btn icon class="mr-5"
      @click="carregar">
      <v-icon>search</v-icon>
    </v-btn>
</v-toolbar>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { DebitoActionTypes } from '@/store/debito/actions';
import { StoreNamespaces } from '@/store/namespaces';

const debitoNamespace = namespace(StoreNamespaces.DEBITO);

@Component({
})
export default class Cabecalho extends Vue {
  @debitoNamespace.Action(DebitoActionTypes.LISTAR_DEBITOS_DO_ALUNO)
  public listarDebitosDoAluno!: (cpf: string) => Promise<void>;

  public cpf: string = '';

  public carregar() {
    this.listarDebitosDoAluno(this.cpf);
  }
}
</script>