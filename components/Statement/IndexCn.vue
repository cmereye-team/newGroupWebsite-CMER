<script lang="ts" setup>
</script>

<template>
  <div class="statement">
    <h2>免责声明</h2>
    <p>
      本网页数据仅供阁下参考之用，并非亦不该被视为投资意见。希玛医疗控股有限公司并不保证或声明本网页数据是否准确、全面或为最新之数据，因本网页或倚赖其内容所引致之任何损失，本集团概不负责。
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