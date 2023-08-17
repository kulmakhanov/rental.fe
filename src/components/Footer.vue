<template>
  <div>
    <v-footer app class="footer" paddless>
      <div class="marquee-container">
        <p class="additional-text">Дополнительный текст перед бегущей строкой</p>
        <div class="marquee-content">
          <v-img
            class="partners-logo"
            v-for="logo in logos"
            :key="logo.title"
            :src="logo.src"
          ></v-img>
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
      logos: [
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
}
</script>

<style scoped>
.footer {
  box-shadow: inset 97px 95px 17px -95px #AA34A2;
}
.marquee-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  /* white-space: nowrap; */
}

.marquee-content {
  display: flex;
  animation: marquee 20s linear infinite;
}

.additional-text {
  margin-right: 10px;
}

.partners-logo {
  width: 80px;
  height: 80%;
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