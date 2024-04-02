<script lang="ts" setup>
useHead(() => ({
  title: "私隱政策",
}));
const bannerBg = `url('https://static.cmereye.com/imgs/2023/01/f622d76c117f2eda.jpg')`;
const bannerTitle = "私隱政策";
</script>

<template>
  <div class="index">
    <PublicBanner :bannerBg="bannerBg" :bannerTitle="bannerTitle" />
    <Disclamer />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
}
</style>