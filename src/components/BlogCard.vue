<template>
  <div class="card p-0 overflow-hidden blog-card">
    <div class="overflow-hidden">
      <img class="card-img-top blog-img" :src="blogImg" />
    </div>
    <div class="card-body d-flex flex-column blog-card__body">
      <h4 class="tag text-primary">{{ tag }}</h4>
      <h3 class="title mb-3">{{ title }}</h3>
      <p class="description text-black-50 mb-4">{{ description }}</p>
      <div class="author d-flex align-items-center gap-3">
        <img class="author-img rounded-circle" :src="authorImg" />
        <div class="author-details text-black-50">
          <h5 class="author-name mb-1">{{ authorName }}</h5>
          <p class="m-0">
            {{ date }}&nbsp; &#8226; <span>{{ readTime }} min read</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blogImg: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  readTime: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.blog-card {
  border: 1px solid #eee;
  box-shadow: 1px 3px 12px 0px rgba(0, 0, 0, 0.1);
}
.blog-img {
  transition: all 0.3s ease;
}
.card:hover .blog-img {
  transform: scale(1.1);
}

.tag {
  font-size: 1rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
}

.blog-card__body {
  padding: 1.8rem;
}

.author-img {
  width: 3.5rem;
}

.author-name {
  font-size: 0.9rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.author-details p {
  font-size: 0.85rem;
  font-weight: 500;
}

.author-details p span {
  margin-left: 0.2rem;
}

.author-name:hover,
.title:hover {
  color: var(--color-primary);
}
</style>
