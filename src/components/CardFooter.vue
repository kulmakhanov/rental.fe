<template>
    <div>
      <v-footer app class="footer" paddless>
        <div class="marquee-container">
          <div class="marquee-content">
            <div
              class="marquee-item"
              v-for="(item, index) in items"
              :key="index"
            >
              <v-img
                v-if="item.type === 'img'"
                class="marquee-img"
                :src="item.src"
                size="36px"
              >
              </v-img>
              <p v-else class="marquee-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </v-footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        items: [
          {
            type: 'text',
            text: 'Нам доверяют'
          },
          {
            type: 'img',
            title: 'Mitsubishi',
            src: require("../../public/company-logo/mitsubishi.png"),
          },
          {
            type: 'img',
            title: 'Halyq Bank',
            src: require("../../public/company-logo/qazqom.png"),
          },
          {
            type: 'img',
            title: 'KazakhAltyn',
            src: require("../../public/company-logo/kazakhaltyn.png"),
          },
          {
            type: 'img',
            title: 'UNDP',
            src: require("../../public/company-logo/undp.png"),
          },
          {
            type: 'img',
            title: 'Nestle',
            src: require("../../public/company-logo/nestle.png"),
          },
          {
            type: 'img',
            title: 'PepsiCo',
            src: require("../../public/company-logo/pepsico.png"),
          },
          {
            type: 'img',
            title: 'Tikkurila',
            src: require("../../public/company-logo/tikkurila.png"),
          },
          {
            type: 'img',
            title: 'Bayern FC',
            src: require("../../public/company-logo/nonon.png"),
          },
          {
            type: 'img',
            title: 'Barcelona FC',
            src: require("../../public/company-logo/fitnation.png"),
          },
          {
            type: 'img',
            title: 'Jysan',
            src: require("../../public/company-logo/fhbank.png"),
          },
          {
            type: 'img',
            title: 'EY',
            src: require("../../public/company-logo/eyoung.png"),
          },
          {
            title: 'Efes ',
            src: require("../../public/company-logo/efes.png"),
          },
          {
            type: 'img',
            title: 'School ',
            src: require("../../public/company-logo/school.png"),
          },
          {
            type: 'img',
            title: 'AAE ',
            src: require("../../public/company-logo/aaengine.png"),
          },
          {
            type: 'img',
            title: 'DAR ',
            src: require("../../public/company-logo/dar.png"),
          },
        ]
      }
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
    animation: marquee 30s linear infinite;
  }
  .marquee-item {
    display: inline-flex;
    align-items: center;
    margin-right: 10px;
  }
  .marquee-text {
    margin: 0;
  }
  .marquee-img {
    height: auto;
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