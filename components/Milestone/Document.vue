<script setup lang='ts'>
const historyLine = [
  {
    year: "2022",
    context: [
      {
        month: "1",
        content: ["收購香港嘉賓眼科全部股權"],
      },
      {
        month: "2",
        content: ["完成收購深圳愛康健齒科的控股權"],
      },
      {
        month: "3",
        content: ["廣州希瑪林順潮眼科醫院開業"],
      },
      {
        month: "6",
        content: ["深圳希瑪蔚藍診所開業"],
      },
      {
        month: "8",
        content: ["揭陽希瑪林順潮眼科醫院開業"],
      },
      {
        month: "9",
        content: ["將軍澳希瑪眼科中心開業"],
      },
    ],
  },
  {
    year: "2021",
    context: [
      {
        month: "3",
        content: ["惠州希瑪林順潮眼科醫院開業"],
      },
      {
        month: "8",
        content: ["透過收購設立希瑪中西腫瘤專科中心"],
      },
      {
        month: "11",
        content: [
          "通過收購尚頤於尖沙咀K11 Atelier設立希瑪多專科 (眼科、牙科和醫美) 醫療中心",
        ],
      },
      {
        month: "12",
        content: ["福州希瑪林順潮眼科門診開業"],
      },
    ],
  },
  {
    year: "2020",
    context: [
      {
        month: "11",
        content: ["荃灣希瑪眼科中心開業"],
      },
      {
        month: "12",
        content: [
          "珠海希瑪林順潮眼科醫院開業",
          "深圳新安林順潮眼科門診部升級為醫院",
        ],
      },
    ],
  },
  {
    year: "2019",
    context: [
      {
        month: "6",
        content: ["希瑪‧昆明眼科醫院開業"],
      },
      {
        month: "10",
        content: ["希瑪微笑激光矯視中心開業"],
      },
      {
        month: "11",
        content: ["上海希瑪瑞視眼科醫院開業"],
      },
      {
        month: "12",
        content: ["元朗 (第二間) 希瑪眼科中心開業"],
      },
    ],
  },
  {
    year: "2018",
    context: [
      {
        month: "1",
        content: ["北京希瑪林順潮眼科醫院開業", "1月15日成功於聯交所上市"],
      },
      {
        month: "3",
        content: ["觀塘希瑪眼科中心開業"],
      },
      {
        month: "11",
        content: ["深圳新安希瑪林順潮眼科門診部開業"],
      },
    ],
  },
  {
    year: "2017",
    context: [
      {
        month: "2",
        content: ["銅鑼灣希瑪眼科中心開業"],
      },
    ],
  },
  {
    year: "2016",
    context: [
      {
        month: "1",
        content: ["元朗希瑪眼科中心開業"],
      },
      {
        month: "6",
        content: ["沙田希瑪眼科中心開業"],
      },
    ],
  },
  {
    year: "2014",
    context: [
      {
        month: "1",
        content: ["旺角希瑪眼科中心開業"],
      },
    ],
  },
  {
    year: "2013",
    context: [
      {
        month: "3",
        content: ["首間眼科醫院於中國深圳福田開業"],
      },
    ],
  },
  {
    year: "2012",
    context: [
      {
        month: "1",
        content: ["首間眼科中心於香港中環開業"],
      },
    ],
  },
];
</script>
<template>
  <div class="document">
    <div v-for="(item, index) in historyLine" :key="index" class="history-line">
      <div class="history-year">{{ item.year }}年</div>
      <div
        v-for="(items, indexs) in item.context"
        :key="indexs"
        class="history-context"
      >
        <div class="history-month">{{ items.month }}月</div>
        <div class="history-content">
          <span v-for="(sub, indexon) in items.content" :key="indexon">{{
            sub
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .document {
    max-width: 1140px;
    margin: 100px auto;
    position: relative;
  }
  .document > div:nth-child(1)::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 1px;
    height: 100px;
    z-index: 5;
    background: #005caf;
  }
  .history-line {
    position: relative;
    padding: 60px 0;
    border-top: 1px solid;
    border-left: 1px solid;
  }
  .history-year {
    position: absolute;
    top: -16px;
    left: 70px;
    z-index: 10;
    background: #fff;
    padding: 0 5px;
    color: #51a8dd;
    font-size: 20px;
    font-weight: 700;
  }
  .history-year::before {
    content: "";
    position: absolute;
    top: 0;
    left: -118%;
    width: 16px;
    height: 16px;
    border: 10px solid #fff;
    background: #005caf;
    box-sizing: content-box;
    border-radius: 50%;
  }
  .history-context {
    display: flex;
    margin-bottom: 20px;
    margin-left: 80px;
    span {
      letter-spacing: 0.1em;
      color: #707070;
      display: flex;
      font-weight: 100;
      font-size: 16px;
    }
  }
  .history-content {
    display: flex;
    flex-direction: column;
  }
  .history-month {
    font-weight: 100;
    letter-spacing: normal;
    min-width: 85px;
    letter-spacing: 0.1em;
    color: #707070;
    font-size: 16px;
  }
}
@media screen and (max-width: 767px) {
  .document {
    padding: 50px 20px;
  }
  .document > div:nth-child(1)::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 1px;
    height: 50px;
    z-index: 5;
    background: #005caf;
  }
  .history-line {
    position: relative;
    padding: 50px 0;
    border-top: 1px solid;
    border-left: 1px solid;
  }
  .history-line > div:nth-child(1) {
    position: absolute;
    top: -18px;
    left: 25px;
  }
  .history-year {
    color: #51a8dd;
    font-size: 20px;
    font-weight: 100;
    z-index: 10;
    background: #fff;
    padding: 0 10px;
  }
  .history-year::before {
    position: absolute;
    content: "";
    width: 14px;
    height: 14px;
    left: -42px;
    top: 0;
    border: 10px solid #fff;
    background: #005caf;
    box-sizing: content-box;
    border-radius: 50%;
  }
  .history-context {
    display: flex;
    margin-left: 30px;
    margin-bottom: 20px;
  }
  .history-month {
    padding: 0 30px 0 0;
    color: #707070;
    font-weight: 100;
    font-size: 16px;
    min-width: 70px;
  }
  .history-content {
    display: flex;
    flex-direction: column;
    span {
      color: #707070;
      font-weight: 100;
      font-size: 16px;
    }
  }
}
</style>