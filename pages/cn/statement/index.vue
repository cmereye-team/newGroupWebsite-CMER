<script lang="ts" setup>
useHead(() => ({
  title: "免责声明",
}));
const bannerBg = `url('https://static.cmereye.com/imgs/2023/01/f622d76c117f2eda.jpg')`;
const bannerTitle = "免责声明";
</script>

<template>
  <div class="index">
    <PublicBanner :bannerBg="bannerBg" :bannerTitle="bannerTitle" />
    <StatementIndexCn />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
}
</style>