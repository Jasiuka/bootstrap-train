import { ref } from "vue";

export function useObserver(
  handleIntersection,
  handleNotIntersecting,
  observeTarget
) {
  const observer = ref(null);

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
    });

    observeTargets();
  }

  function observeTargets() {
    const sections = document.querySelectorAll(`.${observeTarget}`);

    sections.forEach((target) => {
      observer.value.observe(target);
    });
  }

  return { initObserver };
}
