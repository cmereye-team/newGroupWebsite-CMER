<script lang="ts" setup>
import { ElMessageBox } from "element-plus";
const dialogVisible = ref(false);
const tipsTitle = ref("");
const dialogImg = ref("");
const hospitalList = [
  {
    link: "http://www.szcmer.com/",
    name: "C-MER (Shenzhen) Dennis Lam Eye Hospital ",
    img: "https://static.cmereye.com/imgs/2024/03/e9679f18e19acf83.jpg",
    setUpTime: "March 2013",
    address: [
      "East Wing 303-314, West Wing 301-314, 1-1, Tairan 9th Road, Shengtang Building, Tian'an Community, Shatou Street, Futian District, Shenzhen;",
      "C-MER Shenzhen Weilan Eye Center: 201, Hisense South Building, 1777 Chuangye Road, Weilan Coast Community, Nanshan District, Shenzhen",
    ],
    area: "5,100 ㎡",
    facility: [
      "30 hospital beds, 5 class 100 laminar flow operating rooms that meet international standards",
    ],
    feature: [
      "Grade II eye hospital ",
      "A Medicare-designated hospital in Shenzhen ",
      "International Clinical Site, Zhongshan Ophthalmic Center, Sun Yat-sen University",
      "1st non-government internet hospital in Shenzhen ",
      "Innovative case study of 10-year medical reform in Shenzhen",
      "Deep collaboration for research & education with the Department of Ophthalmology & Visual Sciences, the Chinese University of Hong Kong",
      "Strategic Cooperation Unit of Shenzhen Polytechnic",
    ],
  },
  {
    link: "http://www.bjcmer.com/",
    name: "C-MER (Beijing) Dennis Lam Eye Hospital ",
    img: "https://static.cmereye.com/imgs/2024/03/c3ddfee134269d00.jpg",
    setUpTime: "January 2018",
    address: [
      "1-3/F, Red Sandalwood Plaza, 27 Jianguo Road, Gaobeidian, Chaoyang District, Beijing",
    ],
    area: "4,620 ㎡",
    facility: [
      "30 hospital beds, 4 class 100 laminar flow operating rooms that meet international standards",
    ],
    feature: [
      "Grade II eye hospital ",
      "A Medicare-designated hospital in Beijing ",
      "Demonstration Base of treatment of presbyopia",
      "Rare and Complex Eye Diseases （疑难眼病国际会诊医生联盟单位）",
    ],
  },
  {
    link: "http://www.shcmer.com/",
    name: "C-MER (Shanghai) Vision Eye Hospital",
    img: "https://static.cmereye.com/imgs/2024/03/b6f57e31ee5456d9.jpg",
    setUpTime: "	November 2019",
    address: [
      "2-3/F, Nexxus, 758 Xizang South Road, Huangpu District, Shanghai, and 3 clinics located in Pudong New Area, Putuo District and Yangpu District",
    ],
    area: "5,310 ㎡",
    facility: [
      "25 hospital beds",
      "4 laminar flow purified operating rooms that",
      "meet international standards",
    ],
    feature: [
      "A Medicare-designated hospital in Shanghai",
      "5-Star rating (hospital) by Chinese Non-government Medical Institutions Association ",
      "China Branded Doctor Team 2020",
      "Shanghai Research Center of Care for Children Eye Disease Prevention and Treatment Center",
    ],
  },
  {
    link: "http://www.cmerba.com/",
    name: "C-MER (Xinan) Dennis Lam Eye Hospital",
    img: "https://static.cmereye.com/imgs/2024/03/3c6656985196481e.jpg",
    setUpTime: "	November 2018",
    address: [
      "1/F, Block 1 Dushi Cuihai Huayuan, 102 Chuangye 2nd Road, Shiyan Street. Bao'an District, Shenzhen",
    ],
    area: "3,400 ㎡",
    facility: [
      "20 hospital beds",
      "3 laminar flow purified operating rooms that",
      "meet international standards",
    ],
    feature: [
      "A Medicare-designated hospital in Shenzhen",
      "The Most Trusted Brand of Netizens 2021",
    ],
  },
  {
    link: "https://www.gzcmer.com/",
    name: "C-MER (Guangzhou) Dennis Lam Eye Hospital",
    img: "https://static.cmereye.com/imgs/2024/03/0bd5f226302ed550.jpg",
    setUpTime: "January 2022",
    address: [
      "	Level 1, 2, 3 Shopping Mall, 183-187 Tian He North Road, Tianhe District, Guangzhou",
    ],
    area: "5,400 ㎡",
    facility: [
      "50 hospital beds, 4 class 100 laminar flow purified operating rooms that meet international standards",
    ],
    feature: [
      "Grade II eye hospital",
      "A Medicare-designated hospital in Guangzhou",
      "International Consultation Center on Rare and Complex Eye Diseases",
      "Asia-Pacific Myopia Society (APMS) Academic Exchange Base",
      "Demonstration Base of full vision refractive cataract surgery",
      "Demonstration Base of full vision treatment of presbyopia",
    ],
  },
  {
    link: "https://www.zhcmer.com/",
    name: "C-MER (Zhuhai) Dennis Lam Eye Hospital",
    img: "https://static.cmereye.com/imgs/2024/03/99fe5d8be6e72666.jpg",
    setUpTime: "December 2020",
    address: [
      "1-2F, Jewelry Building, 15 Jingyuan Road, Xiangzhou District, Zhuhai",
    ],
    area: "3,000 ㎡",
    facility: [
      "20 hospital beds, 3 laminar flow purified operating rooms that meet international standards",
    ],
    feature: [
      "A Medicare-designated hospital in Zhuhai ",
      "Zhuhai Screening Institution of Myopia Control in Youth ",
      "1st batch of designated healthcare institutions under Measure of using HK registered drugs and medical devices used in HK public hospitals in the GBA",
    ],
  },
  {
    link: "https://www.hzcmer.com/",
    name: "C-MER (Huizhou) Dennis Lam Eye Hospital",
    img: "https://static.cmereye.com/imgs/2024/03/680fd46d8d53e735.png",
    setUpTime: "March 2021",
    address: ["94 Yongxing Road, Danshui Qiaobei, Huiyang District, Huizhou"],
    area: "4,000 ㎡",
    facility: [
      "30 hospital beds, 3 laminar flow purified operating rooms that meet international standards",
    ],
    feature: ["A Medicare-designated hospital in Huizhou"],
  },
  {
    link: "https://www.kmeye.com/",
    name: "C-MER Kunming Eye Hospital ",
    img: "https://static.cmereye.com/imgs/2024/03/260dcbb0458935e2.jpg",
    setUpTime: "June 2019",
    address: ["44 Yunrui West Road, Kunming"],
    area: "5,000 ㎡",
    facility: [
      "80 hospital beds, 3 laminar flow purified operating rooms that meet international standards",
    ],
    feature: [
      "A Medicare-designated hospital in Yunnan and Kunming ",
      "Eye hospital approved by Kunming Municipal Health Commission",
    ],
  },
  // {
  //   link: "https://www.fzcmer.com/",
  //   name: "C-MER (Fuzhou) Dennis Lam Eye Center",
  //   img: "https://cmereye.com/pic/azh_9.jpg",
  //   setUpTime: "December 2021",
  //   address: ["Zhonggeng Youth Plaza, 83 East Street, Gulou District, Fuzhou"],
  //   area: "3,000 ㎡",
  //   facility: [
  //     "30 hospital beds, 3 laminar flow purified operating rooms that meet international standards",
  //   ],
  //   feature: [
  //     "Asia-Pacific Myopia Society – The Alliance of Prevention and Control of Myopia in Children and Adolescents",
  //   ],
  // },
  {
    link: "https://www.fzcmer.com/",
    name: "C-MER (Jieyang) Dennis Lam Eye Hospital",
    img: "https://static.cmereye.com/imgs/2023/02/966b90126db8542b.jpg",
    setUpTime: "August 2022",
    address: [
      "1/F Hall, 2-5/F, Yupu Commercial Complex, Rongcheng District, Jieyang",
    ],
    area: "6,000 ㎡",
    facility: [
      "68 hospital beds,3 laminar flow purified operating rooms that meet international standards",
    ],
    feature: [
      "Grade II eye hospital",
      "C-MER (Jieyang) Dennis Lam Eye",
      "Hospital formed an alliance with the Jieyang People’sHospital",
    ],
  },
  {
    link: "http://www.lovelytooth.com/",
    name: "Shenzhen C-MER CKJ Stomatological Hospital (an indirect non-wholly owned subsidiary of C-MER)",
    img: "https://static.cmereye.com/imgs/2024/03/6886bd4bcac5bf75.jpg",
    setUpTime: "2016年1月",
    address: [
      "1-8F, Area C, Railway Station Building Luohu District, Shenzhen, and 13 clinics located in Luohu, Futian, Nanshan and Bao'an District",
    ],
    area: "Total floor area of 15,000 ㎡",
    facility: ["20 hospital beds,180 dental treatment chairs"],
    feature: [
      "A Medicare-designated hospital in Shenzhen ",
      "Shenzhen Time-Honored Brand ",
      "Shenzhen teaching spot of postgraduate course training class, Hospital of Stomatology, Sun Yat-sen University",
    ],
  },
  {
    link: "https://m.fscmer.com/",
    name: "C-MER (foshan) Dennis Lam Eye Hospital",
    img: "https://static.cmereye.com/imgs/2024/03/7ea3f1f882559e62.png",
    setUpTime: "2023年8月",
    address: [
      "Floor 1-4, Golden Wisdom Plaza, No. 13, Lvjing Road, Chancheng District, Foshan City",
    ],
    area: "6000㎡",
    facility: [
      "50 beds, 3 international standard laminar flow purification operating rooms",
    ],
    feature: ["Foshan medical insurance designated unit"],
  },
];
const open = (item: object) => {
  dialogVisible.value = true;
  tipsTitle.value = name;
  dialogImg.value = img;
};
</script>

