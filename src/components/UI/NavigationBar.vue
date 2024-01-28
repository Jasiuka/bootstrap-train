<template>
  <nav class="navbar navbar-expand-lg bg-transparent navigation">
    <div class="container">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="#" title="Company name" class="navbar-brand">
          <img class="brand-logo" src="/src/assets/white-logo.svg" />
        </a>
        <ul class="navbar-nav text-secondary nav-list">
          <a href="/" class="nav-item nav-link text-secondary">Home</a>
          <a href="#" class="nav-item nav-link text-secondary">Features</a>
          <a href="#overview" class="nav-item nav-link text-secondary"
            >Overview</a
          >
          <a href="#pricing" class="nav-item nav-link text-secondary"
            >Pricing</a
          >
          <a href="#team" class="nav-item nav-link text-secondary">Team</a>
          <a href="#blog" class="nav-item nav-link text-secondary">Blog</a>
          <a href="#" class="nav-item nav-link text-secondary">Contact</a>
        </ul>
        <base-button
          button-title="Get It Now"
          :button="false"
          custom-class="nav-button outline"
        >
          <template #content> Get It Now </template>
        </base-button>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  navSticky: {
    type: Boolean,
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
}

.navbar-nav a:not(:last-child) {
  margin-right: 25px;
}
</style>
