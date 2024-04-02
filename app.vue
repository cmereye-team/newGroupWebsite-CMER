<template>
  <div class="app">
    <PublicHead key="publicHead"  class="publicHead"/>
    
    <!-- <header>New 444</header> -->
    <NuxtPage />
    <PublicFooter key="publicFooter" />
  </div>
</template>
<style>
@import url("/assets/font/font.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
  font-family: "Noto Sans TC", sans-serif;
}
.app {
  max-width: 100%;
  overflow: hidden;
}
div,
p,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  font-family: "Noto Sans CJK TC", sans-serif;
  color: #005caf;
  text-decoration: none;
  /* text-shadow: 0 0 4px rgba(0, 0, 0, 0.25); */
}
</style>
<style lang="scss" scoped>
  @media screen and (max-width: 768px) {
    .publicHead {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
    }
  }
</style>
