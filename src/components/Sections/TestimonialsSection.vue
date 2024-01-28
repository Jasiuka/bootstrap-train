<template>
  <base-section :header="false">
    <template #sectionBody>
      <div id="testi-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#testi-carousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#testi-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#testi-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(testimonial, index) in testimonialData"
            :key="index"
            class="carousel-item"
            :class="testimonial.ac ? testimonial.ac : ''"
          >
            <testimonial-component
              :brand="testimonial.brand"
              :main-content="testimonial.content"
              :user-img="testimonial.authorImg"
              :user-name="testimonial.name"
              :user-position="testimonial.position"
            ></testimonial-component>
          </div>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import { ref } from "vue";
import TestimonialComponent from "../TestimonialComponent.vue";

const testimonialData = ref([
  {
    ac: "active",
    brand: "/src/assets/brands/brand2.svg",
    content: `"It is a long established fact that a reader will be distracted by the readable
content of a page when looking at its layout. The point of using Lorem Ipsum is
that it has"`,
    name: "Musharof Chowdhury",
    position: "CEO - Ayro UI",
    authorImg: "/src/assets/authors/testi2.jpg",
  },
  {
    brand: "/src/assets/brands/brand1.svg",
    content: `"It is a long established fact that a reader will be distracted by the readable
content of a page when looking at its layout. The point of using Lorem Ipsum is
that it has"`,
    name: "Musharof Chowdhury",
    position: "CEO - Graygrids UI",
    authorImg: "/src/assets/authors/testi2.jpg",
  },
  {
    brand: "/src/assets/brands/brand3.svg",
    content: `"It is a long established fact that a reader will be distracted by the readable
content of a page when looking at its layout. The point of using Lorem Ipsum is
that it has"`,
    name: "Naimur Rahman",
    position: "CEO - WpthemesGrid",
    authorImg: "/src/assets/authors/testi3.jpg",
  },
]);
</script>

<style>
section .carousel-indicators {
  gap: 0.3rem;
}

section .carousel-indicators [data-bs-target] {
  background-color: black;
  width: 0.8rem;
  border-radius: 6px;
  height: 0.35rem;
  opacity: 1;
  border: none;
}

section .carousel-indicators [data-bs-target].active {
  background-color: var(--color-primary);
  width: 1.6rem;
}
</style>
