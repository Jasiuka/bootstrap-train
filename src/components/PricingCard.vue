<template>
  <div class="card">
    <header class="card__header d-flex flex-column gap-3">
      <h4 class="card-title">{{ cardTitle }}</h4>
      <p class="card-sub-title">{{ cardSubTitle }}</p>
      <h5 class="fs-2 fw-bold">
        ${{ price }}<span class="text-black-50 price-addon">/mo</span>
      </h5>
      <a class="btn">{{ buttonText }}</a>
    </header>
    <div class="card-body p-0">
      <h6>{{ bodyHeader }}</h6>
      <ul class="included_list">
        <li class="d-flex gap-2" v-for="(item, index) in included" :key="index">
          <i class="lni lni-checkmark-circle"></i>
          <p>{{ item }}</p>
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
.card_header {
  width: 100%;
}
.card-title {
  font-weight: 600;
  font-size: 1.2rem;
}
.included_list {
  padding: 0;
}

.price-addon {
  font-size: 1rem;
}
</style>
