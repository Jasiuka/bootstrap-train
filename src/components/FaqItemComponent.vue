<template>
  <div>
    <h2 class="accordion-header" :id="flushHeading">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + flushCollapse"
        aria-expanded="false"
        :aria-controls="flushCollapse"
      >
        <slot name="title"></slot>
      </button>
    </h2>
    <div
      :id="flushCollapse"
      class="accordion-collapse collapse"
      :aria-labelledby="flushHeading"
      data-bs-parent="#faq-accordion"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  flushCollapse: {
    type: String,
    required: true,
  },
  flushHeading: {
    type: String,
    required: true,
  },
});
</script>
