<script lang="ts" setup>
const hospitalList = [
  {
    id: 1,
    classify: "Ophthalmology",
    name: ["Hong Kong C-MER Eye Center"],
    link: "https://www.hkcmereye.com",
    number: 12,
    serviceMatter:
      "Basic examinations, consultations, special examinations, treatments and day surgeries, drug prescriptions, optometry and glasses, and surgical interventions",
  },
  {
    id: 2,
    classify: "Ophthalmology",
    name: ["Eye Day Surgery Center"],
    link: "https://www.hkcmereye.com/",
    number: 3,
    serviceMatter:
      "Equipped with most advanced surgical instruments and computerized inspection systems to facilitate ophthalmologists in performing laser eye surgeries and other eye operations",
  },
  {
    id: 3,
    classify: "Ophthalmology",
    name: ["CMER Smile Refractive Center"],
    link: "https://smile.hkcmereye.com/",
    number: 2,
    serviceMatter:
      "	ReLEx SMILE (Small Incision Lenticule Extraction),LASIK (Laser-Assisted in Situ Keratomileusis), Implantable Collamer Lens (ICL) and Intraocular Lens Implantation (IOL)",
  },
  {
    id: 4,
    classify: "Ophthalmology",
    name: ["CMER Vision"],
    link: "https://www.cmervision.com/",
    number: 10,
    serviceMatter:
      "	One-stop safe, reliable and targeted eye examinations and vision improvement solutions; children myopia control program",
  },
  {
    id: 5,
    classify: "Ophthalmology",
    name: ["Champion Eye & Refractive Surgery Centre", "(a wholly owned subsidiary of C-MER)"],
    link: "#",
    number: 2,
    serviceMatter: "Eye and refractive surgeries",
  },
  {
    id: 6,
    classify: "Dentistry",
    name: ["CMER Dental"],
    link: "https://cmerdental.com/",
    number: 7,
    serviceMatter: "Primary dental care, cosmetic dentistry and advanced dental services",
  },
  {
    id: 7,
    classify: "Oncology",
    name: ["C-MER Oncology"],
    link: "https://cmeroncology.com/",
    number: 1,
    serviceMatter:
      "Quality medical services include screening and diagnosis, treatment of cancer, telemedicine service and Human Papillomavirus (HPV) Vaccination",
  },
  {
    id: 8,
    classify: "Medical Aesthetics",
    name: ["AMER"],
    link: "https://ameraesthetics.com/",
    number: 2,
    serviceMatter: "Professional, safe and premier all-round body and facial treatment solutions",
  },
  {
    id: 9,
    classify: "Family Medicine and General Practice",
    name: ["C-MER Medical Clinic"],
    link: "https://cmereye.com/",
    number: 3,
    serviceMatter: "High-quality primary healthcare services including the diagnosis and treatment of common diseases and the care for chronic illnesses.",
  },
  {
    id: 10,
    classify: "Other",
    name: ["Health Hope International Medical Laboratory Limited"],
    link: "#",
    number: 1,
    serviceMatter:
      "A local COVID-19 RT-PCR testing center recognized by the Hong Kong Government, it offers safe, convenient and cost-effective testing services.",
  },
];
</script>

<template>
  <div class="table">
    <div class="table_content">
      <div class="table_text">
        <p>
          In Hong Kong, C-MER has been expanding continuously from its core
          business of operating eye centers to comprehensive specialty
        </p>
        <p>
          services. These span from smile refractive, optometry, dentistry,
          oncology,medical aesthetics, family medicine to medical laboratory.
          With its
        </p>
        <p>
          full suite of service offerings, the Group offers one-stop specialty
          services to patients.
        </p>
      </div>

      <div class="table-table">
        <div class="table-row-title">
          <div class="table-title">Specialist</div>
          <div class="table-name">Name of Center</div>
          <div class="table-number">No of Centers</div>
          <div class="table-service">Service Highlights</div>
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
      font-weight: 400;
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
      font-weight: 400;
      display: flex;
      align-items: center;
      & > a {
        display: flex;
        flex-direction: column;
        width: fit-content;
        span {
          font-size: 16px;
          color: #212529;
          font-weight: 400;
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
      font-weight: 400;
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