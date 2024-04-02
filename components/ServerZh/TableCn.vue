<script lang="ts" setup>
import { ElMessageBox } from "element-plus";
const dialogVisible = ref(false);
const tipsTitle = ref("");
const dialogImg = ref("");
const hospitalList = [
  {
    link: "http://www.szcmer.com/",
    name: "深圳希玛林顺潮眼科医院 ",
    img: "https://static.cmereye.com/imgs/2024/03/e9679f18e19acf83.jpg",
    setUpTime: "2013年3月",
    address: [
      "深圳市福田区沙头街道天安社区泰然九路盛唐商务大厦泰然九路1-1号、 西座301-314、 东座303-304",
      "深圳希玛蔚蓝诊所：深圳市南山区粤海街道蔚蓝海岸社区创业路1777号海信南方大厦201",
    ],
    area: "5,100 平方米",
    facility: ["30张病床、 5间国际标准的 百级层流手术室"],
    feature: [
      "二级眼科专科医院 ",
      "深圳市医保定点单位 ",
      "中山眼科中心国际临床培训基地",
      "深圳市首家社会办医互联网医院 ",
      "「深圳医改十年创新案例」",
      "香港中文大学眼科及视觉科学学系眼科教育及科研深度合作",
      "深圳职业技术学院战略合作单位",
    ],
  },
  {
    link: "http://www.bjcmer.com/",
    name: "北京希玛林顺潮眼科医院 ",
    img: "https://static.cmereye.com/imgs/2024/03/c3ddfee134269d00.jpg",
    setUpTime: "2018年1月",
    address: ["北京市朝阳区高碑店建国路27号紫檀大厦裙楼1-3层"],
    area: "4,620 平方米",
    facility: ["30张病床、 4间国际标准的 百级层流手术室"],
    feature: [
      "二级眼科专科医院 ",
      "北京市医保定点单位 ",
      "老视矫正示范基地",
      "疑难眼病国际会诊医生联盟单位",
    ],
  },
  {
    link: "http://www.shcmer.com/",
    name: "上海希玛瑞视眼科医院",
    img: "https://static.cmereye.com/imgs/2024/03/b6f57e31ee5456d9.jpg",
    setUpTime: "2019年11月",
    address: [
      "上海市黄浦区 西藏南路758号 前社Nexxus2-3楼， 另有3间门诊分部位于浦东新区、普陀区及杨浦区",
    ],
    area: "5,310 平方米",
    facility: ["25张病床、", "4间国际标准的", "层流净化手术室"],
    feature: [
      "上海市医保定点单位 ",
      "中国非公立医疗机构协会五星医院星级评价 ",
      "2020年度中国品牌医生团队",
      "上海市「关心下一代研究中心」青少年眼病防治基地",
    ],
  },
  {
    link: "http://www.cmerba.com/",
    name: "深圳新安希玛林顺潮眼科医院",
    img: "https://static.cmereye.com/imgs/2024/03/3c6656985196481e.jpg",
    setUpTime: "2018年11月",
    address: ["深圳市宝安区新安街道创业二路南侧都市翠海华苑1栋1层"],
    area: "3,400 平方米",
    facility: ["20张病床、", "3间国际标准的", "层流净化手术室"],
    feature: ["深圳市医保定点单位", "2021最值得网民信赖品牌"],
  },
  {
    link: "https://www.gzcmer.com/",
    name: "广州希玛林顺潮眼科医院",
    img: "https://static.cmereye.com/imgs/2024/03/0bd5f226302ed550.jpg",
    setUpTime: "2022年1月",
    address: ["广州市天河区天河北路183-187首层、2层、3层商场"],
    area: "5,400 平方米",
    facility: ["50张病床、 4间国际标准的百级层流净化手术室"],
    feature: [
      "二级眼科专科医院",
      "广州医保定点单位",
      "疑难眼病国际会诊中心",
      "亚太近视学会学术交流基地",
    ],
  },
  {
    link: "https://www.zhcmer.com/",
    name: "珠海希玛林顺潮眼科医院",
    img: "https://static.cmereye.com/imgs/2024/03/99fe5d8be6e72666.jpg",
    setUpTime: "2020年12月",
    address: ["珠海市香洲区吉大景园路15号 珠宝大厦一、二层"],
    area: "3,000 平方米",
    facility: ["20张病床、", "3间国际标准的层流净化手术室"],
    feature: [
      "珠海医保定点单位 ",
      "珠海市青少年近视 防控指定筛查机构 ",
      "「港澳药械通」首批指定医疗机构",
    ],
  },
  {
    link: "https://www.hzcmer.com/",
    name: "惠州希玛林顺潮眼科医院",
    img: "https://static.cmereye.com/imgs/2024/03/680fd46d8d53e735.png",
    setUpTime: "2021年3月",
    address: ["惠州市惠阳区淡水桥背永兴路94号"],
    area: "4,000 平方米",
    facility: ["30张病床、3间国际标准的层流净化手术室"],
    feature: ["惠州市医保定点医院"],
  },
  {
    link: "https://www.kmeye.com/",
    name: "希玛 ‧ 昆明眼科医院 ",
    img: "https://static.cmereye.com/imgs/2024/03/260dcbb0458935e2.jpg",
    setUpTime: "2019年6月",
    address: ["昆明市云瑞西路44号"],
    area: "5,000 平方米",
    facility: ["80张病床、 3间国际标准的层流净化手术室"],
    feature: ["省市医保定点单位 ", "昆明市卫生局批准执业的眼科专科医院"],
  },
  {
    link: "https://www.fzcmer.com/",
    name: "福州希玛林顺潮眼科门诊",
    img: "https://cmereye.com/pic/azh_9.jpg",
    setUpTime: "2021年12月",
    address: ["福州市鼓楼区东街83号 中庚青年广场"],
    area: "3,000 平方米",
    facility: ["30张病床、 3间国际标准的层流净化手术室"],
    feature: ["亚太近视学会儿童青少年近视防控科普活动基地联盟"],
  },
  {
    link: "https://www.fzcmer.com/",
    name: "揭阳希玛林顺潮眼科医院",
    img: "https://static.cmereye.com/imgs/2023/02/966b90126db8542b.jpg",
    setUpTime: "2022年8月",
    address: [
      "揭阳市榕城区马牙路与新阳路交界处玉浦工贸大厦一楼大厅、副楼2-5层",
    ],
    area: "6,000 平方米",
    facility: ["68张病床、3间国际标准的层流净化手术室"],
    feature: [
      "二级眼科专业医院",
      "揭阳希玛林顺潮眼科医院与揭阳市人民医院结成「医联体」",
    ],
  },
  {
    link: "http://www.lovelytooth.com/",
    name: "深圳希玛爱康健口腔医院 (希玛间接非全资附属公司)",
    img: "https://static.cmereye.com/imgs/2024/03/6886bd4bcac5bf75.jpg",
    setUpTime: "2016年1月",
    address: [
      "深圳市罗湖火车站大楼 C区1-8楼，另有12家口腔门诊部分别设于深圳罗湖，福田，南山及宝安区",
    ],
    area: "总规模达到15,000多平方米 ",
    facility: ["20张病床、 180台牙科综合治疗椅"],
    feature: [
      "深圳医保定点单位 ",
      "「深圳老字号」称号单位 ",
      "中山大学光华口腔医学院研究生课程进修班深圳市教学点",
    ],
  },
  {
    link: "https://m.fscmer.com/",
    name: "佛山希玛林顺潮眼科医院",
    img: "https://static.cmereye.com/imgs/2024/03/7ea3f1f882559e62.png",
    setUpTime: "2023年8月",
    address: ["佛山市禅城区绿景一路13号金智慧广场1-4楼"],
    area: "6000平方米 ",
    facility: ["50张床位、3间国际标准层流净化手术室"],
    feature: ["佛山市医保定点单位"],
  },
];
const open = (item: object) => {
  dialogVisible.value = true;
  tipsTitle.value = name;
  dialogImg.value = img;
};
</script>

