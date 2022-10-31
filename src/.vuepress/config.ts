import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "SaraiNoQ",
      description: "A blog for myself",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SaraiNoQ",
      description: "我的博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
