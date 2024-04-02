<script lang="ts" setup>
const yearData = [
  {
    year: "",
    property: "Total assets（HK$1,000）",
    income: "Revenue（HK$1,000）",
    deadline: "Year ended 31 December",
  },
  {
    year: "2018",
    property: "886,849	",
    income: "429,374",
    deadline: "",
  },
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
];
</script>

<template>
  <div class="investor">
    <div class="investor-title">
      <h2>Capitalizing on Business Growth Opportunities</h2>
      <p>
        C-MER attaches considerable importance to the effectiveness of its
        communications with shareholders. The Group is committed to delivering
        true, accurate, complete and timely disclosure and enabling shareholders
        to gain better understanding of latest information about the Group
        through different communication channels, such as website, announcements
        and circulars, WeChat, social platforms, interim reports and annual
        reports. We will continue to press ahead with the “Eye+” Growth Strategy
        and create maximum value for shareholders through organic growth and
        acquisitions.
      </p>
    </div>
    <div class="investor-content">
      <h3>Financial Information</h3>
      <div class="container">
        <img
          src="https://static.cmereye.com/imgs/2024/03/73890803c424c452.png"
          alt="Financial Information"
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
      border-bottom: 1px solid;
      display: inline-block;
      font-size: 300;
      padding-bottom: 5px;
      color: #005caf;
    }
    P {
      margin-top: 24px;
      line-height: 2;
      color: #707070;
      font-size: 16px;
      font-family: "arial";
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
        min-height: 83px;
        display: flex;
        align-items: center;
        justify-content: center;
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
        min-height: 83px;
        display: flex;
        align-items: center;
        justify-content: center;
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