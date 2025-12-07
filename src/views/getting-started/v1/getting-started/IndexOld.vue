<!-- views/getting-started/Overview.vue -->
<template>
  <div class="overview-page">
    <!-- Hero Section -->
    <section class="hero-section text-center mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="display-4 fw-bold mb-3">
            <i class="bi bi-gear-fill text-primary me-3"></i>
            Hyraft Framework
          </h1>
          <p class="lead text-muted mb-4">
            A <strong>hexagonal architecture</strong> framework built like a high-performance engine. 
            Swap parts without breaking the whole system.
          </p>
          <div class="badges mb-4">
            <span class="badge bg-primary me-2">Ruby 3.1+</span>
            <span class="badge bg-success me-2">Hexagonal Architecture</span>
            <span class="badge bg-info me-2">Multi-Server</span>
            <span class="badge bg-warning">Plugin System</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Engine Diagram -->
    <section class="engine-diagram-section mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center mb-4">
            <i class="bi bi-cpu-fill text-primary me-2"></i>
            Engine Architecture
          </h2>
          
          <div class="architecture-flow text-center mb-4">
            <!-- Driving Components -->
            <div class="flow-section driving-components mb-4">
              <h4 class="text-success mb-3">
                <i class="bi bi-controller me-2"></i>
                DRIVING COMPONENTS (Controls)
              </h4>
              <div class="row g-3 justify-content-center">
                <div class="col-md-4">
                  <div class="card h-100 border-success">
                    <div class="card-body text-center">
                      <i class="bi bi-browser-chrome display-6 text-success mb-3"></i>
                      <h5 class="card-title">HTTP</h5>
                      <p class="card-text small">Steering Wheel & Dashboard<br><em>User Input</em></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card h-100 border-success">
                    <div class="card-body text-center">
                      <i class="bi bi-terminal display-6 text-success mb-3"></i>
                      <h5 class="card-title">CLI</h5>
                      <p class="card-text small">Pedals & Gear Shifter<br><em>Command Input</em></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card h-100 border-success">
                    <div class="card-body text-center">
                      <i class="bi bi-lightning-charge display-6 text-success mb-3"></i>
                      <h5 class="card-title">Events</h5>
                      <p class="card-text small">Ignition Key<br><em>External Triggers</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Engine Core -->
            <div class="flow-section engine-core mb-4">
              <div class="arrow-down text-primary mb-3">
                <i class="bi bi-arrow-down display-4"></i>
              </div>
              <h4 class="text-primary mb-3">
                <i class="bi bi-gear-wide-connected me-2"></i>
                ENGINE CORE (Power)
              </h4>
              <div class="row g-3 justify-content-center">
                <div class="col-md-4">
                  <div class="card h-100 border-primary">
                    <div class="card-body text-center">
                      <i class="bi bi-fuel-pump display-6 text-primary mb-3"></i>
                      <h5 class="card-title">Source</h5>
                      <p class="card-text small">Fuel Source<br><em>Pure Domain Objects</em></p>
                      <code class="text-muted small">/source</code>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card h-100 border-primary">
                    <div class="card-body text-center">
                      <i class="bi bi-plug display-6 text-primary mb-3"></i>
                      <h5 class="card-title">Ports</h5>
                      <p class="card-text small">Intake/Exhaust Ports<br><em>Interfaces</em></p>
                      <code class="text-muted small">/ports</code>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card h-100 border-primary">
                    <div class="card-body text-center">
                      <i class="bi bi-lightning-charge-fill display-6 text-primary mb-3"></i>
                      <h5 class="card-title">Circuit</h5>
                      <p class="card-text small">Electrical System<br><em>Business Logic Flow</em></p>
                      <code class="text-muted small">/circuit</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Driven Components -->
            <div class="flow-section driven-components">
              <div class="arrow-down text-warning mb-3">
                <i class="bi bi-arrow-down display-4"></i>
              </div>
              <h4 class="text-warning mb-3">
                <i class="bi bi-truck me-2"></i>
                DRIVEN COMPONENTS (Drivetrain)
              </h4>
              <div class="row g-3 justify-content-center">
                <div class="col-md-4">
                  <div class="card h-100 border-warning">
                    <div class="card-body text-center">
                      <i class="bi bi-database display-6 text-warning mb-3"></i>
                      <h5 class="card-title">Data</h5>
                      <p class="card-text small">Transmission<br><em>Data Storage</em></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card h-100 border-warning">
                    <div class="card-body text-center">
                      <i class="bi bi-globe display-6 text-warning mb-3"></i>
                      <h5 class="card-title">External</h5>
                      <p class="card-text small">Wheels<br><em>External Service Integration</em></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card h-100 border-warning">
                    <div class="card-body text-center">
                      <i class="bi bi-chat-dots display-6 text-warning mb-3"></i>
                      <h5 class="card-title">Messaging</h5>
                      <p class="card-text small">Driveshaft<br><em>Message Distribution</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section class="quick-start-section mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h2 class="text-center mb-4">
            <i class="bi bi-rocket-takeoff text-primary me-2"></i>
            Quick Start
          </h2>
          
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0">
                    <i class="bi bi-terminal me-2"></i>
                    Installation
                  </h5>
                </div>
                <div class="card-body">
                  <pre class="bg-dark text-light p-3 rounded"><code>gem install hyraft
# or add to Gemfile:
gem 'hyraft', '~> 0.1.0'</code></pre>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-header bg-success text-white">
                  <h5 class="mb-0">
                    <i class="bi bi-play-circle me-2"></i>
                    Start Server
                  </h5>
                </div>
                <div class="card-body">
                  <pre class="bg-dark text-light p-3 rounded"><code># Web Server
hyr-serve thin

# API Server  
hyr-serve thin --api

# With custom port
hyr-serve puma -p 8080</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="features-section">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h2 class="text-center mb-4">
            <i class="bi bi-stars text-primary me-2"></i>
            Why Hyraft?
          </h2>
          
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="text-center">
                <i class="bi bi-puzzle display-6 text-primary mb-3"></i>
                <h5>Plug & Play</h5>
                <p class="text-muted">Swap adapters without breaking your core engine</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="text-center">
                <i class="bi bi-speedometer2 display-6 text-success mb-3"></i>
                <h5>Multi-Server</h5>
                <p class="text-muted">Run web + API servers simultaneously on different ports</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="text-center">
                <i class="bi bi-shield-check display-6 text-info mb-3"></i>
                <h5>Testable</h5>
                <p class="text-muted">Clean separation makes testing straightforward</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="text-center">
                <i class="bi bi-tools display-6 text-warning mb-3"></i>
                <h5>Flexible</h5>
                <p class="text-muted">Choose your preferred server: Thin, Puma, Falcon, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.hero-section {
  padding: 3rem 0;
}

.architecture-flow {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 2rem;
}

.flow-section {
  padding: 1.5rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.arrow-down {
  opacity: 0.7;
}

.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.badges .badge {
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
}

pre code {
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .display-4 {
    font-size: 2rem;
  }
  
  .architecture-flow {
    padding: 1rem;
  }
  
  .flow-section {
    padding: 1rem;
  }
}
</style>