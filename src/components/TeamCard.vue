<template>
  <div class="card p-0 card-common">
    <img class="card-img-top" :src="img" />
    <div class="card-body p-4">
      <div class="row d-flex align-items-center">
        <div class="col d-flex flex-column">
          <h3 class="team-card__name">{{ name }}</h3>
          <p class="text-primary team-card__position">{{ position }}</p>
        </div>
        <div class="col-auto d-flex align-items-center text-black-50 gap-2">
          <a
            class="btn team-card__link text-black-50 p-0"
            title="Twitter profile"
          >
            <i class="lni lni-twitter-original"></i>
          </a>
          <a
            class="btn team-card__link text-black-50 p-0"
            title="LinkedIn profile"
          >
            <i class="lni lni-linkedin-original"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.team-card__name {
  font-size: 1.1rem;
  font-weight: 600;
}

.team-card__position {
  font-size: 0.9rem;
}

.team-card__link:hover {
  color: var(--color-primary) !important;
}
</style>
