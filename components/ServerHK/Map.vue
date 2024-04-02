<script setup lang='ts'>
const language = useLanguage();
</script>
<template>
  <div class="map">
    <div class="map_container">
      <div class="point_eye_area">
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye" id="map-1"></div>
        <div class="point point_eye"></div>
      </div>
      <div class="point_tooth_area">
        <div class="point point_tooth"></div>
        <div class="point point_tooth"></div>
        <div class="point point_tooth"></div>
        <div class="point point_tooth"></div>
        <div class="point point_tooth"></div>
        <div class="point point_tooth"></div>
      </div>
      <div class="point_poly_area">
        <div class="point point_poly" id="map-2"></div>
      </div>
      <div class="point_html">
        <div
          variant="primary"
          class="text-center map-2"
          id="map-22"
          target="map-2"
          placement="top"
        >
          <img src="../../assets/img/map_k11.jpg" alt="" srcset="" />
          <p class="text-lg mt-3 text-center">
            {{
              language == "hk"
                ? "愛瑪醫美 - K11店"
                : language == "cn"
                ? "爱玛医美 - K11店"
                : "AMER Medical Aesthetics - k11"
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .map {
    max-width: 1140px;
    margin: 0 auto;
  }
  .map_container {
    position: relative;
    background: url("../../assets/img/service_hk_bg.jpg") no-repeat;
    background-size: cover;
    width: 1110px;
    height: 979px;
    .point_eye_area {
      .point_eye:nth-child(1) {
        top: 20.7%;
        left: 29.8%;
      }
      .point_eye:nth-child(2) {
        top: 23.4%;
        left: 34.7%;
      }
      .point_eye:nth-child(3) {
        top: 30.6%;
        left: 45.3%;
      }
      .point_eye:nth-child(4) {
        top: 24.3%;
        left: 57%;
      }
      .point_eye:nth-child(5) {
        top: 37.8%;
        left: 61.5%;
      }
      .point_eye:nth-child(6) {
        top: 43.2%;
        left: 59.7%;
      }
      .point_eye:nth-child(7) {
        top: 62%;
        left: 56.7%;
      }
      .point_eye:nth-child(8) {
        top: 62.5%;
        left: 53.1%;
      }
      .point_eye:nth-child(9) {
        top: 62%;
        left: 50.5%;
      }
    }

    .point_tooth:nth-child(1) {
      top: 300px;
      left: 610px;
    }
    .point_tooth:nth-child(2) {
      top: 500px;
      left: 630px;
    }
    .point_tooth:nth-child(3) {
      top: 640px;
      left: 670px;
    }
    .point_tooth:nth-child(4) {
      top: 650px;
      left: 680px;
    }
    .point_tooth:nth-child(5) {
      top: 480px;
      left: 750px;
    }
    .point_tooth:nth-child(6) {
      top: 520px;
      left: 780px;
    }
    .point_poly:nth-child(1) {
      top: 520px;
      left: 665px;
    }
  }
  .point {
    position: absolute;
    content: "";
    z-index: 10;
    background: url(../../assets/img/map_point.svg);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
    filter: drop-shadow(0px 0px 4.77472px rgba(0, 92, 175, 0.6));
    transition: all 0.3s ease;
  }
  .point::before {
    background: url(../../assets/img/map_point_eye.svg);
    position: absolute;
    content: "";
    width: 23px;
    height: 23px;
    background-size: 100% auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }
  .point_tooth::before {
    background: url(../../assets/img/map_point_tooth.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -6px;
    left: -1px;
  }
  .point_poly {
    background: url(../../assets/img/map_gold_point.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -10px;
  }
  .point_poly::before {
    background: url(../../assets/img/map_point_woman.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -10px;
  }
  .point:hover {
    transform: scale(2.2) translateY(-20px);
    cursor: pointer;
    z-index: 99;
    background: url(../../assets/img/map_dark_point.svg);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .point_html {
    background: #fff;
    display: none;
    text-align: center;
    background: linear-gradient(110.25deg, #d6bd7d 5.86%, #846232 100%);
    p {
      padding: 15px 0;
      color: #fff;
    }
  }
  .point_poly_area:hover ~ .point_html {
    display: block;
    top: 280px;
    left: 565px;
    position: absolute;
    z-index: 99;
  }
}
@media screen and (max-width: 767px) {
  .map {
    padding: 0 20px;
  }
  .map_container {
    position: relative;
    background: url("../../assets/img/service_hk_bg.jpg") no-repeat;
    width: 360px;
    height: 318px;
    background-size: cover;
  }
  .point {
    width: 7vw;
    height: 7vw;
    position: absolute;
    content: "";
    z-index: 10;
    background: url(../../assets/img/map_point.svg);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0px 0px 4.77472px rgba(0, 92, 175, 0.6));
    transition: all 0.3s ease;
  }
  .point::before {
    width: 3.3vw;
    height: 3.3vw;
    background: url(../../assets/img/map_point_eye.svg);
    position: absolute;
    content: "";
    background-size: 100% auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }
  .point_poly {
    background: url(../../assets/img/map_gold_point.svg);
    background-position: center;
    background-size: auto 100% !important ;
    background-repeat: no-repeat;
    top: -10px;
  }
  .point.point_poly::before {
    background: url(../../assets/img/map_point_woman.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -3px;
  }
  .point_eye_area {
    .point_eye:nth-child(1) {
      top: 20.7%;
      left: 29.8%;
    }
    .point_eye:nth-child(2) {
      top: 23.4%;
      left: 34.7%;
    }
    .point_eye:nth-child(3) {
      top: 30.6%;
      left: 45.3%;
    }
    .point_eye:nth-child(4) {
      top: 24.3%;
      left: 57%;
    }
    .point_eye:nth-child(5) {
      top: 37.8%;
      left: 61.5%;
    }
    .point_eye:nth-child(6) {
      top: 43.2%;
      left: 59.7%;
    }
    .point_eye:nth-child(7) {
      top: 62%;
      left: 56.7%;
    }
    .point_eye:nth-child(8) {
      top: 62.5%;
      left: 53.1%;
    }
    .point_eye:nth-child(9) {
      top: 62%;
      left: 50.5%;
    }
  }

  .point_tooth_area {
    .point_tooth:nth-child(1) {
      top: 27%;
      left: 55%;
    }
    .point_tooth:nth-child(2) {
      top: 45%;
      left: 56.7%;
    }
    .point_tooth:nth-child(3) {
      top: 64.6%;
      left: 60.3%;
    }
    .point_tooth:nth-child(4) {
      top: 65.5%;
      left: 61.2%;
    }
    .point_tooth:nth-child(5) {
      top: 43.2%;
      left: 67.5%;
    }
    .point_tooth:nth-child(6) {
      top: 46.8%;
      left: 70.2%;
    }
  }
  .point_poly_area {
    .point_poly:nth-child(1) {
      top: 46.8%;
      left: 60%;
    }
  }
  .point_html {
    display: none;
  }
}
</style>