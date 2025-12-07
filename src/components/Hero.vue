<template>
  <section class="hero-section bg-gradient-warning text-white py-5 mt-5">
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="display-6 fw-bold mb-4">
            Explicit Architecture.<span style="color:orange; "> Be Clear</span>.
          </h1>
          <p class="lead mb-4">
  Hyraft is a full-stack Ruby web framework that combines high-performance hexagonal architecture with modern reactive frontend capabilities. Build scalable applications with clean separation of concerns and rich client-side interactivity.
          </p>
          <div class="d-flex gap-3 flex-wrap">
            <RouterLink to="/getting-started" class="btn btn-warning btn-lg fw-bold">
              Get Started
            </RouterLink>
            <RouterLink to="/examples" class="btn btn-outline-light btn-lg">
              View Examples
            </RouterLink>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <div class="hero-stats p-4 bg-dark bg-opacity-25 rounded">
            <div class="row text-center">
              <div class="col-4">
                <h3 class="text-warning fw-bold">37-55ms</h3>
                <small>Page Renders</small>
              </div>
              <div class="col-4">
                <h3 class="text-warning fw-bold">Precompiler</h3>
                <small>Speed. Memory. File size.</small>
              </div>
              <div class="col-4">
                <h3 class="text-warning fw-bold">18x faster</h3>
                <small>Enterprise-grade performance</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero-section {
  background-color: #000080;
  background: linear-gradient(135deg, #667eea 0%, #000080 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-stats {
  backdrop-filter: blur(10px);
}
</style>