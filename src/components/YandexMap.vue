<template>
  <v-container>
    <div
      class="d-flex justify-start"
      style="
        padding-left: 0;
        margin-right: 7px;
        position: relative;
        overflow:hidden;">
    <a
        href="https://yandex.kz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:0px;"
    >
        Алматы
    </a>
    <a
        href="https://yandex.kz/maps/162/almaty/house/Y08YfwJlTUMEQFppfX5zeHVmbA==/?ll=76.957808%2C43.229797&utm_medium=mapframe&utm_source=maps&z=18"
        style="color:#eee;font-size:12px;position:absolute;top:14px;"
    >
        Микрорайон Самал-2, 33А — Яндекс Карты
    </a>
    <iframe 
        src="https://yandex.kz/map-widget/v1/?ll=76.957808%2C43.229797&mode=whatshere&whatshere%5Bpoint%5D=76.955818%2C43.229910&whatshere%5Bzoom%5D=17&z=18"
        :width="width"
        :height="height"
        frameborder="1"
        allowfullscreen="true"
        style="position:relative;"
    >
    </iframe>
</div>
  </v-container>
</template>

<script>
export default {
  name: 'YandexMap',
  props: {
    width: {
      type: String,
      default: "500",
    },
    height: {
      type: String,
      default: "500",
    },
  },
  data() {
    return {

    }
  },
}
</script>