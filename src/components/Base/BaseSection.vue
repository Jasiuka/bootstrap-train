<template>
  <section
    class="section d-flex justify-content-center"
    :class="[customSectionClass]"
  >
    <div class="row container-lg">
      <div
        v-if="header"
        :class="
          smallerTitleMargin
            ? 'section-header-m-smaller'
            : 'section-header-m-normal'
        "
        class="col-12 section-header container-lg"
      >
        <div
          :class="{ 'section-title': titlePadding }"
          class="d-flex align-items-center"
        >
          <div class="col d-flex flex-column align-items-center">
            <h6 class="text-primary text-uppercase">
              <slot name="headerTitle"></slot>
            </h6>
            <h2 class="text-tertiary section-title__subtitle mb-4">
              <slot name="headerSub"></slot>
            </h2>
            <span :class="paragraphWhite ? 'text-secondary' : 'text-black-50'"
              ><slot name="headerParagraph"></slot
            ></span>
          </div>
        </div>
      </div>
      <div class="col-12" :class="sectionBodyCustomClass">
        <slot name="sectionBody"></slot>
      </div>
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
  paragraphWhite: {
    type: Boolean,
    required: false,
  },
  titlePadding: {
    type: Boolean,
    required: false,
    default: true,
  },
  smallerTitleMargin: {
    type: Boolean,
    required: false,
  },
});
</script>

<style>
.section {
  padding: 6.5rem 0;
}
.section-header-m-normal {
  margin-bottom: 5rem;
}

.section-header-m-smaller {
  margin-bottom: 2rem;
}

.section-title__subtitle {
  font-weight: 800;
}
</style>
