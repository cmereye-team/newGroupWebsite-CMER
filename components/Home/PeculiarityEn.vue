<template>
  <div class="Peculiarity">
    <div></div>
    <div>Our uniqueness</div>
    <div class="Peculiarity_list">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/03/382382b00c3fe700.png"
            alt="70 medical facilities"
          />
        </div>
        <div><span>70 medical facilities</span></div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/03/f55b0ecabd05e80a.png"
            alt="11 hospitals in Mainland China"
          />
        </div>
        <div><span>11 hospitals in Mainland China</span></div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/03/58e62966c795736c.png"
            alt="Network coverage in 10 cities"
          />
        </div>
        <div><span>Network coverage in 10 cities</span></div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/03/c7e78a96721e3a72.png"
            alt=">1,000 healthcare professionals"
          />
        </div>
        <div><span>>1,000 healthcare professionals</span></div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/03/aa2f261109907784.png"
            alt="Hong Kong main board-listed company"
          />
        </div>
        <div><span>Hong Kong main board-listed company</span></div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/03/733236cdc33d086f.png"
            alt="Medical group founded and managed by medical practitioners"
          />
        </div>
        <div><span>Medical group founded and managed by medical practitioners</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .Peculiarity {
    background: #c4c4c41a;
    position: relative;
    width: 100%;
    padding: 130px 0;
  }
  .Peculiarity > div:nth-child(1) {
    position: absolute;
    content: "";
    right: -200px;
    width: 372px;
    height: 372px;
    top: 100px;
    border: 31px solid #fff;
    box-sizing: border-box;
    transform: rotate(45deg);
    transition: all 0.3s ease-in;
    border-radius: 50%;
  }
  .Peculiarity > div:nth-child(1):hover {
    transform: rotate(135deg);
    border-radius: 0;
    opacity: 0.3;
  }
  .Peculiarity > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0.1em;
    margin-bottom: 32px;
  }
  .Peculiarity_list {
    display: grid;
    grid-template-rows: auto auto; /* 两行，自动高度 */
    grid-template-columns: auto auto auto; /* 三列，每列平均分配剩余空间 */
    justify-content: center;
    grid-gap: 0;
  }
  .Peculiarity_list > div {
    width: 17.6vw;
    height: 17.6vw;
    background: #fff;
    border: 1px solid #e5e5e5;
    margin-right: -1px;
    margin-bottom: -1px;
    transition: all 0.3s ease-in;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > div:nth-child(1) {
      width: 150px;
      height: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }
    & > div:nth-child(2) {
      text-align: center;
      span {
        color: #6b7280;
        font-size: 20px;
      }
    }
  }
  .Peculiarity_list {
    & > div:hover {
      box-shadow: 7px 7px 0 #5ab9ea;
      transform: translate(-7px, -7px);
    }
    & > div::after {
      position: absolute;
      z-index: 5;
      font-family: fantasy;
      font-style: normal;
      font-weight: 900;
      font-size: 11vw;
      color: #51a8dd;
      opacity: 0.2;
      line-height: 1;
    }
    & > div:nth-child(1)::after {
      content: "70";
      top: 0;
      left: 3px;
    }
    & > div:nth-child(2)::after {
      content: "11";
      bottom: 0;
      left: -14px;
    }
    & > div:nth-child(3)::after {
      content: "10";
      top: 0;
      right: -14px;
    }
    & > div:nth-child(4)::after {
      content: "1000";
      bottom: 70px;
      font-size: 8vw;
    }
  }
}
@media screen and (max-width: 768px) {
  .Peculiarity {
    background: #c4c4c41a;
    position: relative;
    width: 100%;
    padding: 130px 15px;
  }

  .Peculiarity > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0.5em;
    margin-bottom: 32px;
  }
  .Peculiarity_list {
    display: grid;
    grid-template-rows: auto auto auto; /* 两行，自动高度 */
    grid-template-columns: auto auto; /* 三列，每列平均分配剩余空间 */
    justify-content: center;
    grid-gap: 0 ;
  }
  .Peculiarity_list > div {
    // width: 100%;
    // height: 17.6vw;
    max-width: 174px;
    box-sizing: border-box;
    padding-bottom: 10px;
    background: #fff;
    border: 1px solid #e5e5e5;
    margin-right: -1px;
    margin-bottom: -1px;
    transition: all 0.3s ease-in;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > div:nth-child(1) {
      width: 150px;
      height: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      &>img {
        width: 50%;
        margin: auto;
      }
    }
    & > div:nth-child(2) {
      box-sizing: border-box;
      padding: 0 20px;
      text-align: center;
      span {
        color: #6b7280;
        font-size: 16px;
      }
    }
  }
  .Peculiarity_list {
    & > div:hover {
      box-shadow: 7px 7px 0 #5ab9ea;
      transform: translate(-7px, -7px);
    }
    & > div::after {
      position: absolute;
      z-index: 5;
      font-family: fantasy;
      font-style: normal;
      font-weight: 900;
      font-size: 20vw;
      color: #51a8dd;
      opacity: 0.2;
      line-height: 1;
    }
    & > div:nth-child(1)::after {
      content: "70";
      top: 0;
      left: 3px;
    }
    & > div:nth-child(2)::after {
      content: "11";
      bottom: 0;
      left: 14px;
    }
    & > div:nth-child(3)::after {
      content: "11";
      top: 0;
      right: 14px;
    }
    & > div:nth-child(4)::after {
      content: "1000";
      bottom: 40px;
      font-size: 16vw;
    }
  }
}
</style>