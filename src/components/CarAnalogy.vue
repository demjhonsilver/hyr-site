<template>
  <section class="py-5 bg-dark text-white">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="display-5 fw-bold" style="color: orange;">
<img src="/icons/car.svg" 
     style="width: 100px; height: 100px; filter: brightness(0) invert(1);" />
 Car System Analogy</h2>
        <p class="lead text-light">Understand Hyraft's architecture through automotive engineering.</p>
      </div>

      <div class="row g-4">




        <!-- Driving Adapters -->
        <div class="col-lg-4">
          <div class="card bg-success border-0 h-100">
            <div class="card-body text-center text-light p-4">
               <div class="display-1 mb-3"><img src="/icons/pedals.svg" 
     style="width: 100px; height: 100px; filter: brightness(0) invert(1);" /></div>
              <h4 class="fw-bold">DRIVING Adapters</h4>
              <p class="mb-3">User Inputs - How you control the system</p>
              
              <div class="text-start">
                <div class="d-flex align-items-center mb-2">
                  <span class="me-2"></span>
                  <small><strong>Gas Pedal</strong> - Web requests / View Templates</small>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <span class="me-2"></span>
                  <small><strong>Steering Wheel</strong> - User input</small>
                </div>
                <div class="d-flex align-items-center">
                  <span class="me-2"></span>
                  <small><strong>Gear Shift</strong> - CLI commands</small>
                </div>
              </div>
            </div>
          </div>
        </div>






        <!-- Engine Section -->
        <div class="col-lg-4">
          <div class="card bg-primary border-0 h-100">
            <div class="card-body text-center text-light p-4">
              <div class="display-1 mb-3"><img src="/icons/car-engine.svg" 
     style="width: 100px; height: 100px; filter: brightness(0) invert(1);" /></div>
              <h4 class="fw-bold">ENGINE</h4>
              <p class="mb-3">Domain Core - Pure Business Power</p>
              
              <div class="text-start">
                <div class="d-flex align-items-center mb-2">
                  <span class="me-2"></span>
                  <small><strong>CIRCUIT</strong> - CRUD process - Fuel injection system</small>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <span class="me-2"></span>
                  <small><strong>PORTS</strong> - To connect - Spark plugs interface</small>
                </div>
                <div class="d-flex align-items-center">
                  <span class="me-2"></span>
                  <small><strong>SOURCE</strong> - Your Model with Power - Pistons power generation</small>
                </div>
              </div>
            </div>
          </div>
        </div>



        <!-- Driven Adapters -->
        <div class="col-lg-4">
          <div class="card bg-warning text-dark border-0 h-100">
            <div class="card-body text-center p-4">
               <div class="display-1 mb-3"><img src="/icons/wheels.svg" 
     style="width: 100px; height: 100px;"/></div>
              <h4 class="fw-bold">DRIVEN Adapters</h4>
              <p class="mb-3">System Outputs - How the system responds</p>
              
              <div class="text-start">
                <div class="d-flex align-items-center mb-2">
                  <span class="me-2"></span>
                  <small><strong>Wheels</strong> - Database operations</small>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <span class="me-2"></span>
                  <small><strong>Transmission</strong> - External APIs</small>
                </div>
                <div class="d-flex align-items-center">
                  <span class="me-2"></span>
                  <small><strong>Exhaust</strong> - Notifications</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Complete Flow -->
      <div class="mt-5 text-center">
        <div class="row align-items-center">
          <div class="col-md-3 text-end">
            <div class="bg-success rounded p-3">
              <h5 class="mb-1">DRIVING</h5>
              <small>User Inputs</small>
            </div>
          </div>
          <div class="col-md-1 text-center">
            <span class="display-6"><img src="/icons/arrow-right.svg" 
     style="width: 60px; height: 60px; filter: brightness(0) invert(1);"/></span>
          </div>
          <div class="col-md-4">
            <div class="bg-primary rounded p-3">
              <h5 class="mb-1">ENGINE</h5>
              <small>Business Logic</small>
            </div>
          </div>
          <div class="col-md-1 text-center">
            <span class="display-6"><img src="/icons/arrow-right.svg" 
     style="width: 60px; height: 60px; filter: brightness(0) invert(1);"/></span>
          </div>
          <div class="col-md-3 text-start">
            <div class="bg-warning rounded p-3 text-dark">
              <h5 class="mb-1">DRIVEN</h5>
              <small>System Outputs</small>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="row">
            <div class="col-md-3 text-end">
              <small class="text-muted">Gas pedal pressed</small>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-4 text-center">
              <small class="text-muted">Engine processes fuel</small>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-3 text-start">
              <small class="text-muted">Wheels turn</small>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-3 text-end">
              <small class="text-muted">User clicks button</small>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-4 text-center">
              <small class="text-muted">ProcessOrder use case</small>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-3 text-start">
              <small class="text-muted">Save to database</small>
            </div>
          </div>
        </div>
      </div>

      <!-- File Structure -->
      <div class="mt-5">
        <div class="card bg-secondary border-0">
          <div class="card-header bg-dark">
            <h5 class="mb-0 text-warning">📁 Your Project Structure</h5>
          </div>
          <div class="card-body">
            <pre class="text-light m-0"><code>App/
