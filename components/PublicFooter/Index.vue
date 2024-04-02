<template>
  <div class="footer_box">
    <footer>
      <PublicFooterOne />
      <PublicFooterTwo />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .footer_box {
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    color: #fff;

  }
  footer {
    max-width: 1540px;
    margin: auto;
    padding: 130px 0;
  }
}
@media screen and (max-width: 767px) {
  .footer_box {
    background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd);
    color: #fff;
    padding: 80px 15px 20px;
  }
}
</style>