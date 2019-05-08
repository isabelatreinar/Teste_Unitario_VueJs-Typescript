<template>
  <v-card>
    <v-card-title class="subheading">Débitos do Aluno</v-card-title>
    <v-data-table
      v-model="debitosSelecionados"
      :headers="headers"
      :items="debitos"
      item-key="id"
      select-all
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td class="text-xs-right">{{ props.item.periodo }}</td>
        <td class="text-xs-right">{{ props.item.parcela }}</td>
        <td class="text-xs-right">{{ props.item.matricula }}</td>
        <td class="text-xs-right">{{ props.item.curso }}</td>
        <td class="text-xs-right">{{ props.item.valorOriginal }}</td>
        <td class="text-xs-right">{{ props.item.mora }}</td>
        <td class="text-xs-right">{{ props.item.multa }}</td>
        <td class="text-xs-right">{{ props.item.total }}</td>
        <td class="text-xs-right">{{ props.item.vencimento }}</td>
      </template>
    </v-data-table>
    <div class="caption label">Total de Titulos: {{debitos.length}}</div>
  </v-card>
</template>


<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';
import { StoreNamespaces } from '../../store/namespaces';
import { namespace } from 'vuex-class';
import { DebitoGetterTypes } from '@/store/debito/getters';
import { Debito } from '@/model/Debito';
import { warn } from 'vue-class-component/lib/util';
import { DebitoActionTypes } from '@/store/debito/actions';

const debitoNamespace = namespace(StoreNamespaces.DEBITO);

@Component({
  components: {
  },
})

export default class Debitos extends Vue {
  @debitoNamespace.Getter(DebitoGetterTypes.DEBITOS_ALUNO)
  public debitos?: Debito[];

  @debitoNamespace.Action(DebitoActionTypes.SET_DEBITOS_SELECIONADOS)
  public setDebitosSelecionados!: (debitosSelecionados: Debito[]) => Promise<void>;

  public debitosSelecionados: Debito[] = [];

  public headers: any = [
          { text: 'Período', value: 'periodo' },
          { text: 'Parcela', value: 'parcela' },
          { text: 'Matricula', value: 'matricula' },
          { text: 'Curso', value: 'curso' },
          { text: 'Valor', value: 'valorOriginal' },
          { text: 'Mora', value: 'mora' },
          { text: 'Multa', value: 'multa' },
          { text: 'Valor Total', value: 'total' },
          { text: 'Vencimento', value: 'vencimento' },
        ];

  @Watch('debitosSelecionados')
  public aoMudarSelecao(debitosSelecionados: Debito[]) {
    this.setDebitosSelecionados(debitosSelecionados);
  }
}
</script>

<style>
.label{
  padding: 20px;
}
table.v-table tbody td{
  height: 35px;
  font-size: 12px;
  padding: 0 3px;
}
</style>