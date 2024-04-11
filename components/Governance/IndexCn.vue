<script lang="ts" setup>
let arr = ref([]);
const governanceList = reactive([
  {
    id: 0,
    acode: "cn",
    title: "",
    ext_uploadFile: "",
    ico: "",
  },
]);
const imgList = [
  "https://static.cmereye.com/imgs/2024/04/0378d37979770b4a.png",
  "https://static.cmereye.com/imgs/2024/04/aed485f604818390.png",
  "https://static.cmereye.com/imgs/2024/04/d51de1cd67045f52.jpg",
  "https://static.cmereye.com/imgs/2024/04/56dc9a3ff6512d6c.png",
  "https://static.cmereye.com/imgs/2024/04/5d7afd246fecbde6.jpg",
];
async function fetchData() {
  await fetch("https://cmereye.com/backend/api.php/list/26")
    .then((response) => response.json())
    .then((data) => {
      // 清空数组
      governanceList.splice(0, governanceList.length);
      arr.value = data.data;
      arr.value.map((item: any) => {
        governanceList.push({
          id: item.id,
          acode: item.acode,
          title: item.title,
          ext_uploadFile: `https://cmereye.com/backend/${item.ext_uploadFile}`,
          ico: `https://cmereye.com${item.ico}`,
        });
      });
      pageData(governanceList);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
const pageData = (governanceList: any[]) => {
  governanceList.forEach((item: any, index: number) => {
    item.ico = imgList[index];
  });
  if (governanceList.length % 2 !== 0) {
    // 在数组的第二个插入空
    governanceList.splice(1, 0, { id: 0, acode: "", title: "", ico: "" });
  }
};

onMounted(async () => {
  await fetchData();
  var screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    // 删除第二个元素
    governanceList.splice(1, 1);
  }
});
</script>

<template>
  <div class="governance">
    <div class="governance-list">
      <div v-for="item in governanceList" :key="item.id">
        <a :href="item.ext_uploadFile" target="_blank" v-if="item.title !== ''">
          <div class="book">
            <div class="back"></div>
            <div class="page6">
              <img
                src="https://static.cmereye.com/imgs/2024/03/f1720cb6453e5434.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="page5">
              <img
                src="https://static.cmereye.com/imgs/2024/03/b7915cb4ff677a8b.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="page4">
              <img
                src="https://static.cmereye.com/imgs/2024/03/b7915cb4ff677a8b.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="page3">
              <img
                src="https://static.cmereye.com/imgs/2024/03/f1720cb6453e5434.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="page2">
              <img
                src="https://static.cmereye.com/imgs/2024/03/f1720cb6453e5434.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="page1">
              <img
                src="https://static.cmereye.com/imgs/2024/03/b7915cb4ff677a8b.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="front">
              <img :src="item.ico" :alt="item.title" />
            </div>
          </div>
        </a>
        <div v-if="item.title !== ''">
          <div>{{ item.title }}</div>
          <a
            :href="item.ext_uploadFile"
            target="_blank"
            rel="noopener noreferrer"
            >{{ item.title.length <= 0 ? "" : "浏览" }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .governance {
    max-width: 1140px;
    margin: 100px auto;
  }
  .governance-list {
    display: grid;
    grid-template-rows: auto auto auto; /* 两行，自动高度 */
    grid-template-columns: auto auto; /* 三列，宽度根据内容自动调整 */
    grid-gap: 0 30px; /* 无间距 */
    & > div {
      margin-bottom: 160px;
      display: flex;
      & > div {
        flex: 1;
      }
      & > a {
        flex: 1;
      }
      & > a {
        width: 100%;
        & > img {
          width: 100%;
          position: relative;
          z-index: 2;
        }
        position: relative;
      }
      & > a:nth-child(1)::before {
        position: absolute;
        z-index: 2;
        content: "";
        width: 100%;
        height: 100%;
        top: 10px;
        left: 10px;
        background: #51a8dd;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 40px;
        & > div {
          font-size: 30px;
          font-weight: 700;
          line-height: 36px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #51a8dd;
        }
        & > a {
          text-align: right;
          color: #005caf;
          letter-spacing: 0.5em;
          font-weight: 300;
          font-size: 24px;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 30px;
          align-self: flex-end;
          border-bottom: 2px solid;
          position: relative;
        }
        & > a:hover {
          text-decoration: underline;
        }
        & > a::after {
          position: absolute;
          content: "";
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 9px;
          height: 24px;
          background-repeat: no-repeat;
          background: url(https://static.cmereye.com/imgs/2024/03/c0b865f5cfe959b5.jpg);
        }
      }
    }
  }
  .book {
    transform-style: preserve-3d;
    position: relative;
    height: auto;
    width: auto;
    max-width: 400px;
    max-height: 540px;
    cursor: pointer;
    backface-visibility: visible;
    z-index: 999;
  }

  .book::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #51a8dd;
    z-index: -1;
    right: -10px;
    bottom: -10px;
  }

  .book .front {
    position: relative;
  }

  .book .front img {
    display: block;
    width: 100%;
  }
  .book img {
    display: block;
    width: 100%;
  }
  .front,
  .back,
  .page1,
  .page2,
  .page3,
  .page4,
  .page5,
  .page6 {
    transform-style: preserve-3d;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: left center;
    transition: transform 0.5s ease-in-out, box-shadow 0.35s ease-in-out;
    z-index: 999;
  }

  .front,
  .back {
    background: rgb(90, 185, 234);
    overflow: hidden;
  }

  .front img,
  .back img {
    object-fit: cover;
  }

  .page1 {
    background: #efefef;
  }

  .page2 {
    background: #efefef;
  }

  .page3 {
    background: #f5f5f5;
  }

  .page4 {
    background: #f5f5f5;
  }

  .page5 {
    background: #fafafa;
  }

  .page6 {
    background: #fdfdfd;
  }

  .book:hover .front {
    transform: rotateY(-160deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book:hover .page1 {
    transform: rotateY(-150deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book:hover .page2 {
    transform: rotateY(-30deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book:hover .page3 {
    transform: rotateY(-140deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book:hover .page4 {
    transform: rotateY(-40deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book:hover .page5 {
    transform: rotateY(-130deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book:hover .page6 {
    transform: rotateY(-50deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book:hover .back {
    transform: rotateY(-20deg) scale(1.1);
  }
}
@media screen and (max-width: 767px) {
  .governance {
    padding: 30px 15px;
  }
  .governance-list {
    display: flex;
    flex-direction: column;
    & > div {
      margin-bottom: 40px;
      display: flex;
      & > div {
        flex: 1;
      }
      & > a {
        flex: 1;
        position: relative;
      }
      & > a:nth-child(1) {
        max-width: 165px;
        & > img {
          width: 100%;
          z-index: 5;
          position: relative;
        }
        position: relative;
      }
      & > a:nth-child(1)::before {
        position: absolute;
        z-index: 2;
        content: "";
        width: 100%;
        height: 100%;
        top: 10px;
        left: 10px;
        background: #51a8dd;
      }
      & > div:nth-child(2) {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > div {
          font-size: 24px;
          font-weight: 700;
          line-height: 36px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #51a8dd;
        }
        & > a {
          text-align: right;
          color: #005caf;
          letter-spacing: 0.5em;
          font-weight: 300;
          font-size: 14px;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 30px;
          align-self: flex-end;
          border-bottom: 2px solid;
          position: relative;
        }
        & > a:hover {
          text-decoration: underline;
        }
        & > a::after {
          position: absolute;
          content: "";
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 9px;
          height: 24px;
          background-repeat: no-repeat;
          background: url(https://static.cmereye.com/imgs/2024/03/c0b865f5cfe959b5.jpg);
        }
      }
    }
  }
  .back,
  .page1,
  .page2,
  .page3,
  .page4,
  .page5,
  .page6 {
    display: none;
  }
  .front {
    width: 165px;
    img {
      width: 100%;
      position: relative;
      z-index: 2;
    }
  }
}
</style>