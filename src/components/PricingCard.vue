<template>
  <div class="card p-0 card-common">
    <header class="card__header d-flex flex-column gap-3 p-4">
      <h4 class="card-title">{{ cardTitle }}</h4>
      <p class="card-sub-title text-black-50">{{ cardSubTitle }}</p>
      <h5 class="fs-2 fw-bold">
        ${{ price }}<span class="text-black-50 price-addon">/mo</span>
      </h5>
      <base-button :button="true" class="black-style pricing-card__button">
        <template #content>
          {{ buttonText }}
        </template>
      </base-button>
    </header>
    <div class="card-body p-4">
      <h6 class="mb-3 text-uppercase card-body__header">{{ bodyHeader }}</h6>
      <ul class="included_list p-0 d-flex flex-column gap-3">
        <li
          class="d-flex gap-2 align-items-center included-item"
          v-for="(item, index) in included"
          :key="index"
        >
          <i class="lni lni-checkmark-circle text-primary"></i>
          <p class="m-0 text-black-50">{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  cardSubTitle: {
    type: String,
    required: true,
  },
  price: {
    type: [String, Number],
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  bodyHeader: {
    type: String,
    required: true,
  },
  included: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.card__header {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.086);
}
.card-title {
  font-weight: 600;
  font-size: 1rem;
}

.card-body__header,
.included-item,
.price-addon {
  font-size: 0.85rem;
}

:deep(.pricing-card__button) {
  font-size: 0.85rem;
  padding: 0.7rem 0;
}
</style>
