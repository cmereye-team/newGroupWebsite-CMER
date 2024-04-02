<script lang="ts" setup>
</script>

<template>
  <div class="enterprise">
    <div>
      <h2>C-MER EYE CARE HOLDINGS LIMITED</h2>
    </div>
    <div>
      <h2>Address:</h2>
      <p>
        Suite 1535, Central Building, 1-3 Pedder Street, Hong Kong
      </p>
    </div>
    <div>
      <h2>Tel:</h2>
      <p>(852) 3997 3266</p>
    </div>
    <div>
      <h2>Email:</h2>
      <p>info@hkcmer.com</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .enterprise {
    max-width: 1140px;
    margin: 100px auto 160px;
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
    &>div:nth-child(1) {
      h2{
        padding: 60px;
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
    &>div:nth-child(1) {
      h2{
        padding: 60px;
      }
    }
  }
}
</style>