<template>
  <base-section :header="true">
    <template #headerTitle> Blogs </template>
    <template #headerSub> Our Latest News </template>
    <template #headerParagraph>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form.
    </template>
    <template #sectionBody>
      <div class="row">
        <div
          class="col-md-6 mb-4 mb-lg-0 col-lg jump-in-element"
          v-for="(blog, index) in blogsData"
          :key="index"
          :style="{ opacity: 0, 'animation-delay': `0.${index}s` }"
        >
          <blog-card
            :author-img="blog.authorImg"
            :blog-img="blog.blogImg"
            :date="blog.date"
            :description="blog.description"
            :author-name="blog.authorName"
            :read-time="blog.readTime"
            :title="blog.title"
            :tag="blog.tag"
          >
          </blog-card>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import BlogCard from "../BlogCard.vue";
import { ref } from "vue";

const blogsData = ref([
  {
    blogImg: "/src/assets/blogs/blog-1.jpg",
    tag: "Blog",
    title: "Boost your conversion rate",
    description:
      "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    authorImg: "/src/assets/authors/comment1.jpg",
    authorName: "Roel Aufderhar",
    date: "Mar 15,2023",
    readTime: 5,
  },
  {
    blogImg: "/src/assets/blogs/blog-2.jpg",
    tag: "Video",
    title: "How to use search engine",
    description:
      "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    authorImg: "/src/assets/authors/comment2.jpg",
    authorName: "Jenifer Zuliya",
    date: "Feb 10,2023",
    readTime: 7,
  },
  {
    blogImg: "/src/assets/blogs/blog-3.jpg",
    tag: "Marketing",
    title: "Awesome ways to boost sales",
    description:
      "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    authorImg: "/src/assets/authors/comment3.jpg",
    authorName: "Roel Aufderhar",
    date: "Jan 20,2023",
    readTime: 6,
  },
]);
</script>
