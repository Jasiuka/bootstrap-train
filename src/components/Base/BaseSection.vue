<template>
  <section
    class="section d-flex justify-content-center"
    :class="[customSectionClass]"
  >
    <div class="row container-lg">
      <div
        v-if="header"
        :class="
          smallerTitleMargin
            ? 'section-header-m-smaller'
            : 'section-header-m-normal'
        "
        class="col-12 section-header container-lg section-header"
      >
        <div
          :class="{ 'section-title': titlePadding }"
          class="d-flex align-items-center"
        >
          <div class="col d-flex flex-column align-items-center">
            <h6 class="text-primary text-uppercase section-header__title">
              <slot name="headerTitle"></slot>
            </h6>
            <h2
              class="text-tertiary section-title__subtitle mb-4 section-header__subtitle"
              style="opacity: 0"
            >
              <slot name="headerSub"></slot>
            </h2>
            <span
              :class="paragraphWhite ? 'text-secondary' : 'text-black-50'"
              class="section-header__paragraph"
              style="opacity: 0"
              ><slot name="headerParagraph"></slot
            ></span>
          </div>
        </div>
      </div>
      <div class="col-12" :class="sectionBodyCustomClass">
        <slot name="sectionBody"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useObserver } from "../../composables/observer";
const observerInitialized = ref(false);
const handleIntersection = function (target) {
  // HEADER
  const closestIsHeader = target.closest(".section-header");
  if (closestIsHeader) {
    if (
      !target.classList.contains("animate-fade-up") &&
      !target.classList.contains("section-header__title")
    ) {
      target.classList.add("animate-fade-up");
    }
    if (
      !target.classList.contains("animate-scale") &&
      target.classList.contains("section-header__title")
    ) {
      target.classList.add("animate-scale");
    }
  } else {
    // BODY ELEMENT
    if (
      target.classList.contains("fade-in-element") &&
      !target.classList.contains("animate-done")
    ) {
      if (target.classList.contains("flex-row")) {
        target.children[0].classList.add("animate-fade-left");
        target.children[1].classList.add("animate-fade-right");
      } else {
        target.children[0].classList.add("animate-fade-right");
        target.children[1].classList.add("animate-fade-left");
      }
      target.classList.add("animate-done");
    }
    if (target.classList.contains("jump-in-element")) {
      target.classList.add("animate-jump-in");
    }
  }
};

const handleNotIntersecting = function (target) {};

const { initObserver } = useObserver(
  handleIntersection,
  handleNotIntersecting,
  ".section-header__title, .section-header__subtitle, .section-header__paragraph, .fade-in-element, .jump-in-element",
  { rootMargin: "0px", threshold: 0.3 }
);
defineProps({
  header: {
    type: Boolean,
    required: true,
  },
  customSectionClass: {
    type: String,
    required: false,
  },
  sectionBodyCustomClass: {
    type: String,
    required: false,
  },
  paragraphWhite: {
    type: Boolean,
    required: false,
  },
  titlePadding: {
    type: Boolean,
    required: false,
    default: true,
  },
  smallerTitleMargin: {
    type: Boolean,
    required: false,
  },
});

onMounted(() => {
  if (!observerInitialized.value) {
    initObserver();
    observerInitialized.value = true;
  }
});
</script>

<style>
.section {
  padding: 6.5rem 0;
}

.animate-fade-up {
  animation: fadeInUp 0.6s linear forwards;
}

.animate-jump-in {
  animation: jumpIn 0.6s linear forwards;
}

.animate-fade-left {
  animation: fadeInLeft 0.6s linear forwards;
}

.animate-fade-right {
  animation: fadeInRight 0.6s linear forwards;
}

.animate-scale {
  animation: scaleIn 0.4s linear forwards;
}
.section-header-m-normal {
  margin-bottom: 5rem;
}

.section-header-m-smaller {
  margin-bottom: 2rem;
}

.section-title__subtitle {
  font-weight: 800;
}
</style>
