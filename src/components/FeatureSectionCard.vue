<template>
  <div class="card p-3 feature-card">
    <div class="card-body d-flex flex-column align-items-start gap-2">
      <slot>
        <i class="lni icon-badge mb-4" :class="`lni-${icon}`"></i>
      </slot>
      <h3 class="text-tertiary">{{ heading }}</h3>
      <p class="text-black-50">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
.feature-card {
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.1);
  transform: translateY(-7px);
}

.feature-card > .card-body > h3 {
  font-weight: 500;
  font-size: 1.2rem;
  font-family: inter, sans-serif;
}

.feature-card p {
  line-height: 22px;
}
</style>
