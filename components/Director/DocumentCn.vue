<script lang="ts" setup>
const directorList = [
  {
    id: 1,
    name: "林顺潮医生",
    title: "董事会主席、行政总裁兼执行董事",
  },
  {
    id: 2,
    name: "欧阳伯权博士",
    title: "董事会副主席兼独立非执行董事",
  },
  {
    id: 3,
    name: "李肖婷女士",
    title: "执行董事",
  },
  {
    id: 4,
    name: "李佑荣医生",
    title: "执行董事兼香港业务总监",
  },
  {
    id: 5,
    name: "马照祥先生",
    title: "独立非执行董事",
  },
  {
    id: 6,
    name: "叶澍堃先生",
    title: "独立非执行董事",
  },
  {
    id: 7,
    name: "殷可先生",
    title: "独立非执行董事",
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