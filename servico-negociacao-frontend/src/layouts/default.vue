<template>
  <v-app>
    <cabecalho>
    </cabecalho> 
    <v-content>
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import Cabecalho from '@/components/layout/cabecalho.vue';

@Component({
  components: {
    Cabecalho,
  },
})
export default class LayoutPage extends Vue {}
</script>