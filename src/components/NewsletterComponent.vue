<template>
  <div class="card p-4 newsletter">
    <div class="card-body d-flex align-items-center">
      <div class="newsletter-text">
        <h4 class="fw-bold">Subscribe To Our Newsletter</h4>
        <p>
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
      </div>
      <form class="newsletter-form ms-auto d-flex align-items-center gap-2">
        <input
          type="text"
          placeholder="Your email address"
          name="email"
          autocomplete="true"
        />
        <base-button :button="true" button-title="Subscribe">
          <template #content> Subscribe </template>
        </base-button>
      </form>
    </div>
  </div>
</template>

<style scoped>
section .newsletter {
  background-color: transparent;
  color: #d2d6dc;
  border: 2px solid rgba(238, 238, 238, 0.171);
}

.newsletter-text h4 {
  font-size: 1.1rem;
}

.newsletter-text p {
  font-size: 1rem;
}

form > input {
  border-radius: 6px;
  background-color: #fff3;
  border: none;
  color: #fff;
  outline: none;
  font-family: inherit;
  font-size: 0.9rem;
  width: 20rem;
  padding: 0.8rem 1.2rem;
}

form > input::placeholder {
  color: #fff;
}

form > button {
  background-color: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
}

form > button:hover {
  background-color: #fff;
  color: var(--color-primary);
}
</style>
