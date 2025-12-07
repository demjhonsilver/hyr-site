<template>
  <footer class="bg-dark text-light py-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">

        </div>
        <div class="col-md-6 text-md-end">
          <div class="d-flex flex-column flex-md-row gap-3 justify-content-md-end">
            <RouterLink to="/" class="text-light text-decoration-none">Home</RouterLink>
            <RouterLink to="/features" class="text-light text-decoration-none">Features</RouterLink>
            <RouterLink to="/examples" class="text-light text-decoration-none">Examples</RouterLink>
          </div>
          <div class="mt-3">
            <a href="https://github.com/demjhonsilver/hyraft" class="text-light me-3" target="_blank">
              GitHub
            </a>
            <a href="#" class="text-light">Documentation</a>
          </div>
        </div>
      </div>
      <hr class="my-4">
      <div class="text-center">
          <p class="mb-0">&copy; 2025 Hyraft Framework. Built with Vue 3 & Bootstrap 5.3. Built by Demjhon Silver</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
