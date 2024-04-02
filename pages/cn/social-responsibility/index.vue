<script lang="ts" setup>
useHead(() => ({
  title: "社会责任",
}));
const bannerBg = `url('https://static.cmereye.com/imgs/2023/01/910888e1aff0c85e.jpg')`;
const bannerTitle = "社会责任";
</script>

<template>
  <div class="index">
    <PublicBanner :bannerBg="bannerBg" :bannerTitle="bannerTitle" />
    <div class="social-content">
      <SocialResponsibilityIndexCn />
    </div>
  </div>
</template>


<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .social-content {
    position: relative;
  }
  .social-content:before {
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
    top: -70%;
    border-radius: 50%;
  }
  .social-content:after {
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
    left: -9%;
    bottom: -24%;
    z-index: -1;
  }
}
@media screen and (max-width: 767px) {
  .social-content {
    position: relative;
  }
  .social-content:before {
    position: absolute;
    content: "";
    width: 60px;
    height: 60px;
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
    z-index: 3;
    right: -15px;
    top: -20px;
    border-radius: 50%;
  }
}
</style>