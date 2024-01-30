<template>
  <base-section :header="false">
    <template #sectionBody>
      <div class="row upper-row d-flex align-items-start flex-row">
        <div
          class="col-12 col-lg-4 d-flex flex-column align-items-center align-items-lg-start gap-4 mb-4 mb-lg-0"
        >
          <img
            src="/src/assets/white-logo.svg"
            class="brand-logo"
            alt="Appvilla logo"
          />
          <p>
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div class="socials d-flex align-items-center gap-3">
            <a
              class="social-link"
              href="#"
              v-for="social in socials"
              :key="social"
              :title="social.split('-')[1]"
            >
              <i class="lni" :class="social"></i>
            </a>
          </div>
          <p class="designed">Designed by Uldeck and Developed by Jasiuka</p>
        </div>
        <div class="col-lg-8 d-flex align-items-center justify-content-between">
          <div
            v-for="navigationCol in navigationLinks"
            :key="navigationCol.heading"
            class="d-flex flex-column align-items-start footer-navigation__col"
          >
            <h3 class="footer-navigation__col-heading">
              {{ navigationCol.heading }}
            </h3>
            <ul class="d-flex flex-column gap-2">
              <li
                v-for="(link, index) in navigationCol.links"
                :key="link + index"
                class="footer-link"
              >
                <a class="btn" href="#" :title="link">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row lower-row">
        <newsletter-component></newsletter-component>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import NewsletterComponent from "../NewsletterComponent.vue";
import { ref } from "vue";

const socials = ref([
  "lni-facebook",
  "lni-twitter-original",
  "lni-instagram",
  "lni-linkedin-original",
  "lni-youtube",
  "lni-pinterest",
]);

const navigationLinks = ref([
  {
    heading: "Solutions",
    links: ["Marketing", "Analytics", "Commerce", "Insights", "Promotion"],
  },
  {
    heading: "Support",
    links: ["Pricing", "Documentation", "Guides", "API Status", "Live Support"],
  },
  {
    heading: "Company",
    links: ["About Us", "Our Blog", "Jobs", "Press", "Contact Us"],
  },
  {
    heading: "Legal",
    links: [
      "Terms & Conditions",
      "Privacy Policy",
      "Catering Services",
      "Customer Relations",
      "Innovation",
    ],
  },
]);
</script>

<style scoped>
section {
  background-color: #081828;
  color: #d2d6dc;
}

.upper-row {
  margin-bottom: 6.5rem;
}

section .brand-logo {
  width: 10rem;
}

.footer-navigation__col > ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-navigation__col-heading {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
}

.footer-link .btn {
  font-size: 0.9rem;
}

section .upper-row .footer-navigation__col .btn {
  color: #d2d6dc;
  padding: 0;
}

section .upper-row .footer-navigation__col .btn:hover {
  color: var(--color-primary);
}

section .social-link:link,
section .social-link:visited {
  transition: all 0.3s ease;
  cursor: pointer;
  color: #d2d6dc;
}
section .social-link:link:hover,
section .social-link:visited:hover,
section .social-link:hover {
  color: var(--color-primary);
}

.designed {
  font-size: 0.9rem;
}
</style>
