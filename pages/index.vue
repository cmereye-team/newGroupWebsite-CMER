<script lang="ts" setup>
useHead(() => ({
  title: '希瑪醫療控股有限公司| 希瑪眼科 | 希瑪 | 3309',
}))
const language = useLanguage();
</script>

<template>
  <div v-if="language == 'hk'">
    <HomeBanner />
    <HomeAbout />
    <HomePeculiarity />
    <HomeLogoWall />
  </div>
  <div v-else-if="language == 'cn'">
    <HomeBannerCn />
    <HomeAboutCn />
    <HomePeculiarityCn />
    <HomeLogoWallCn />
  </div>
  <div v-else>
    <HomeBannerEn />
    <HomeAboutEn />
    <HomePeculiarityEn />
    <HomeLogoWallEn />
  </div>
</template>

<style lang="scss" scoped>

</style>
