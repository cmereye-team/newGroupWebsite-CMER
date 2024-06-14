<script lang="ts" setup>
let arr = ref([]);
const awardsList: any = reactive([
  {
    id: 0,
    title: "",
    ext_uploadFile: "",
    ext_date: "",
  },
]);
async function fetchData() {
  await fetch("https://www.cmermedical.com/backend/api.php/list/17")
    .then((response) => response.json())
    .then((data) => {
      // 清空数组
      awardsList.splice(0, awardsList.length);
      arr.value = data.data;
      arr.value.map((item:any) => {
        awardsList.push({
          id: item.id,
          title: item.title,
          ext_uploadFile: getPath(item.ext_uploadFile),
        });
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
const getPath = (url: string) => {
  if (url.split('/')[1]&&url.split('.')[1]) {
    return  `https://www.cmermedical.com/backend${url}`;
  }else {
    return url.replace(/admin.cmereye.com/g, "cmereye.com");
  }
};
onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <div class="corporate">
    <div class="corporate-container">
      <div>
        <div>文件</div>
        <div>查看 / 下載</div>
      </div>
      <div v-for="item in awardsList" :key="item.id">
        <a :href="item.ext_uploadFile" target="_blank">{{ item.title }}</a>
        <a :href="item.ext_uploadFile" target="_blank">
          <svg
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="download"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            data-v-41be6633=""
            class="bi-download mx-auto b-icon bi"
          >
            <g data-v-41be6633="">
              <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
              ></path>
              <path
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .corporate {
    max-width: 1140px;
    margin: 100px auto;
  }
  .corporate-container {
    & > div {
      padding: 15px 30px;
      border: 1px solid #d3d3d3;
      color: #707070;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      & > a {
        font-size: 18px;
        color: #707070;
        font-family: "NotoSansTCLight";
      }
      & > a:hover {
        color: #0056b3;
        border-bottom: 1px solid;
      }
    }
    & > div:nth-child(1) {
      margin: 40px auto 24px;
      background: #51a8dd;
      & > div {
        color: #fff;
        font-size: 20px;
        letter-spacing: 3px;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .corporate {
    padding: 30px 15px;
  }
  .corporate-container {
    & > div {
      padding: 15px 30px;
      border: 1px solid #d3d3d3;
      color: #707070;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      & > a {
        font-size: 14px;
        color: #707070;
        font-family: "NotoSansTCLight";
      }
      & > a:hover {
        color: #0056b3;
        border-bottom: 1px solid;
      }
    }
    & > div:nth-child(1) {
      margin: 40px auto 24px;
      background: #51a8dd;
      & > div {
        color: #fff;
        font-size: 20px;
        letter-spacing: 3px;
      }
    }
  }
}
</style>