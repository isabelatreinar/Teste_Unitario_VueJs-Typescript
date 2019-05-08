<template>
  <v-card>
    <v-card-title class="subheading" id="titulo-campanhas">Campanhas Disponíveis</v-card-title>

    <v-layout row wrap id="layout-campanhas" v-if="campanhas.length > 0">
            <v-flex
              v-for="campanha in campanhas"
              :key="campanha.id"
              v-bind="{ [`xs3`]: true }"
            >
            <v-card class="clickable card-campanha" @click.native="aoMudarSelecao(campanha)">
              <v-card-title>{{campanha.id}}</v-card-title>
              <div>{{campanha.descricao}}</div>
              <div>Max Parcelas: {{campanha.maximoParcelas}}</div>
              <div>Desconto Juros: {{campanha.descontoJuros * 100}} %</div>
              <div>Desconto Multa: {{campanha.descontoMulta * 100}} %</div>
              </v-card>
            </v-flex>
          </v-layout>

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
import { CampanhaGetterTypes } from '@/store/campanha/getters';
import { Campanha } from '@/model/Campanha';
import { warn } from 'vue-class-component/lib/util';
import { CampanhaActionTypes } from '@/store/campanha/actions';

const campanhaNamespace = namespace(StoreNamespaces.CAMPANHA);

@Component({
  components: {
  },
})
export default class Campanhas extends Vue {
  @campanhaNamespace.Getter(CampanhaGetterTypes.CAMPANHAS)
  public campanhas?: Campanha[];

  @campanhaNamespace.Action(CampanhaActionTypes.SET_CAMPANHA_SELECIONADA)
  public setCampanhaSelecionada!: (campanhaSelecionada: Campanha) => Promise<void>;

  @campanhaNamespace.Action(CampanhaActionTypes.CARREGAR_CAMPANHAS)
  public carregarCampanhas!: () => Promise<void>;

  public aoMudarSelecao(campanha: Campanha) {
    this.setCampanhaSelecionada(campanha);
  }

  public mounted() {
    this.carregarCampanhas();
  }

}
</script>

<style>
.clickable{
  cursor: pointer;
}
.card-campanha{
  padding: 20px;
  margin: 3px;
}
.card-campanha:hover{
  background-color:#E5E5E5;
}
</style>