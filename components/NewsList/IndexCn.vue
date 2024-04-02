<script lang="ts" setup>
let arr = ref([]);
const newsListCn: any = reactive([
  {
    id: 0,
    title: "",
    ext_uploadFile: "",
    ext_date: "",
  },
]);
async function fetchData() {
  await fetch("https:///admin.hkcmereye.com/api.php/list/23")
    .then((response) => response.json())
    .then((data) => {
      // 清空数组
      newsListCn.splice(0, newsListCn.length);
      arr.value = data.data;

      arr.value.map((item: any) => {
        newsListCn.push({
          id: item.id,
          title: item.title,
          ext_uploadFile: item.ext_uploadFile,
          ext_date: item.ext_date.split(" ")[0],
        });
      });
      sessionStorage.setItem("newsListCn", JSON.stringify(newsListCn));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// 获取当前年
const todayYear = ref(0);
const getCurrentYear = () => {
  let date = new Date();
  todayYear.value = date.getFullYear();
};

onMounted(async () => {
  getCurrentYear();
  if (
    sessionStorage.getItem("newsListCn") == "" ||
    sessionStorage.getItem("newsListCn") == null
  ) {
    await fetchData();
  } else {
    data.value = JSON.parse(sessionStorage.getItem("newsListCn") || "");
  }
});

let data = ref([
  {
    id: "147",
    title: "營收及利潤創上市新高，口岸醫療成業績增長新引擎",
    ext_uploadFile: "/static/upload/file/20240329/1711693935522246.pdf",
    ext_date: "2024-03-26 00:00:00",
  },
  {
    id: "88",
    title:
      "核心收入增長41%，盈利增長101%眼科業務疫後全面反彈，跨境醫療業務表現亮眼",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2023/09/%E5%B8%8C%E7%91%AA_1H23%E6%A5%AD%E7%B8%BE%E6%96%B0%E8%81%9E%E7%A8%BF.pdf",
    ext_date: "2023-09-22 00:00:00",
  },
  {
    id: "89",
    title: "疫情下核心醫療業務保持增長，收入創新高同時躋身深圳民營醫療集團前列",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2023/04/CMER_2022-Annual-Results-Press-Release_TC.pdf",
    ext_date: "2023-03-01 00:00:00",
  },
  {
    id: "90",
    title: "希瑪眼科引入中國著名投資人和企業家龔虹嘉先生爲戰略投資者",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/12/%E5%B8%8C%E7%91%AA_%E6%88%B0%E6%8A%95_%E6%96%B0%E8%81%9E%E7%A8%BF-TC.pdf",
    ext_date: "2022-12-02 00:00:00",
  },
  {
    id: "91",
    title: "希瑪眼科2022年上半年總收益8.82億港元，按年同比增長近70%",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/09/CMER_1H2022-Interiml-Results-Press-Release_Chi_Final.pdf",
    ext_date: "2022-08-30 00:00:00",
  },
  {
    id: "92",
    title: "希瑪2021年收益創新高逾11億港元同比增長59%",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20220329_Chi_Final.pdf",
    ext_date: "2022-03-29 00:00:00",
  },
  {
    id: "93",
    title:
      "希瑪醫療與深圳亞輝龍聯手加大抗疫力度 捐贈基層市民新冠病毒快速檢測包倍增至60萬套",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20220222_Chi_Final.pdf",
    ext_date: "2022-02-22 00:00:00",
  },
  {
    id: "94",
    title:
      "港深攜手同心抗疫希瑪醫療夥同深圳亞輝龍向香港基層市民 捐贈30萬套新冠病毒快速測試包",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20220216_Chi_Final.pdf",
    ext_date: "2022-02-16 00:00:00",
  },
  {
    id: "95",
    title: "香港理工大學與希瑪眼科合作於粵港澳大灣區培育香港年輕視光專才",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20211213_Chi_Final.pdf",
    ext_date: "2021-12-13 00:00:00",
  },
  {
    id: "96",
    title: "希瑪眼科聯盟愛康健齒科，共同打造灣區醫療大健康合作新標杆",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20210903_Chi_Final.pdf",
    ext_date: "2021-09-03 00:00:00",
  },
  {
    id: "97",
    title: "希瑪眼科成立合資公司啟動OK鏡研發及內地註冊",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20210826_Chi_Final.pdf",
    ext_date: "2021-08-26 00:00:00",
  },
  {
    id: "98",
    title: "「希瑪香港中西腫瘤中心」正式成立並將於2021年9月開始提供服務",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20210823_Chi_Final.pdf",
    ext_date: "2021-08-23 00:00:00",
  },
  {
    id: "99",
    title:
      "希瑪眼科落實進入佛山、東莞、福州和揭陽 在短期內爲居民提供優質的眼科醫療服務 目標在6至9個月內陸續開業",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20210818_Chi_Final.pdf",
    ext_date: "2021-08-13 00:00:00",
  },
  {
    id: "100",
    title:
      "希瑪眼科2020年業績較去年增長21.4%， 公司發展迅速。香港業務擴展至其他專科， 內地今年將於大灣區新開兩間眼科醫院。",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20210331_Chi_Final.pdf",
    ext_date: "2021-03-13 00:00:00",
  },
  {
    id: "101",
    title: "希瑪眼科2020第二季總收入V型反彈，七、八月保持良好恢復勢頭。",
    ext_uploadFile:
      "https://admin.cmereye.com/wp-content/uploads/2022/07/20200828_Chi_Final.pdf",
    ext_date: "2020-08-28 00:00:00",
  },
]);

const optionsData = ref("年 份");
const options = [
  {
    label: "2024",
    value: "2024",
  },
  {
    label: "2023",
    value: "2023",
  },
  {
    label: "2022",
    value: "2022",
  },
  {
    label: "2021",
    value: "2021",
  },
  {
    label: "2020",
    value: "2020",
  },
];
const clear = async () => {
  optionsData.value = "年 份";
  data.value = JSON.parse(sessionStorage.getItem("newsListCn") || "");
};
const handleChange = (value: any) => {
  data.value = JSON.parse(sessionStorage.getItem("newsListCn") || "");
  let selecedItem = data.value.filter((item: any) => {
    let year2: any = item.ext_date.split(" ")[0].split("-")[0];
    if (value === year2) {
      return item;
    }
  });
  data.value = selecedItem;
};
</script>

<template>
  <div class="news">
    <div class="news-title">
      <div>{{ todayYear }}</div>
      <div>
        <client-only>
          <el-select
            v-model="optionsData"
            placeholder="年 份"
            size="large"
            style="width: 140px"
            @change="handleChange"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </client-only>
        <div class="title-btn" @click="clear">清 除</div>
        <!-- <el-button type="primary"
          ><span class="title-btn" @click="clear()">清除</span></el-button
        > -->
      </div>
    </div>
    <div v-for="item in data" :key="item.id" class="news-list">
      <div>{{ item.ext_date.split(" ")[0] }}</div>
      <div>
        <a
          :href="`https:///admin.hkcmereye.com${item.ext_uploadFile}`"
          target="_blank"
          >{{ item.title }}</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .news {
    max-width: 1140px;
    margin: 100px auto;
  }
  .news-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    margin-bottom: 40px;
    & > div:nth-child(1) {
      line-height: 2;
      letter-spacing: 0.1em;
      font-family: "Noto Sans CJK TC", serif;
      font-size: 16px;
      color: #51a8dd;
      text-decoration: underline;
    }
    & > div:nth-child(2) {
      display: flex;
      & > div:nth-child(2) {
        margin-left: 10px;
        color: #fff;
        background: #007bff;
        padding: 5px 10px;
        line-height: 2;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }

  .news-list {
    margin-bottom: 15px;
    display: flex;
    padding: 15px 0;
    border: 1px solid #c4c4c4;
    & > div:nth-child(1) {
      flex: 1;
      min-width: 160px;
      padding: 10px 0;
      padding-left: 1.5rem;
      padding-right: 2rem;
      color: #51a8dd;
      font-weight: 700;
      font-size: 18px;
      border-right: 2px solid #c4c4c4;
      display: flex;
      align-items: center;
    }
    & > div:nth-child(2) {
      position: relative;
      flex: 8;
      padding: 10px 0;
      padding-left: 1.5rem;
      padding-right: 2rem;
      & > a {
        font-size: 16px;
        line-height: 2;
        letter-spacing: 0.2em;
        font-family: "Noto Sans CJK TC", serif;
      }
    }
    & > div:nth-child(2)::after {
      position: absolute;
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-top: 1px solid;
      border-right: 1px solid;
      top: 50%;
      right: 0;
      transform: translateY(-50%) translateX(-250%) rotate(45deg);
    }
  }
}
@media screen and (max-width: 767px) {
  .news {
    padding: 30px 15px;
  }
  .news-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    margin-bottom: 40px;
    & > div:nth-child(1) {
      line-height: 2;
      letter-spacing: 0.1em;
      font-family: "Noto Sans CJK TC", serif;
      font-size: 16px;
      color: #51a8dd;
      text-decoration: underline;
    }
    & > div:nth-child(2) {
      display: flex;
      & > div:nth-child(2) {
        margin-left: 10px;
        color: #fff;
        background: #007bff;
        padding: 5px 10px;
        line-height: 2;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }

  .news-list {
    margin-bottom: 15px;
    display: flex;
    padding: 15px 0;
    border: 1px solid #c4c4c4;
    & > div:nth-child(1) {
      flex: 1;
      min-width: 100px;
      padding: 10px 8px;
      color: #51a8dd;
      font-weight: 700;
      font-size: 16px;
      border-right: 2px solid #c4c4c4;
      display: flex;
      align-items: center;
      font-family: "NotoSansTCThin";
    }
    & > div:nth-child(2) {
      position: relative;
      flex: 8;
      padding: 10px 16px 10px 8px;
      & > a {
        font-size: 16px;
        line-height: 1.6;
        letter-spacing: 0.1em;
        font-family: "Noto Sans CJK TC", serif;
      }
    }
    & > div:nth-child(2)::after {
      position: absolute;
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-top: 1px solid;
      border-right: 1px solid;
      top: 50%;
      right: 0;
      transform: translateY(-50%) translateX(-90%) rotate(45deg);
    }
  }
}
</style>