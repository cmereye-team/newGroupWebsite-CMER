<template>
  <div class="index">
    <div class="contact">
      <div class="contact-info">
        <div>
          <h4>地址:</h4>
          <p>中环毕打街1-3号中建大厦1535室</p>
        </div>
        <div>
          <h4>电邮：</h4>
          <p>
            <a href="mailto:info@hkcmer.com">info@hkcmer.com</a>
          </p>
        </div>
      </div>
      <div class="map">
        <a href="https://goo.gl/maps/DrV9huj8Xcf37heu8" target="_blank"
          ><img src="../../../assets/img/googlemap.svg" alt="" srcset=""
        /></a>
        <a class="ml-4" href="https://j.map.baidu.com/e7/6Wx" target="_blank"
          ><img src="../../../assets/img/baidumap.svg" alt="" srcset=""
        /></a>
      </div>
      <div class="fang"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .contact {
    width: 100%;
    height: 100vh;
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
  .contact-info {
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 50px 0;
      & > h4 {
        font-family: "arial";
        font-size: 20px;
        color: #fff;
        margin-bottom: 5px;
      }
      & > p,
      & > p > a {
        font-family: "arial";
        font-size: 16px;
        color: #fff;
      }
    }
  }
  .contact .map {
    position: absolute;
    bottom: 30px;
    right: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .contact .map img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
  }
  .contact .map a {
    transition: all 0.3s ease;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  .contact .map a:hover {
    transform: rotateX(-15deg) rotateY(15deg) rotateZ(-15deg)
      translate(3px, -3px);
    box-shadow: 3px 3px 10px lightgray;
  }
}
@media screen and (max-width: 767px) {
  .contact {
    width: 100%;
    height: 100vh;
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .contact-info {
    margin-bottom: 30px;
    padding: 0 20px;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 50px 0;
      & > h4 {
        font-family: "arial";
        font-size: 20px;
        color: #fff;
        margin-bottom: 5px;
        text-align: center;
      }
      & > p,
      & > p > a {
        font-family: "arial";
        font-size: 16px;
        color: #fff;
        text-align: center;
      }
    }
  }
  .map {
    display: flex;
    & > a {
      margin: 0 20px;
    }
  }
  .contact .map img {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    display: block;
  }
}
</style>