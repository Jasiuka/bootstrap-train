<template>
  <base-section :header="false">
    <template #sectionBody>
      <div class="client-carousel overflow-hidden">
        <div class="client-carousel__inner d-flex">
          <div
            class="client-carousel__item"
            :class="client.active ? 'active' : ''"
            v-for="(client, index) in clientsData"
            :key="index"
            :style="{ transform: `translateX(${translateValue}px)` }"
          >
            <img :src="client.logo" class="client-logo" alt="Client logo" />
          </div>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import { ref } from "vue";
const translateValue = ref(0);

const clientsData = ref([
  {
    active: true,
    logo: "/src/assets/brands/lineicons-logo.svg",
  },
  {
    logo: "/src/assets/brands/pagebulb-logo.svg",
  },
  {
    logo: "/src/assets/brands/brand2.svg",
  },
  {
    logo: "/src/assets/brands/lineicons-logo.svg",
  },
  {
    logo: "/src/assets/brands/pagebulb-logo.svg",
  },
  {
    logo: "/src/assets/brands/brand2.svg",
  },
]);
</script>

<style scoped>
section {
  overflow: hidden;
}
.client-logo {
  width: 12rem;
  filter: grayscale(0.8);
  transition: all 0.3s ease;
}

.client-logo:hover {
  filter: grayscale(0);
}

.client-carousel__inner {
  gap: 9.5rem;
}
</style>
