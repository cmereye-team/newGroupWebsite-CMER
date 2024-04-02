<script lang="ts" setup>
</script>

<template>
  <div class="statement">
    <h2>免責聲明</h2>
    <p>
      本網頁數據僅供閣下參考之用，併非亦不該被視為投資意見。希瑪眼科醫療控股有限公司併不保證或聲明本網頁數據是否准確、全面或為最新之數據，因本網頁或倚賴其內容所引致之任何損失，本集團概不負責。
    </p>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .statement {
    max-width: 1140px;
    margin: 100px auto;
    h2 {
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    P {
      font-size: 14px;
      letter-spacing: 0.1em;
      line-height: 1.6;
    }
  }
}
@media screen and (max-width: 767px) {
  .statement {
    padding: 30px 20px;
    h2 {
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    P {
      font-size: 14px;
      letter-spacing: 0.1em;
      line-height: 1.6;
    }
  }
}
</style>