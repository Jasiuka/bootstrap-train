<template>
  <base-section
    :lg-container="false"
    :header="false"
    customSectionClass="container-fluid"
  >
    <template #sectionBody>
      <div
        class="container-lg d-flex align-items-center flex-column items-container"
      >
        <div v-for="(appInfo, index) in appInfoData" :key="index" class="row">
          <app-info-component
            :heading="appInfo.heading"
            :button-text="appInfo.buttonText"
            :icon="appInfo.icon"
            :image="appInfo.image"
            :paragraph="appInfo.paragraph"
            :reversed="appInfo.reversed"
          ></app-info-component>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import { ref } from "vue";
import AppInfoComponent from "../AppInfoComponent.vue";

const appInfoData = ref([
  {
    heading: " 1,25,000 Customers Using The Application!",
    paragraph: `Collaborate over projects with your team and clients optimised
                  for mobile and tablet don't let slow page speeds drive our
                  innovative platform empowers anyone to convert clicks ou'll
                  publish your first landing page in minutes.`,
    icon: "inbox",
    buttonText: "Get Started",
    image: "/src/assets/App-Info/app-ss1.png",
    reversed: false,
  },
  {
    heading: "Seamless Loyalty",
    paragraph: `Collaborate over projects with your team and clients optimised
                  for mobile and tablet don't let slow page speeds drive our
                  innovative platform empowers anyone to convert clicks ou'll
                  publish your first landing page in minutes.`,
    icon: "layout",
    buttonText: "Get Started",
    image: "/src/assets/App-Info/app-ss2.png",
    reversed: true,
  },
]);
</script>

<style scoped>
.section {
  background-color: #fff;
}

.items-container {
  gap: 6rem;
}
</style>
