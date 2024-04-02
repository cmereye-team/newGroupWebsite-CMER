<script lang="ts" setup>
useHead(() => ({
  title: "Statement",
}));
const bannerBg = `url('https://static.cmereye.com/imgs/2023/01/f622d76c117f2eda.jpg')`;
const bannerTitle = "STATEMENT";
</script>

<template>
  <div class="index">
    <PublicBanner :bannerBg="bannerBg" :bannerTitle="bannerTitle" />
    <StatementIndexEn />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
}
</style>