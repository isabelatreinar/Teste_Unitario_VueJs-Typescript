import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue, config } from '@vue/test-utils';
import Vue from 'vue';

config.logModifiedComponents = false;
const localVueSingle = createLocalVue();
localVueSingle.config.silent = true;
Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuex);

Vue.prototype.$analytics = {
  track: (obj: any) => obj,
};