<template>
  <client-only>
    <div class="table">
      <div>
        <div class="table-content">
          <p>
            Following 10 years of continuous efforts, C-MER has built up a
            nationwide hospital network with a strong focus in the GBA. The
            Group’s
          </p>
          <p>
            medical network covers Shenzhen, Beijing, Shanghai, Guangzhou,
            Kunming and a number of major cities in the GBA. C-MER’s
          </p>
          <p>
            high-quality, safe, reliable and affordable healthcare service has
            received positive feedback from patients. At the quarterly patient
          </p>
          <p>
            satisfaction rating and ranking of non-public hospitals conducted by
            Shenzhen Municipal Health Commission, C-MER (Shenzhen) Dennis
          </p>
          <p>
            Lam Eye Hospital has continued to hold high rankings for many years.
          </p>
        </div>
        <div class="table-table">
          <div>
            <div>Hospital Name</div>
            <div>Year of Establishment</div>
            <div>Address</div>
            <div>Floor Area</div>
            <div>Medical Facilities</div>
            <div>Uniqueness</div>
          </div>
          <div v-for="(item, index) in hospitalList" :key="index">
            <div>
              <div>
                <a
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ item.name }}</a
                >
              </div>
              <div @click="open(item)">
                <img :src="item.img" :alt="item.name" />
              </div>
            </div>
            <div>{{ item.setUpTime }}</div>
            <div>
              <span v-for="(ads, index) in item.address" :key="index">{{
                ads
              }}</span>
            </div>
            <div>{{ item.area }}</div>
            <div>
              <span v-for="(fac, index) in item.facility" :key="index">{{
                fac
              }}</span>
            </div>
            <div>
              <span v-for="(fea, index) in item.feature" :key="index">{{
                fea
              }}</span>
            </div>
          </div>
        </div>

        <el-dialog v-model="dialogVisible" :title="tipsTitle" width="800">
          <div>
            <p class="tips-title">{{ tipsTitle }}</p>
            <div class="tips-img">
              <img :src="dialogImg" :alt="tipsTitle" />
            </div>
          </div>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="dialogVisible = false" type="primary"
                >关闭</el-button
              >
            </div>
          </template>
        </el-dialog>
      </div>
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  :deep(.el-dialog) {
    padding: 0;
    .el-dialog__header {
      background: #0056b3;
      padding: 20px;
      span {
        color: #fff;
      }
    }
    .el-icon {
      svg {
        width: 1.5em;
        height: 1.5em;
      }
      path {
        color: #fff;
      }
    }
    .el-dialog__headerbtn {
      right: 20px;
      top: 10px;
    }
    .el-dialog__body {
      padding: 20px;
    }
    .el-dialog__footer {
      padding: 20px;
      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .table {
    margin: 80px auto;
  }
  .table-content {
    max-width: 1140px;
    padding: 0 20px;
    margin: 0 auto;
    p {
      font-size: 18px;
      line-height: 2;
      color: #6b7280;
      text-align: center;
      letter-spacing: 0;
      font-family: "Arial";
    }
  }
  .table-table {
    margin-top: 80px;
    background-color: #f8f9fa;
    padding: 64px 2.5rem;
    z-index: -1;
    position: relative;
    & > div {
      display: flex;
      border-top: 1px solid #dee2e6;
      & > div:nth-child(3),
      & > div:nth-child(5),
      & > div:nth-child(6) {
        display: flex;
        flex-direction: column;
        padding: 12px;
        color: #707070;
        font-size: 16px;
        line-height: 1.5;
        font-family: "NotoSansTCLight";
        font-weight: 200;
        span {
          font-weight: 200;
          color: #707070;
          font-size: 16px;
          line-height: 1.5;
          font-family: "NotoSansTCLight";
        }
      }
      & > div:nth-child(1) {
        flex: 1.8;
        color: #fff;
        color: #707070;
        font-size: 16px;
        line-height: 1.5;
        padding: 12px;
        font-weight: 200;
        font-family: "NotoSansTCLight";
        display: flex;
        flex-direction: column;
        & > div:nth-child(1) {
          & > a {
            color: #707070;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 5px;
          }
          & > a:hover {
            color: #0056b3;
            border-bottom: 1px solid;
          }
        }
        & > div:nth-child(2) {
          cursor: pointer;
          max-width: 173px;
          img {
            width: 100%;
          }
        }
        & > div:nth-child(2):hover {
          transform: scale(1.2);
          transition: 0.5s ease-in-out;
        }
      }
      & > div:nth-child(2),
      & > div:nth-child(4) {
        font-family: "NotoSansTCLight";
        font-weight: 200;
        color: #707070;
        font-size: 16px;
        line-height: 1.5;
        padding: 12px;
      }
      & > div:nth-child(2) {
        flex: 1;
      }
      & > div:nth-child(3) {
        flex: 2.7;
      }
      & > div:nth-child(4) {
        flex: 0.8;
      }
      & > div:nth-child(5) {
        flex: 1.2;
      }
      & > div:nth-child(6) {
        flex: 2.5;
        span {
          padding-left: 15px;
        }
        span::before {
          content: "•";
        }
      }
    }
    & > div:nth-child(1) {
      background: #51a8dd;
      div,
      a,
      span {
        color: #fff;
        font-size: 20px;
      }
    }
  }
  .tips-title {
    font-size: 16px;
    color: #212529;
    padding: 0 0 15px 0;
    line-height: 1.5;
  }
  .tips-img {
    text-align: center;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 7px;
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 767px) {
  :deep(.el-dialog) {
    padding: 0;
    .el-dialog__header {
      background: #0056b3;
      padding: 20px;
      span {
        color: #fff;
      }
    }
    .el-icon {
      svg {
        width: 1.5em;
        height: 1.5em;
      }
      path {
        color: #fff;
      }
    }
    .el-dialog__headerbtn {
      right: 20px;
      top: 10px;
    }
    .el-dialog__body {
      padding: 20px;
    }
    .el-dialog__footer {
      padding: 20px;
      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .table-content {
    padding: 0 16px;
    P {
      font-size: 16px;
      line-height: 2;
      color: #6b7280;
      text-align: center;
    }
  }
  .table-table {
    margin-top: 80px;
    background-color: #f8f9fa;
    padding: 32px 16px;
    overflow-x: auto;
    & > div {
      width: 1500px;
      display: flex;
      border-top: 1px solid #dee2e6;
      & > div:nth-child(3),
      & > div:nth-child(5),
      & > div:nth-child(6) {
        display: flex;
        flex-direction: column;
        padding: 12px;
        color: #707070;
        font-size: 16px;
        line-height: 1.5;
        span {
          color: #707070;
          font-size: 16px;
          line-height: 1.5;
        }
      }
      & > div:nth-child(1) {
        width: calc((232px / 100%) * 100%);
        min-width: 210px;
        color: #fff;
        color: #707070;
        font-size: 16px;
        line-height: 1.5;
        padding: 12px;
        display: flex;
        flex-direction: column;
        & > div:nth-child(1) {
          & > a {
            color: #707070;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 5px;
          }
          & > a:hover {
            color: #0056b3;
            border-bottom: 1px solid;
          }
        }
        & > div:nth-child(2) {
          cursor: pointer;
          max-width: 173px;
          img {
            width: 100%;
          }
        }
        & > div:nth-child(2):hover {
          transform: scale(1.2);
          transition: 0.5s ease-in-out;
        }
      }
      & > div:nth-child(2),
      & > div:nth-child(4) {
        color: #707070;
        font-size: 16px;
        line-height: 1.5;
        padding: 12px;
      }
      & > div:nth-child(2) {
        width: calc((124px / 100%) * 100%);
        min-width: 110px;
      }
      & > div:nth-child(3) {
        width: calc((660px / 100%) * 100%);
      }
      & > div:nth-child(4) {
        width: calc((199px / 100%) * 100%);
      }
      & > div:nth-child(5) {
        width: calc((328px / 100%) * 100%);
      }
      & > div:nth-child(6) {
        width: calc((410px / 100%) * 100%);
        span {
          padding-left: 15px;
        }
        span::before {
          content: "•";
        }
      }
    }
    & > div:nth-child(1) {
      background: #51a8dd;
      div,
      a,
      span {
        color: #fff;
        font-size: 20px;
      }
    }
  }
  .tips-title {
    font-size: 16px;
    color: #212529;
    padding: 0 0 15px 0;
    line-height: 1.5;
  }
  .tips-img {
    text-align: center;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 7px;
    img {
      width: 100%;
    }
  }
}
</style>
