<script lang="ts"setup>
const activeIndex = ref("1");
import { hk, cn, en } from "~/assets/routerData/router.js";

const language = useLanguage();
onMounted(() => {
  handleChange(language.value);
});

let doctorObjs = {
  hk,
  cn,
  en,
};
const route = useRoute();
const router = useRouter();
const handleChange = (v: string) => {
  language.value = v;
  setLocal();

  if (language.value == "cn") {
    menuList.value = doctorObjs.cn;
  } else if (language.value == "en") {
    menuList.value = doctorObjs.en;
  } else {
    menuList.value = doctorObjs.hk;
  }

  if (route.path !== "/") {
    let path = route.path.split("/")[2];
    router.push(`/${v}/${path}`);
  }
};

const menuList: any = ref([]);

const optionsLang = [
  { id: 1, value: "hk", label: "繁體中文" },
  { id: 2, value: "cn", label: "简体中文" },
  { id: 3, value: "en", label: "English" },
];

// 监测屏幕宽度
const isPc = ref(false);
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
  window.addEventListener("beforeunload", getScreenWidth);
});
const isShowMenu = ref(false);
const mobileMenu = () => {
  isShowMenu.value = !isShowMenu.value;
};
const blankBg = () => {
  isShowMenu.value = !isShowMenu.value;
};
const handleSelect = (key: string, keyPath: string[]) => {
  isShowMenu.value = !isShowMenu.value;
};
</script>

<template>
  <div class="right-header">
    <div
      :class="[isShowMenu ? 'close-menu' : 'mobile-menu']"
      @click="mobileMenu()"
    >
      <i></i><i></i><i></i>
    </div>
    <div class="pcShowMenu">
      <client-only>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-sub-menu
            v-for="(item, index) in menuList"
            :key="index"
            :index="item.id"
          >
            <template #title>
              <div :class="[language == 'en' ? 'title-name-en' : 'title-name']">
                {{ item.name }}
              </div>
            </template>
            <el-menu-item
              v-for="(subItem, subIndex) in item.menuChild"
              :key="subIndex"
              :index="`${item.id}-${subItem.id}`"
            >
              <nuxt-link
                :to="subItem.path"
                class="sub-item-link"
                :class="[language == 'en' ? 'sub-item-link-en' : '']"
                >{{ subItem.name }}</nuxt-link
              >
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="6" v-if="language == 'hk'"
            ><nuxt-link to="/hk/contact" class="head_btn"
              ><div class="head_btn_text">聯絡我們</div></nuxt-link
            ></el-menu-item
          >
          <el-menu-item index="6" v-else-if="language == 'cn'"
            ><nuxt-link to="/cn/contact" class="head_btn"
              ><div class="head_btn_text">联系我们</div></nuxt-link
            ></el-menu-item
          >
          <el-menu-item index="6" v-else
            ><nuxt-link to="/en/contact" class="head_btn"
              ><div class="head_btn_text head_btn_text-en">
                Contact us
              </div></nuxt-link
            ></el-menu-item
          >
          <el-sub-menu index="7">
            <template #title>
              <span class="iconfont icon-guojihua"></span>
            </template>
            <el-menu-item
              v-for="item in optionsLang"
              :index="`7-${item.id}`"
              @click="handleChange(item.value)"
              :key="item.id"
              ><span>{{ item.label }}</span></el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </client-only>
    </div>
    <div
      class="mobile-menu-right mobileShowMenu"
      :class="[isShowMenu ? 'menu-bg' : 'close-menu-bg']"
    >
      <client-only>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
          :close-on-click-outside="true"
          :unique-opened="true"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-sub-menu
            v-for="(item, index) in menuList"
            :key="index"
            :index="item.id"
          >
            <template #title>
              <div :class="[language == 'en' ? 'title-name-en' : 'title-name']">
                {{ item.name }}
              </div>
            </template>
            <el-menu-item
              v-for="(subItem, subIndex) in item.menuChild"
              :key="subIndex"
              :index="`${item.id}-${subItem.id}`"
            >
              <nuxt-link
                :to="subItem.path"
                class="sub-item-link"
                :class="[language == 'en' ? 'sub-item-link-en' : '']"
                >{{ subItem.name }}</nuxt-link
              >
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="6" v-if="language == 'hk'"
            ><nuxt-link to="/hk/contact" class="head_btn"
              ><div class="head_btn_text">聯絡我們</div></nuxt-link
            ></el-menu-item
          >
          <el-menu-item index="6" v-else-if="language == 'cn'"
            ><nuxt-link to="/cn/contact" class="head_btn"
              ><div class="head_btn_text">联系我们</div></nuxt-link
            ></el-menu-item
          >
          <el-menu-item index="6" v-else
            ><nuxt-link to="/en/contact" class="head_btn"
              ><div class="head_btn_text head_btn_text-en">
                Contact us
              </div></nuxt-link
            ></el-menu-item
          >
          <el-sub-menu index="7">
            <template #title>
              <span class="iconfont icon-guojihua"></span>
            </template>
            <el-menu-item
              v-for="item in optionsLang"
              :index="`7-${item.id}`"
              @click="handleChange(item.value)"
              :key="item.id"
              ><span>{{ item.label }}</span></el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </client-only>
    </div>
    <div
      :class="[isShowMenu ? 'menu-bg' : 'close-menu-bg']"
      @click="blankBg()"
    ></div>
  </div>
