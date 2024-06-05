<script lang="ts" setup>
</script>

<template>
  <div class="enterprise">
    <div>
      <h2>Company name</h2>
      <p>C-MER EYE CARE HOLDINGS LIMITED</p>
    </div>
    <div>
      <h2>Registered office</h2>
      <p>
        <span>Cricket Square, Hutchins Drive</span>
        <span>P.O.Box 2681 Grand Cayman</span>
        <span>KY1-1111</span>
        <span>Cayman Islands</span>
      </p>
    </div>
    <div>
      <h2>Head office and principal place of business in Hong Kong</h2>
      <p>Suite 1535, Central Building, 1-3 Pedder Street, Hong Kong</p>
    </div>
    <div>
      <h2>Company's website</h2>
      <p>www.cmermedical.com</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .enterprise {
    max-width: 1140px;
    margin: 100px auto;
    & > div {
      h2 {
        padding-top: 60px;
        font-size: 24px;
        font-size: 300;
        color: #005caf;
        text-align: center;
      }
      p {
        margin-top: 10px;
        color: #707070;
        font-size: 16px;
        text-align: center;
        line-height: 2;
        font-family: "NotoSansTCLight";
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span {
          color: #707070;
          font-size: 16px;
          text-align: center;
          line-height: 2;
          font-family: "NotoSansTCLight";
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .enterprise {
    padding: 30px 15px;
    & > div {
      h2 {
        padding-top: 60px;
        font-size: 24px;
        letter-spacing: 5px;
        font-size: 300;
        color: #005caf;
        text-align: center;
      }
      p {
        margin-top: 10px;
        color: #707070;
        font-size: 16px;
        text-align: center;
        line-height: 2;
        font-family: "NotoSansTCLight";
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span {
          color: #707070;
          font-size: 16px;
          text-align: center;
          line-height: 2;
          font-family: "NotoSansTCLight";
        }
      }
    }
  }
}
</style>