<script lang="ts" setup>
const foot_logo = [
  {
    pic: "https://static.cmereye.com/imgs/2024/02/1bd2d4c59dcf5230.jpg",
    link: "https://www.hkcmereye.com/",
  },
  {
    pic: "https://static.cmereye.com/imgs/2024/09/fa077d0476c6fb36.jpg",
    link: "https://smile.hkcmereye.com/",
  },
  {
    pic: "https://www.cmermedical.com/img/index_footlogo_10.jpg",
    link: "https://www.cmervision.com/",
  },
  {
    pic: "https://www.cmermedical.com/img/index_footlogo_3.png",
    link: "https://www.cmerdental.com/",
  },

  {
    pic: "https://www.cmermedical.com/img/zhongliu-logo.png",
    link: "https://www.cmeroncology.com/",
  },
  {
    pic: "https://www.cmermedical.com/img/index_footlogo_6.png",
    link: "https://championlasik.com/",
  },
  {
    pic: "https://www.cmermedical.com/img/index_footlogo_7.png",
    link: "http://optcentre.com/",
  },

  {
    pic: "https://www.cmermedical.com/img/amerkouq-logo.jpg",
    link: "http://www.ckj100.com/",
  },
  { pic: "https://www.cmermedical.com/img/index_footlogo_8.png", link: "" },
  { pic: "https://www.cmermedical.com/img/index_footlogo_9.png", link: "" },

  {
    pic: "https://www.cmermedical.com/img/amer-logo.svg",
    link: "https://www.ameraesthetics.com/",
  },
  {
    pic: "https://www.cmermedical.com/img/eon-dual-dark.jpg",
    link: "https://www.eonmedicalcentre.com/zh/%E9%97%9C%E6%96%BC%E9%A0%A4%E5%AE%89/",
  },

  // {
  //   pic: "https://www.cmermedical.com/img/index_footlogo_5.png",
  //   link: "https://www.healthhope.hk/",
  // },
  {
    pic: "https://www.cmermedical.com/img/HKCCR- NEW Logo.png",
    link: "https://www.hkccr.co/",
  },
];
</script>

<template>
  <div class="LogoWall">
    <div class="fang"></div>
    <div class="logo_box">
      <div v-for="(item, idx) in foot_logo" :key="idx">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <img :src="item.pic" alt="" srcset=""
        /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .LogoWall {
    padding: 130px 0;
    position: relative;
  }
  .logo_box {
    max-width: 1150px;
    margin: auto;
  }
  .logo_box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 20px 10px;
  }
  .logo_box > div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }
  .fang {
    position: absolute;
    content: "";
    left: -200px;
    width: 300px;
    height: 300px;
    bottom: 190px;
    margin: auto;
    border: 31px solid #51a8dd;
    box-sizing: border-box;
    transform: rotate(45deg);
    opacity: 0.3;
    transition: all 0.3s ease-in;
  }
  .fang:hover {
    transform: rotate(90deg);
    border-radius: 50%;
    border-color: #005caf;
  }
}
@media screen and (max-width: 767px) {
  .LogoWall {
    padding: 130px 15px;
    position: relative;
  }
  .logo_box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 20px 10px;
  }
  .logo_box > div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }
}
</style>