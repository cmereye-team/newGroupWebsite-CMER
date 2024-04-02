<script lang="ts" setup>
</script>

<template>
  <div class="staff">
    <div class="staff-document">
      <h2>A people-centric workplace: together we grow</h2>
      <p>
        The remarkable achievement of C-MER is attributable to the professionalism and commitment of our staff team. Our work culture:
      </p>
      <h4>Talent</h4>
      <p>
        C-MER employs talents in multiple disciplines to ensure our team has the flexibility to think outside the box. Shared the common belief of patient centricity, we are dedicated to providing customized medical services for our patients.
      </p>
      <h4>Growth</h4>
      <p>
        C-MER invests in you. We value the development and training of our staff member and invest substantial resources in providing guidance to newly joined medical practitioners and nurses. They are empowered with new techniques and get familiar with the service standards, policies and procedures of the Company.
      </p>
      <h4>Commitment</h4>
      <p>
        C-MER believes that our talent advantage lies in our team spirit. It is imperative important to be not only passionate about work, but to also have passion for life. We aim to create happy workplaces for employees, helping them to strike a work-life balance and enhance their productivity.
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
      font-size: 18px;
      line-height: 2;
      font-family: 'arial';
    }
    h4 {
      font-family: "NotoSansTCThin";
      font-size: 24px;
      color: #005caf;
      letter-spacing: 0.1em;
      font-family: 'arial';
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