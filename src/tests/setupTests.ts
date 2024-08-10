import { config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import { createPinia } from 'pinia';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,
});

config.global.plugins = [createPinia(), vuetify];
