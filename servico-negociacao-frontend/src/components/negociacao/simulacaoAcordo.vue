<template>
  <v-card color="blue white--text">
      <v-container>
          <v-layout row wrap class="valor">
              <v-flex xs12>
                <div class="headline">Simulação do acordo</div>
              </v-flex>
          </v-layout>
          <v-layout row wrap class="valor">
            <v-flex xs12>
                  <div class="body-2">Dívida Total</div>
                  <div>R$ {{dividaTotal}}</div>
              </v-flex>
          </v-layout>
           <v-divider dark></v-divider>
           <v-layout row wrap class="valor">
            <v-flex xs12>
                  <div class="body-2">Total Selecionado</div>
                  <div>R$ {{totalSelecionado}}</div>
              </v-flex>
          </v-layout>
           <v-divider dark></v-divider>
          <v-layout row wrap class="valor">
              <v-flex xs12>
                  <div class="body-2">Campanha Selecionada</div>
                  <div id="campanhaSelecionada">{{campanhaSelecionada.id}} - {{campanhaSelecionada.descricao}}</div>
              </v-flex>
          </v-layout>
      </v-container>
  </v-card>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { DebitoGetterTypes } from '@/store/debito/getters';
import { CampanhaGetterTypes } from '@/store/campanha/getters';
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
import { Campanha } from '@/model/Campanha';

const debitoNamespace = namespace(StoreNamespaces.DEBITO);
const campanhaNamespace = namespace(StoreNamespaces.CAMPANHA);

@Component({
  components: {
  },
})
export default class SimulacaoAcordo extends Vue {
  @debitoNamespace.Getter(DebitoGetterTypes.TOTAL_SELECIONADO)
  public totalSelecionado?: number;

  @debitoNamespace.Getter(DebitoGetterTypes.DIVIDA_TOTAL)
  public dividaTotal?: number;

  @campanhaNamespace.Getter(CampanhaGetterTypes.CAMPANHA_SELECIONADA)
  public campanhaSelecionada?: Campanha;
}
</script>
<style>
  .valor {
    padding: 20px 0;
  }
</style>