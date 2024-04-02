<script lang="ts" setup>
const props = defineProps({
  bannerBg: String,
  bannerTitle: String,
}); 

let bannerBgVal = ref(props.bannerBg);
</script>

<template>
  <div class="index page-bg" :style="{ backgroundImage: bannerBgVal }">
    <div class="banner-title-bg">
      <div class="banner-title">{{ props.bannerTitle }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .page-bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: 790px;
    position: relative;
  }
  .banner-title-bg {
    width: 100%;
    height: 145px;
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    opacity: 0.9;
    color: #fff;
    padding-left: 10%;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.5em;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  .banner-title {
    font-size: 40px;
    color: #fff;
  }
}
@media screen and (max-width: 767px) {
  .page-bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: 50vh;
    position: relative;
    z-index: 10;
  }
  .banner-title-bg {
    width: 100%;
    height: auto;
    padding: 15px 10px;

    background: #51a8dd;
    opacity: 0.9;
    letter-spacing: 0.2em;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  .banner-title {
    font-size: 24px;
    color: #fff;
  }
}
</style>