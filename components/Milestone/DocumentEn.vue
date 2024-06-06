<script setup lang='ts'>
const historyLine = [
{
    year: "2023",
    context: [
      {
        month: "August",
        content: ["Opening of FoShan C-MER Dennis Lam Eye Hospital"],
      },
    ],
  },
  {
    year: "2022",
    context: [
      {
        month: "September",
        content: ["Opening of Tseung Kwan O C-MER Eye Center"],
      },
      {
        month: "August",
        content: ["Opening of C-MER (Jieyang) Dennis Lam Eye Hospital"],
      },
      {
        month: "June",
        content: ["Opening of C-MER Shenzhen Weilan Eye Center"],
      },
      {
        month: "March",
        content: ["Opening of C-MER (Guangzhou) Dennis Lam Eye Hospital"],
      },
      {
        month: "February",
        content: ["Completed acquisition of controlling equity interests of Shenzhen CKJ"],
      },
      {
        month: "January",
        content: ["Acquisition of the entire share capital of Hong Kong Champion Eye"],
      },
    ],
  },
  {
    year: "2021",
    context: [
      {
        month: "December",
        content: ["Opening of C-MER (Fuzhou) Dennis Lam Eye Center"],
      },
      {
        month: "November",
        content: [
          "Establishment of C-MER Multi-specialty (Eye, Dental and Medical Aesthetic) Medical Center in K11 Atelier, Tsim Sha Tsui through acquisition of Clinic A",
        ],
      },
      {
        month: "August",
        content: ["Establishment of C-MER Oncology through acquisition"],
      },
      {
        month: "March",
        content: ["Opening of C-MER (Huizhou) Dennis Lam Eye Hospital"],
      },
    ],
  },
  {
    year: "2020",
    context: [
      {
        month: "December",
        content: [
          "Opening of C-MER (Zhuhai) Dennis Lam Eye Hospital",
          "Shenzhen Xinan C-MER Eye Clinic was upgraded to Hospital",
        ],
      },
      {
        month: "November",
        content: ["Opening of Tsuen Wan C-MER Eye Center"],
      },
    ],
  },
  {
    year: "2019",
    context: [
      {
        month: "December",
        content: ["Opening of Yuen Long (Second branch) C-MER Eye Center"],
      },

      {
        month: "November",
        content: ["Opening of C-MER (Shanghai) Vision Eye Hospital"],
      },
      {
        month: "October",
        content: ["Opening of C-MER Smile Laser Center"],
      },
      {
        month: "June",
        content: ["Opening of C-MER Kunming Eye Hospital"],
      },
    ],
  },
  {
    year: "2018",
    context: [
      {
        month: "November",
        content: ["Opening of Shenzhen Xinan C-MER Eye Clinic"],
      },
      {
        month: "March",
        content: ["Opening of Kwun Tong C-MER Eye Center"],
      },
      {
        month: "January",
        content: ["Opening of C-MER (Beijing) Dennis Lam Eye Hospital", "C-MER was successfully listed on the SEHK on 15 January"],
      },
    ],
  },
  {
    year: "2017",
    context: [
      {
        month: "February",
        content: ["Opening of Causeway Bay C-MER Eye Center"],
      },
    ],
  },
  {
    year: "2016",
    context: [
      {
        month: "June",
        content: ["Opening of Shatin C-MER Eye Center"],
      },
      {
        month: "January",
        content: ["Opening of Yuen Long C-MER Eye Center"],
      },
    ],
  },
  {
    year: "2014",
    context: [
      {
        month: "January",
        content: ["Opening of Mongkok C-MER Eye Center"],
      },
    ],
  },
  {
    year: "2013",
    context: [
      {
        month: "March",
        content: ["Opening of C-MER’s first Eye Hospital in Futian, Shenzhen, the PRC"],
      },
    ],
  },
  {
    year: "2012",
    context: [
      {
        month: "January",
        content: ["Opening of C-MER’s first Eye Center in Central, Hong Kong"],
      },
    ],
  },
];
</script>
<template>
  <div class="document">
    <div v-for="(item, index) in historyLine" :key="index" class="history-line">
      <div class="history-year">{{ item.year }}</div>
      <div
        v-for="(items, indexs) in item.context"
        :key="indexs"
        class="history-context"
      >
        <div class="history-month">{{ items.month }}</div>
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
  .document > div:nth-child(6)::before {
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
    z-index: October;
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
    left: -150%;
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
    font-weight: 700;
    letter-spacing: normal;
    min-width: 105px;
    letter-spacing: 0.1em;
    color: #707070;
    font-size: 16px;
    margin-right: 10px;
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
    z-index: October;
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