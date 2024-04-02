<script lang="ts" setup>
const directorList = [
  {
    id: 1,
    name: "林順潮醫生",
    title: "董事會主席、行政總裁兼執行董事",
  },
  {
    id: 2,
    name: "歐陽伯權博士",
    title: "董事會副主席兼獨立非執行董事",
  },
  {
    id: 3,
    name: "李肖婷女士",
    title: "執行董事",
  },
  {
    id: 4,
    name: "李佑榮醫生",
    title: "執行董事兼香港業務總監",
  },
  {
    id: 5,
    name: "馬照祥先生",
    title: "獨立非執行董事",
  },
  {
    id: 6,
    name: "葉澍堃先生",
    title: "獨立非執行董事",
  },
  {
    id: 7,
    name: "殷可先生",
    title: "獨立非執行董事",
  },
];
</script>

<template>
  <div class="document">
    <div class="document-header" v-for="item in directorList" :key="item.id">
      <div class="document-name">{{ item.name }}</div>
      <div class="document-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .document {
    max-width: 1140px;
    margin: 100px auto;
  }
  .document-header {
    margin-bottom: 56px;
  }
  .document-name {
    text-align: center;
    margin-bottom: 8px;
    font-size: 20px;
    color: #005caf;
    font-weight: 100;
  }
  .document-title {
    text-align: center;
    font-size: 18px;
    color: #707070;
    font-weight: 100;
  }
}
@media screen and (max-width: 767px) {
  .document {
    padding: 30px 20px;
    margin-top: 60px;
  }
  .document-header {
    margin-bottom: 56px;
  }
  .document-name {
    text-align: center;
    margin-bottom: 8px;
    font-size: 18px;
    color: #005caf;
    font-weight: 100;
  }
  .document-title {
    text-align: center;
    font-size: 18px;
    color: #707070;
    font-weight: 100;
  }
}
</style>