<template>
  <div class="table">
    <div>
      <div class="table-content">
        <p>
          希玛经过十年深耕，重点建立以大湾区为主的全国性实体医院网路，遍及深圳、北京、上海、广州、昆明、福州及大湾区多个重点城市。希玛的港式高质、安全可靠及价格合理的医疗服务，获得病人正面回馈。在深圳市卫生健康委员会每季度的非公立医院患者满意度评分中，深圳希玛林顺潮眼科医院长期高踞前列位置。
        </p>
      </div>
      <div class="table-table">
        <div>
          <div>医院名称</div>
          <div>设立年份</div>
          <div>地址</div>
          <div>面积</div>
          <div>医疗设施</div>
          <div>医院特点</div>
        </div>
        <div v-for="(item, index) in hospitalList" :key="index">
          <div>
            <div>
              <a :href="item.link" target="_blank" rel="noopener noreferrer">{{
                item.name
              }}</a>
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
      <client-only>
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
      </client-only>
    </div>
  </div>
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
      font-size: 0.83vw;
      line-height: 2;
      color: #6b7280;
      text-align: center;
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
        padding: 0.625vw;
        color: #707070;
        font-size: 0.83vw;
        line-height: 1.5;
        span {
          color: #707070;
          font-size: 0.83vw;
          line-height: 1.5;
        }
      }
      & > div:nth-child(1) {
        width: calc((232px / 100%) * 100%);
        min-width: 210px;
        color: #fff;
        color: #707070;
        font-size: 0.83vw;
        line-height: 1.5;
        padding: 0.625vw;
        display: flex;
        flex-direction: column;
        & > div:nth-child(1) {
          & > a {
            color: #707070;
            font-size: 0.83vw;
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
        font-size: 0.83vw;
        line-height: 1.5;
        padding: 0.625vw;
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
    font-size: 0.83vw;
    color: #212529;
    padding: 0 0 15px 0;
    line-height: 1.5;
  }
  .tips-img {
    text-align: center;
    border-radius: 0.625vw;
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
