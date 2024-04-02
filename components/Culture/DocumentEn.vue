<template>
  <div class="document">
    <div>
      <h2>Our vision</h2>
      <p class="culture-title">Developing C-MER into a national brand of quality Hong Kong-style medical services.</p>
    </div>
    <div>
      <h2>Our mission</h2>
      <p class="culture-title">
        Capitalizing on the strengths of C-MER which combines the intrinsic advantages of Hong Kong’s medical services and strong brand reputation, the Group’ goal is to provide quality specialty medical services to residents in Hong Kong, the GBA and beyond on the Mainland by progressively expanding its scope of services from ophthalmology to multi-specialties.
      </p>
      <p class="culture-title">Our brand logo “C-MER” symbolizes our beliefs:</p>
      <p class="culture-text">
        “C”: Professional Clinical Services
      </p>
      <p class="culture-text">“M”:Modern Management</p>
      <p class="culture-text">「E」:Quality Education</p>
      <p class="culture-text">「R」:Pioneering Research</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .document {
    max-width: 1140px;
    margin: 100px auto;
  }
  h2 {
    font-size: 24px;
    line-height: 30px;
    border-bottom: 1px solid #005caf;
    padding-bottom: 10px;
    display: inline-block;
    margin-bottom: 24px;
  }
  .culture-title {
    color: grey;
    line-height: 2.5;
    font-size: 18px;
    margin-bottom: 24px;
    font-size: 100;
  }
  .culture-text {
    font-size: 18px;
    line-height: 2.5;
    font-size: 100;
  }
}
@media screen and (max-width: 767px) {
  .document {
    padding: 30px 15px;
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 3px;
    letter-spacing: 6px;
    display: inline-block;
    border-bottom: 1px solid #005caf;
    margin-bottom: 24px;
  }
  .culture-title {
    color: grey;
    line-height: 2.5;
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 24px;
  }
  .culture-text {
    line-height: 2.5;
    font-size: 16px;
    font-weight: 100;
  }
}
</style>