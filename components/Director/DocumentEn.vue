<script lang="ts" setup>
const directorList = [
  {
    id: 1,
    name: "Dr. LAM Shun Chiu Dennis",
    title: "Chairman of the Board, Chief Executive Officer and Executive Director",
  },
  {
    id: 2,
    name: "Dr. Rex AUYEUNG Pak-kuen",
    title: "Vice Chairman of the Board and Independent Non-executive Director",
  },
  {
    id: 3,
    name: "Ms. LI Xiaoting",
    title: "Executive Director",
  },
  {
    id: 4,
    name: "Dr. LEE Yau Wing Vincent",
    title: "Executive Director and Head of Hong Kong Operation",
  },
  {
    id: 5,
    name: "Mr. MA Andrew Chiu Cheung",
    title: "Independent Non-executive Director",
  },
  {
    id: 6,
    name: "Mr. IP Shu Kwan Stephen",
    title: "Independent Non-executive Director",
  },
  {
    id: 7,
    name: "Mr. YIN Ke",
    title: "Independent Non-executive Director",
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