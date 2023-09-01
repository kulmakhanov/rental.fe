<template>
  <v-card class="main-card-spec mx-auto">
    <v-container fluid class="big-container">
      <v-card-title>{{ $t('laptop_specifications') }}</v-card-title>
      <v-row>
        <v-col cols="12" md="12" class="py-0">
          <v-carousel v-model="model" hide-delimiters>
            <v-carousel-item v-for="laptop in laptops" :key="laptop.title">
              <v-card
                class="laptop-card mx-auto"
                max-width="400"
              >
                <v-img
                  :src="laptop.src"
                  :contain="true"
                  height="250px"
                />
                <v-card-title class="d-flex justify-center py-0 ml-5">
                  {{ laptop.title }}
                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-title>
                <v-divider v-show="show" class="pb-1"/>
                <v-expand-transition>
                  <div v-show="show">
                    <v-row>
                      <v-col cols="12" md="12" class="pb-0">
                        <v-simple-table class="price-table-small" dense>
                          <tbody>
                            <tr>
                              <td class="text-left font-weight-bold">{{ $t('screen_diagonal') }}</td>
                              <td class="text-left">{{ laptop.screen }}</td>
                            </tr>
                            <tr>
                              <td class="text-left font-weight-bold">{{ $t('cpu') }}</td>
                              <td class="text-left">{{ laptop.cpu }}</td>
                            </tr>
                            <tr>
                              <td class="text-left font-weight-bold">{{ $t('ram') }}</td>
                              <td class="text-left">{{ laptop.ram }}</td>
                            </tr>
                            <tr>
                              <td class="text-left font-weight-bold">{{ $t('hdd') }}</td>
                              <td class="text-left">{{ laptop.hdd }}</td>
                            </tr>
                            <tr>
                              <td class="text-left font-weight-bold">{{ $t('videocard') }}</td>
                              <td class="text-left">{{ laptop.videocard }}</td>
                            </tr>
                            <tr>
                              <td class="text-left font-weight-bold">{{ $t('operation_system') }}</td>
                              <td class="text-left">{{ laptop.ops }}</td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                      </v-col>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Specifications',
  data() {
    return {
      model: 0,
      show: false,
      laptops: [
        {
          title: "Dell Ultrabook 12''",
          src: require("../../public/dell_ultrabook.png"),
          screen: "12.5”, 16:9, 1366 x 768",
          cpu: "Intel Core i5-4200U",
          ram: "4Gb",
          hdd: "SSD 120Gb",
          videocard: "Intel HD Graphics 4400",
          ops: "Windows 8 Pro",
          weight: "20x311x211мм, 1.34 кг",
        },
        {
          title: "Dell Latitude 14''",
          src: require("../../public/dell_latitude.png"),
          screen: "14”, 16:9, 1600 x 900",
          cpu: "Intel Core i5-4200M",
          ram: "4Gb",
          hdd: "SSD 120Gb",
          videocard: "Intel HD Graphics 4600​",
          ops: "Windows 8 Pro",
          weight: "31x338x232мм, 2.1 кг",
        },
        {
          title: "Lenovo ThinkPad 12''",
          src: require("../../public/lenovo_think.png"),
          screen: "12.5”, 16:9, 1366 x 768",
          cpu: "Intel Core i5-4300U",
          ram: "4Gb",
          hdd: "SSD 120Gb",
          videocard: "Intel HD Graphics 4400​",
          ops: "Windows 8 Pro",
          weight: "20x305x208мм, 1.36 кг",
        },
        {
          title: "Lenovo ThinkPad 14''",
          src: require("../../public/lenovo_thinkpad.png"),
          screen: "14”, 16:9, 1600 x 900",
          cpu: "Intel Core i5-5300U",
          ram: "4Gb",
          hdd: "SSD 120Gb",
          videocard: "Intel HD Graphics 5500​",
          ops: "Windows 8 Pro",
          weight: "21x339x231мм, 1.8 кг",
        },
        {
          title: "Lenovo P52 15''",
          src: require("../../public/lenovo_P52.jpg"),
          screen: "14.86'', 16:9, 1720 x 980",
          cpu: "Intel Core i7-8850H",
          ram: "16Gb",
          hdd: "SSD 512Gb",
          videocard: "NVIDIA Quadro P2000​",
          ops: "Windows 10",
          weight: "21x339x231мм, 1.8 кг",
        },
        {
          title: "Dell Precision 7530 15''",
          src: require("../../public/dell_precision.jpg"),
          screen: "14.86”, 16:9, 1720 x 980",
          cpu: "Intel Core i7-8570H",
          ram: "16Gb",
          hdd: "SSD 1Tb",
          videocard: "NVIDIA Quadro P2000​",
          ops: "Windows 10",
          weight: "21x339x231мм, 1.8 кг",
        },
      ],
    }
  }
}
</script>