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
        <router-link class="nav-link" :to="`/docs/${currentVersion}/overview`">
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { versions, availableVersions } from './docsVersions'

const route = useRoute()
const router = useRouter()
const currentVersion = ref('v1')

// Section label
const sectionLabel = computed(() => 'Documentation')

// Collapsible sections
const navSections = computed(() => {
  const v = currentVersion.value
  return [
    {
      id: 'engine',
      title: 'Engine',
      icon: 'bi bi-car-front-fill',
      links: [
        { text: 'Source', href: `/docs/${v}/engine#prerequisites` },
        { text: 'Port', href: `/docs/${v}/engine#gem-install` },
        { text: 'Circuit', href: `/docs/${v}/engine#gem-install` },
      ]
    },
    {
      id: 'adapters',
      title: 'Adapters',
      icon: 'bi bi-plug-fill', 
      links: [
        { text: 'Adapter-intake', href: `/docs/${v}/adapters#first-app` },
        { text: 'Adapter-exhaust', href: `/docs/${v}/adapters#project-structure` },
      ]
    },
    {
      id: 'routes',
      title: 'Routes',
      icon: 'bi bi-router',
      links: [
        { text: 'Web Routes', href: `/docs/${v}/routes#first-app` },
        { text: 'API Routes', href: `/docs/${v}/routes#project-structure` },
      ]
    },
    {
      id: 'servers',
      title: 'Servers',
      icon: 'bi bi-pc-display',
      links: [
        { text: 'Web Servers', href: `/docs/${v}/servers#first-app` },
        { text: 'API Servers', href: `/docs/${v}/servers#project-structure` },
      ]
    },

    {
      id: 'templates',
      title: 'Templates',
      icon: 'bi bi-file-earmark-code',
      links: [
        { text: '.hyr files', href: `/docs/${v}/templates#first-app` },
        { text: 'metadata html', href: `/docs/${v}/templates#project-structure` },
        { text: 'displayer html', href: `/docs/${v}/templates#basic-concepts` },
        { text: 'transmuter rb', href: `/docs/${v}/templates#basic-concepts` },
        { text: 'manifestor js', href: `/docs/${v}/templates#basic-concepts` },
        { text: 'assets', href: `/docs/${v}/templates#basic-concepts` },


      ]
    },
    {
      id: 'auth',
      title: 'Auth',
      icon: 'bi bi-person-vcard',
      links: [
        { text: 'Auth', href: `/docs/${v}/auth#first-app` },
        { text: 'OAuth2', href: `/docs/${v}/auth#project-structure` },
      ]
    },
    {
      id: 'api',
      title: 'API',
      icon: 'bi bi-braces',
      links: [
        { text: 'Json API', href: `/docs/${v}/api#first-app` },
      ]
    },
     {
      id: 'framework',
      title: 'Framework',
      icon: 'bi bi-collection-fill',
      links: [
        { text: 'framework', href: `/docs/${v}/framework#first-app` },
      ]
    },
    {
      id: 'infra',
      title: 'Infra',
      icon: 'bi bi-buildings',
      links: [
        { text: 'infra', href: `/docs/${v}/infra#first-app` },
      ]
    },
    {
      id: 'public',
      title: 'Public',
      icon: 'bi bi-journal',
      links: [
        { text: 'public', href: `/docs/${v}/public#first-app` },
      ]
    },
    {
      id: 'commands',
      title: 'Commands',
      icon: 'bi bi-terminal',
      links: [
        { text: 'CLI', href: `/docs/${v}/commands#first-app` },
        { text: 'command', href: `/docs/${v}/commands#project-structure` },
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: 'bi bi-rocket',
      links: [
        { text: 'Production  Deployment', href: `/docs/${v}/deployment#first-app` },
      ]
    },

    {
      id: 'root',
      title: 'Root files',
      icon: 'bi bi-book',
      links: [
        { text: 'boot.rb', href: `/docs/${v}/root#first-app` },
        { text: 'env.yml', href: `/docs/${v}/root#first-app` },
      ]
    },
    // add more sections if needed
  ]
})

// Switch version instantly
const switchVersion = (version) => {
  if (currentVersion.value === version) return
  currentVersion.value = version

  const segments = route.path.split('/').filter(Boolean) // ['docs','v1','overview']
  if (segments[0] === 'docs') segments[1] = version
  else segments.splice(1, 0, version)

  router.replace('/' + segments.join('/')) // instant update without duplicate version
}

// Initialize from URL
onMounted(() => {
  const segments = route.path.split('/').filter(Boolean)
  if (segments[0] === 'docs' && availableVersions.includes(segments[1])) {
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
.collapse .nav-link:hover { background-color: #d5e2f0; }

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
