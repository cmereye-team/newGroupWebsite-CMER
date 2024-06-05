<script lang="ts" setup>
</script>

<template>
  <div class="enterprise">
    <div>
      <h2>公司名称</h2>
      <p>希玛医疗控股有限公司</p>
    </div>
    <div>
      <h2>注册办事处</h2>
      <p>
        <span>Cricket Square, Hutchins Drive</span>
        <span>P.O.Box 2681 Grand Cayman</span>
        <span>KY1-1111</span>
        <span>Cayman Islands</span>
      </p>
    </div>
    <div>
      <h2>香港总部及主要营业地点</h2>
      <p>香港毕打街1-3号中建大厦1535室</p>
    </div>
    <div>
      <h2>本公司网站</h2>
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