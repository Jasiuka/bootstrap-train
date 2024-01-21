<script setup>
import NavigationBar from "./components/UI/NavigationBar.vue";
import HeroSection from "./components/Sections/HeroSection.vue";
import FeaturesSection from "./components/Sections/FeaturesSection.vue";
import AppInfoSection from "./components/Sections/AppInfoSection.vue";
</script>

<template>
  <div>
    <header class="position-absolute container-fluid pt-3">
      <navigation-bar></navigation-bar>
    </header>
    <main>
      <hero-section></hero-section>
      <features-section></features-section>
      <app-info-section></app-info-section>
    </main>
  </div>
</template>

<style>
:root {
  --color-primary: #ff6b81;
  --color-secondary: #fff;
}

.section-title {
  padding: 0 18rem;
  text-align: center;
}

.section-title__subtitle {
  font-size: 2.2rem;
}

.section-title > .col h6 {
  font-weight: 600;
}

.icon-badge {
  background-color: #ff6b81;
  color: #fff;
  padding: 1.2rem;
  border-radius: 6px;
  font-size: 1.2rem;
  box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.1);
}
</style>
