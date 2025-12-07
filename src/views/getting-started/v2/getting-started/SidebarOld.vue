<!-- components/getting-started/Sidebar.vue -->
<template>
  <div class="getting-started-sidebar">
    <!-- Sidebar Header -->
    <div class="sidebar-header p-3 border-bottom bg-light">
      <h5 class="mb-0 fw-bold">
        <i class="bi bi-lightning-charge-fill text-primary me-2"></i>
        Getting Started
      </h5>
    </div>

    <!-- Scrollable Navigation -->
    <div class="sidebar-nav">
      <nav class="nav flex-column">
        <!-- Overview -->
        <a class="nav-link" href="/getting-started">
          <i class="bi bi-house me-2"></i>
          Overview
        </a>

        <!-- Installation - Collapsible -->
        <div class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#collapseInstallation">
            <i class="bi bi-download me-2"></i>
            Installation
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" id="collapseInstallation">
            <div class="nav flex-column ps-3">
              <a class="nav-link" href="/getting-started/installation#prerequisites">Prerequisites</a>
              <a class="nav-link" href="/getting-started/installation#quick-install">Quick Install</a>
              <a class="nav-link" href="/getting-started/installation#manual-setup">Manual Setup</a>
              <a class="nav-link" href="/getting-started/installation#troubleshooting">Troubleshooting</a>
            </div>
          </div>
        </div>

        <!-- Quick Start - Collapsible -->
        <div class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#collapseQuickStart">
            <i class="bi bi-rocket-takeoff me-2"></i>
            Quick Start
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" id="collapseQuickStart">
            <div class="nav flex-column ps-3">
              <a class="nav-link" href="/getting-started/quickstart#first-app">Your First App</a>
              <a class="nav-link" href="/getting-started/quickstart#project-structure">Project Structure</a>
              <a class="nav-link" href="/getting-started/quickstart#basic-concepts">Basic Concepts</a>
            </div>
          </div>
        </div>

        <!-- Core Concepts - Collapsible -->
        <div class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#collapseConcepts">
            <i class="bi bi-journal-text me-2"></i>
            Core Concepts
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" id="collapseConcepts">
            <div class="nav flex-column ps-3">
              <a class="nav-link" href="/getting-started/concepts#components">Components</a>
              <a class="nav-link" href="/getting-started/concepts#routing">Routing</a>
              <a class="nav-link" href="/getting-started/concepts#state-management">State Management</a>
              <a class="nav-link" href="/getting-started/concepts#ssr">Server-Side Rendering</a>
            </div>
          </div>
        </div>

        <!-- Examples - Collapsible -->
        <div class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#collapseExamples">
            <i class="bi bi-code-slash me-2"></i>
            Examples
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" id="collapseExamples">
            <div class="nav flex-column ps-3">
              <a class="nav-link" href="/getting-started/examples#counter">Counter App</a>
              <a class="nav-link" href="/getting-started/examples#todo-list">Todo List</a>
              <a class="nav-link" href="/getting-started/examples#crud-app">CRUD Application</a>
              <a class="nav-link" href="/getting-started/examples#real-time">Real-time Dashboard</a>
            </div>
          </div>
        </div>

        <!-- API Reference - Collapsible -->
        <div class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#collapseApi">
            <i class="bi bi-cpu me-2"></i>
            API Reference
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" id="collapseApi">
            <div class="nav flex-column ps-3">
              <a class="nav-link" href="/getting-started/api#components">Components API</a>
              <a class="nav-link" href="/getting-started/api#directives">Directives</a>
              <a class="nav-link" href="/getting-started/api#plugins">Plugins</a>
              <a class="nav-link" href="/getting-started/api#utilities">Utilities</a>
            </div>
          </div>
        </div>

        <!-- Deployment - Collapsible -->
        <div class="nav-item">
          <a class="nav-link" data-bs-toggle="collapse" href="#collapseDeployment">
            <i class="bi bi-cloud-upload me-2"></i>
            Deployment
            <i class="bi bi-chevron-down float-end"></i>
          </a>
          <div class="collapse" id="collapseDeployment">
            <div class="nav flex-column ps-3">
              <a class="nav-link" href="/getting-started/deployment#production">Production Build</a>
              <a class="nav-link" href="/getting-started/deployment#docker">Docker</a>
              <a class="nav-link" href="/getting-started/deployment#ci-cd">CI/CD</a>
              <a class="nav-link" href="/getting-started/deployment#monitoring">Monitoring</a>
            </div>
          </div>
        </div>

        <!-- Resources -->
        <a class="nav-link" href="/getting-started/resources">
          <i class="bi bi-link-45deg me-2"></i>
          Resources
        </a>
      </nav>
    </div>

    <!-- Sidebar Footer -->
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
  width: 280px;
  z-index: 1000;
}

.sidebar-header {
  flex-shrink: 0;
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