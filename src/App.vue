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
import TheLoader from "./components/TheLoader.vue";
import { onMounted, onBeforeMount, ref } from "vue";

const navSticky = ref(false);
const observerTargetSection = ref("hero");
const loaded = ref(false);
const handleIntersection = function (target) {
  if (target.classList.contains("for-observer")) {
    navSticky.value = false;
  } else {
    observerTargetSection.value = target.id;
  }
};

const handleNotIntersecting = function (target) {
  if (target.classList.contains("for-observer")) {
    navSticky.value = true;
  }
};

const { initObserver } = useObserver(
  handleIntersection,
  handleNotIntersecting,
  ".for-observer, section[id]",
  { threshold: 0.9, rootMargin: "0px" }
);

onMounted(() => {
  initObserver();
});

onBeforeMount(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 1500);
});
</script>

<template>
  <div>
    <the-loader v-if="!loaded"></the-loader>
    <div :class="{ hidden: !loaded }">
      <header
        class="container-fluid py-3 navigation-header"
        :class="navSticky ? 'sticky' : ''"
      >
        <navigation-bar
          :nav-sticky="navSticky"
          :observed-section="observerTargetSection"
        ></navigation-bar>
      </header>
      <div class="for-observer"></div>
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
        <scroll-top-component :visible="navSticky"></scroll-top-component>
      </main>
    </div>
  </div>
</template>

<style>
.navigation-header {
  z-index: 100;
  background-color: transparent;
  position: absolute;
  transition: background-color 0.3s ease;
}

.hidden {
  opacity: 0;
}

.sticky {
  background-color: white;
  position: fixed;
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

/* ANIMATIONS */

@keyframes fadeInLeft {
  0% {
    transform: translateX(-2%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInRight {
  0% {
    transform: translateX(2%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes jumpIn {
  0% {
    transform: translateY(25px);
    opacity: 0;
  }
  80% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 992px) {
  .section-title {
    padding: 0;
  }
}
</style>
