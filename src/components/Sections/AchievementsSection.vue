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
        class="container-lg d-flex justify-content-center achievements_items mt-3"
      >
        <div>
          <h3 class="fs-1 fw-bolder">100%</h3>
          <p>Satisfaction</p>
        </div>
        <div>
          <h3 class="fs-1 fw-bolder">120K</h3>
          <p>Happy Users</p>
        </div>
        <div>
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
</style>
