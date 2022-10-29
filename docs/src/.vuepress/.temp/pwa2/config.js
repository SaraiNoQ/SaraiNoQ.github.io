import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/GitHub/project/blog/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.116/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "D:/GitHub/project/blog/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.116/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
