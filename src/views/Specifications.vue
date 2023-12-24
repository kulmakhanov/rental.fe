<template>
  <v-card class="main-card-spec mx-auto">
    <v-container fluid class="big-container">
      <v-card-title>{{ $t('laptop_specifications') }}</v-card-title>
      <v-row>
        <v-col cols="12" md="12" class="py-0">
          <v-carousel v-model="model" hide-delimiters>
            <v-carousel-item v-for="laptop in items" :key="laptop.title">
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
import laptops from "../initial/laptops"
export default {
  name: 'Specifications',
  data() {
    return {
      model: 0,
      show: false,
      items: laptops.laptops,
    }
  }
}
</script>