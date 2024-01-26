<template>
  <div class="item">
    <h2 class="accordion-header" :id="flushHeading">
      <button
        class="accordion-button collapsed d-flex align-items-center"
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
      class="accordion-collapse collapse accordion-content"
      :aria-labelledby="flushHeading"
      data-bs-parent="#faq-accordion"
    >
      <div class="accordion-content__body p-5">
        <slot name="body"></slot>
      </div>
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

<style scoped>
.accordion-header .accordion-button:not(.collapsed)::after {
  display: none;
}

.accordion-header .accordion-button.collapsed::after {
  display: none;
}

.accordion-header .accordion-button:focus {
  border-color: var(--color-primary);
  box-shadow: none;
}

div .accordion-header .accordion-button:not(.collapsed) {
  border-radius: 6px 6px 0 0;
  background-color: var(--color-primary);
  color: white;
}

div .accordion-header .accordion-button.collapsed {
  border-radius: 6px;
  border: 1px solid #eee;
}

:deep(.accordion-button):not(.collapsed) i::before {
  content: "\eabc";
  font-family: lineIcons;
}

.accordion-content:not(.collapsed) .accordion-content__body {
  border: 1px solid #eee;
  background-color: #f9f9f9;
}
</style>
