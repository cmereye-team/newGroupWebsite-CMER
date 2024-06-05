<script lang="ts" setup>
import { ElMessageBox } from "element-plus";
const dialogVisible = ref(false);
const tipsTitle = ref("");
const dialogImg = ref("");
const hospitalList = [
  {
    link: "http://www.szcmer.com/",
    name: "深圳希瑪林順潮眼科醫院 ",
    img: "https://static.cmereye.com/imgs/2024/03/e9679f18e19acf83.jpg",
    setUpTime: "2013年3月",
    address: [
      "深圳市福田區沙頭街道天安社區泰然九路盛唐商務大廈泰然九路1-1號、 西座301-314、 東座303-304",
      "深圳希瑪蔚藍診所：深圳市南山區粵海街道蔚藍海岸社區創業路1777號海信南方大廈201",
    ],
    area: "5,100 平方米",
    facility: ["30張病床、 5間國際標準的 百級層流手術室"],
    feature: [
      "二級眼科專科醫院 ",
      "深圳市醫保定點單位 ",
      "中山眼科中心國際臨床培訓基地",
      "深圳市首家社會辦醫互聯網醫院 ",
      "「深圳醫改十年創新案例」",
      "香港中文大學眼科及視覺科學學系眼科教育及科研深度合作",
      "深圳職業技術學院戰略合作單位",
    ],
  },
  {
    link: "http://www.bjcmer.com/",
    name: "北京希瑪林順潮眼科醫院 ",
    img: "https://static.cmereye.com/imgs/2024/03/c3ddfee134269d00.jpg",
    setUpTime: "2018年1月",
    address: ["北京市朝陽區高碑店建國路27號紫檀大廈裙樓1-3層"],
    area: "4,620 平方米",
    facility: ["30張病床、 4間國際標準的 百級層流手術室"],
    feature: [
      "二級眼科專科醫院 ",
      "北京市醫保定點單位 ",
      "老視矯正示範基地",
      "疑難眼病國際會診醫生聯盟單位",
    ],
  },
  {
    link: "http://www.shcmer.com/",
    name: "上海希瑪瑞視眼科醫院",
    img: "https://static.cmereye.com/imgs/2024/03/b6f57e31ee5456d9.jpg",
    setUpTime: "2019年11月",
    address: [
      "上海市黃浦區 西藏南路758號 前社Nexxus2-3樓， 另有3間門診分部位於浦東新區、普陀區及楊浦區",
    ],
    area: "5,310 平方米",
    facility: ["25張病床、", "4間國際標準的", "層流淨化手術室"],
    feature: [
      "上海市醫保定點單位 ",
      "中國非公立醫療機構協會五星醫院星級評價 ",
      "2020年度中國品牌醫生團隊",
      "上海市「關心下一代研究中心」青少年眼病防治基地",
    ],
  },
  {
    link: "http://www.cmerba.com/",
    name: "深圳新安希瑪林順潮眼科醫院",
    img: "https://static.cmereye.com/imgs/2024/03/3c6656985196481e.jpg",
    setUpTime: "2018年11月",
    address: ["深圳市寶安區新安街道創業二路南側都市翠海華苑1棟1層"],
    area: "3,400 平方米",
    facility: ["20張病床、", "3間國際標準的", "層流淨化手術室"],
    feature: ["深圳市醫保定點單位", "2021最值得線民信賴品牌"],
  },
  {
    link: "https://www.gzcmer.com/",
    name: "廣州希瑪林順潮眼科醫院",
    img: "https://static.cmereye.com/imgs/2024/03/0bd5f226302ed550.jpg",
    setUpTime: "2022年1月",
    address: ["廣州市天河區天河北路183-187首層、2層、3層商場"],
    area: "5,400 平方米",
    facility: ["50張病床、 4間國際標準的百級層流淨化手術室"],
    feature: [
      "二級眼科專科醫院",
      "廣州醫保定點單位",
      "疑難眼病國際會診中心",
      "亞太近視學會學術交流基地",
    ],
  },
  {
    link: "https://www.zhcmer.com/",
    name: "珠海希瑪林順潮眼科醫院",
    img: "https://static.cmereye.com/imgs/2024/03/99fe5d8be6e72666.jpg",
    setUpTime: "2020年12月",
    address: ["珠海市香洲區吉大景園路15號 珠寶大廈一、二層"],
    area: "3,000 平方米",
    facility: ["20張病床、", "3間國際標準的層流淨化手術室"],
    feature: [
      "珠海醫保定點單位 ",
      "珠海市青少年近視 防控指定篩查機構 ",
      "「港澳藥械通」首批指定醫療機構",
    ],
  },
  {
    link: "https://www.hzcmer.com/",
    name: "惠州希瑪林順潮眼科醫院",
    img: "https://static.cmereye.com/imgs/2024/03/680fd46d8d53e735.png",
    setUpTime: "2021年3月",
    address: ["惠州市惠陽區淡水橋背永興路94號"],
    area: "4,000 平方米",
    facility: ["30張病床、3間國際標準的層流淨化手術室"],
    feature: ["惠州市醫保定點醫院"],
  },
  {
    link: "https://www.kmeye.com/",
    name: "希瑪 ‧ 昆明眼科醫院 ",
    img: "https://static.cmereye.com/imgs/2024/03/260dcbb0458935e2.jpg",
    setUpTime: "2019年6月",
    address: ["昆明市雲瑞西路44號"],
    area: "5,000 平方米",
    facility: ["80張病床、 3間國際標準的層流淨化手術室"],
    feature: ["省市醫保定點單位 ", "昆明市衛生局批准執業的眼科專科醫院"],
  },
  // {
  //   link: "https://www.fzcmer.com/",
  //   name: "福州希瑪林順潮眼科門診",
  //   img: "https://cmereye.com/pic/azh_9.jpg",
  //   setUpTime: "2021年12月",
  //   address: ["福州市鼓樓區東街83號 中庚青年廣場"],
  //   area: "3,000 平方米",
  //   facility: ["30張病床、 3間國際標準的層流淨化手術室"],
  //   feature: ["亞太近視學會兒童青少年近視防控科普活動基地聯盟"],
  // },
  {
    link: "https://www.fzcmer.com/",
    name: "揭陽希瑪林順潮眼科醫院",
    img: "https://static.cmereye.com/imgs/2023/02/966b90126db8542b.jpg",
    setUpTime: "2022年8月",
    address: [
      "揭陽市榕城區馬牙路與新陽路交界處玉浦工貿大廈一樓大廳、副樓2-5層",
    ],
    area: "6,000 平方米",
    facility: ["68張病床、3間國際標準的層流淨化手術室"],
    feature: ["二級眼科專業醫院"],
    醫院特點4: ["揭陽希瑪林順潮眼科醫院與揭陽市人民醫院結成「醫聯體」"],
  },
  {
    link: "http://www.lovelytooth.com/",
    name: "深圳希瑪愛康健口腔醫院 (希瑪間接非全資附屬公司)",
    img: "https://static.cmereye.com/imgs/2024/03/6886bd4bcac5bf75.jpg",
    setUpTime: "2016年1月",
    address: [
      "深圳市羅湖火車站大樓 C區1-8樓，另有13家口腔門診部分別設於深圳羅湖，福田，南山及寶安區",
    ],
    area: "總規模達到15,000多平方米 ",
    facility: ["20張病床、 180台牙科綜合治療椅"],
    feature: [
      "深圳醫保定點單位 ",
      "「深圳老字號」稱號單位 ",
      "中山大學光華口腔醫學院研究生課程進修班深圳市教學點",
    ],
  },
  {
    link: "https://m.fscmer.com/",
    name: "佛山希瑪林順潮眼科醫院",
    img: "https://static.cmereye.com/imgs/2024/03/7ea3f1f882559e62.png",
    setUpTime: "2023年8月",
    address: ["佛山市禪城區綠景一路13號金智慧廣場1-4樓"],
    area: "6000平方米 ",
    facility: ["50張床位、3間國際標準層流淨化手術室"],
    feature: ["佛山市醫保定點單位"],
  },
];
const open = (item: object) => {
  dialogVisible.value = true;
  tipsTitle.value = item.name;
  dialogImg.value = item.img;
};
</script>

