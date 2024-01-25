<template>
  <div class="card p-3 card-common feature-card">
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
.feature-card > .card-body > h3 {
  font-weight: 500;
  font-size: 1.2rem;
  font-family: inter, sans-serif;
}

.feature-card p {
  line-height: 22px;
}
</style>
