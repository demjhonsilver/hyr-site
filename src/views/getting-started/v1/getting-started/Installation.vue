<!-- views/getting-started/Installation.vue -->
<template>
  <div class="installation-page">
    <!-- Page Header -->
    <div class="page-header mb-5">
      <h1 class="display-4 fw-bold text-primary">Installation</h1>
      <p class="lead text-muted">Get Hyraft up and running on your system in minutes.</p>
    </div>

    <!-- Prerequisites Section -->
    <section id="prerequisites" class="mb-5">
      <div class="d-flex align-items-center mb-4">
        <h2 class="h3 fw-bold me-3">Prerequisites</h2>
        <span class="badge bg-primary fs-6">Required</span>
      </div>
      
      <div class="alert alert-info">
        <i class="bi bi-info-circle me-2"></i>
        Make sure you have the following installed before proceeding with Hyraft installation.
      </div>

      <div class="row g-4">
        <!-- Ruby Requirement -->
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="requirement-icon bg-danger bg-opacity-10 text-danger rounded-circle me-3">
                  <i class="bi bi-gem fs-4"></i>
                </div>
                <h5 class="card-title mb-0">Ruby 3.4+</h5>
              </div>
              <p class="card-text text-muted">Hyraft is built on Ruby and requires version 3.4 or higher.</p>
              
              <div class="requirement-steps">
                <h6 class="fw-semibold mb-2">Check Installation:</h6>
                <div class="code-block bg-dark text-light p-3 rounded mb-3">
                  <code class="text-light">ruby --version</code>
                </div>
                
                <h6 class="fw-semibold mb-2">Install Ruby:</h6>
                <div class="btn-group-vertical">
                  <a href="https://www.ruby-lang.org/en/documentation/installation/" 
                     class="btn btn-outline-primary btn-sm text-start" target="_blank">
                    <i class="bi bi-download me-2"></i>
                    Official Ruby Installer
                  </a>
                  <a href="https://github.com/rbenv/rbenv" 
                     class="btn btn-outline-secondary btn-sm text-start" target="_blank">
                    <i class="bi bi-github me-2"></i>
                    rbenv (Recommended)
                  </a>
                  <a href="https://rvm.io/" 
                     class="btn btn-outline-secondary btn-sm text-start" target="_blank">
                    <i class="bi bi-tools me-2"></i>
                    RVM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Node.js Requirement -->
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="requirement-icon bg-success bg-opacity-10 text-success rounded-circle me-3">
                  <i class="bi bi-file-code fs-4"></i>
                </div>
                <h5 class="card-title mb-0">Node.js 20+</h5>
              </div>
              <p class="card-text text-muted">Required for asset compilation and JavaScript tooling.</p>
              
              <div class="requirement-steps">
                <h6 class="fw-semibold mb-2">Check Installation:</h6>
                <div class="code-block bg-dark text-light p-3 rounded mb-3">
                  <code class="text-light">node --version</code>
                </div>
                
                <h6 class="fw-semibold mb-2">Install Node.js:</h6>
                <div class="btn-group-vertical">
                  <a href="https://nodejs.org/" 
                     class="btn btn-outline-primary btn-sm text-start" target="_blank">
                    <i class="bi bi-download me-2"></i>
                    Official Node.js
                  </a>
                  <a href="https://github.com/nvm-sh/nvm" 
                     class="btn btn-outline-secondary btn-sm text-start" target="_blank">
                    <i class="bi bi-github me-2"></i>
                    nvm (Recommended)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Database Requirement -->
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="requirement-icon bg-info bg-opacity-10 text-info rounded-circle me-3">
                  <i class="bi bi-database fs-4"></i>
                </div>
                <h5 class="card-title mb-0">Database</h5>
              </div>
              <p class="card-text text-muted">Choose one of the supported databases for your application.</p>
              
              <div class="requirement-steps">
                <h6 class="fw-semibold mb-2">Supported Databases:</h6>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge bg-primary">PostgreSQL</span>
                  <span class="badge bg-success">MySQL</span>
                  <span class="badge bg-warning text-dark">MariaDB</span>
                </div>
                
                <h6 class="fw-semibold mb-2">Recommended:</h6>
                <div class="btn-group-vertical">
                  <a href="https://www.postgresql.org/download/" 
                     class="btn btn-outline-primary btn-sm text-start" target="_blank">
                    <i class="bi bi-database me-2"></i>
                    PostgreSQL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