<template>
  <div class="table">
    <div>
      <div class="table-content">
        <p>
          希瑪經過十年深耕，重點建立以大灣區為主的全國性實體醫院網路，遍及深圳、北京、上海、廣州、昆明及大灣區多個重點城市。希瑪的港式高質、安全可靠及價格合理的醫療服務，獲得病人正面回饋。在深圳市衛生健康委員會每季度的非公立醫院患者滿意度評分中，深圳希瑪林順潮眼科醫院長期高踞前列位置。
        </p>
      </div>
      <div class="table-table">
        <div>
          <div>醫院名稱</div>
          <div>設立年份</div>
          <div>地址</div>
          <div>面積</div>
          <div>醫療設施</div>
          <div>醫院特點</div>
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
                >關閉</el-button
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
        // width: calc((232px / 100%) * 100%);
        width:  282px;
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
        width: 165px;
        min-width: 110px;
      }
      & > div:nth-child(3) {
        width: 780px;
      }
      & > div:nth-child(4) {
        width: calc((199px / 100%) * 100%);
      }
      & > div:nth-child(5) {
        width: 460px;
      }
      & > div:nth-child(6) {
        width: 510px;
        span {
          padding-left: 15px;
        }
        span::before {
          content: "•";
          padding-right: 10px;
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
