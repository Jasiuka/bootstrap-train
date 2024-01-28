<template>
  <base-button
    v-show="visible"
    :button="true"
    button-title="Scroll Top"
    custom-class="regular-primary scroll-top"
    @click="scrollToTop"
  >
    <template #content>
      <i class="lni lni-chevron-up"></i>
    </template>
  </base-button>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});
const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style>
.scroll-top {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
}

.scroll-top:hover {
  transform: translateY(-6px);
}
</style>