<!-- VS Code Extension Requirement -->
<div class="col-md-6">
  <div class="card h-100 border-0 shadow-sm">
    <div class="card-body">
      <div class="d-flex align-items-center mb-3">
        <div class="requirement-icon bg-primary bg-opacity-10 text-primary rounded-circle me-3">
          <i class="bi bi-code-square fs-4"></i>
        </div>
        <h5 class="card-title mb-0">VS Code Extension</h5>
      </div>
      <p class="card-text text-muted">Enhanced development experience with Hyraft extension for VS Code.</p>
      
      <div class="requirement-steps">
        <h6 class="fw-semibold mb-2">Install from VS Code:</h6>
        <div class="code-block bg-dark text-light p-3 rounded mb-3">
          <code class="text-light">
            <span class="text-info"># Open VS Code then press (ctrl + shift + x)</span><br>
            <span class="text-info"># Search for "Hyraft"</span><br>
            <span class="text-info"># Click Install</span>
          </code>
        </div>
        
        <h6 class="fw-semibold mb-2">Quick Install:</h6>
<div class="btn-group-vertical">
  <a href="vscode:extension/hyraft.hyraft" 
     class="btn btn-success btn-sm text-start">
    <i class="bi bi-download me-2"></i>
    Install Hyraft Extension
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=hyraft.hyraft" 
     target="_blank" 
     class="btn btn-outline-primary btn-sm text-start">
    <i class="bi bi-box-arrow-up-right me-2"></i>
    View in Marketplace
  </a>
</div>
        
        <div class="mt-3">
          <small class="text-muted">
            <i class="bi bi-info-circle me-1"></i>
           Type hyr to display the snippet templates.
          </small>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>



    </section>

    <!-- Gem Install Section -->
    <section id="gem-install" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Open: Command Prompt / Terminal</h2>
      <!-- Quick install content will go here -->
                <div class="code-block bg-danger text-light p-3 rounded mb-3">
                    <code class="text-light" style="font-size: 18px;"><i class="bi bi-gem me-2"></i>gem install hyraft --pre</code>
                </div>


    </section>

    <!-- Manual Setup Section -->
    <section id="manual-setup" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Check version</h2>
      <!-- Manual setup content will go here -->
      <div class="bg-dark text-light" style="padding: 10px;">
    hyraft version
      </div>

      <div class="bg-secondary text-light" style="padding: 10px;">
     hyraft -v
      </div>

    </section>

    <!-- Troubleshooting Section -->
    <section id="troubleshooting">
      <h2 class="h3 fw-bold mb-4">Troubleshooting</h2>
      <!-- Troubleshooting content will go here -->
      <div class="alert alert-info">
        <i class="bi bi-lightbulb me-2"></i>
        Having issues? Check the troubleshooting guide after completing prerequisites.
      </div>
    </section>

    <!-- Navigation Helpers -->
    <div class="d-flex justify-content-between mt-5 pt-4 border-top">
      <router-link to="/getting-started/v1/overview" class="btn btn-outline-primary">
        <i class="bi bi-arrow-left me-2"></i>
        Back to Overview
      </router-link>
      <router-link to="/getting-started/v1/quickstart" class="btn btn-primary">
        Next: Quick Start
        <i class="bi bi-arrow-right ms-2"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// VS Code Extension installation
const installVSCodeExtension = () => {
  // Try to open VS Code directly
  const vscodeUrl = 'vscode:extension/hyraft.hyraft-extension'
  
  // Open VS Code
  window.open(vscodeUrl, '_blank')
  
  // Fallback instructions
  setTimeout(() => {
    const fallbackMessage = `
If VS Code didn't open automatically:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Hyraft"
4. Click Install

Features included:
• Syntax highlighting for .hr files
• Code snippets and templates
• Project scaffolding
• Debugging support
    `
    
    if (confirm('Having trouble? Show detailed instructions?')) {
      alert(fallbackMessage)
    }
  }, 2000)
}

// Optional: Check if VS Code is installed
const checkVSCodeInstalled = () => {
  // This is a simple check - in a real app you might want more sophisticated detection
  const isVSCodeInstalled = navigator.userAgent.includes('Code') || 
                           document.referrer.includes('vscode-webview://')
  
  return isVSCodeInstalled
}
</script>

<style scoped>
.installation-page {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 1.5rem;
}

.requirement-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.code-block {
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 0.875rem;
}

.code-block code {
  background: none;
  border: none;
  padding: 0;
}

.requirement-steps {
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
}

.btn-group-vertical .btn {
  margin-bottom: 0.5rem;
  text-align: left;
  display: flex;
  align-items: center;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .requirement-icon {
    width: 40px;
    height: 40px;
  }
  
  .requirement-icon i {
    font-size: 1.25rem;
  }
}
</style>