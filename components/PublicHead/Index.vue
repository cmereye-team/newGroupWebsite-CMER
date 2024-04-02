<template>
  <div class="public-head">
    <PublicHeadLeftPage />
    <PublicHeadRightPage class="public-head-right" />
  </div>
</template>
<style scoped lang="scss">
.public-head {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  background: #ffffffbf;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .public-head {
    position: relative;
    background: #ffffffbf;
  }
  .public-head-right {
    position: absolute;
    width: 100%;
    left: 0;
  }
} 
</style>