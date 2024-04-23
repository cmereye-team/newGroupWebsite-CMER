<script lang="ts" setup>
const hospitalList = [
  {
    id: 1,
    classify: "眼科",
    name: ["希瑪眼科中心"],
    link: "https://www.hkcmereye.com",
    number: 12,
    serviceMatter:
      "基本檢查、診症、特殊檢查、治療及門診手術、藥物處方、驗光配鏡及手術治療",
  },
  {
    id: 2,
    classify: "眼科",
    name: ["眼科日間手術中心"],
    link: "https://www.hkcmereye.com/",
    number: 3,
    serviceMatter:
      "設有最先進的手術儀器和電腦檢驗系統等，由醫生進行各項眼科激光手術和眼科手術服務",
  },
  {
    id: 3,
    classify: "眼科",
    name: ["希瑪微笑矯視中心"],
    link: "https://smile.hkcmereye.com/",
    number: 2,
    serviceMatter:
      "SMILE微笑激光矯視、LASIK激光矯視、植入式隱形眼鏡 (ICL) 及人工晶體置換術 (IOL)",
  },
  {
    id: 4,
    classify: "眼科",
    name: ["希瑪眼科視光中心"],
    link: "https://www.cmervision.com/",
    number: 10,
    serviceMatter:
      "一站式安全、可靠及針對性的眼科檢查服務及改善視力方案，兒童近視控制方案",
  },
  {
    id: 5,
    classify: "眼科",
    name: ["嘉賓眼科及激光矯視手術中心", "(希瑪全資附屬公司)"],
    link: "#",
    number: 2,
    serviceMatter: "眼科及激光矯視手術",
  },
  {
    id: 6,
    classify: "牙科",
    name: ["希瑪牙科中心"],
    link: "https://cmerdental.com/",
    number: 7,
    serviceMatter: "基本牙科服務，同時為客人提供美容牙科及高階牙科服務",
  },
  {
    id: 7,
    classify: "腫瘤專科",
    name: ["希瑪中西腫瘤專科中心"],
    link: "https://cmeroncology.com/",
    number: 1,
    serviceMatter:
      "高質素的醫療服務包括篩查及診斷、癌症治療、視像會診及HPV疫苗注射",
  },
  {
    id: 8,
    classify: "醫學美容",
    name: ["愛瑪醫美"],
    link: "https://ameraesthetics.com/",
    number: 2,
    serviceMatter: "專業、安全、優質的全方位身體、面部治療方案",
  },
  {
    id: 9,
    classify: "家庭醫學及普通科",
    name: ["希瑪醫務中心"],
    link: "https://cmereye.com/",
    number: 3,
    serviceMatter: "優質基層醫療保健服務，包括各種常見疾病診治及慢性病管理",
  },
  {
    id: 10,
    classify: "其他",
    name: ["希華檢測 (國際) 有限公司"],
    link: "#",
    number: 1,
    serviceMatter:
      "香港政府認可的本地COVID-19 RT-PCR 檢測機構，提供安全、方便及價錢合適的檢測服務",
  },
];
</script>

<template>
  <div class="table">
    <div class="table_content">
      <div class="table_text">
        <p>
          希瑪在香港邁進全方位專科服務領域，由核心的眼科中心擴展至矯視中心、視光中心、牙科、腫瘤專科、
        </p>
        <p>醫學美容、家庭醫學及檢測中心等，為病人提供一站式的專科醫療服務。</p>
      </div>
      <div class="table-table">
        <div class="table-row-title">
          <div class="table-title">專科</div>
          <div class="table-name">中心名稱</div>
          <div class="table-number">中心數目</div>
          <div class="table-service">服務特色</div>
        </div>
        <div v-for="item in hospitalList" :key="item.id" class="table-row">
          <div class="table-title">{{ item.classify }}</div>
          <div class="table-name">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <span v-for="(name, index) in item.name" :key="index">{{
                name
              }}</span>
            </a>
          </div>
          <div class="table-number">{{ item.number }}</div>
          <div class="table-service">{{ item.serviceMatter }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .table_content {
    max-width: 1140px;
    margin: 0 auto 100px;
  }
  .table_text {
    margin-bottom: 48px;
    p {
      text-align: center;
      line-height: 2;
      font-size: 16px;
      color: #6b7280;
      font-weight: 100;
    }
  }
  .table-table {
    & > div {
      border-top: 1px solid #dee2e6;
      display: flex;
    }
    .table-title {
      padding: 12px;
      flex: 1.4;
    }
    .table-name {
      padding: 12px;
      flex: 2.6;
    }
    .table-number {
      padding: 12px;
      flex: 1;
    }
    .table-service {
      padding: 12px;
      flex: 5;
    }
  }
  .table-row-title {
    & > div {
      font-size: 20px;
      color: #212529;
      font-weight: 500;
    }
  }
  .table-row {
    & > div {
      font-size: 16px;
      color: #212529;
      font-weight: 100;
      display: flex;
      align-items: center;
      & > a {
        display: flex;
        flex-direction: column;
        width: fit-content;
        span {
          font-size: 16px;
          color: #212529;
          font-weight: 100;
        }
      }
      & > a:hover {
        border-bottom: 1px solid;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .table_content {
    padding: 0 14px 30px;
  }
  .table_text {
    p {
      line-height: 2;
      color: #6b7280;
      font-weight: 100;
      text-align: center;
      font-size: 4.1vw;
      letter-spacing: -0.4px;
    }
  }
  .table-table {
    overflow-x: scroll;
    & > div {
      border-top: 1px solid #dee2e6;
      width: 610px;
      display: flex;
      .table-title {
        flex: 1.3;
        padding: 12px;
      }
      .table-name {
        flex: 2.5;
        padding: 12px;
      }
      .table-number {
        flex: 1.2;
        padding: 12px;
      }
      .table-service {
        flex: 5;
        padding: 12px;
      }
    }
  }
  .table-row-title {
    margin-top: 30px;
    & > div {
      display: flex;
      align-items: center;
      font-size: 20px;
      text-wrap: nowrap;
      font-weight: 100;
      color: #212529;
    }
  }
  .table-row {
    & > div {
      color: #212529;
      font-size: 16px;
      & > a {
        display: flex;
        flex-direction: column;
        span {
          color: #212529;
          font-size: 16px;
        }
      }
      & > a:hover {
        border-bottom: 1px solid;
      }
    }
  }
}
</style>