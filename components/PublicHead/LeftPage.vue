<script setup lang='ts'>
const language = useLanguage();
</script>
<template>
  <div class="left-page">
    <nuxt-link to="/">
      <div class="pc-logo">
        <div><img src="/assets/img/logo.svg" alt="logo" /></div>
        <div v-if="language == 'hk'">
          <span>希瑪醫療控股有限公司</span> <span>(股票代號：3309)</span>
        </div>
        <div v-else-if="language == 'cn'">
          <span>希玛医疗控股有限公司 </span> <span>(股票代号：3309)</span>
        </div>
        <div v-else class="pc-logo-en">
          <span>C-MER Medical Holdings Limited</span
          ><span>(Stock Code: 3309)</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .pc-logo {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      max-width: 100%;
    }
    .pc-logo-en {
      display: flex;
      flex-direction: column;
      span {
        color: #005caf;
        font-size: 18px;
      }
      span:nth-child(1) {
        padding: 0 0 10px 0;
      }
      span:nth-child(2) {
        color: #005caf;
      }
    }
    & > div:nth-child(2) {
      margin-left: 10px;
      span {
        color: #005caf;
        font-size: 18px;
      }
      & > span:nth-child(2) {
        font-size: 12px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .pc-logo {
    display: flex;
    & > div:nth-child(1) {
      width: 50px;
      img {
        width: 100px;
        max-width: 100%;
      }
      margin-right: 10px;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      span {
        line-height: 2;
      }
    }
  }
}
</style>