<template>
  <section
    class="section"
    :class="[customSectionClass, { 'container-lg': lgContainer }]"
  >
    <div class="row">
      <div v-if="header" class="col-12 mb-5">
        <div class="row section-title">
          <div class="col d-flex flex-column align-items-center">
            <h6 class="text-primary text-uppercase">
              <slot name="headerTitle"></slot>
            </h6>
            <h2 class="text-tertiary fw-bold section-title__subtitle mb-4">
              <slot name="headerSub"></slot>
            </h2>
            <span class="text-black-50"
              ><slot name="headerParagraph"></slot
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div :class="sectionBodyCustomClass">
      <slot name="sectionBody"></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  header: {
    type: Boolean,
    required: true,
  },
  customSectionClass: {
    type: String,
    required: false,
  },
  sectionBodyCustomClass: {
    type: String,
    required: false,
  },
  lgContainer: {
    type: Boolean,
    required: true,
  },
});
</script>

<style>
.section {
  padding: 9rem 0;
}
</style>
