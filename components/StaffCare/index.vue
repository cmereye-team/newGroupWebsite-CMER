<script lang="ts" setup>
</script>

<template>
  <div class="staff">
    <div class="staff-document">
      <h2>人才為本 共同成長</h2>
      <p>
        希瑪業務能夠取得長足發展，實有賴全體員工堅守專業精神及熱誠工作態度。我們的員工文化：
      </p>
      <h4>各顯才能</h4>
      <p>
        希瑪網羅不同學科的人才，令團隊更多元創新，抱著以「病人為中心」的共同目標，為顧客提供度身訂造的醫療服務。
      </p>
      <h4>共同成長</h4>
      <p>
        希瑪用心栽培員工。我們重視員工的發展及培訓，為新加入的醫生及護士提供指導，幫助他們掌握嶄新技術，熟悉公司的服務標準、政策及程序。
      </p>
      <h4>熱誠投入</h4>
      <p>
        希瑪相信我們的人才優勢在於團隊合作，對工作充滿熱誠和全情投入，更對美好生活滿懷熱情。我們致力為員工締造開心工作環境，達致工作生活平衡及提升生產力。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .staff {
    max-width: 1140px;
    margin: 100px auto;
  }
  .staff-document {
    h2 {
      font-size: 24px;
      letter-spacing: 5px;
      border-bottom: 1px solid;
      display: inline-block;
      font-size: 300;
      padding-bottom: 5px;
      color: #005caf;
      font-family: "NotoSansTCLight";
    }
    P {
      margin: 8px 0 24px;
      color: #707070;
      font-size: 16px;
      letter-spacing: 0.2em;
    }
    h4 {
      font-family: "NotoSansTCThin";
      font-size: 24px;
      color: #005caf;
      letter-spacing: 0.1em;
    }
  }
}
@media screen and (max-width: 767px) {
  .staff {
    padding: 30px 15px;
  }
  .staff-document {
    h2 {
      font-size: 24px;
      letter-spacing: 5px;
      border-bottom: 1px solid;
      display: inline-block;
      font-size: 300;
      padding-bottom: 5px;
      color: #005caf;
      font-family: "NotoSansTCThin";
    }
    P {
      margin: 8px 0 24px;
      color: #707070;
      font-size: 16px;
      letter-spacing: 0.2em;
      font-family: "NotoSansTCLight";
    }
    h4 {
      font-family: "NotoSansTCThin";
      font-size: 24px;
      color: #005caf;
      letter-spacing: 0.1em;
    }
  }
}
</style>