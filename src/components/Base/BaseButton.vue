<template>
  <button
    v-if="button"
    :title="buttonTitle"
    class="btn common"
    :class="customClass"
  >
    <slot name="content"></slot>
  </button>
  <a v-else class="common" :href="special ? special : '#'" :class="customClass"
    ><slot name="content"></slot
  ></a>
</template>

<script setup>
defineProps({
  button: {
    type: Boolean,
    required: true,
  },
  buttonTitle: {
    type: String,
    required: false,
  },
  special: {
    type: String,
    required: false,
  },
  customClass: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
.common {
  transition: all 0.3s ease;
  border-radius: 6px;
  text-decoration: none;
}

.outline,
.outline:link,
.outline:visited {
  border: 2px solid #fff;
  color: #fff;
}

.regular-primary,
.regular-primary:link,
.regular-primary:visited {
  background-color: var(--color-primary);
  color: #fff;
}

.regular-primary:hover {
  background-color: black;
}

.outline:hover {
  background-color: #fff;
  color: var(--color-primary);
}

.regular,
.regular:link,
.regular:visited {
  background-color: #fff;
  color: var(--color-primary);
}

.regular:hover {
  background-color: black;
  color: #fff;
}

.regular--styled {
  padding: 0.7rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
}
</style>
