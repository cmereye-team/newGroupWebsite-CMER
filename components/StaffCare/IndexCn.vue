<script lang="ts" setup>
</script>

<template>
  <div class="staff">
    <div class="staff-document">
      <h2>人才为本 共同成长</h2>
      <p>
        希玛业务能够取得长足发展，实有赖全体员工坚守专业精神及热诚工作态度。我们的员工文化：
      </p>
      <h4>各显才能</h4>
      <p>
        希玛网罗不同学科的人才，令团队更多元创新，抱著以“病人为中心”的共同目标，为顾客提供度身订造的医疗服务。
      </p>
      <h4>共同成长</h4>
      <p>
        希玛用心栽培员工。我们重视员工的发展及培训，为新加入的医生及护士提供指导，帮助他们掌握崭新技术，熟悉公司的服务标准、政策及程序。
      </p>
      <h4>热诚投入</h4>
      <p>
        希玛相信我们的人才优势在于团队合作，对工作充满热诚和全情投入，更对美好生活满怀热情。我们致力为员工缔造开心工作环境，达致工作生活平衡及提升生产力。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .staff {
    max-width: 1140px;
    margin: 100px auto;
  }
  .staff-document {
    h2 {
      font-size: 24px;
      letter-spacing: 5px;
      border-bottom: 1px solid;
      display: inline-block;
      font-size: 300;
      padding-bottom: 5px;
      color: #005caf;
      font-family: "NotoSansTCLight";
    }
    P {
      margin: 8px 0 24px;
      color: #707070;
      font-size: 16px;
      letter-spacing: 0.2em;
    }
    h4 {
      font-family: "NotoSansTCThin";
      font-size: 24px;
      color: #005caf;
      letter-spacing: 0.1em;
    }
  }
}
@media screen and (max-width: 767px) {
  .staff {
    padding: 30px 15px;
  }
  .staff-document {
    h2 {
      font-size: 24px;
      letter-spacing: 5px;
      border-bottom: 1px solid;
      display: inline-block;
      font-size: 300;
      padding-bottom: 5px;
      color: #005caf;
      font-family: "NotoSansTCThin";
    }
    P {
      margin: 8px 0 24px;
      color: #707070;
      font-size: 16px;
      letter-spacing: 0.2em;
      font-family: "NotoSansTCLight";
    }
    h4 {
      font-family: "NotoSansTCThin";
      font-size: 24px;
      color: #005caf;
      letter-spacing: 0.1em;
    }
  }
}
</style>