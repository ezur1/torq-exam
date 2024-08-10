import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    setupFiles: "src/tests/setupTests.ts",
    css: false,
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
});
