export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$wlaTI/DZyVSawL2EAc3Yke83/CaJB/fa2ZQ32B3DRpRXx8FEQKC6C\"],\"/zh/demo/encrypt.html\":[\"$2a$10$pSmRY0hKY0GQRcFIUVNDieNGpWBcu7zegt38H.DSg/YdQ0e90Mq1y\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameOnMobile\":true,\"sidebar\":{\"/\":[\"\",{\"icon\":\"discover\",\"text\":\"Introduction\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"},{\"text\":\"Getting started\",\"icon\":\"note\",\"prefix\":\"guide/\",\"children\":\"structure\"},\"slides\"]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Matterlabs\",\"url\":\"https://github.com/matter-labs/zksync-web-v2-docs\"},\"logo\":\"/logo.svg\",\"repo\":\"matter-labs/zksync-web-v2-docs\",\"docsDir\":\"src/dev\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[\"/\",{\"text\":\"Developer Docs\",\"link\":\"/dev/\"},{\"text\":\"Tools/SDKs\",\"link\":\"/api/\"},{\"text\":\"Contact\",\"link\":\"/contact.html\"},{\"text\":\"v2.0\",\"children\":[{\"text\":\"v2.0\",\"icon\":\"play\",\"link\":\"/dev/\"},{\"text\":\"v1.x\",\"icon\":\"play\",\"link\":\"https://docs.zksync.io\"}]}],\"footer\":\"Made with ❤️ by Matterlabs\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
