<template>
  <section class="container-fluid bg-primary section-hero section">
    <div class="container-lg d-flex align-items-center h-100">
      <div class="row">
        <div class="col pe-5 d-flex flex-column gap-4">
          <h1 class="text-secondary heading">
            A Powerful App For Your Business.
          </h1>

          <p class="text-secondary">
            From open source to pro services, Piqes helps you to build, deploy,
            test, and monitor apps.
          </p>
          <div>
            <button class="btn btn-secondary apple-store-btn hero-button">
              <i class="lni lni-apple-brand"></i>
              App Store
            </button>
            <button
              class="btn btn-outline-secondary google-play-btn hero-button"
            >
              <i class="lni lni-play-store"></i>
              Google Play
            </button>
          </div>
        </div>
      </div>

      <img class="hero-img" src="/src/assets/phone.png" />
    </div>
  </section>
</template>

<style scoped>
.heading {
  font-weight: 700;
}

.hero-img {
  width: 58%;
}

.google-play-btn:hover {
  color: #ff6b81;
}

.apple-store-btn {
  color: #ff6b81;
  border: transparent;
}
.apple-store-btn:hover {
  background-color: black;
  color: #fff;
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
</style>
