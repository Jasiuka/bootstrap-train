<template>
  <section class="container-fluid bg-primary section-hero section">
    <div
      class="container-lg d-flex align-items-center h-100 flex-column flex-lg-row"
    >
      <div class="row">
        <div class="col pe-5 d-flex flex-column gap-4 hero-content">
          <h1 class="text-secondary heading">
            A Powerful App For Your Business.
          </h1>

          <p
            class="text-secondary"
            :style="{ 'animation-delay': '0.2s', opacity: 0 }"
          >
            From open source to pro services, Piqes helps you to build, deploy,
            test, and monitor apps.
          </p>
          <div class="hero-buttons" style="opacity: 0">
            <base-button
              :button="false"
              button-title="Go to App Store"
              custom-class="hero-button regular"
            >
              <template #content>
                <i class="lni lni-apple-brand"></i>
                App Store
              </template>
            </base-button>
            <base-button
              :button="false"
              button-title="Go to Google Play"
              custom-class="hero-button outline"
            >
              <template #content>
                <i class="lni lni-play-store"></i>
                Google Play
              </template>
            </base-button>
          </div>
        </div>
      </div>
      <img
        class="hero-img"
        src="/src/assets/phone.png"
        alt="Hero section image"
      />
    </div>
  </section>
</template>

<style scoped>
.hero-content > h1,
.hero-content > p {
  animation: fadeInLeft 0.8s linear forwards;
}

.hero-buttons {
  animation: fadeInLeft 0.6s linear forwards;
  animation-delay: 0.4s;
}
.heading {
  font-weight: 700;
}

.hero-img {
  width: 58%;
  animation: fadeInRight 0.8s linear forwards;
}

.col > div:has(.hero-button) {
  display: flex;
  gap: 1rem;
}

.hero-button {
  padding: 0.7rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
}

@media (max-width: 992px) {
  .hero-content {
    align-items: center;
    margin-bottom: 2rem;
  }

  .hero-content > * {
    text-wrap: balance;
    text-align: center;
  }
}
</style>