├──  ENGINE/                   # Pure business power
│   ├──  circuit/              # Fuel processing (use cases)
│   ├──  port/                 # Ignition interfaces (contracts)  
│   └──  source/               # Power generation (entities)
├── adapter-intake/            # DRIVING adapters
│   └── web-app/request/       # Gas pedal, steering (user inputs)
└── adapter-exhaust/           # DRIVEN adapters  
    └── data-gateway/          # Wheels, transmission (system outputs)
______________________________________________________________

app/
├── adapter-intake/              # Input adapters
│   ├── multi-app/ 
│   ├── admin-app/
│   ├── api-app/
│   │   └── request/             # API controllers/adapters
│   │       └──  articles_api_adapter.rb
│   └── web-app/
│       ├── request/             # Web controllers/adapters
│       │   ├── home_web_adapter.rb
│       │   └── articles_web_adapter.rb
│       │   
│       └── display/             # Hyraft templates (.hyr files)
│           └── pages/
│               ├── home/
│               │   └── home.hyr
│               └── articles/
│                 ├── index.hyr
│                 ├── show.hyr
│                 ├── new.hyr
│                 └── edit.hyr             
│
├── adapter-exhaust/             # Output adapters  
│   └── data-gateway/            # Database access implementations
│       └── sequel_articles_gateway.rb
│
├── engine/                      # Business logic (framework-independent)
│   ├── source/                  # Domain entities
│   │   └── article.rb
│   │
│   ├── circuit/                 # Use cases/business processes
│   │   └── articles_circuit.rb
│   │
│   └── port/                    # Interfaces (abstract)
│       └── articles_gateway_port.rb
│
├── framework/                       # Framework tools
│   ├── adapters/
│   ├── compiler/
│   ├── errors/
│   └── middleware/
│      
├── shared/                       # Shared files
│   └── helpers/
│       ├── pagination_helper.rb
│       └── response_formatter.rb
│
├── infra/                       # Infrastructure
│   ├── config/
│   │   ├── routes/            # Route definitions
│   │   │    ├── api_routes.rb    # API 
│   │   │    └── web_routes.rb    # Web
│   │   │
│   │   ├── environment.rb
│   │   └── error_config.rb
│   │   
│   ├── database/
│   │   ├── migrations/          # Database schema
│   │   │   ├── 001_create_articles.rb
│   │   │   └── 002_add_image_to_articles.rb
│   │   │
│   │   └── sequel_connection.rb # Database configuration
│   │   
│   ├── gems/                  # Third party gems to import
│   │   ├── database.rb        # Database gems
│   │   ├── load_all.rb        # Load all gems
│   │   ├── utilities.rb       # Utilities
│   │   └── web.rb             # Web gems
│   │ 
│   └── server/
│       ├── api-server.ru        # Rack configuration
│       └── web-server.ru        # Rack configuration
│         
├── public/                      # Static assets
│    ├── uploads/                 # File uploads (images, etc.)
│    ├── icons/
│    ├── styles/
│    │   └── css/
│    │       ├── main.css
│    │       └── spa.css
│    ├── images/
│    │   ├── hyr-logo.png
│    │   └── hyr-logo.webp
│    ├── favicon.ico
│    │
│    └── index.html
│
├── boot.rb
├── env.yml
├── Gemfile
└── package.json

  
  </code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

pre {
  background: none;
  border: none;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>