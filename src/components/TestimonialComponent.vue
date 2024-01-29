<template>
  <div class="row d-flex flex-column gap-4 pb-5">
    <div class="col-12 d-flex justify-content-center">
      <img class="brand" :src="brand" alt="Brand logo" />
    </div>
    <div class="col-12">
      <p class="fw-bold main-content">{{ mainContent }}</p>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <div class="d-flex flex-column align-items-center">
        <img
          class="author-img rounded-circle mb-3"
          :src="userImg"
          :alt="userName + 'photo'"
        />
        <h4 class="user-name m-0">{{ userName }}</h4>
        <p class="position">{{ userPosition }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  brand: {
    type: String,
    required: true,
  },
  mainContent: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPosition: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.brand {
  width: 9rem;
  height: 5rem;
}

.main-content {
  padding: 0 18rem;
  text-wrap: balance;
  text-align: center;
}

.author-img {
  width: 3.5rem;
}

.user-name {
  font-size: 1rem;
}

.position {
  font-size: 0.8rem;
}
</style>
