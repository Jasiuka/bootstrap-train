<template>
  <base-section class="cta-section" :header="false">
    <template #sectionBody>
      <div
        class="container-lg d-flex flex-column gap-4 text-secondary cta-content"
      >
        <h2 class="d-flex justify-content-center cta-title">
          Install Appvilla and Start Using
        </h2>
        <p class="cta-paragraph">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div class="d-flex align-items-center justify-content-center gap-3">
          <base-button
            :button="false"
            button-title="Go to App Store"
            custom-class="cta-button regular"
          >
            <template #content>
              <i class="lni lni-apple-brand"></i>
              App Store
            </template>
          </base-button>
          <base-button
            :button="false"
            button-title="Go to Google Play"
            custom-class="cta-button outline"
          >
            <template #content>
              <i class="lni lni-play-store"></i>
              Google Play
            </template>
          </base-button>
        </div>
      </div>
    </template></base-section
  >
</template>

<style scoped>
.cta-section {
  background-color: var(--color-primary);
}

.cta-button {
  padding: 0.7rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
}

.cta-button:first-of-type {
  border: 1px solid transparent;
}

.cta-content {
  padding: 0 18rem;
}

.cta-title {
  font-weight: 700;
}

.cta-paragraph {
  text-align: center;
}

@media (max-width: 992px) {
  .cta-title {
    text-align: center;
    text-wrap: balance;
  }

  .cta-content {
    padding: 0;
  }
}
</style>
