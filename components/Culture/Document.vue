<template>
  <div class="document">
    <div>
      <h2>我們的願景</h2>
      <p class="culture-title">將希瑪打造成全國性的優質港式醫療服務品牌。</p>
    </div>
    <div>
      <h2>我們的使命</h2>
      <p class="culture-title">
        利用希瑪的香港醫療基因和品牌，由眼科開始逐步發展至多個專科領域，為香港和大灣區以至內地其他地區的居民提供優質的專科醫療服務。
      </p>
      <p class="culture-title">希瑪的品牌標誌「C-MER」，象徵著我們的理念：</p>
      <p class="culture-text">
        「C」：專業臨床服務 (Professional Clinical Services)
      </p>
      <p class="culture-text">「M」：現代化管理 (Modern Management)</p>
      <p class="culture-text">「E」：優質教育 (Quality Education)</p>
      <p class="culture-text">「R」：開創性科研 (Pioneering Research)</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .document {
    max-width: 1140px;
    margin: 100px auto;
  }
  h2 {
    font-size: 24px;
    line-height: 30px;
    border-bottom: 1px solid #005caf;
    padding-bottom: 10px;
    display: inline-block;
    margin-bottom: 24px;
  }
  .culture-title {
    color: grey;
    line-height: 2.5;
    font-size: 18px;
    margin-bottom: 24px;
    font-size: 100;
  }
  .culture-text {
    font-size: 18px;
    line-height: 2.5;
    font-size: 100;
  }
}
@media screen and (max-width: 767px) {
  .document {
    padding: 30px 15px;
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 3px;
    letter-spacing: 6px;
    display: inline-block;
    border-bottom: 1px solid #005caf;
    margin-bottom: 24px;
  }
  .culture-title {
    color: grey;
    line-height: 2.5;
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 24px;
  }
  .culture-text {
    line-height: 2.5;
    font-size: 16px;
    font-weight: 100;
  }
}
</style>