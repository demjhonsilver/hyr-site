<template>
  <div class="quickstart-page">
    <!-- Page Header -->
    <div class="page-header mb-5">
      <h1 class="display-4 fw-bold text-primary">Database Setup (Development Only)</h1>
      <p class="lead text-muted">Setup MySQL, PostgreSQL and MariaDB on Windows and Linux</p>
    </div>

    <!-- Database Setup Section -->
    <section id="database-setup" class="mb-5">
      <div class="d-flex align-items-center mb-4">
        <h2 class="h3 fw-bold me-3">Database Setup Videos</h2>
      </div>

      <!-- PostgreSQL -->
         <section id="postgresql" class="mb-5">
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <h5 class="mb-0">PostgreSQL Installation</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <h6>Windows</h6>
              <div class="ratio ratio-16x9">
                <iframe src="" 
                        title="PostgreSQL Windows" 
                        allowfullscreen>
                </iframe>
              </div>
            </div>
            <div class="col-md-6">
              <h6>Linux</h6>
              <div class="ratio ratio-16x9">
                <iframe src="" 
                        title="PostgreSQL Linux" 
                        allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
          <div class="code-block bg-light p-3 rounded mt-3">
            <code class="text-dark">gem 'pg'</code>
          </div>
        </div>
      </div>
      </section>

      <!-- MySQL -->
    
         <section id="mysql" class="mb-5">
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <h5 class="mb-0">MySQL (Xampp) Installation</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <h6>Windows</h6>
              <div class="ratio ratio-16x9">
                <iframe src="" 
                        title="MySQL Windows" 
                        allowfullscreen>
                </iframe>
              </div>
            </div>
            <div class="col-md-6">
              <h6>Linux</h6>
              <div class="ratio ratio-16x9">
                <iframe src="" 
                        title="MySQL Linux" 
                        allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
          <div class="code-block bg-light p-3 rounded mt-3">
            <code class="text-dark">gem 'mysql2'</code>
          </div>
        </div>
      </div>
         </section>
         
      <!-- MariaDB -->
                <section id="mariadb" class="mb-5">
      <div class="step-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <h5 class="mb-0">MariaDB Installation</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <h6>Windows</h6>
              <div class="ratio ratio-16x9">
                <iframe src="" 
                        title="MariaDB Windows" 
                        allowfullscreen>
                </iframe>
              </div>
            </div>
            <div class="col-md-6">
              <h6>Linux</h6>
              <div class="ratio ratio-16x9">
                <iframe src="" 
                        title="MariaDB Linux" 
                        allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
          <div class="code-block bg-light p-3 rounded mt-3">
            <code class="text-dark">gem 'mariadb'</code>
          </div>
        </div>
      </div>
      </section>

      <!-- Next Steps -->
      <div class="step-card card border-0 shadow-sm">
        <div class="card-header bg-light">
          <div class="d-flex align-items-center">
            <div class="step-number bg-primary text-white rounded-circle me-3">2</div>
            <h5 class="mb-0">Configure Database</h5>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Add to <code>infra/gems/database.rb</code>:</p>
          <div class="code-block bg-dark text-light p-3 rounded mb-3">
            <code class="text-light">require 'pg'  or  require 'mysql2'</code>
          </div>
        </div>
      </div>
    </section>

   

    <!-- Navigation Helpers -->
    <div class="d-flex justify-content-between mt-5 pt-4 border-top">
      <router-link to="/getting-started/v1/quickstart" class="btn btn-outline-primary">
        <i class="bi bi-arrow-left me-2"></i>
        Back to Quickstart
      </router-link>
      <router-link to="/getting-started/v1/creating-articles" class="btn btn-primary">
        Next: Creating Articles
        <i class="bi bi-arrow-right ms-2"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Component logic
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

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .step-number {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
}
</style>