<template>
    <v-card v-if="aluno">
        <v-container>
            <v-layout row wrap>
                <v-flex xs2>
                    <v-avatar size="64" color="grey lighten-4">
                        <img :src="aluno.foto" alt="avatar">
                    </v-avatar>
                </v-flex>
                <v-flex>
                    <div>{{aluno.nome}}</div>
                    <div>Curso: {{aluno.curso}}</div>
                    <div>Turno: {{aluno.turno}} | Campus: {{aluno.Campus}} | Período/Módulo: {{aluno.periodo}}</div>
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
import { namespace } from 'vuex-class';
import { DebitoGetterTypes } from '@/store/debito/getters';
import { StoreNamespaces } from '@/store/namespaces';
import { Aluno } from '@/model/Aluno';

const debitoNamespace = namespace(StoreNamespaces.DEBITO);

@Component({
  components: {
  },
})

export default class DadosAluno extends Vue {
  @debitoNamespace.Getter(DebitoGetterTypes.ALUNO)
  public aluno?: Aluno;
}
</script>