<!-- components/getting-started/Sidebar.vue -->
<template>
  <div class="getting-started-sidebar">
    <!-- Sidebar Header -->
    <div class="sidebar-header p-3 border-bottom bg-light">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="mb-0 fw-bold">
          <i class="bi bi-lightning-charge-fill text-primary me-2"></i>
          Getting Started
        </h5>
        
        <!-- Dynamic Version Selector -->
        <div class="dropdown">
          <button class="btn btn-sm btn-outline-secondary dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
            <i class="bi bi-tag me-1"></i>{{ currentVersion }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><h6 class="dropdown-header">Version</h6></li>
            <li v-for="version in availableVersions" :key="version">
              <a class="dropdown-item" 
                 :class="{ 'active': currentVersion === version }"
                 @click="switchVersion(version)">
                <i class="bi me-2" 
                   :class="currentVersion === version ? 'bi-check-circle-fill text-success' : versions[version].icon"></i>
                {{ versions[version].name }}
              </a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <a class="dropdown-item" href="https://github.com/hyraft/hyraft/releases" target="_blank">
                <i class="bi bi-journal-text me-2"></i>
                Release Notes
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Dynamic Version Info Badge -->
      <div class="version-info">
        <span class="badge" :class="versions[currentVersion].badgeClass">
          {{ versions[currentVersion].status }}
        </span>
        <small class="text-muted ms-2">{{ versions[currentVersion].description }}</small>
      </div>
    </div>

    <!-- Rest of your sidebar content remains exactly the same -->
    <div class="sidebar-nav">
      <nav class="nav flex-column">
        <!-- Overview -->
        <a class="nav-link" :href="`/${currentVersion}/getting-started/overview`">
          <i class="bi bi-house me-2"></i>
          Overview
        </a>

        <!-- Installation - Collapsible -->
        <div class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" :href="`#${currentVersion}-collapseInstallation`">
            <i class="bi bi-download me-2"></i>
            Installation
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" :id="`${currentVersion}-collapseInstallation`">
            <div class="nav flex-column ps-3">
              <a class="nav-link" :href="`/${currentVersion}/getting-started/installation#prerequisites`">Prerequisites</a>
              <a class="nav-link" :href="`/${currentVersion}/getting-started/installation#quick-install`">Quick Install</a>
              <a class="nav-link" :href="`/${currentVersion}/getting-started/installation#manual-setup`">Manual Setup</a>
              <a class="nav-link" :href="`/${currentVersion}/getting-started/installation#troubleshooting`">Troubleshooting</a>
            </div>
          </div>
        </div>

        <!-- Keep all your existing menu items exactly as they are -->
        <!-- Quick Start, Core Concepts, Examples, API Reference, Deployment, Resources -->
        
      </nav>
    </div>

    <!-- Sidebar Footer (unchanged) -->
    <div class="sidebar-footer p-3 border-top bg-light">
      <small class="text-muted d-block mb-2">
        <i class="bi bi-question-circle me-1"></i>
        Need help?
      </small>
      <div class="d-flex gap-2">
        <a href="#" class="btn btn-outline-primary btn-sm">
          <i class="bi bi-discord"></i>
        </a>
        <a href="https://github.com/hyraft/hyraft" class="btn btn-outline-dark btn-sm">
          <i class="bi bi-github"></i>
        </a>
        <a href="#" class="btn btn-outline-info btn-sm">
          <i class="bi bi-file-text"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { versions, availableVersions } from './versions'

const route = useRoute()
const router = useRouter()
const currentVersion = ref('v1')

// Switch version function
const switchVersion = (version) => {
  if (currentVersion.value !== version) {
    currentVersion.value = version
    
    // Get current path without version prefix
    const currentPath = route.path.replace(/^\/v\d+\//, '/')
    
    // Navigate to same page in new version
    const newPath = `/${version}${currentPath}`
    router.push(newPath)
    
    // Emit event for parent components
    window.dispatchEvent(new CustomEvent('sidebarVersionChanged', { 
      detail: { version }
    }))
  }
}

// Initialize version from current route
onMounted(() => {
  const versionFromPath = route.path.split('/')[1]
  if (versionFromPath && availableVersions.includes(versionFromPath)) {
    currentVersion.value = versionFromPath
  }
  
  // Listen for version changes from navbar
  window.addEventListener('versionChanged', (event) => {
    currentVersion.value = event.detail.to
  })
})
</script>

<style scoped>
/* Your existing styles remain exactly the same */
.getting-started-sidebar {
  height: 100vh;
  background: white;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 76px;
  left: 0;
  width: 300px;
  z-index: 1000;
}

.sidebar-header {
  flex-shrink: 0;
}

.version-info {
  font-size: 0.8rem;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
}

/* ... rest of your existing styles ... */
</style>

<style scoped>
.getting-started-sidebar {
  height: 100vh;
  background: white;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 76px; /* Account for navbar height */
  left: 0;
  width: 300px; /* Slightly wider for version selector */
  z-index: 1000;
}

.sidebar-header {
  flex-shrink: 0;
}

.version-info {
  font-size: 0.8rem;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
}

.sidebar-footer {
  flex-shrink: 0;
}

.nav-link {
  color: #495057;
  padding: 0.5rem 1rem;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: #e9ecef;
  color: #495057;
}

.nav-link[aria-expanded="true"] {
  background-color: #e7f1ff;
  color: #0d6efd;
  font-weight: 500;
}

.nav-link.active {
  background-color: #0d6efd;
  color: white;
  font-weight: 500;
}

.collapse .nav-link {
  padding: 0.375rem 1rem 0.375rem 2rem;
  font-size: 0.875rem;
}

.collapse .nav-link:hover {
  background-color: #f8f9fa;
}

/* Version dropdown styles */
.dropdown-toggle {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
}

.dropdown-item.active {
  background-color: #0d6efd;
  color: white;
}

/* Scrollbar styling */
.sidebar-nav::-webkit-scrollbar {
  width: 6px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Mobile adjustments */
@media (max-width: 1000px) {
  .getting-started-sidebar {
    position: static;
    width: 100%;
    height: auto;
    top: auto;
    left: auto;
  }
}
</style>