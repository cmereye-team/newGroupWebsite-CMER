<script lang="ts" setup>
const yearData = [
  {
    year: "",
    property: "资产总值（千港元）",
    income: "收入（千港元）",
    deadline: "截至12月31日止年度",
  },
  // {
  //   year: "2018",
  //   property: "886,849	",
  //   income: "429,374",
  //   deadline: "",
  // },
  {
    year: "2019",
    property: "1,119,649",
    income: "576,209	",
    deadline: "",
  },
  {
    year: "2020",
    property: "1,629,211",
    income: "699,545",
    deadline: "",
  },
  {
    year: "2021",
    property: "1,955,877",
    income: "1,112,577",
    deadline: "",
  },
  {
    year: "2022",
    property: "2,901,687",
    income: "1,731,903",
    deadline: "",
  },
  {
    year: "2023",
    property: "2,748,635",
    income: "1,923,964",
    deadline: "",
  }
];
</script>

<template>
  <div class="investor">
    <div class="investor-title">
      <h2>高速发展 掌握机遇</h2>
      <p>
        希玛高度重视与股东保持有效的沟通，通过不同的企业传讯渠道，包括网址、公告及通函、微信号、社交平台、中期报告及年报等，提供真实、准确、完整和及时的披露，让股东了解本集团的最新资讯。我们将继续全力推展“Eye+”战略，透过自然增长与併购并行策略，为股东创造最大价值。+」戰略，透過自然增長與併購並行策略，為股東創造最大價值。
      </p>
    </div>
    <div class="investor-content">
      <h3>财务资料</h3>
      <div class="container">
        <img
        src="https://static.cmereye.com/imgs/2024/04/e1f30dd41aef2bc4.png"
          alt="财务资料"
        />
      </div>
    </div>
    <div class="investor-table">
      <div v-for="(item, index) in yearData" :key="index">
        <div>{{ item.year }}</div>
        <div>{{ item.property }}</div>
        <div>{{ item.income }}</div>
        <div>{{ item.deadline }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .investor {
    max-width: 1140px;
    margin: 100px auto;
  }
  .investor-title {
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
      margin-top: 24px;
      line-height: 2;
      color: #707070;
      font-size: 16px;
      font-family: "NotoSansTCLight";
    }
  }
  .investor-content {
    h3 {
      font-size: 24px;
      letter-spacing: 5px;
      margin: 80px auto 32px;
      font-family: "NotoSansTCThin";
      text-align: center;
    }
    .container {
      max-width: 40%;
      margin: 0 auto;
      & > img {
        width: 100%;
      }
    }
  }
  .investor-table {
    max-width: 855px;
    margin: 80px auto 0;
    display: flex;
    & > div {
      & > div:nth-child(1) {
        min-height: 50px;
        background-color: #51a8dd;
        color: #fff;
        letter-spacing: 0.5em;
        font-size: 20px;
        padding: 12px;
      }
      & > div {
        min-width: 120px;
        font-size: 16px;
        text-align: center;
        padding: 12px;
        font-family: "NotoSansTCLight";
        min-height: 53px;
      }
    }
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        background: #fff;
      }
      & > div:nth-child(2) {
        letter-spacing: 0.3em;
        font-size: 20px;
        padding: 12px;
        background: #51a8dd;
        color: #fff;
        min-width: 150px;
        text-align: left;
      }
      & > div:nth-child(3) {
        letter-spacing: 0.3em;
        font-size: 20px;
        padding: 12px;
        background: #005caf;
        color: #fff;
        min-width: 150px;
        text-align: left;
      }
      & > div:nth-child(4) {
        letter-spacing: 0.1em;
        font-size: 18px;
        padding: 12px;
        min-width: 150px;
        text-align: left;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .investor {
    padding: 30px 15px;
  }
  .investor-title {
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
      margin-top: 24px;
      line-height: 2;
      color: #707070;
      font-size: 16px;
      font-family: "NotoSansTCLight";
    }
  }
  .investor-content {
    h3 {
      font-size: 24px;
      letter-spacing: 5px;
      margin: 80px auto 32px;
      font-family: "NotoSansTCThin";
      text-align: center;
    }
    .container {
      max-width: 100%;
      margin: 0 auto;
      & > img {
        width: 100%;
      }
    }
  }
  .investor-table {
    max-width: 855px;
    margin: 80px auto 0;
    display: flex;
    overflow-x: auto;
    & > div {
      & > div:nth-child(1) {
        min-height: 50px;
        background-color: #51a8dd;
        color: #fff;
        letter-spacing: 0.5em;
        font-size: 20px;
        padding: 12px;
      }
      & > div {
        min-width: 120px;
        font-size: 16px;
        text-align: center;
        padding: 12px;
        font-family: "NotoSansTCLight";
        min-height: 53px;
      }
    }
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        background: #fff;
      }
      & > div:nth-child(2) {
        letter-spacing: 0.3em;
        font-size: 20px;
        padding: 12px;
        background: #51a8dd;
        color: #fff;
        min-width: 150px;
        text-align: left;
      }
      & > div:nth-child(3) {
        letter-spacing: 0.3em;
        font-size: 20px;
        padding: 12px;
        background: #005caf;
        color: #fff;
        min-width: 150px;
        text-align: left;
      }
      & > div:nth-child(4) {
        letter-spacing: 0.1em;
        font-size: 18px;
        padding: 12px;
        min-width: 150px;
        text-align: left;
      }
    }
  }
}
</style>