<template>
  <div class="Banner">
    <div class="content">
      <div>希<span>・</span>望见美好</div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2024/03/103a988ffb0bfda6.png"
          alt="our vision"
        />
      </div>
      <div>for a better</div>
      <div>FUTURE</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .Banner {
    background: url("https://static.cmereye.com/imgs/2024/03/699f44b399f589a3.jpg")
      no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: 100% 100%;
    position: relative;
  }
  .content {
    position: absolute;
    bottom: 50px;
    right: 50px;
    & > div:nth-child(1) {
      font-family: Roboto !important;
      font-style: normal;
      font-weight: 400;
      font-size: 26.6667px;
      line-height: 31px;
      letter-spacing: 1em;
      color: #fff;
      text-shadow: 0 5.33333px 5.33333px rgba(0, 0, 0, 0.25);
    }
    & > div:nth-child(3) {
      font-family: Avenir !important;
      font-style: normal;
      font-weight: 350;
      font-size: 57.3333px;
      line-height: 10px;
      color: #005caf;
      display: inline-block;
      vertical-align: super;
    }
    & > div:nth-child(4) {
      font-family: Avenir !important;
      font-style: normal;
      font-weight: 900;
      font-size: 66.6667px;
      line-height: 105px;
      color: #fff;
    }
  }
}
@media screen and (max-width: 767px) {
  .Banner {
    background: url("https://static.cmereye.com/imgs/2024/03/699f44b399f589a3.jpg")
      no-repeat;
    width: 100%;
    height: 60vh;
    background-size: cover;
    background-position: 70%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .content {
    position: absolute;
    bottom: 20px;
    right: 20px;
    & > div:nth-child(1) {
      font-family: Roboto !important;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 31px;
      letter-spacing: 1em;
      color: #fff;
      text-shadow: 0 5.33333px 5.33333px rgba(0, 0, 0, 0.25);
    }
    &>div:nth-child(2) {
      width: 172px;
      &>img {
        width: 100%;
      }
    }
    & > div:nth-child(3) {
      font-family: Avenir !important;
      font-style: normal;
      font-weight: 350;
      font-size: 14px;
      line-height: 10px;
      color: #005caf;
      display: inline-block;
      vertical-align: super;
    }
    & > div:nth-child(4) {
      font-family: Avenir !important;
      font-style: normal;
      font-weight: 900;
      font-size: 15px;
      line-height: 25px;
      color: #fff;
    }
  }
}
</style>