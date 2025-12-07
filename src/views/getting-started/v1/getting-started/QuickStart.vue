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
            <code class="text-light">hyraft do my-app</code>
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
            <code class="text-light">hyraft-server thin</code>
            <br></br><br></br>or
            <br></br><br></br>
            <code class="text-light">hyr s thin</code>
          </div>
          <div class="alert alert-info">
            <i class="bi bi-info-circle me-2"></i>
            Your app will be available at <strong>http://localhost:1091</strong>
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
          <p class="card-text">Create a simple hello world component:</p>
          <div class="code-block bg-dark text-light p-3 rounded mb-3">

<div class="code-block bg-dark text-light p-3 rounded mb-3">
 <code class="text-light" style="font-size: 15px;">
    <span class="text-info"># my-app/adapter-intake/web-app/display/pages/home/home.hyr</span><br>
  <br></br>
  </br>
    &lt;displayer html&gt;<br>
    &nbsp;&nbsp;&lt;div class="component-name"&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;component context="World"/&gt;<br>
    &nbsp;&nbsp;&lt;/div&gt;<br>
    &lt;/displayer&gt;<br><br>

    &lt;transmuter rb&gt;<br><br>
    &nbsp;&nbsp;def display_component(context:)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"&lt;div class='component'&gt;Hello #{context}!&lt;/div&gt;"<br>
    &nbsp;&nbsp;end<br><br>
    &lt;/transmuter&gt;<br><br>

    &lt;manifestor js&gt;<br><br>
    &nbsp;&nbsp;// JavaScript code<br><br>
    &lt;/manifestor&gt;<br><br>

    &lt;style src="/styles/css/main.css" /&gt;<br>
   
  </code>
</div>


          



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
                  adapter-exhaust/
                  <div class="file-subtree ms-4">
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      data-gateway/
                    </div>
                  
                  </div>
                </div>



              <div class="file-item">
                <i class="bi bi-folder-fill text-info me-2"></i>
                adapter-intake/
                <div class="file-subtree ms-4">

                  <div class="file-item">
                    <i class="bi bi-folder-fill text-info me-2"></i>
                    api-app/
                  </div>

                  <div class="file-item">
                    <i class="bi bi-folder-fill text-info me-2"></i>
                    web-app/
                    <div class="file-subtree ms-4">
                      <div class="file-item">
                        <i class="bi bi-folder-fill text-info me-2"></i>
                        display/
                      </div>
                      <div class="file-item">
                        <i class="bi bi-folder-fill text-info me-2"></i>
                        request/
                        <div class="file-subtree ms-4">
                          <div class="file-item">
                            <i class="bi bi-file-earmark-text-fill text-secondary me-2"></i>
                            home_web_adapter.rb
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>



                <div class="file-item">
                  <i class="bi bi-folder-fill text-info me-2"></i>
                  engine/
                  <div class="file-subtree ms-4">
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      circuit/
                    </div>
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      port/
                    </div>
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      source/
                    </div>
                  </div>
                </div>

                <div class="file-item">
                  <i class="bi bi-folder-fill text-info me-2"></i>
                  framework/
                  <div class="file-subtree ms-4">
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      adapters/
                    </div>
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      compilers/
                    </div>
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-info me-2"></i>
                      errors/
                    </div>
                  </div>
                </div>   

                <div class="file-item">
                  <i class="bi bi-folder-fill text-info me-2"></i>
                  infra/
                </div>


                <div class="file-item">
                  <i class="bi bi-folder-fill text-info me-2"></i>
                  public/
                </div>

                <div class="file-item">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  boot.rb
                </div>

                <div class="file-item">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  env.yml
                </div>
                <div class="file-item">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  Gemfile
                </div>
                <div class="file-item">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  package.json
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Navigation Helpers -->
    <div class="d-flex justify-content-between mt-5 pt-4 border-top">
      <router-link to="/getting-started/v1/installation" class="btn btn-outline-primary">
        <i class="bi bi-arrow-left me-2"></i>
        Back to Installation
      </router-link>
      <router-link to="/getting-started/v1/creating-articles" class="btn btn-primary">
        Next: Creating Articles
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