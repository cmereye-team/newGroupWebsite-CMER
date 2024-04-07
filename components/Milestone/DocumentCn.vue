<script setup lang='ts'>
const historyLine = [
{
    year: "2023",
    context: [
      {
        month: "8",
        content: ["佛山希玛眼科医院成立 "],
      },
    ],
  },
  {
    year: "2022",
    context: [
      {
        month: "9",
        content: ["将军澳希玛眼科中心开业"],
      },
      {
        month: "8",
        content: ["揭阳希玛林顺潮眼科医院开业"],
      },
      {
        month: "6",
        content: ["深圳希玛蔚蓝诊所开业"],
      },
      {
        month: "3",
        content: ["广州希玛林顺潮眼科医院开业"],
      },
      {
        month: "2",
        content: ["完成收购深圳爱康健齿科的控股权"],
      },
      {
        month: "1",
        content: ["收购香港嘉宾眼科全部股权"],
      },
    ],
  },
  {
    year: "2021",
    context: [
      {
        month: "12",
        content: ["福州希玛林顺潮眼科门诊开业"],
      },
      {
        month: "11",
        content: [
          "通过收购尚颐于尖沙咀K11 Atelier设立希玛多专科 (眼科、牙科和医美) 医疗中心",
        ],
      },
      {
        month: "8",
        content: ["透过收购设立希玛中西肿瘤专科中心"],
      },
      {
        month: "3",
        content: ["惠州希玛林顺潮眼科医院开业"],
      },
    ],
  },
  {
    year: "2020",
    context: [
      {
        month: "12",
        content: [
          "珠海希玛林顺潮眼科医院开业",
          "深圳新安林顺潮眼科门诊部升级为医院",
        ],
      },
      {
        month: "11",
        content: ["荃湾希玛眼科中心开业"],
      },
    ],
  },
  {
    year: "2019",
    context: [
      {
        month: "12",
        content: ["元朗 (第二间) 希玛眼科中心开业"],
      },

      {
        month: "11",
        content: ["上海希玛瑞视眼科医院开业"],
      },
      {
        month: "10",
        content: ["希玛微笑激光矫视中心开业"],
      },
      {
        month: "6",
        content: ["希玛‧昆明眼科医院开业"],
      },
    ],
  },
  {
    year: "2018",
    context: [
      {
        month: "11",
        content: ["深圳新安希玛林顺潮眼科门诊部开业"],
      },
      {
        month: "3",
        content: ["观塘希玛眼科中心开业"],
      },
      {
        month: "1",
        content: ["北京希玛林顺潮眼科医院开业", "1月15日成功于联交所上市"],
      },
    ],
  },
  {
    year: "2017",
    context: [
      {
        month: "2",
        content: ["铜锣湾希玛眼科中心开业"],
      },
    ],
  },
  {
    year: "2016",
    context: [
      {
        month: "6",
        content: ["沙田希玛眼科中心开业"],
      },
      {
        month: "1",
        content: ["元朗希玛眼科中心开业"],
      },
    ],
  },
  {
    year: "2014",
    context: [
      {
        month: "1",
        content: ["旺角希玛眼科中心开业"],
      },
    ],
  },
  {
    year: "2013",
    context: [
      {
        month: "3",
        content: ["首间眼科医院于中国深圳福田开业"],
      },
    ],
  },
  {
    year: "2012",
    context: [
      {
        month: "1",
        content: ["首间眼科中心于香港中环开业"],
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