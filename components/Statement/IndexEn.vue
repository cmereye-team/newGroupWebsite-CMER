<script lang="ts" setup>
</script>

<template>
  <div class="statement">
    <h2>Statement</h2>
    <p>
      The data on this website is for your reference only and should not be
      regarded as investment opinions. Xima eye medical Holdings Co., Ltd. does
      not guarantee or declare whether the data on this website is accurate,
      comprehensive or up-to-date. The group will not be responsible for any
      loss caused by this website or relying on its content.
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