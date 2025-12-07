<!-- views/getting-started/Concepts.vue -->
<template>
  <div class="concepts-page">
    <!-- Page Header -->
    <div class="page-header mb-5">
      <h1 class="display-4 fw-bold text-primary">Core Concepts</h1>
      <p class="lead text-muted">Understand the fundamental concepts that power Hyraft applications.</p>
    </div>

    <!-- Components Section -->
    <section id="components" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Components</h2>
      
      <div class="card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <h5 class="mb-0">
            <i class="bi bi-puzzle me-2"></i>
            What are Components?
          </h5>
        </div>
        <div class="card-body">
          <p class="card-text">Components are the building blocks of Hyraft applications. They combine HTML structure, Ruby logic, and JavaScript reactivity in a single <code>.hyr</code> file.</p>
          
          <div class="code-block bg-dark text-light p-3 rounded mb-4">
            <code class="text-light">
              <span class="text-info"># app/components/user_card.hyr</span><br>
              &lt;displayer html&gt;<br>
              &nbsp;&nbsp;&lt;div class="card"&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card-body"&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 data-neon="userName"&gt;Loading...&lt;/h5&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p data-neon="userEmail"&gt;&lt;/p&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btn btn-primary" data-pulse="userCard.loadUser"&gt;Load User&lt;/button&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
              &nbsp;&nbsp;&lt;/div&gt;<br>
              &lt;/displayer&gt;<br>
              <br>
              &lt;transmuter rb&gt;<br>
              &nbsp;&nbsp;def user_data<br>
              &nbsp;&nbsp;&nbsp;&nbsp;@user ||= User.find(params[:id])<br>
              &nbsp;&nbsp;end<br>
              &lt;/transmuter&gt;<br>
              <br>
              &lt;manifestor js&gt;<br>
              &nbsp;&nbsp;neonPulse.pulse('userCard', {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;loadUser: async function() {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch('/api/users/1')<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const user = await response.json()<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neonPulse.neon('userName').value = user.name<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neonPulse.neon('userEmail').value = user.email<br>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br>
              &nbsp;&nbsp;})<br>
              &lt;/manifestor&gt;
            </code>
          </div>

          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 border-0">
                <div class="card-body">
                  <h6 class="card-title text-primary">
                    <i class="bi bi-check-circle me-2"></i>
                    Benefits
                  </h6>
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="bi bi-arrow-right text-success me-2"></i>Self-contained functionality</li>
                    <li class="mb-2"><i class="bi bi-arrow-right text-success me-2"></i>Reusable across applications</li>
                    <li class="mb-2"><i class="bi bi-arrow-right text-success me-2"></i>Easy to test and maintain</li>
                    <li class="mb-2"><i class="bi bi-arrow-right text-success me-2"></i>Clear separation of concerns</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0">
                <div class="card-body">
                  <h6 class="card-title text-primary">
                    <i class="bi bi-lightning me-2"></i>
                    Key Features
                  </h6>
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="bi bi-tag text-info me-2"></i>Single file components</li>
                    <li class="mb-2"><i class="bi bi-tag text-info me-2"></i>Server-side rendering</li>
                    <li class="mb-2"><i class="bi bi-tag text-info me-2"></i>Client-side reactivity</li>
                    <li class="mb-2"><i class="bi bi-tag text-info me-2"></i>Automatic DOM updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Routing Section -->
    <section id="routing" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Routing</h2>
      
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <p class="card-text">Hyraft uses conventional file-based routing where the file structure determines the application routes.</p>
          
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 border-0">
                <div class="card-header bg-light">
                  <h6 class="mb-0">File Structure</h6>
                </div>
                <div class="card-body">
                  <div class="file-tree small">
                    <div class="file-item">
                      <i class="bi bi-folder-fill text-warning me-2"></i>
                      app/
                      <div class="file-subtree ms-4">
                        <div class="file-item">
                          <i class="bi bi-folder-fill text-info me-2"></i>
                          pages/
                          <div class="file-subtree ms-4">
                            <div class="file-item">
                              <i class="bi bi-file-earmark-text me-2"></i>
                              index.hyr <span class="text-muted">→ /</span>
                            </div>
                            <div class="file-item">
                              <i class="bi bi-file-earmark-text me-2"></i>
                              about.hyr <span class="text-muted">→ /about</span>
                            </div>
                            <div class="file-item">
                              <i class="bi bi-folder-fill text-info me-2"></i>
                              users/
                              <div class="file-subtree ms-4">
                                <div class="file-item">
                                  <i class="bi bi-file-earmark-text me-2"></i>
                                  index.hyr <span class="text-muted">→ /users</span>
                                </div>
                                <div class="file-item">
                                  <i class="bi bi-file-earmark-text me-2"></i>
                                  show.hyr <span class="text-muted">→ /users/:id</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0">
                <div class="card-header bg-light">
                  <h6 class="mb-0">Route Configuration</h6>
                </div>
                <div class="card-body">
                  <div class="code-block bg-dark text-light p-3 rounded">
                    <code class="text-light">
                      <span class="text-info"># config/routes.rb</span><br>
                      Hyraft.routes do<br>
                      &nbsp;&nbsp;get "/", to: "pages#index"<br>
                      &nbsp;&nbsp;get "/about", to: "pages#about"<br>
                      &nbsp;&nbsp;resources :users<br>
                      end
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- State Management Section -->
    <section id="state-management" class="mb-5">
      <h2 class="h3 fw-bold mb-4">State Management</h2>
      
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <p class="card-text">Hyraft uses a signal-based state management system that automatically updates the DOM when state changes.</p>
          
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100 border-0">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div class="state-icon bg-primary bg-opacity-10 text-primary rounded-circle me-3">
                      <i class="bi bi-bullseye fs-4"></i>
                    </div>
                    <h6 class="card-title mb-0">Signals</h6>
                  </div>
                  <p class="card-text small text-muted">Reactive values that trigger DOM updates when changed.</p>
                  <div class="code-block bg-dark text-light p-2 rounded small">
                    <code class="text-light">data-neon="count"</code>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 border-0">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div class="state-icon bg-success bg-opacity-10 text-success rounded-circle me-3">
                      <i class="bi bi-lightning-charge fs-4"></i>
                    </div>
                    <h6 class="card-title mb-0">Actions</h6>
                  </div>
                  <p class="card-text small text-muted">Functions that modify state and handle user interactions.</p>
                  <div class="code-block bg-dark text-light p-2 rounded small">
                    <code class="text-light">data-pulse="counter.increment"</code>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 border-0">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div class="state-icon bg-info bg-opacity-10 text-info rounded-circle me-3">
                      <i class="bi bi-arrow-repeat fs-4"></i>
                    </div>
                    <h6 class="card-title mb-0">Reactivity</h6>
                  </div>
                  <p class="card-text small text-muted">Automatic UI updates when underlying data changes.</p>
                  <div class="code-block bg-dark text-light p-2 rounded small">
                    <code class="text-light">count.value++</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h6 class="fw-semibold mb-3">Example: Counter Component</h6>
            <div class="code-block bg-dark text-light p-3 rounded">
              <code class="text-light">
                <span class="text-info">// JavaScript</span><br>
                const count = neonPulse.neon('count', 0)<br>
                <br>
                neonPulse.pulse('counter', {<br>
                &nbsp;&nbsp;increment: () => count.value++,<br>
                &nbsp;&nbsp;decrement: () => count.value--,<br>
                &nbsp;&nbsp;reset: () => count.value = 0<br>
                })
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SSR Section -->
    <section id="ssr" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Server-Side Rendering</h2>
      
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <p class="card-text">Hyraft renders components on the server for optimal performance and SEO, then enhances them with client-side interactivity.</p>
          
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 border-0">
                <div class="card-header bg-light">
                  <h6 class="mb-0">Server Rendering</h6>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="bi bi-check text-success me-2"></i>Fast initial page load</li>
                    <li class="mb-2"><i class="bi bi-check text-success me-2"></i>SEO-friendly HTML</li>
                    <li class="mb-2"><i class="bi bi-check text-success me-2"></i>Progressive enhancement</li>
                    <li class="mb-2"><i class="bi bi-check text-success me-2"></i>Accessible without JavaScript</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0">
                <div class="card-header bg-light">
                  <h6 class="mb-0">Client Hydration</h6>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="bi bi-lightning text-warning me-2"></i>Interactive components</li>
                    <li class="mb-2"><i class="bi bi-lightning text-warning me-2"></i>Real-time updates</li>
                    <li class="mb-2"><i class="bi bi-lightning text-warning me-2"></i>Smooth transitions</li>
                    <li class="mb-2"><i class="bi bi-lightning text-warning me-2"></i>Dynamic behavior</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h6 class="fw-semibold mb-3">How It Works</h6>
            <div class="process-flow">
              <div class="process-step">
                <div class="step-icon bg-primary text-white rounded-circle mb-2">1</div>
                <div class="step-text small">Server renders HTML</div>
              </div>
              <div class="process-arrow mx-3">
                <i class="bi bi-arrow-right text-muted"></i>
              </div>
              <div class="process-step">
                <div class="step-icon bg-success text-white rounded-circle mb-2">2</div>
                <div class="step-text small">Browser displays page</div>
              </div>
              <div class="process-arrow mx-3">
                <i class="bi bi-arrow-right text-muted"></i>
              </div>
              <div class="process-step">
                <div class="step-icon bg-info text-white rounded-circle mb-2">3</div>
                <div class="step-text small">JavaScript hydrates</div>
              </div>
              <div class="process-arrow mx-3">
                <i class="bi bi-arrow-right text-muted"></i>
              </div>
              <div class="process-step">
                <div class="step-icon bg-warning text-white rounded-circle mb-2">4</div>
                <div class="step-text small">Interactive app</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Helpers -->
    <div class="d-flex justify-content-between mt-5 pt-4 border-top">
      <router-link to="/getting-started/quickstart" class="btn btn-outline-primary">
        <i class="bi bi-arrow-left me-2"></i>
        Back to Quick Start
      </router-link>
      <router-link to="/getting-started/examples" class="btn btn-primary">
        Next: Examples
        <i class="bi bi-arrow-right ms-2"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.concepts-page {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 1.5rem;
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
  font-size: 0.85rem;
}

.file-item {
  padding: 2px 0;
}

.file-subtree {
  border-left: 2px solid #e9ecef;
  padding-left: 1rem;
}

.state-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.process-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.process-step {
  flex: 1;
  text-align: center;
}

.step-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto 0.5rem auto;
}

.process-arrow {
  color: #6c757d;
}

/* Remove all centering - use natural left alignment */
.page-header,
.card-body,
.process-step .step-text,
.file-tree {
  text-align: left;
}

/* Only center the step numbers in the process flow */
.process-step .step-icon {
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .process-flow {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .process-arrow {
    transform: rotate(90deg);
    margin: 0.5rem 0;
    align-self: center;
  }
  
  .process-step {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .step-icon {
    margin: 0 1rem 0 0;
    flex-shrink: 0;
  }
  
  .step-text {
    text-align: left;
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

@media (max-width: 576px) {
  .step-icon {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  .state-icon {
    width: 45px;
    height: 45px;
  }
}
</style>