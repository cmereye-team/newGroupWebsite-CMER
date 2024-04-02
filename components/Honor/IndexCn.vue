<script lang="ts" setup>
let arr = ref([]);
const honorListCn = reactive([
  {
    id: 0,
    title: "",
    ext_awardsTime: "",
  },
]);
async function fetchData() {
  await fetch("https:///admin.hkcmereye.com/api.php/list/29")
    .then((response) => response.json())
    .then((data) => {
      // 清空数组
      honorListCn.splice(0, honorListCn.length);
      arr.value = data.data;
      arr.value.map((item:any) => {
        honorListCn.push({
          id: item.id,
          title: item.title,
          ext_awardsTime: JSON.parse(item.ext_awardsTime),
        });
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <div class="honor">
    <div class="honor-content">
      <p>
        希玛凭藉专业至上精神及优质服务，多年来赢得众多奖项，印证了我们的医疗名牌备受社会各界的认同。
      </p>
      <div>
        <div class="honor-title">
          <div>奖项</div>
          <div>主办机构</div>
        </div>
        <div v-for="item in honorListCn" :key="item.id">
          <div v-for="(ele, index) in item.ext_awardsTime" :key="index">
            <div class="honor-year">{{ ele.year }}</div>
            <div>
              <div v-for="(el, i) in ele.award" :key="i" class="honor-list">
                <div>
                  <div>{{ el.name }}</div>
                  <div>
                    <span v-for="(e, i) in el.nameList" :key="i">{{ e }}</span>
                  </div>
                </div>
                <div>
                  <div>{{ el.awardardingInstitution }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .honor {
    max-width: 1140px;
    margin: 100px auto;
  }
  .honor-content {
    p {
      text-align: center;
      font-size: 16px;
      line-height: 2;
      letter-spacing: 0.1em;
      padding-bottom: 40px;
    }
  }
  .honor-title {
    display: flex;
    background: #51a8dd;

    & > div {
      color: #fff;
      flex: 1;
      padding: 24px 12px;
      line-height: 30px;
      font-size: 20.4118px;
    }
  }
  .honor-list {
    display: flex;
    padding: 0 12px;
    & > div {
      flex: 1;
      padding: 12px;
      border-bottom: 1px solid #dee2e6;
      & > div:nth-child(1) {
        line-height: 2;
        letter-spacing: 0.1em;
        color: #005caf;
        font-size: 18px;
        font-weight: 100;
        font-family: "Noto Sans CJK TC";
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        & > span {
          line-height: 2;
          letter-spacing: 0.1em;
          color: #005caf;
          font-size: 18px;
          font-weight: 100;
          font-family: "Noto Sans CJK TC";
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        color: #212529;
      }
    }
  }
  .honor-year {
    padding: 52px 12px 36px;
    font-size: 20px;
    color: #51a8dd;
    letter-spacing: 3px;
    line-height: 1.5;
  }
}
@media screen and (max-width: 767px) {
  .honor {
    padding: 30px 15px;
  }
  .honor-content {
    p {
      text-align: center;
      font-size: 16px;
      line-height: 2;
      letter-spacing: 0.1em;
      padding-bottom: 40px;
    }
  }
  .honor-title {
    display: flex;
    background: #51a8dd;

    & > div {
      color: #fff;
      flex: 1;
      padding: 24px 12px;
      line-height: 30px;
      font-size: 20.4118px;
    }
  }
  .honor-list {
    display: flex;
    & > div {
      flex: 1;
      padding: 12px;
      border-bottom: 1px solid #dee2e6;
      & > div:nth-child(1) {
        line-height: 2;
        letter-spacing: 0.1em;
        color: #005caf;
        font-size: 16px;
        font-weight: 100;
        font-family: "Noto Sans CJK TC";
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        & > span {
          line-height: 2;
          letter-spacing: 0.1em;
          color: #005caf;
          font-size: 16px;
          font-weight: 100;
          font-family: "Noto Sans CJK TC";
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        color: #212529;
      }
    }
  }
  .honor-year {
    padding: 52px 12px 36px;
    font-size: 20px;
    color: #51a8dd;
    letter-spacing: 3px;
    line-height: 1.5;
  }
}
</style>