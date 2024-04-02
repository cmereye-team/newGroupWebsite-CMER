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
      <div>About C-MER</div>
      <div>
        Founded by Dr. LAM Shun Chiu Dennis in Hong Kong in 2012, C-MER is a
        leading ophthalmic service group in Hong Kong and the Guangdong-Hong
        Kong-Macao Greater Bay Area (“GBA”), and successfully listed on The Main
        Board of the Stock Exchange of Hong Kong in 2018. From 2021, the Group
        leverages its growing reputation and increasing scale to progressively
        expanded into other specialty services including dentistry, plastic
        surgery/medical aesthetics, family medicine and oncology. C-MER
        currently owns 70 medical facilities, with its footprint covering Hong
        Kong, a number of major cities including Shenzhen and Guangzhou in the
        GBA, Beijing and Shanghai, etc. Guided by its “patient-centered”
        philosophy, C-MER is committed to providing professional, quality,
        convenient and affordable medical services.
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
      letter-spacing: 0.1em;
      font-family: "NotoSansTCLight";
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
      font-size: 24px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      letter-spacing: 0.1em;
      font-family: 'arial'
    }
    & > div:nth-child(2) {
      font-size: 18px;
      line-height: 200%;
      color: #fff;
      padding-top: 40px;
      position: relative;
      letter-spacing: 0.1em;
      font-family: 'arial'
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