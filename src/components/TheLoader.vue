<template>
  <div class="loader">
    <div class="loader-wrapper">
      <div class="circle position-absolute"></div>
      <div class="circle position-absolute"></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 100dvw;
  height: 100dvh;
}

.loader-wrapper {
  width: 6rem;
  aspect-ratio: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.circle {
  width: 6rem;
  aspect-ratio: 1;
  border-radius: 50%;
  opacity: 0;
  background-color: var(--color-primary);
  animation: loaderAnimation 1.6s linear infinite;
}

.circle:last-child {
  animation-delay: 0.6s;
}

@keyframes loaderAnimation {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
