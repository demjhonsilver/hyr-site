<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold d-inline-flex align-items-center gap-2" to="/">
        <img src="/logo.png" alt="Hyraft" height="50" class="p-1">
        <span class="fs-5" style="color: #000080;">Hyraft</span>
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link text-dark" to="/">Home</RouterLink>
          </li>


          <li class="nav-item">
            <RouterLink class="nav-link text-dark" to="/getting-started/v1/overview">Getting Started</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-dark" to="/docs/v1/overview">Docs</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-dark" to="/reactive-frontend">Reactive Frontend</RouterLink>
          </li>


          <li class="nav-item">
            <RouterLink class="nav-link text-dark" to="/features">Features</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-dark" to="/examples">Examples</RouterLink>
          </li>

          <li class="nav-item">
            <a class="btn btn-primary ms-2" href="https://github.com/demjhonsilver/hyraft" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav-link.router-link-active {
  color: 000080 !important;
  font-weight: 600;
}

.nav-link:hover {
  color: #0d6efd !important;
}

/* Optional: Add shadow for depth */
.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>