<template>
  <nav class="navbar navbar-expand-lg bg-transparent navigation">
    <div class="container">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="#" title="Appvilla" class="navbar-brand">
          <img
            class="brand-logo"
            :src="`/src/assets/${navSticky ? 'color' : 'white'}-logo.svg`"
            alt="Appvilla logo"
          />
        </a>
        <ul class="navbar-nav nav-list">
          <li v-for="link in links" :key="link.identifier">
            <a
              :href="link.href"
              class="nav-item nav-link"
              :class="[
                `text-${navSticky ? 'tertiary' : 'secondary'}`,
                { 'link-active': link.identifier === observedSection },
              ]"
              >{{ link.text }}</a
            >
          </li>
        </ul>
        <base-button
          button-title="Get It Now"
          :button="false"
          :custom-class="`nav-button ${
            navSticky ? 'regular-primary' : 'outline'
          }`"
        >
          <template #content> Get It Now </template>
        </base-button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const links = ref([
  { href: "/", text: "Home", identifier: "hero" },
  { href: "#features", text: "Features", identifier: "features" },
  { href: "#overview", text: "Overview", identifier: "overview" },
  { href: "#pricing", text: "Pricing", identifier: "pricing" },
  { href: "#team", text: "Team", identifier: "team" },
  { href: "#blog", text: "Blog", identifier: "blog" },
  { href: "#", text: "Contact", identifier: "contact" },
]);

defineProps({
  navSticky: {
    type: Boolean,
    required: true,
  },
  observedSection: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.nav-button {
  font-weight: 600;
  padding: 0.7rem 1.5rem;
}
.nav-button:hover {
  color: #ff6b81;
}

.navbar-nav a {
  font-weight: 600;
}

.nav-list {
  flex: 1;
  gap: 1rem;
}

.navbar-nav a:not(:last-child) {
  margin-right: 25px;
}

.navigation .container .list-black {
  color: #081828 !important;
}

.link-active {
  color: var(--color-primary);
}
</style>
