import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/nodejs": [
    "",
    {
      text: "基础用法",
      icon: "edit",
      prefix: "base/",
      children: ["", "simple-detail"],
    },
  ],
  "/zh/": [
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "slides",
  ],
});
