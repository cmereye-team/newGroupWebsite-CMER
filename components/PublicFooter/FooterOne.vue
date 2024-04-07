<script lang="ts" setup>
const language = useLanguage();
const menuList = [
  {
    id: "1",
    name: "關於希瑪",
    path: "/hk/introduction",
  },
  {
    id: "2",
    name: "業務概覽",
    path: "/hk/service-hongkong",
  },
  {
    id: "3",
    name: "社會責任",
    path: "/hk/report-governance",
  },
  {
    id: "4",
    name: "新聞中心",
    path: "/hk/news-list",
  },
  {
    id: "5",
    name: "投資者關係",
    path: "/hk/investor-relationship",
  },
  {
    id: "6",
    name: "聯絡我們",
    path: "/hk/contact",
  },
];
const menuListEn = [
  {
    id: "1",
    name: "About C-MER",
    path: "/en/introduction",
  },
  {
    id: "2",
    name: "Business Milestones",
    path: "/en/service-hongkong",
  },
  {
    id: "3",
    name: "Social Responsibility",
    path: "/en/report-governance",
  },
  {
    id: "4",
    name: "Media Center",
    path: "/en/news-list",
  },
  {
    id: "5",
    name: "Investor Relations",
    path: "/en/investor-relationship",
  },
  {
    id: "6",
    name: "Contact Us",
    path: "/en/investor-relationship",
  },
];
const menuListCn = [
  {
    id: "1",
    name: "关于希玛",
    path: "/cn/introduction",
  },
  {
    id: "2",
    name: "业务概览",
    path: "/cn/service-hongkong",
  },
  {
    id: "3",
    name: "社会责任",
    path: "/cn/report-governance",
  },
  {
    id: "4",
    name: "新闻中心",
    path: "/cn/news-list",
  },
  {
    id: "5",
    name: "投资者关系",
    path: "/cn/investor-relationship",
  },
  {
    id: "6",
    name: "联络我们",
    path: "/cn/contact",
  },
];
const isPc = ref(false);
// 检测获取屏幕宽度
const getScreenWidth = () => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
};

onMounted(() => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
  window.addEventListener("resize", getScreenWidth);
  window.addEventListener("beforeunload", (event) => {
    getScreenWidth;
  });
});
</script>

<template>
  <div class="FooterOne">
    <div>
      <img
        v-if="language == 'hk'"
        src="https://static.cmereye.com/imgs/2024/03/fbb1a316f8856025.png"
        alt="logo-footer"
      />
      <img
        v-else-if="language == 'cn'"
        src="https://static.cmereye.com/imgs/2024/04/dacd69ad77efd8fb.png"
        alt="logo-footer"
      />
      <img
        v-else
        src="https://static.cmereye.com/imgs/2024/04/5c1a25bbb2f78524.png"
        alt="logo-footer"
      />
    </div>
    {{ isPc }}
    <div v-if="isPc">
      <nuxt-link
        v-for="item in language == 'hk'
          ? menuList
          : language == 'en'
          ? menuListEn
          : menuListCn"
        :to="item.path"
        :key="item.id"
        >{{ item.name }}</nuxt-link
      >
    </div>
  </div>
  <div class="footerOne_p">
    <p v-if="language == 'hk'">地址: 中環畢打街1-3號中建大廈1535室</p>
    <p v-else-if="language == 'cn'">地址: 中环毕打街1-3号中建大厦1535室</p>
    <p v-else class="en-address">
      Address:Suite 1535, Central Building, 1-3 Pedder Street, Central
    </p>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .FooterOne {
    display: flex;
    align-items: center;
  }
  .FooterOne > div:nth-child(1) {
    flex: 2;
    max-width: 372px;
    & > img {
      width: 100%;
    }
  }
  .FooterOne > div:nth-child(2) {
    flex: 8;
    display: flex;
    justify-content: flex-end;
    & > a {
      margin-left: 30px;
      font-size: 20px;
      color: #fff;
      font-weight: 300;
    }
    & > a:hover {
      text-decoration: underline #0056b3;
      color: #0056b3;
    }
  }
  p {
    color: #fff;
    line-height: 1.5rem;
    font-size: 18px;
  }
  .footerOne_p {
    margin-bottom: 48px;
  }
  .en-address {
    letter-spacing: 0.1em;
    font-size: 16px;
    padding-top: 5px;
    font-family: "NotoSansTCLight";
  }
}
@media screen and (max-width: 767px) {
  .FooterOne {
    & > div:nth-child(1) {
      & > img {
        max-width: 100%;
      }
    }
  }
  .footerOne_p {
    margin: 10px auto;
    p {
      letter-spacing: 0.1em;
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>