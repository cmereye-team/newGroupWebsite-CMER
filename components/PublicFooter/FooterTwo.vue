<script lang="ts" setup>
const language = useLanguage();
const mediaList = [
  {
    id: "1",
    name: "facebook",
    link: "https://www.facebook.com/cmermedical/",
    img: "icon-facebook",
  },
  {
    id: "2",
    name: "instagram",
    link: "https://www.instagram.com/cmermedical/",
    img: "icon-instagram",
  },
  {
    id: "3",
    name: "youtube",
    link: "https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg",
    img: "icon-YouTube",
  },
];
</script>

<template>
  <div class="FooterTwo">
    <div class="media">
      <a
        v-for="item in mediaList"
        :href="item.link"
        target="_blank"
        :key="item.id"
      >
        <span :class="`iconfont ${item.img}`"></span>
      </a>
    </div>
    <div class="copyright">
      <div v-if="language === 'hk'">
        <nuxt-link to="/hk/disclamer">私隱政策</nuxt-link>
        <nuxt-link to="/hk/statement">免責聲明</nuxt-link>
      </div>
      <div v-else-if="language === 'cn'">
        <nuxt-link to="/cn/disclamer">私隐政策</nuxt-link>
        <nuxt-link to="/cn/statement">免责声明</nuxt-link>
      </div>
      <div v-else>
        <nuxt-link to="/en/disclamer">Disclaimer</nuxt-link>
        <nuxt-link to="/en/statement">Statement</nuxt-link>
      </div>
      <div>© 2024 C-MER Medical Holdings Limited. All rights reserved.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("/assets/font/iconfont.css");

@media screen and (min-width: 768px) {
  .FooterTwo {
    display: flex;
  }
  .FooterTwo > div:nth-child(1) {
    flex: 2;
  }
  .FooterTwo > div:nth-child(2) {
    flex: 8;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .media {
    display: flex;
    a {
      margin-right: 15px;
      transition: all 0.3s ease;
      border-radius: 50%;
      overflow: hidden;
      display: block;
      width: 44px;
      height: auto;
    }
    a:hover {
      transform: rotateX(-15deg) rotateY(15deg) rotate(-15deg)
        translate(3px, -3px);
      box-shadow: 3px 3px 10px #d3d3d3;
      color: #0056b3;
    }
  }
  .iconfont {
    color: #fff;
    font-size: 44px;
  }
  .copyright {
    & > div:nth-child(1) {
      font-size: 18px;
      & > a {
        margin-left: 18px;
        font-size: 18px;
        color: #fff;
        font-family: "NotoSansTCLight";
      }
      & > a:hover {
        text-decoration: underline #0056b3;
        color: #0056b3;
      }
    }
    & > div:nth-child(2) {
      color: #fff;
      display: flex;
    }
  }
}
@media screen and (max-width: 768px) {
  .media {
    display: flex;
    a {
      margin-right: 15px;
      transition: all 0.3s ease;
      border-radius: 50%;
      overflow: hidden;
      display: block;
      width: 44px;
      height: auto;
    }
  }
  .iconfont {
    color: #fff;
    font-size: 44px;
  }
  .copyright {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & > div:nth-child(1) {
      font-size: 18px;
      & > a {
        margin-left: 18px;
        font-size: 16px;
        color: #fff;
        font-family: "NotoSansTCLight";
      }
      & > a:hover {
        text-decoration: underline #0056b3;
        color: #0056b3;
      }
    }
    & > div:nth-child(2) {
      margin-top: 5px;
      color: #fff;
      display: flex;
      font-size: 11px;
    }
  }
}
</style>