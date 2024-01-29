<template>
  <base-section :header="true" :lg-container="true" :paragraph-white="false">
    <template #headerTitle> Pricing </template>
    <template #headerSub>Pricing Plan</template>
    <template #headerParagraph
      >There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form.</template
    >
    <template #sectionBody>
      <div class="row container-lg">
        <div
          class="col-md-6 mb-md-3 mb-lg-0 col-sm-12 col-lg jump-in-element"
          :style="{ opacity: 0, 'animation-delay': `0.${index}s` }"
          v-for="(card, index) in pricingData"
          :key="index"
        >
          <pricing-card
            :card-title="card.title"
            :button-text="`Buy ${card.title}`"
            :card-sub-title="card.sub"
            :included="card.included"
            :price="card.price"
            body-header="What's included"
          ></pricing-card>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import PricingCard from "../PricingCard.vue";
import { ref } from "vue";

const pricingData = ref([
  {
    title: "Hobby",
    sub: "All the basics for starting a new business",
    price: 12,
    included: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
  {
    title: "Freelancer",
    sub: "All the basics for starting a new business",
    price: 24,
    included: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
  {
    title: "Startup",
    sub: "All the basics for starting a new business",
    price: 32,
    included: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
  {
    title: "Enterprise",
    sub: "All the basics for starting a new business",
    price: 48,
    included: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
]);
</script>
