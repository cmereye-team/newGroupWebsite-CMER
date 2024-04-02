<template>
  <div class="document">
    <div>
      <h2>我们的愿景</h2>
      <p class="culture-title">将希玛打造成全国性的优质港式医疗服务品牌。</p>
    </div>
    <div>
      <h2>我们的使命</h2>
      <p class="culture-title">
        利用希玛的香港医疗基因和品牌，由眼科开始逐步发展至多个专科领域，为香港和大湾区以至内地其他地区的居民提供优质的专科医疗服务。
      </p>
      <p class="culture-title">希玛的品牌标志「C-MER」，象征着我们的理念：</p>
      <p class="culture-text">
        「C」：专业临床服务 (Professional Clinical Services)
      </p>
      <p class="culture-text">「M」：现代化管理 (Modern Management)</p>
      <p class="culture-text">「E」：优质教育 (Quality Education)</p>
      <p class="culture-text">「R」：开创性科研 (Pioneering Research)</p>
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