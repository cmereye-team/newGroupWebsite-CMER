<script lang="ts" setup>
useHead(() => ({
  title: "集團介紹",
}));
const bannerBg = `url('https://static.cmereye.com/imgs/2023/01/97b63235cea3dada.jpg')`;
const bannerTitle = "集團介紹";
</script>

<template>
  <div class="introduction">
    <PublicBanner :bannerBg="bannerBg" :bannerTitle="bannerTitle" />
    <div class="introduction-content">
      <IntroductionDocument />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .introduction-content {
    position: relative;
  }
  .introduction-content:before {
    position: absolute;
    content: "";
    width: 21vw;
    max-width: 400px;
    max-height: 400px;
    height: 21vw;
    background: conic-gradient(
      from 133.66deg at 52.34%,
      at 54.52%,
      #51a8dd 0deg,
      #54aade 9deg,
      #85cefa 173.77deg,
      #51a8dd 1turn
    );
    background: conic-gradient(
      from 133.66deg at 52.34% 54.52%,
      #51a8dd 0deg,
      #54aade 9deg,
      #85cefa 173.77deg,
      #51a8dd 1turn
    );
    opacity: 0.2;
    z-index: -1;
    right: -6%;
    top: -20%;
    border-radius: 50%;
  }
  .introduction-content:after {
    position: absolute;
    content: "";
    width: 18vw;
    height: 18vw;
    max-width: 300px;
    max-height: 300px;
    border: 2vw solid #51a8dd;
    border-width: 31px;
    box-sizing: border-box;
    transform: rotate(45deg);
    transition: all 0.3s ease-in;
    opacity: 0.2;
    left: -8%;
    bottom: -6%;
    z-index: -1;
  }
}
@media screen and (max-width: 767px) {
}
</style>