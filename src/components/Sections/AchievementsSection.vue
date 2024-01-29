<template>
  <base-section
    custom-section-class="achievements bg-primary text-secondary"
    :header="true"
    :paragraph-white="true"
    :title-padding="false"
    :smaller-title-margin="true"
  >
    <template #headerSub> Trusted by developers from over 80 planets </template>
    <template #headerParagraph>
      There are many variations of passages of Lorem Ipsum available, but the
      majority.
    </template>
    <template #sectionBody>
      <div
        class="container-lg d-flex flex-column flex-sm-row justify-content-center achievements_items mt-3"
      >
        <div
          class="jump-in-element"
          :style="{ opacity: 0, 'animation-delay': `0.0s` }"
        >
          <h3 class="fs-1 fw-bolder">100%</h3>
          <p>Satisfaction</p>
        </div>
        <div
          class="jump-in-element"
          :style="{ opacity: 0, 'animation-delay': `0.1s` }"
        >
          <h3 class="fs-1 fw-bolder">120K</h3>
          <p>Happy Users</p>
        </div>
        <div
          class="jump-in-element"
          :style="{ opacity: 0, 'animation-delay': `0.2s` }"
        >
          <h3 class="fs-1 fw-bolder">125k+</h3>
          <p>Downloads</p>
        </div>
      </div>
    </template>
  </base-section>
</template>

<style scoped>
.achievements_items {
  gap: 10rem;
}

.achievements_items > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 576px) {
  .achievements_items {
    gap: 2rem;
  }
}
</style>
