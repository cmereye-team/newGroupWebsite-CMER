<script lang="ts" setup>
const hospitalList = [
  {
    id: 1,
    classify: "眼科",
    name: ["希玛眼科中心"],
    link: "https://www.hkcmereye.com",
    number: 12,
    serviceMatter:
      "基本检查、诊症、特殊检查、治疗及门诊手术、药物处方、验光配镜及手术治疗",
  },
  {
    id: 2,
    classify: "眼科",
    name: ["眼科日间手术中心"],
    link: "https://www.hkcmereye.com/",
    number: 3,
    serviceMatter:
      "设有最先进的手术仪器和计算机检验系统等，由医生进行各项眼科激光手术和眼科手术服务",
  },
  {
    id: 3,
    classify: "眼科",
    name: ["希玛微笑矫视中心"],
    link: "https://smile.hkcmereye.com/",
    number: 2,
    serviceMatter:
      "SMILE微笑激光矫视、LASIK激光矫视、植入式隐形眼镜 (ICL) 及人工晶体置换术 (IOL)",
  },
  {
    id: 4,
    classify: "眼科",
    name: ["希玛眼科视光中心"],
    link: "https://www.cmervision.com/",
    number: 10,
    serviceMatter:
      "一站式安全、可靠及针对性的眼科检查服务及改善视力方案，儿童近视控制方案",
  },
  {
    id: 5,
    classify: "眼科",
    name: ["嘉宾眼科及激光矫视手术中心", "(希玛全资附属公司)"],
    link: "#",
    number: 2,
    serviceMatter: "眼科及激光矫视手术",
  },
  {
    id: 6,
    classify: "牙科",
    name: ["希玛牙科中心"],
    link: "https://cmerdental.com/",
    number: 7,
    serviceMatter: "基本牙科服务，同时为客人提供美容牙科及高阶牙科服务",
  },
  {
    id: 7,
    classify: "肿瘤专科",
    name: ["希玛中西肿瘤专科中心"],
    link: "https://cmeroncology.com/",
    number: 1,
    serviceMatter:
      "高质素的医疗服务包括筛查及诊断、癌症治疗、视像会诊及HPV疫苗注射",
  },
  {
    id: 8,
    classify: "医学美容",
    name: ["爱玛医美"],
    link: "https://ameraesthetics.com/",
    number: 2,
    serviceMatter: "专业、安全、优质的全方位身体、面部治疗方案",
  },
  {
    id: 9,
    classify: "家庭医学及普通科",
    name: ["希玛医务中心"],
    link: "https://cmereye.com/",
    number: 3,
    serviceMatter: "优质基层医疗保健服务，包括各种常见疾病诊治及慢性病管理",
  },
  {
    id: 10,
    classify: "其他",
    name: ["希华检测 (国际) 有限公司"],
    link: "#",
    number: 1,
    serviceMatter:
      "香港政府认可的本地COVID-19 RT-PCR 检测机构，提供安全、方便及价钱合适的检测服务",
  },
];
</script>

<template>
  <div class="table">
    <div class="table_content">
      <div class="table_text">
        <p>
          希玛在香港迈进全方位专科服务领域，由核心的眼科中心扩展至矫视中心、视光中心、牙科、肿瘤专科、
        </p>

        <p>医学美容、家庭医学及检测中心等，为病人提供一站式的专科医疗服务。</p>
      </div>

      <div class="table-table">
        <div class="table-row-title">
          <div class="table-title">专科</div>
          <div class="table-name">中心名称</div>
          <div class="table-number">中心数目</div>
          <div class="table-service">服务特色</div>
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