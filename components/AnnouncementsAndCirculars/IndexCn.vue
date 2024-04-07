<script lang="ts" setup>
let arr = ref([]);
const announcementsCn: any = reactive([
  {
    id: 0,
    title: "",
    ext_uploadFile: "",
    ext_date: "",
  },
]);
let data = ref([]);
const fetchData = async () => {
  await fetch("https:///admin.hkcmereye.com/api.php/list/14")
    .then((response) => response.json())
    .then((res) => {
      // 清空数组
      announcementsCn.splice(0, announcementsCn.length);
      arr.value = res.data;
      arr.value.map((item: any) => {
        announcementsCn.push({
          id: item.id,
          title: item.title,
          ext_uploadFile: item.ext_uploadFile,
          ext_date: item.ext_date.split(" ")[0],
        });
      });
      data.value = announcementsCn;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// 获取当前年
const todayYear = ref(0);
const getCurrentYear = () => {
  let date = new Date();
  todayYear.value = date.getFullYear();
};

onMounted(async () => {
  await fetchData();
  getCurrentYear();
});

const optionsData = ref("年 份");
const options = [
  {
    label: "2024",
    value: "2024",
  },
  {
    label: "历史数据",
    value: "history",
  },
];
const clear = async () => {
  optionsData.value = "年 份";
  history.value = false;
  fetchData();
  getCurrentYear();
};

const handleChange = async (value: any) => {
  await fetchData();
  todayYear.value = value;
  let selecedItem = data.value.filter((item: any) => {
    let year2: any = item.ext_date.split(" ")[0].split("-")[0];
    if (value === year2) {
      return item;
    }
  });
  if (selecedItem.length >= 1) {
    data.value = selecedItem;
    history.value = false;
  } else {
    history.value = true;
    data.value = [];
  }
};
const history = ref(false);
</script>

<template>
  <div class="news" v-if="!history">
    <div class="news-title">
      <div @click="clear()">{{ todayYear }}</div>
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
  <div v-else class="news-blak">
    <div @click="clear()" class="news-back">
      <div>返回</div>
    </div>
    <HistoryIndexCn />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .news {
    max-width: 1140px;
    margin: 100px auto;
  }
  .no-data {
    margin: 30px auto;
    & > p {
      text-align: center;
      font-size: 24px;
    }
  }
  .news-btn {
    display: flex;
    justify-content: center;
    & > div {
      cursor: pointer;
      padding: 5px 12px;
      font-size: 20px;
    }
    & > div:hover {
      box-shadow: #51a8dd 1px 1px 1px;
    }
  }
  .news-back {
    display: flex;
    margin-bottom: 30px;
    & > div {
      cursor: pointer;
      padding: 5px 12px;
      font-size: 20px;
    }
    & > div:hover {
      box-shadow: #51a8dd 1px 1px 1px;
    }
  }
  .news-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    & > div:nth-child(1) {
      cursor: pointer;
      line-height: 2;
      letter-spacing: 0.1em;
      font-family: "Noto Sans CJK TC", serif;
      font-size: 26px;
      color: #51a8dd;
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
  .no-data {
    margin: 30px auto;
    & > p {
      text-align: center;
      font-size: 24px;
    }
  }
  .news-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    & > div:nth-child(1) {
      cursor: pointer;
      line-height: 2;
      letter-spacing: 0.1em;
      font-family: "Noto Sans CJK TC", serif;
      font-size: 22px;
      color: #51a8dd;
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
  .news-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    & > div {
      cursor: pointer;
      padding: 5px 12px;
      font-size: 20px;
    }
    & > div:hover {
      box-shadow: #51a8dd 1px 1px 1px;
    }
  }
  .news-back {
    display: flex;
    margin-bottom: 30px;
    & > div {
      cursor: pointer;
      padding: 5px 12px;
      font-size: 20px;
    }
    & > div:hover {
      box-shadow: #51a8dd 1px 1px 1px;
    }
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