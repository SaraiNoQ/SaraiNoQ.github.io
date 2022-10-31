import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

const footerHTML = ``;

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "SaraiNoQ",
    url: "https://mrhope.site",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",

  // fullscreen: true, // 是否开启全屏按钮

  darkmode: "toggle",

  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime", "Word"],

  blog: {
    medias: {
      // details see: https://vuepress-theme-hope.github.io/v2/zh/guide/blog/blogger.html
      BiliBili: "https://space.bilibili.com/1289899086",
      Gitee: "https://gitee.com/zachray",
      GitHub: "https://github.com/SaraiNoQ",
      Email: "sarainoq@outlook.com",
      Gmail: "sarainosakura@gmail.com",
      SaraiNoQ: [
        "http://82.157.232.71:8080",
        '<svg t="1667026765937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4375" width="24" height="24"><path d="M926.464 585.1648h48.7936v48.7424h-48.7936zM926.464 536.3712h48.7936v48.7936h-48.7936zM926.464 487.6288h48.7936v48.7424h-48.7936zM926.464 438.8352h48.7936v48.7936h-48.7936zM877.7216 682.6496h48.7424v48.7936h-48.7424zM877.7216 633.9072h48.7424v48.7424h-48.7424z" fill="#012777" p-id="4376"></path><path d="M877.7216 585.1648h48.7424v48.7424h-48.7424zM877.7216 536.3712h48.7424v48.7936h-48.7424zM877.7216 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4377"></path><path d="M877.7216 438.8352h48.7424v48.7936h-48.7424zM877.7216 390.0928h48.7424v48.7424h-48.7424zM877.7216 341.3504h48.7424v48.7424h-48.7424zM877.7216 292.5568h48.7424v48.7936h-48.7424zM828.928 780.1856h48.7936v48.7424h-48.7936z" fill="#012777" p-id="4378"></path><path d="M828.928 731.4432h48.7936v48.7424h-48.7936z" fill="#012777" p-id="4379"></path><path d="M828.928 682.6496h48.7936v48.7936h-48.7936zM828.928 633.9072h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4380"></path><path d="M828.928 585.1648h48.7936v48.7424h-48.7936zM828.928 536.3712h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4381"></path><path d="M828.928 487.6288h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4382"></path><path d="M828.928 438.8352h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4383"></path><path d="M828.928 390.0928h48.7936v48.7424h-48.7936zM828.928 341.3504h48.7936v48.7424h-48.7936zM828.928 292.5568h48.7936v48.7936h-48.7936z" fill="#DEE6FC" p-id="4384"></path><path d="M828.928 243.8144h48.7936v48.7424h-48.7936zM780.1856 828.928h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4385"></path><path d="M780.1856 780.1856h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4386"></path><path d="M780.1856 731.4432h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4387"></path><path d="M780.1856 682.6496h48.7424v48.7936h-48.7424zM780.1856 633.9072h48.7424v48.7424h-48.7424zM780.1856 585.1648h48.7424v48.7424h-48.7424zM780.1856 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4388"></path><path d="M780.1856 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4389"></path><path d="M780.1856 438.8352h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4390"></path><path d="M780.1856 390.0928h48.7424v48.7424h-48.7424zM780.1856 341.3504h48.7424v48.7424h-48.7424zM780.1856 292.5568h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4391"></path><path d="M780.1856 243.8144h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4392"></path><path d="M780.1856 195.072h48.7424v48.7424h-48.7424zM731.4432 828.928h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4393"></path><path d="M731.4432 780.1856h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4394"></path><path d="M731.4432 731.4432h48.7424v48.7424h-48.7424zM731.4432 682.6496h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4395"></path><path d="M731.4432 633.9072h48.7424v48.7424h-48.7424z" fill="#375AA4" p-id="4396"></path><path d="M731.4432 585.1648h48.7424v48.7424h-48.7424zM731.4432 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4397"></path><path d="M731.4432 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4398"></path><path d="M731.4432 438.8352h48.7424v48.7936h-48.7424zM731.4432 390.0928h48.7424v48.7424h-48.7424zM731.4432 341.3504h48.7424v48.7424h-48.7424z" fill="#012777" p-id="4399"></path><path d="M731.4432 292.5568h48.7424v48.7936h-48.7424zM731.4432 243.8144h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4400"></path><path d="M731.4432 195.072h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4401"></path><path d="M731.4432 146.2784h48.7424v48.7936h-48.7424zM682.6496 877.7216h48.7936v48.7424h-48.7936z" fill="#012777" p-id="4402"></path><path d="M682.6496 828.928h48.7936v48.7936h-48.7936z" fill="#DEE6FC" p-id="4403"></path><path d="M682.6496 780.1856h48.7936v48.7424h-48.7936z" fill="#DD75A1" p-id="4404"></path><path d="M682.6496 731.4432h48.7936v48.7424h-48.7936zM682.6496 682.6496h48.7936v48.7936h-48.7936zM682.6496 633.9072h48.7936v48.7424h-48.7936zM682.6496 585.1648h48.7936v48.7424h-48.7936zM682.6496 536.3712h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4405"></path><path d="M682.6496 487.6288h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4406"></path><path d="M682.6496 438.8352h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4407"></path><path d="M682.6496 390.0928h48.7936v48.7424h-48.7936zM682.6496 341.3504h48.7936v48.7424h-48.7936z" fill="#375AA4" p-id="4408"></path><path d="M682.6496 292.5568h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4409"></path><path d="M682.6496 243.8144h48.7936v48.7424h-48.7936z" fill="#DD75A1" p-id="4410"></path><path d="M682.6496 195.072h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4411"></path><path d="M682.6496 146.2784h48.7936v48.7936h-48.7936zM633.9072 926.464h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4412"></path><path d="M633.9072 877.7216h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4413"></path><path d="M633.9072 828.928h48.7424v48.7936h-48.7424zM633.9072 780.1856h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4414"></path><path d="M633.9072 731.4432h48.7424v48.7424h-48.7424zM633.9072 682.6496h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4415"></path><path d="M633.9072 633.9072h48.7424v48.7424h-48.7424z" fill="#375AA4" p-id="4416"></path><path d="M633.9072 585.1648h48.7424v48.7424h-48.7424zM633.9072 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4417"></path><path d="M633.9072 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4418"></path><path d="M633.9072 438.8352h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4419"></path><path d="M633.9072 390.0928h48.7424v48.7424h-48.7424zM633.9072 341.3504h48.7424v48.7424h-48.7424z" fill="#375AA4" p-id="4420"></path><path d="M633.9072 292.5568h48.7424v48.7936h-48.7424z" fill="#A2D8EA" p-id="4421"></path><path d="M633.9072 243.8144h48.7424v48.7424h-48.7424z" fill="#012777" p-id="4422"></path><path d="M633.9072 195.072h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4423"></path><path d="M633.9072 146.2784h48.7424v48.7936h-48.7424z" fill="#DEE6FC" p-id="4424"></path><path d="M633.9072 97.536h48.7424v48.7424h-48.7424zM585.1648 926.464h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4425"></path><path d="M585.1648 877.7216h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4426"></path><path d="M585.1648 828.928h48.7424v48.7936h-48.7424zM585.1648 780.1856h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4427"></path><path d="M585.1648 731.4432h48.7424v48.7424h-48.7424zM585.1648 682.6496h48.7424v48.7936h-48.7424zM585.1648 633.9072h48.7424v48.7424h-48.7424zM585.1648 585.1648h48.7424v48.7424h-48.7424zM585.1648 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4428"></path><path d="M585.1648 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4429"></path><path d="M585.1648 438.8352h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4430"></path><path d="M585.1648 390.0928h48.7424v48.7424h-48.7424z" fill="#375AA4" p-id="4431"></path><path d="M585.1648 341.3504h48.7424v48.7424h-48.7424zM585.1648 292.5568h48.7424v48.7936h-48.7424z" fill="#A2D8EA" p-id="4432"></path><path d="M585.1648 243.8144h48.7424v48.7424h-48.7424z" fill="#012777" p-id="4433"></path><path d="M585.1648 195.072h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4434"></path><path d="M585.1648 146.2784h48.7424v48.7936h-48.7424z" fill="#DEE6FC" p-id="4435"></path><path d="M585.1648 97.536h48.7424v48.7424h-48.7424zM536.3712 926.464h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4436"></path><path d="M536.3712 877.7216h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4437"></path><path d="M536.3712 828.928h48.7936v48.7936h-48.7936zM536.3712 780.1856h48.7936v48.7424h-48.7936z" fill="#DD75A1" p-id="4438"></path><path d="M536.3712 731.4432h48.7936v48.7424h-48.7936zM536.3712 682.6496h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4439"></path><path d="M536.3712 633.9072h48.7936v48.7424h-48.7936z" fill="#375AA4" p-id="4440"></path><path d="M536.3712 585.1648h48.7936v48.7424h-48.7936zM536.3712 536.3712h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4441"></path><path d="M536.3712 487.6288h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4442"></path><path d="M536.3712 438.8352h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4443"></path><path d="M536.3712 390.0928h48.7936v48.7424h-48.7936zM536.3712 341.3504h48.7936v48.7424h-48.7936z" fill="#A2D8EA" p-id="4444"></path><path d="M536.3712 292.5568h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4445"></path><path d="M536.3712 243.8144h48.7936v48.7424h-48.7936z" fill="#DD75A1" p-id="4446"></path><path d="M536.3712 195.072h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4447"></path><path d="M536.3712 146.2784h48.7936v48.7936h-48.7936zM487.6288 926.464h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4448"></path><path d="M487.6288 877.7216h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4449"></path><path d="M487.6288 828.928h48.7424v48.7936h-48.7424zM487.6288 780.1856h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4450"></path><path d="M487.6288 731.4432h48.7424v48.7424h-48.7424zM487.6288 682.6496h48.7424v48.7936h-48.7424zM487.6288 633.9072h48.7424v48.7424h-48.7424zM487.6288 585.1648h48.7424v48.7424h-48.7424zM487.6288 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4451"></path><path d="M487.6288 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4452"></path><path d="M487.6288 438.8352h48.7424v48.7936h-48.7424zM487.6288 390.0928h48.7424v48.7424h-48.7424zM487.6288 341.3504h48.7424v48.7424h-48.7424z" fill="#012777" p-id="4453"></path><path d="M487.6288 292.5568h48.7424v48.7936h-48.7424zM487.6288 243.8144h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4454"></path><path d="M487.6288 195.072h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4455"></path><path d="M487.6288 146.2784h48.7424v48.7936h-48.7424zM438.8352 926.464h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4456"></path><path d="M438.8352 877.7216h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4457"></path><path d="M438.8352 828.928h48.7936v48.7936h-48.7936zM438.8352 780.1856h48.7936v48.7424h-48.7936z" fill="#DD75A1" p-id="4458"></path><path d="M438.8352 731.4432h48.7936v48.7424h-48.7936zM438.8352 682.6496h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4459"></path><path d="M438.8352 633.9072h48.7936v48.7424h-48.7936z" fill="#A2D8EA" p-id="4460"></path><path d="M438.8352 585.1648h48.7936v48.7424h-48.7936zM438.8352 536.3712h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4461"></path><path d="M438.8352 487.6288h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4462"></path><path d="M438.8352 438.8352h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4463"></path><path d="M438.8352 390.0928h48.7936v48.7424h-48.7936zM438.8352 341.3504h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4464"></path><path d="M438.8352 292.5568h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4465"></path><path d="M438.8352 243.8144h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4466"></path><path d="M438.8352 195.072h48.7936v48.7424h-48.7936zM390.0928 926.464h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4467"></path><path d="M390.0928 877.7216h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4468"></path><path d="M390.0928 828.928h48.7424v48.7936h-48.7424zM390.0928 780.1856h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4469"></path><path d="M390.0928 731.4432h48.7424v48.7424h-48.7424zM390.0928 682.6496h48.7424v48.7936h-48.7424zM390.0928 633.9072h48.7424v48.7424h-48.7424zM390.0928 585.1648h48.7424v48.7424h-48.7424zM390.0928 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4470"></path><path d="M390.0928 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4471"></path><path d="M390.0928 438.8352h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4472"></path><path d="M390.0928 390.0928h48.7424v48.7424h-48.7424zM390.0928 341.3504h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4473"></path><path d="M390.0928 292.5568h48.7424v48.7936h-48.7424z" fill="#DEE6FC" p-id="4474"></path><path d="M390.0928 243.8144h48.7424v48.7424h-48.7424zM341.3504 926.464h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4475"></path><path d="M341.3504 877.7216h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4476"></path><path d="M341.3504 828.928h48.7424v48.7936h-48.7424zM341.3504 780.1856h48.7424v48.7424h-48.7424z" fill="#DD75A1" p-id="4477"></path><path d="M341.3504 731.4432h48.7424v48.7424h-48.7424zM341.3504 682.6496h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4478"></path><path d="M341.3504 633.9072h48.7424v48.7424h-48.7424z" fill="#A2D8EA" p-id="4479"></path><path d="M341.3504 585.1648h48.7424v48.7424h-48.7424zM341.3504 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4480"></path><path d="M341.3504 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4481"></path><path d="M341.3504 438.8352h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4482"></path><path d="M341.3504 390.0928h48.7424v48.7424h-48.7424zM341.3504 341.3504h48.7424v48.7424h-48.7424zM341.3504 292.5568h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4483"></path><path d="M341.3504 243.8144h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4484"></path><path d="M341.3504 195.072h48.7424v48.7424h-48.7424zM341.3504 146.2784h48.7424v48.7936h-48.7424zM341.3504 97.536h48.7424v48.7424h-48.7424zM341.3504 48.7424h48.7424v48.7936h-48.7424zM292.5568 877.7216h48.7936v48.7424h-48.7936z" fill="#012777" p-id="4485"></path><path d="M292.5568 828.928h48.7936v48.7936h-48.7936z" fill="#DEE6FC" p-id="4486"></path><path d="M292.5568 780.1856h48.7936v48.7424h-48.7936z" fill="#DD75A1" p-id="4487"></path><path d="M292.5568 731.4432h48.7936v48.7424h-48.7936zM292.5568 682.6496h48.7936v48.7936h-48.7936zM292.5568 633.9072h48.7936v48.7424h-48.7936zM292.5568 585.1648h48.7936v48.7424h-48.7936zM292.5568 536.3712h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4488"></path><path d="M292.5568 487.6288h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4489"></path><path d="M292.5568 438.8352h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4490"></path><path d="M292.5568 390.0928h48.7936v48.7424h-48.7936zM292.5568 341.3504h48.7936v48.7424h-48.7936zM292.5568 292.5568h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4491"></path><path d="M292.5568 243.8144h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4492"></path><path d="M292.5568 195.072h48.7936v48.7424h-48.7936zM243.8144 828.928h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4493"></path><path d="M243.8144 780.1856h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4494"></path><path d="M243.8144 731.4432h48.7424v48.7424h-48.7424zM243.8144 682.6496h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4495"></path><path d="M243.8144 633.9072h48.7424v48.7424h-48.7424z" fill="#A2D8EA" p-id="4496"></path><path d="M243.8144 585.1648h48.7424v48.7424h-48.7424zM243.8144 536.3712h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4497"></path><path d="M243.8144 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4498"></path><path d="M243.8144 438.8352h48.7424v48.7936h-48.7424z" fill="#012777" p-id="4499"></path><path d="M243.8144 390.0928h48.7424v48.7424h-48.7424zM243.8144 341.3504h48.7424v48.7424h-48.7424zM243.8144 292.5568h48.7424v48.7936h-48.7424z" fill="#DD75A1" p-id="4500"></path><path d="M243.8144 243.8144h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4501"></path><path d="M243.8144 195.072h48.7424v48.7424h-48.7424zM195.072 828.928h48.7424v48.7936H195.072z" fill="#012777" p-id="4502"></path><path d="M195.072 780.1856h48.7424v48.7424H195.072z" fill="#DEE6FC" p-id="4503"></path><path d="M195.072 731.4432h48.7424v48.7424H195.072z" fill="#DEE6FC" p-id="4504"></path><path d="M195.072 682.6496h48.7424v48.7936H195.072zM195.072 633.9072h48.7424v48.7424H195.072zM195.072 585.1648h48.7424v48.7424H195.072zM195.072 536.3712h48.7424v48.7936H195.072z" fill="#DD75A1" p-id="4505"></path><path d="M195.072 487.6288h48.7424v48.7424H195.072z" fill="#DEE6FC" p-id="4506"></path><path d="M195.072 438.8352h48.7424v48.7936H195.072z" fill="#012777" p-id="4507"></path><path d="M195.072 390.0928h48.7424v48.7424H195.072zM195.072 341.3504h48.7424v48.7424H195.072z" fill="#DD75A1" p-id="4508"></path><path d="M195.072 292.5568h48.7424v48.7936H195.072z" fill="#DEE6FC" p-id="4509"></path><path d="M195.072 243.8144h48.7424v48.7424H195.072zM195.072 146.2784h48.7424v48.7936H195.072zM146.2784 780.1856h48.7936v48.7424h-48.7936z" fill="#012777" p-id="4510"></path><path d="M146.2784 731.4432h48.7936v48.7424h-48.7936z" fill="#012777" p-id="4511"></path><path d="M146.2784 682.6496h48.7936v48.7936h-48.7936zM146.2784 633.9072h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4512"></path><path d="M146.2784 585.1648h48.7936v48.7424h-48.7936zM146.2784 536.3712h48.7936v48.7936h-48.7936z" fill="#DD75A1" p-id="4513"></path><path d="M146.2784 487.6288h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4514"></path><path d="M146.2784 438.8352h48.7936v48.7936h-48.7936z" fill="#012777" p-id="4515"></path><path d="M146.2784 390.0928h48.7936v48.7424h-48.7936zM146.2784 341.3504h48.7936v48.7424h-48.7936z" fill="#DEE6FC" p-id="4516"></path><path d="M146.2784 292.5568h48.7936v48.7936h-48.7936zM146.2784 97.536h48.7936v48.7424h-48.7936zM97.536 682.6496h48.7424v48.7936h-48.7424zM97.536 633.9072h48.7424v48.7424h-48.7424z" fill="#012777" p-id="4517"></path><path d="M97.536 585.1648h48.7424v48.7424h-48.7424zM97.536 536.3712h48.7424v48.7936h-48.7424zM97.536 487.6288h48.7424v48.7424h-48.7424z" fill="#DEE6FC" p-id="4518"></path><path d="M97.536 438.8352h48.7424v48.7936h-48.7424zM97.536 390.0928h48.7424v48.7424h-48.7424zM97.536 341.3504h48.7424v48.7424h-48.7424zM97.536 48.7424h48.7424v48.7936h-48.7424zM48.7424 585.1648h48.7936v48.7424H48.7424zM48.7424 536.3712h48.7936v48.7936H48.7424zM48.7424 487.6288h48.7936v48.7424H48.7424zM48.7424 438.8352h48.7936v48.7936H48.7424z" fill="#012777" p-id="4519"></path></svg>',
      ],
    },
    avatar:
      "http://82.157.232.71/images/upload_794e29d1447117641159a8ca1ae5aa3f.png",
    name: "SaraiNoQ",
    description: "摆烂ing...",
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: false,

      blog: {
        description: "Do shit work!",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: footerHTML,

      displayFooter: false,

      blog: {
        description: "摆烂",
        intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: false,

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
