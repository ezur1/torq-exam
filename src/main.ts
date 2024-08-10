import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import noSpacesDirective from './directives/noSpaces';
import vuetify from './plugins/vuetify'

const app = createApp(App);

// Register directives globally
app.directive('no-spaces', noSpacesDirective);

app.use(createPinia());
app.use(vuetify);
app.mount("#app");
