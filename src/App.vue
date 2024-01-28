<script setup>
import NavigationBar from "./components/UI/NavigationBar.vue";
import HeroSection from "./components/Sections/HeroSection.vue";
import FeaturesSection from "./components/Sections/FeaturesSection.vue";
import AppInfoSection from "./components/Sections/AppInfoSection.vue";
import AchievementsSection from "./components/Sections/AchievementsSection.vue";
import PricingSection from "./components/Sections/PricingSection.vue";
import TeamSection from "./components/Sections/TeamSection.vue";
import TestimonialsSection from "./components/Sections/TestimonialsSection.vue";
import CtaSection from "./components/Sections/CtaSection.vue";
import faqSection from "./components/Sections/faqSection.vue";
import BlogsSection from "./components/Sections/BlogsSection.vue";
import ClientsSection from "./components/Sections/ClientsSection.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import ScrollTopComponent from "./components/ScrollTopComponent.vue";
import { useObserver } from "./composables/observer";
import { onMounted, ref } from "vue";

const navNotIntersecting = ref(false);
const handleIntersection = function (target) {
  navNotIntersecting.value = false;
};

const handleNotIntersecting = function (target) {
  navNotIntersecting.value = true;
};

const { initObserver } = useObserver(
  handleIntersection,
  handleNotIntersecting,
  "navigation"
);

onMounted(() => {
  initObserver();
});
</script>

<template>
  <div>
    <header
      class="container-fluid pt-3"
      :class="navNotIntersecting.value ? 'position-absolute' : 'position-fixed'"
    >
      <navigation-bar></navigation-bar>
    </header>
    <main>
      <hero-section id="hero"></hero-section>
      <features-section id="features"></features-section>
      <app-info-section id="overview"></app-info-section>
      <achievements-section></achievements-section>
      <pricing-section id="pricing"></pricing-section>
      <team-section id="team"></team-section>
      <testimonials-section></testimonials-section>
      <cta-section></cta-section>
      <faq-section></faq-section>
      <blogs-section id="blog"></blogs-section>
      <clients-section></clients-section>
      <the-footer></the-footer>
      <scroll-top-component
        :visible="navNotIntersecting"
      ></scroll-top-component>
    </main>
  </div>
</template>

<style>
header {
  z-index: 100;
}
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

section .card-common {
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

section .card-common:hover {
  box-shadow: 0px 8px 9px -4px rgba(0, 0, 0, 0.1);
  transform: translateY(-7px);
}

.brand-logo {
  width: 50%;
}
</style>
