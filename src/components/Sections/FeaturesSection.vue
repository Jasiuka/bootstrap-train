<template>
  <base-section :header="true" :lg-container="true">
    <template #headerTitle> Features </template>
    <template #headerSub>
      Your Experience Gets Better And Better Over Time.
    </template>
    <template #headerParagraph
      >There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form.</template
    >
    <template #sectionBody>
      <div class="col-12">
        <div class="row g-4">
          <div v-for="(card, index) in cardsData" :key="index" class="col-4">
            <feature-section-card
              :heading="card.heading"
              :paragraph="card.paragraph"
              :icon="card.icon"
            ></feature-section-card>
          </div>
        </div>
      </div>
    </template>
  </base-section>
</template>
<script setup>
import { ref } from "vue";
import FeatureSectionCard from "../FeatureSectionCard.vue";

const cardsData = ref([
  {
    heading: "Push To Deploy",
    paragraph:
      " It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    icon: "cloud-upload",
  },
  {
    heading: "SSL Certificates",
    paragraph:
      " It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    icon: "lock",
  },
  {
    heading: "Simple Queues",
    paragraph:
      " It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    icon: "reload",
  },
  {
    heading: "Advanced Security",
    paragraph:
      " It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    icon: "shield",
  },
  {
    heading: "Powerful API",
    paragraph:
      " It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    icon: "cog",
  },
  {
    heading: "Database Backups",
    paragraph:
      " It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    icon: "layers",
  },
]);
</script>

<style>
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
</style>
