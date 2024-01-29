import { ref } from "vue";

export function useObserver(
  handleIntersection,
  handleNotIntersecting,
  observeTarget,
  givenOptions = null
) {
  const observer = ref(null);
  // Default
  let options = { rootMargin: "0px", threshold: 1.0 };
  if (givenOptions) {
    options = givenOptions;
  }

  function initObserver() {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && handleIntersection) {
          handleIntersection(entry.target);
        }
        if (!entry.isIntersecting && handleNotIntersecting) {
          handleNotIntersecting(entry.target);
        }
      });
    }, options);

    observeTargets();
  }

  function observeTargets() {
    const sections = document.querySelectorAll(observeTarget);

    sections.forEach((target) => {
      observer.value.observe(target);
    });
  }

  return { initObserver };
}
