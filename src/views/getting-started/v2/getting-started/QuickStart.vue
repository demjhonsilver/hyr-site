<!-- views/getting-started/QuickStart.vue -->
<template>
  <div class="quickstart-page">
    <!-- Page Header -->
    <div class="page-header mb-5">
      <h1 class="display-4 fw-bold text-primary">Quick Start</h1>
      <p class="lead text-muted">Build your first Hyraft application in under 5 minutes.</p>
    </div>

    <!-- First App Section -->
    <section id="first-app" class="mb-5">
      <div class="d-flex align-items-center mb-4">
        <h2 class="h3 fw-bold me-3">Your First App</h2>
        <span class="badge bg-success fs-6">5 min</span>
      </div>
      
      <div class="alert alert-success">
        <i class="bi bi-rocket-takeoff me-2"></i>
        Follow these steps to create and run your first Hyraft application.
      </div>

      <!-- Step 1 -->
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <div class="d-flex align-items-center">
            <div class="step-number bg-primary text-white rounded-circle me-3">1</div>
            <h5 class="mb-0">Create a New Project</h5>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Use the Hyraft CLI to generate a new project structure:</p>
          <div class="code-block bg-dark text-light p-3 rounded mb-3">
            <code class="text-light">hyraft new my-app</code>
          </div>
          <p class="text-muted small">This creates a new directory called <code>my-app</code> with all the necessary files and structure.</p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <div class="d-flex align-items-center">
            <div class="step-number bg-primary text-white rounded-circle me-3">2</div>
            <h5 class="mb-0">Navigate to Project Directory</h5>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Change into your new project directory:</p>
          <div class="code-block bg-dark text-light p-3 rounded mb-3">
            <code class="text-light">cd my-app</code>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <div class="d-flex align-items-center">
            <div class="step-number bg-primary text-white rounded-circle me-3">3</div>
            <h5 class="mb-0">Install Dependencies</h5>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Install the required dependencies:</p>
          <div class="code-block bg-dark text-light p-3 rounded mb-3">
            <code class="text-light">bundle install && npm install</code>
          </div>
          <p class="text-muted small">This installs both Ruby gems and Node.js packages.</p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <div class="d-flex align-items-center">
            <div class="step-number bg-primary text-white rounded-circle me-3">4</div>
            <h5 class="mb-0">Start Development Server</h5>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Launch the development server:</p>
          <div class="code-block bg-dark text-light p-3 rounded mb-3">
            <code class="text-light">hyraft server</code>
          </div>
          <div class="alert alert-info">
            <i class="bi bi-info-circle me-2"></i>
            Your app will be available at <strong>http://localhost:3000</strong>
          </div>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <div class="d-flex align-items-center">
            <div class="step-number bg-primary text-white rounded-circle me-3">5</div>
            <h5 class="mb-0">Create Your First Component</h5>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Create a simple counter component:</p>
          <div class="code-block bg-dark text-light p-3 rounded mb-3">
            <code class="text-light">
              <span class="text-info"># Create app/components/counter.hyr</span><br>
              &lt;displayer html&gt;<br>
              &nbsp;&nbsp;&lt;div class="text-center"&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Counter: &lt;span data-neon="count"&gt;0&lt;/span&gt;&lt;/h3&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btn btn-primary" data-pulse="counter.increment"&gt;Increment&lt;/button&gt;<br>
              &nbsp;&nbsp;&lt;/div&gt;<br>
              &lt;/displayer&gt;<br>
              <br>
              &lt;manifestor js&gt;<br>
              &nbsp;&nbsp;neonPulse.pulse('counter', {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;increment: function() {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const count = neonPulse.neon('count', 0)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count.value++<br>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br>
              &nbsp;&nbsp;})<br>
              &lt;/manifestor&gt;
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Structure Section -->
    <section id="project-structure" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Project Structure</h2>
      
      <div class="card border-0 shadow-sm">
        <div class="card-header bg-light">
          <h5 class="mb-0">
            <i class="bi bi-folder me-2"></i>
            Generated Project Structure
          </h5>
        </div>
        <div class="card-body">
          <div class="file-tree">
            <div class="file-item">
              <i class="bi bi-folder-fill text-warning me-2"></i>
              <strong>my-app/</strong>
              <div class="file-subtree ms-4">
                <div class="file-item">
                  <i class="bi bi-folder-fill text-info me-2"></i>
                  app/
                  <div class="file-subtree ms-4">
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      components/
                    </div>
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      controllers/
                    </div>
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      models/
                    </div>
                  </div>
                </div>
                <div class="file-item">
                  <i class="bi bi-folder-fill text-info me-2"></i>
                  config/
                </div>
                <div class="file-item">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  package.json
                </div>
                <div class="file-item">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  Gemfile
                </div>
                <div class="file-item">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  README.md
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Basic Concepts Section -->
    <section id="basic-concepts" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Basic Concepts</h2>
      
      <div class="row g-4">
        <!-- Components -->
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="concept-icon bg-primary bg-opacity-10 text-primary rounded-circle me-3">
                  <i class="bi bi-puzzle fs-4"></i>
                </div>
                <h5 class="card-title mb-0">Components</h5>
              </div>
              <p class="card-text text-muted">Reusable UI pieces that combine HTML, Ruby logic, and JavaScript reactivity in single .hyr files.</p>
              <div class="mt-3">
                <span class="badge bg-light text-dark">.hyr files</span>
                <span class="badge bg-light text-dark">Reusable</span>
                <span class="badge bg-light text-dark">Self-contained</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Signals -->
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="concept-icon bg-success bg-opacity-10 text-success rounded-circle me-3">
                  <i class="bi bi-lightning-charge fs-4"></i>
                </div>
                <h5 class="card-title mb-0">Signals</h5>
              </div>
              <p class="card-text text-muted">Reactive state management with automatic DOM updates when data changes.</p>
              <div class="mt-3">
                <span class="badge bg-light text-dark">Reactive</span>
                <span class="badge bg-light text-dark">Auto-update</span>
                <span class="badge bg-light text-dark">data-neon</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="concept-icon bg-info bg-opacity-10 text-info rounded-circle me-3">
                  <i class="bi bi-play-btn fs-4"></i>
                </div>
                <h5 class="card-title mb-0">Actions</h5>
              </div>
              <p class="card-text text-muted">Event handlers that respond to user interactions and update application state.</p>
              <div class="mt-3">
                <span class="badge bg-light text-dark">data-pulse</span>
                <span class="badge bg-light text-dark">Event-driven</span>
                <span class="badge bg-light text-dark">Interactive</span>
              </div>
            </div>
          </div>
        </div>

        <!-- SSR -->
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="concept-icon bg-warning bg-opacity-10 text-warning rounded-circle me-3">
                  <i class="bi bi-server fs-4"></i>
                </div>
                <h5 class="card-title mb-0">Server-Side Rendering</h5>
              </div>
              <p class="card-text text-muted">Components render on the server for fast initial load and SEO optimization.</p>
              <div class="mt-3">
                <span class="badge bg-light text-dark">Fast loading</span>
                <span class="badge bg-light text-dark">SEO-friendly</span>
                <span class="badge bg-light text-dark">Progressive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <div class="card border-primary mt-5">
      <div class="card-body text-center">
        <h4 class="card-title text-primary">Ready for More?</h4>
        <p class="card-text">Now that you've built your first app, explore advanced features and concepts.</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <router-link to="/getting-started/concepts" class="btn btn-primary">
            Core Concepts
          </router-link>
          <router-link to="/getting-started/examples" class="btn btn-outline-primary">
            View Examples
          </router-link>
          <a href="https://github.com/hyraft/hyraft" class="btn btn-outline-dark" target="_blank">
            <i class="bi bi-github me-2"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>

    <!-- Navigation Helpers -->
    <div class="d-flex justify-content-between mt-5 pt-4 border-top">
      <router-link to="/getting-started/installation" class="btn btn-outline-primary">
        <i class="bi bi-arrow-left me-2"></i>
        Back to Installation
      </router-link>
      <router-link to="/getting-started/concepts" class="btn btn-primary">
        Next: Core Concepts
        <i class="bi bi-arrow-right ms-2"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.quickstart-page {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 1.5rem;
}

.step-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.code-block {
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.code-block code {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
}

.file-tree {
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 0.9rem;
}

.file-item {
  padding: 2px 0;
}

.file-subtree {
  border-left: 2px solid #e9ecef;
  padding-left: 1rem;
}

.concept-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Remove forced centering - let Bootstrap defaults handle alignment */
.page-header,
.step-card .card-body,
.basic-concepts .card-body,
.file-tree {
  text-align: left;
}

/* Only center specific elements that should be centered */
.card-body.text-center {
  text-align: center;
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
  
  .step-number {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
  
  .concept-icon {
    width: 40px;
    height: 40px;
  }
  
  .concept-icon i {
    font-size: 1.25rem;
  }
  
  .d-flex.justify-content-between {
    flex-direction: column;
    gap: 1rem;
  }
  
  .d-flex.justify-content-between .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>