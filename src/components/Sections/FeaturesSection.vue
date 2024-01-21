<template>
  <base-section :header="true" :lg-container="true">
    <template #headerTitle> Features </template>
    <template #headerSub>
      Your Experience Gets Better And Better Over Time.
    </template>
    <template #headerParagraph
      >There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form.</template
    >
    <template #sectionBody>
      <div class="col-12">
        <div class="row g-4">
          <div class="col-4">
            <div class="card p-3 feature-card">
              <div class="card-body d-flex flex-column align-items-start gap-2">
                <i class="lni icon-badge mb-4 lni-cloud-upload"></i>
                <h3 class="text-tertiary">Push To Deploy</h3>
                <p class="text-black-50">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card p-3 feature-card">
              <div class="card-body d-flex flex-column align-items-start gap-2">
                <i class="lni icon-badge mb-4 lni-lock"></i>
                <h3 class="text-tertiary">SSL Certificates</h3>
                <p class="text-black-50">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card p-3 feature-card">
              <div class="card-body d-flex flex-column align-items-start gap-2">
                <i class="lni icon-badge mb-4 lni-reload"></i>
                <h3 class="text-tertiary">Simple Queues</h3>
                <p class="text-black-50">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card p-3 feature-card">
              <div class="card-body d-flex flex-column align-items-start gap-2">
                <i class="lni icon-badge mb-4 lni-shield"></i>
                <h3 class="text-tertiary">Advanced Security</h3>
                <p class="text-black-50">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card p-3 feature-card">
              <div class="card-body d-flex flex-column align-items-start gap-2">
                <i class="lni icon-badge mb-4 lni-cog"></i>
                <h3 class="text-tertiary">Powerful API</h3>
                <p class="text-black-50">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card p-3 feature-card">
              <div class="card-body d-flex flex-column align-items-start gap-2">
                <i class="lni icon-badge mb-4 lni-layers"></i>
                <h3 class="text-tertiary">Database Backups</h3>
                <p class="text-black-50">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </base-section>
</template>

<style>
.feature-card {
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.1);
  transform: translateY(-7px);
}

.feature-card > .card-body > h3 {
  font-weight: 500;
  font-size: 1.2rem;
  font-family: inter, sans-serif;
}
</style>
