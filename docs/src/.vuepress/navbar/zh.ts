import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "香蕉",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "edit", link: "cherry" },
      { text: "火龙果", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "代码人生",
    icon: "code",
    prefix: "/zh/nodejs/",
    children: [
      {
        text: "Nodejs",
        icon: "edit",
        prefix: "base/",
        children: [
          { text: "目录", icon: "flow", link: "" },
          // { text: "Nodejs入门介绍", icon: "edit", link: "simple-detail" },
        ],
      },
    ],
  },
  {
    text: "废纸篓",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
