<template>
  <div class="marquee-container">
    <div class="marquee-content">
      <div
        class="marquee-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-img
          class="marquee-img"
          :src="item.src"
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'CardFooter',
    data() {
      return {
        items: [
          {
            title: 'Mitsubishi',
            src: require("../../public/company-logo/mitsubishi.png"),
          },
          {
            title: 'Halyq Bank',
            src: require("../../public/company-logo/qazqom.png"),
          },
          {
            title: 'KazakhAltyn',
            src: require("../../public/company-logo/kazakhaltyn.png"),
          },
          {
            title: 'UNDP',
            src: require("../../public/company-logo/undp.png"),
          },
          {
            title: 'Nestle',
            src: require("../../public/company-logo/nestle.png"),
          },
          {
            title: 'PepsiCo',
            src: require("../../public/company-logo/pepsico.png"),
          },
          {
            title: 'Tikkurila',
            src: require("../../public/company-logo/tikkurila.png"),
          },
          {
            title: 'Bayern FC',
            src: require("../../public/company-logo/nonon.png"),
          },
          {
            title: 'Barcelona FC',
            src: require("../../public/company-logo/fitnation.png"),
          },
          {
            title: 'Jysan',
            src: require("../../public/company-logo/fhbank.png"),
          },
          {
            title: 'EY',
            src: require("../../public/company-logo/eyoung.png"),
          },
          {
            title: 'Efes ',
            src: require("../../public/company-logo/efes.png"),
          },
          {
            title: 'School ',
            src: require("../../public/company-logo/school.png"),
          },
          {
            title: 'AAE ',
            src: require("../../public/company-logo/aaengine.png"),
          },
          {
            title: 'DAR ',
            src: require("../../public/company-logo/dar.png"),
          },
        ]
      }
    },
    methods: {

    },
  }
  </script>

  <style scoped>
  .marquee-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee-content {
    display: inline-block;
    animation: marquee 15s linear infinite;
  }
  .marquee-item {
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
  }
  .marquee-text {
    margin: 0;
  }
  .marquee-img {
    height: 85px;
    width: 78px;
    margin-right: 10px;
  }
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>