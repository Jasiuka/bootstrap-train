<template>
  <div
    class="col-12 d-flex align-items-center gap-4 fade-in-element"
    :class="reversed ? 'flex-row-reverse' : 'flex-row'"
  >
    <div class="col-6" style="opacity: 0">
      <div class="d-flex flex-column align-items-start gap-4">
        <i :class="`lni-${icon}`" class="lni lni-inbox mb-2 icon-badge"></i>
        <h3 class="fs-2 fw-bold">{{ heading }}</h3>
        <p class="text-black-50">
          {{ paragraph }}
        </p>
        <base-button
          :button="false"
          :button-title="buttonText"
          custom-class="regular-primary app-info__button"
        >
          <template #content> {{ buttonText }} </template>
        </base-button>
      </div>
    </div>
    <div class="col-6" style="opacity: 0">
      <img class="app-info__img" :src="image" :alt="heading" />
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
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  reversed: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.section .row .app-info__button {
  font-weight: 600;
  padding: 0.7rem 1.5rem;
}

.app-info__img {
  width: 80%;
}
</style>
