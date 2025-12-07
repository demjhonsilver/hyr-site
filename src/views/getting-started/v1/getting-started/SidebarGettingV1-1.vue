<template>
  <div class="sidebar">
    <!-- Sidebar Header -->
    <div class="sidebar-header p-3 border-bottom bg-light">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="mb-0 fw-bold">
          <i class="bi bi-lightning-charge-fill text-primary me-2"></i>
          {{ sectionLabel }}
        </h5>

        <!-- Version Selector -->
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
                 @click.prevent="switchVersion(version)">
                <i class="bi me-2"
                   :class="currentVersion === version ? 'bi-check-circle-fill text-success' : versions[version].icon">
                </i>
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

      <!-- Version Info -->
      <div class="version-info">
        <span class="badge" :class="versions[currentVersion].badgeClass">
          {{ versions[currentVersion].status }}
        </span>
        <small class="text-muted ms-2">{{ versions[currentVersion].description }}</small>
      </div>
    </div>

    <!-- Scrollable Navigation -->
    <div class="sidebar-nav">
      <nav class="nav flex-column">
        <router-link class="nav-link" :to="`/getting-started/${currentVersion}/overview`" replace>
          Overview
        </router-link>

        <div class="nav-item" v-for="section in navSections" :key="section.id">
          <a class="nav-link" data-bs-toggle="collapse" :href="`#collapse-${section.id}`">
            <i :class="section.icon + ' me-2'"></i>
            {{ section.title }}
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" :id="`collapse-${section.id}`">
            <div class="nav flex-column ps-3">
              <router-link
                v-for="link in section.links"
                :key="link.text"
                class="nav-link"
                :to="link.href"
                replace
              >
                {{ link.text }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Footer -->
    <div class="sidebar-footer p-3 border-top bg-light">
      <small class="text-muted d-block mb-2">
        <i class="bi bi-question-circle me-1"></i>
        Need help?
      </small>
      <div class="d-flex gap-2">
        <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-discord"></i></a>
        <a href="https://github.com/hyraft/hyraft" class="btn btn-outline-dark btn-sm"><i class="bi bi-github"></i></a>
        <a href="#" class="btn btn-outline-info btn-sm"><i class="bi bi-file-text"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { versions, availableVersions } from './versions'

const route = useRoute()
const router = useRouter()
const currentVersion = ref('v1')

// Section label
const sectionLabel = computed(() => 'Getting Started')

// Collapsible sections
const navSections = computed(() => {
  const v = currentVersion.value
  return [
    {
      id: 'installation',
      title: 'Installation',
      icon: 'bi bi-download',
      links: [
        { text: 'Prerequisites', href: `/getting-started/${v}/installation#prerequisites` },
        { text: 'Gem Install', href: `/getting-started/${v}/installation#gem-install` },
      ]
    },
    {
      id: 'quickstart',
      title: 'Quick Start',
      icon: 'bi bi-rocket-takeoff',
      links: [
        { text: 'Your First App', href: `/getting-started/${v}/quickstart#first-app` },
        { text: 'Project Structure', href: `/getting-started/${v}/quickstart#project-structure` },
      ]
    },
    {
      id: 'database-setup',
      title: 'Database Setup',
      icon: 'bi bi-database',
      links: [
        { text: 'PostgreSQL', href: `/getting-started/${v}/database-setup#postgresql` },
        { text: 'MySQL', href: `/getting-started/${v}/database-setup#mysql` },
        { text: 'MariaDB', href: `/getting-started/${v}/database-setup#mariadb` },
      ]
    },

    {
      id: 'create-articles',
      title: 'Creating Articles',
      icon: 'bi bi-card-list',
      links: [
        { text: 'Database Config', href: `/getting-started/${v}/creating-articles#database-config` },
        { text: 'Assemble ( Scaffold )', href: `/getting-started/${v}/creating-articles#assemble` },
        { text: 'Engine ( Core / Model / CRUD)', href: `/getting-started/${v}/creating-articles#engine` },
        { text: 'Data Gateway Sequel ( DB )', href: `/getting-started/${v}/creating-articles#data-gateway-sequel` },
        { text: 'Web Adapter ( Controller )', href: `/getting-started/${v}/creating-articles#web-adapter` },
        { text: 'API Adapter ( Controller )', href: `/getting-started/${v}/creating-articles#api-adapter` },
        { text: 'Routes', href: `/getting-started/${v}/creating-articles#routes` },
        { text: 'Template ( Articles ) index.hyr', href: `/getting-started/${v}/creating-articles#templates-index` },
        { text: 'Template ( Articles ) new.hyr', href: `/getting-started/${v}/creating-articles#templates-new` },
        { text: 'Template ( Articles ) edit.hyr', href: `/getting-started/${v}/creating-articles#templates-edit` },
        { text: 'Template ( Articles ) show.hyr', href: `/getting-started/${v}/creating-articles#templates-show` },
        { text: 'Template ( Articles ) 404.hyr', href: `/getting-started/${v}/creating-articles#templates-404` },
        { text: 'Run Server', href: `/getting-started/${v}/creating-articles#run-server` },
        { text: 'Preloader ( Super Fast )', href: `/getting-started/${v}/creating-articles#preloader` },
        { text: 'Test', href: `/getting-started/${v}/creating-articles#test` },
        { text: 'Assets', href: `/getting-started/${v}/creating-articles#assets` },
        { text: 'Change Server', href: `/getting-started/${v}/creating-articles#change-server` },
      ]
    },


    // Add more sections as needed
  ]
})

// Switch version instantly
const switchVersion = (version) => {
  if (currentVersion.value === version) return
  currentVersion.value = version

  const segments = route.path.split('/').filter(Boolean) // e.g., ['getting-started','v1','overview']
  
  // Replace version segment
  if (segments[0] === 'getting-started' && segments[1].startsWith('v')) {
    segments[1] = version
  } else {
    segments.splice(1, 0, version)
  }

  router.replace('/' + segments.join('/')) // instant update without duplicating version
}

// Initialize from URL
onMounted(() => {
  const segments = route.path.split('/').filter(Boolean)
  if (segments[0] === 'getting-started' && availableVersions.includes(segments[1])) {
    currentVersion.value = segments[1]
  }
})
</script>

<style scoped>
.sidebar {
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

.sidebar-header, .sidebar-footer { flex-shrink: 0; }
.version-info { font-size: 0.8rem; }
.sidebar-nav { flex: 1; overflow-y: auto; padding: 1rem 0; }

.nav-link { color: #495057; padding: 0.5rem 1rem; text-decoration: none; transition: all 0.2s; }
.nav-link:hover { background-color: #e9ecef; }
.nav-link.active { background-color: #0d6efd; color: white; font-weight: 500; }
.collapse .nav-link { padding-left: 2rem; font-size: 0.875rem; }
.collapse .nav-link:hover { background-color: rgb(213, 216, 219); }

.dropdown-toggle { font-size: 0.8rem; padding: 0.25rem 0.5rem; }
.dropdown-item.active { background-color: #0d6efd; color: white; }

.sidebar-nav::-webkit-scrollbar { width: 6px; }
.sidebar-nav::-webkit-scrollbar-track { background: #f1f1f1; }
.sidebar-nav::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 3px; }
.sidebar-nav::-webkit-scrollbar-thumb:hover { background: #a8a8a8; }

@media (max-width: 1000px) {
  .sidebar { position: static; width: 100%; height: auto; top: auto; left: auto; }
}
</style>
