<script lang="ts" setup>
const isPc = ref(false);
// 检测获取屏幕宽度
const getScreenWidth = () => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
};

onMounted(() => {
  window.addEventListener("resize", getScreenWidth);
  window.addEventListener("beforeunload", getScreenWidth);
});
</script>

<template>
  <div class="About">
    <div v-if="isPc">
      <img
        src="https://static.cmereye.com/imgs/2024/03/175b12df49b66592.jpg"
        alt="clinic"
      />
    </div>
    <div>
      <div>关于希玛</div>
      <div>
        希玛由林顺潮医生于2012年创立，是香港和大湾区领先的连锁眼科医疗集团，并于2018年成功在香港联合交易所主板上市。自2021年开始，希玛凭藉其超著声誉及规模效益，将集团业务逐步扩展至包括牙科、整型外科／医学美容、家庭医学和肿瘤科等多个专科服务。本集团现时于香港、深圳和广州等大湾区多个城市、北京和上海等地合共有70家医疗机构，秉承“以病人为中心”的理念，致力提供专业优质、便捷和价格合理的医疗服务。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .About {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 130px 0 250px;
    max-width: 1920px;
    margin: auto;
    position: relative;
  }
  .About::after {
    position: absolute;
    content: "";
    bottom: 15%;
    left: 0;
    right: 0;
    margin: auto;
    width: 21vw;
    height: 21vw;
    max-width: 395px;
    max-height: 395px;
    background: conic-gradient(
      from 133.66deg at 52.34%,
      at 54.52%,
      #51a8dd 0deg,
      #54aade 9deg,
      #85cefa 173.77deg,
      #51a8dd 1turn
    );
    background: conic-gradient(
      from 133.66deg at 52.34% 54.52%,
      #51a8dd 0deg,
      #54aade 9deg,
      #85cefa 173.77deg,
      #51a8dd 1turn
    );
    opacity: 0.2;
    border-radius: 50%;
    z-index: -1;
  }
  .About > div {
    width: 50%;
  }
  .About > div:nth-child(1) {
    & > img {
      width: 100%;
    }
  }
  .About > div:nth-child(2) {
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    padding: 120px 100px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:nth-child(1) {
      font-size: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      letter-spacing: 0.5em;
    }
    & > div:nth-child(2) {
      font-size: 18px;
      line-height: 200%;
      text-align: justify;
      letter-spacing: 0.2em;
      color: #fff;
      padding-top: 40px;
      position: relative;
    }
    & > div:nth-child(2)::before {
      position: absolute;
      top: -38px;
      left: 0;
      right: 0;
      margin: auto;
      content: "ABOUT";
      font-size: 90px;
      letter-spacing: 0.5em;
      color: #fff;
      line-height: 1;
      text-align: center;
      font-weight: 700;
      opacity: 0.1;
    }
  }
}
@media screen and (max-width: 768px) {
  .About {
    padding: 120px 30px;
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
  }

  .About > div {
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    // padding: 120px 100px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:nth-child(1) {
      font-size: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      letter-spacing: 0.5em;
    }
    & > div:nth-child(2) {
      font-size: 18px;
      line-height: 200%;
      text-align: justify;
      letter-spacing: 0.2em;
      color: #fff;
      padding-top: 40px;
      position: relative;
    }
    & > div:nth-child(2)::before {
      position: absolute;
      top: -38px;
      left: 0;
      right: 0;
      margin: auto;
      content: "ABOUT";
      font-size: 70px;
      letter-spacing: 0em;
      color: #fff;
      line-height: 1;
      text-align: center;
      font-weight: 700;
      opacity: 0.1;
    }
  }
}
</style>