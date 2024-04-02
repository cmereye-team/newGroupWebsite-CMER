<script lang="ts" setup>
useHead(() => ({
  title: "新聞稿",
}));
const bannerBg = `url('https://static.cmereye.com/imgs/2023/01/393b20d78a533ad1.jpg')`;
const bannerTitle = "新聞稿";
</script>

<template>
  <div class="index">
    <PublicBanner :bannerBg="bannerBg" :bannerTitle="bannerTitle" />
    <div class="news-content">
      <NewsList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .news-content {
    position: relative;
  }
  .news-content:before {
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
    top: -14%;
    border-radius: 50%;
  }
  .news-content:after {
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
    bottom: -4%;
    z-index: -1;
  }
}
@media screen and (max-width: 767px) {
  .news-content {
    position: relative;
  }
  .news-content:before {
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