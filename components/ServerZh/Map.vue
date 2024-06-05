<script lang="ts" setup>
</script>

<template>
  <div class="map">
    <div class="map-container">
      <div class="point_eye_area">
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
        <div class="point point_eye"></div>
      </div>
      <div class="point_tooth_area">
        <div class="point point_tooth"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .map {
    max-width: 1140px;
    margin: 20px auto 40px;
  }
  .map-container {
    position: relative;
    background: url("../../assets/img/service_zh_bg.jpg") no-repeat;
    background-size: cover;
    width: 1024px;
    height: 855px;
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
  .point.point_tooth::before {
    background: url(../../assets/img/map_point_tooth.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -6px;
    left: -1px;
  }
  .point.point_poly {
    background: url(../../assets/img/map_gold_point.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -10px;
  }
  .point.point_poly::before {
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
  .point_eye_area {
    .point_eye:nth-child(1) {
      top: 290px;
      left: 705px;
    }
    .point_eye:nth-child(2) {
      top: 410px;
      left: 810px;
    }
    .point_eye:nth-child(3) {
      top: 670px;
      left: 455px;
    }
    .point_eye:nth-child(4) {
      top: 600px;
      left: 840px;
      filter: none;
      background: transparent;
    }
    .point_eye:nth-child(5) {
      top: 680px;
      left: 757px;
    }
    .point_eye:nth-child(6) {
      top: 660px;
      left: 723px;
    }
    .point_eye:nth-child(7) {
      top: 680px;
      left: 756px;
    }
    .point_eye:nth-child(8) {
      top: 690px;
      left: 690px;
    }
    .point_eye:nth-child(9) {
      top: 698px;
      left: 706px;
    }
  }
  .point_tooth_area {
    .point_tooth:nth-child(1) {
      top: 698px;
      left: 725px;
    }
  }
}
@media screen and (max-width: 767px) {
  .map {
    padding: 0 16px;
  }
  .map-container {
    position: relative;
    background: url("../../assets/img/service_zh_bg.jpg") no-repeat;
    background-size: cover;
    width: 100%;
    height: 300px;
    margin: 40px auto;
  }
  .point {
    position: absolute;
    content: "";
    z-index: 10;
    background: url(../../assets/img/map_point.svg);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 18px;
    height: 18px;
    filter: drop-shadow(0px 0px 4.77472px rgba(0, 92, 175, 0.6));
    transition: all 0.3s ease;
  }
  .point::before {
    background: url(../../assets/img/map_point_eye.svg);
    position: absolute;
    content: "";
    width: 7px;
    height: 7px;
    background-size: 100% auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }
  .point.point_tooth::before {
    background: url(../../assets/img/map_point_tooth.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -6px;
    left: -1px;
  }
  .point.point_poly {
    background: url(../../assets/img/map_gold_point.svg);
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: -10px;
  }
  .point.point_poly::before {
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
  .point_eye_area {
    .point_eye:nth-child(1) {
      top: 34%;
      left: 69.1%;
    }
    .point_eye:nth-child(2) {
      top: 47.4%;
      left: 79.1%;
    }
    .point_eye:nth-child(3) {
      top: 77%;
      left: 44.7%;
    }
    .point_eye:nth-child(4) {
      top: 70%;
      left: 82.4%;
      filter: none;
      background: transparent;
    }
    .point_eye:nth-child(5) {
      top: 79%;
      left: 74%;
    }
    .point_eye:nth-child(6) {
      top: 77.8%;
      left: 70.9%;
    }
    .point_eye:nth-child(7) {
      top: 80.8%;
      left: 70.9%;
    }
    .point_eye:nth-child(8) {
      top: 80.8%;
      left: 69.2%;
    }
    .point_eye:nth-child(9) {
      top: 78.8%;
      left: 70.2%;
    }
  }
  .point_tooth_area {
    .point_tooth:nth-child(1) {
      top: 81%;
      left: 70.9%;
    }
  }
}
</style>