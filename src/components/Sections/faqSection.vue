<template>
  <base-section :header="true">
    <template #headerTitle>Faq</template>
    <template #headerSub> Frequently Asked Questions</template>
    <template #headerParagraph
      >There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form.</template
    >
    <template #sectionBody>
      <div class="accordion accordion-flush" id="faq-accordion">
        <div
          v-for="(item, index) in faqData"
          :key="item.title"
          class="accordion-item"
        >
          <faq-item-component
            class="faq-header"
            :flush-heading="`flush-heading${item.count}`"
            :flush-collapse="`flush-collapse${item.count}`"
          >
            <template #title>
              <span class="count">{{ index.toString().padStart(2, 0) }}</span>
              <h3>{{ item.title }}</h3>
              <i class="lni lni-plus"></i>
            </template>
            <template #body>
              <p>{{ item.content }}</p>
            </template>
          </faq-item-component>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import FaqItemComponent from "../FaqItemComponent.vue";
import { ref } from "vue";

const faqData = ref([
  {
    count: "One",
    title: `How Do I Contact Customer
Services?`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.`,
  },
  {
    count: "Two",
    title: `Material types can you work
with?`,
    content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus`,
  },
  {
    count: "Three",
    title: `Can I have multiple activities in
a single feature?`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas expedita, repellendus est nemo cum quibusdam optio, voluptate hic a tempora facere, nihil non itaque alias similique quas quam odit consequatur.`,
  },
  {
    count: "Four",
    title: `How Clients Can Consult With
online?`,
    content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident iure ab nisi, magnam vitae. Laboriosam laborum suscipit recusandae officia laudantium, consectetur adipisci voluptates doloremque quisquam. Id rerum iusto reprehenderit assumenda!

`,
  },
  {
    count: "Five",
    title: `Can I share resources between
features?`,
    content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
`,
  },
]);
</script>

<style scoped>
section {
  background-color: white;
}
</style>