</template>
<style lang="scss"scoped>
@import url("/assets/font/iconfont.css");
@media screen and (min-width: 768px) {
  .mobileShowMenu {
    display: none;
  }
  .rightPage {
    display: flex;
    align-items: center;
    & > a {
      margin: 10px 20px;
    }
  }
  .subMenu {
    display: flex;
    flex-direction: column;
  }
  .head_btn {
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    border-radius: 38px;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.25em;
  }
  .head_btn_text {
    padding: 0 2rem;
    line-height: 2.3;
    color: #fff;
  }
  .head_btn_text-en {
    letter-spacing: 0.1em;
  }
  .sub-item-link {
    width: 100%;
    letter-spacing: 0.1em;
    padding: 5px 10px;
  }
  .sub-item-link-en {
    letter-spacing: 0em;
  }

  ::v-deep(.el-menu) {
    border: none;
  }
  .title-name {
    font-size: 18px;
    letter-spacing: 0.25em;
    color: #005caf;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    line-height: 22px;
  }
  .title-name-en {
    font-size: 18px;
    letter-spacing: 0.1em;
    color: #005caf;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    line-height: 22px;
  }
  ::v-deep(.el-menu--horizontal > .el-sub-menu .el-sub-menu__title) {
    font-size: 18px;
    letter-spacing: 0.25em;
    color: #005caf;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    line-height: 22px;
  }
  ::v-deep(.el-sub-menu__title i) {
    path {
      color: #005caf;
    }
  }
  ::v-deep(.el-sub-menu__title) {
    padding: 0;
  }
  ::v-deep(.el-menu:not(.el-menu--collapse) .el-sub-menu__title) {
    padding-right: 33px;
  }
  ::v-deep(.el-menu) {
    background: transparent;
  }
  ::v-deep(.el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover) {
    background: transparent;
    color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }
  ::v-deep(.el-menu-item:not(.is-disabled):hover) {
    background: transparent;
    & > a {
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    }
  }
  .mobile-menu {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .pcShowMenu {
    display: none;
  }
  .right-header {
    position: relative;
  }
  .menu-bg {
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #ffffffc9;
    margin-top: 30px;
  }
  .close-menu-bg {
    display: none;
  }
  .mobile-menu {
    position: absolute;
    z-index: 200;
    top: -12px;
    right: 16px;
    transition: all 0.3s;
    cursor: pointer;
    & > i {
      display: flex;
      flex-direction: column;
      width: 30px;
      height: 3px;
      background: #005caf;
      margin: 4px 0;
    }
  }
  .mobile-menu:hover {
    cursor: pointer;
  }
  .rightPage {
    display: none;
  }
  .mobile-menu-right {
    width: 100%;
    position: absolute;
    z-index: 500;
    background: transparent;
  }
  .head_btn {
    width: 100%;
  }
  .close-menu {
    position: absolute;
    z-index: 200;
    top: -12px;
    right: 16px;
    cursor: pointer;

    & > i:nth-child(2) {
      display: none;
    }
    & > i {
      transition: all 0.3s;
      display: flex;
      flex-direction: column;
      width: 30px;
      height: 3px;
      background: #005caf;
      margin: 4px 0;
    }
    & > i:nth-child(1) {
      transform: rotate(45deg) translateX(5px);
    }
    & > i:nth-child(3) {
      transform: rotate(-45deg) translateX(5px);
    }
  }
  .sub-item-link {
    width: 100%;
  }
  :deep(.el-menu) {
    background: #ffffff96;
  }
}
</style>