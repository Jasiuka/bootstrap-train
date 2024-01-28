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
            <img
              ref="logo"
              :src="client.logo"
              class="client-logo"
              alt="Client logo"
            />
          </div>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const translateValue = ref(0);
const logo = ref([]);

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
  {
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

const animation = function () {
  const logoWidth = logo.value[0].offsetWidth;
  const moveValue = -logoWidth;
  const limit = -logoWidth * (clientsData.value.length - 3);
  setInterval(() => {
    translateValue.value = translateValue.value + moveValue;
    if (translateValue.value === limit) {
      translateValue.value = 0;
    }
  }, 3000);
};

onMounted(() => {
  animation();
});
</script>

<style scoped>
section {
  overflow: hidden;
  background-color: white;
}
.client-logo {
  width: 20rem;
  filter: grayscale(0.8);
  padding: 0 4rem;
  transition: all 0.3s ease;
}

.client-logo:hover {
  filter: grayscale(0);
}

.client-carousel__item {
  transition: all 0.5s ease;
}
</style>
