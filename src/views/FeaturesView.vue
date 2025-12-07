<template>
  <div class="features-page">
    <section class="py-5 mt-5">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold">Features</h1>
          <p class="lead text-muted">Everything you need to build modern web applications</p>
        </div>
        
      <div class="row g-4">
        <div
          class="col-md-6 col-lg-4"
          v-for="feature in features"
          :key="feature.title"
        >
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              
              <!-- ICON HERE -->
              <div class="feature-icon mb-3">
                <!-- Render SVG image -->
                <img
                  v-if="feature.icon.endsWith('.svg')"
                  :src="feature.icon"
                  class="feature-icon-img red-filter"
                  alt=""
                />

                <!-- Render emoji -->
                <span v-else class="display-6">{{ feature.icon }}</span>
              </div>

              <h5 class="card-title fw-bold">{{ feature.title }}</h5>
              <p class="card-text text-muted">{{ feature.description }}</p>
            </div>
 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="features-page">
    <!-- Hero Section -->
    <section class="bg-gradient-primary text-white py-5 mt-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 fw-bold mb-4">Hyraft Features</h1>
            <p class="lead mb-4">
              Discover the powerful features that make Hyraft the fastest Ruby web framework with clean architecture.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dual Server Stack Feature -->
    <section class="py-5" id="dual-server">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <span class="badge bg-primary mb-3">Core Feature</span>
            <h2 class="display-5 fw-bold mb-4">Dual-Server Web Stack</h2>
            <p class="lead mb-4">
              Run simultaneous web and API servers with hexagonal architecture implementation.
            </p>
            
            <div class="feature-list mb-4">
              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">✓</span>
                <span>Simultaneous web (http://localhost:1091) and API (http://localhost:1092) servers</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">✓</span>
                <span>Support for multiple Ruby servers: Puma, Thin, Falcon, Iodine</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">✓</span>
                <span>HTTP/2 and HTTP/3 support with Falcon</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">✓</span>
                <span>Clean separation of web and API concerns</span>
              </div>

              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">✓</span>
                <span>You can run different servers at the same time.</span>
              </div>
            </div>

              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">✓</span>
                <span>For example, use Thin for handling web requests and Puma for API endpoints.</span>
              </div>
      



          </div>
          
          <div class="col-lg-6">
            <div class="card border-0 shadow-lg">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">It is easy to switch to any server without breaking the code.</h5>
              </div>
              <div class="card-body">
                <pre class="m-0"><code class="language-bash"># Start web server

hyr s thin

hyr-serve thin

hyraft-server s thin

# Start API server  
hyr s thin --api
hyraft-server s thin --api

# Start with HTTP/3
hyraft-server s falcon --http3

# Start both servers simultaneously
hyraft-server s thin
hyraft-server s thin --api</code></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Server Comparison -->
        <div class="row mt-5">
          <div class="col-12">
            <h3 class="fw-bold mb-4 text-center">Supported Servers</h3>
            <div class="row g-4">
              <div class="col-md-4" v-for="server in servers" :key="server.name">
                <div class="card h-100 text-center border-0 shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">{{ server.name }}</h5>
                    <p class="card-text text-muted">{{ server.description }}</p>
                    <div class="mt-3">
                      <span v-for="feature in server.features" :key="feature" 
                            class="badge bg-light text-dark me-1 mb-1">
                        {{ feature }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Features -->
    <section class="py-5 bg-light" id="performance">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <span class="badge bg-warning mb-3">Performance</span>
            <h2 class="display-5 fw-bold mb-4">High Performance Architecture</h2>
            <p class="lead mb-4">
              Hyraft is a hexagonal architecture-first framework built for maintainable, scalable, and high-performance web applications. It enforces clean separation of concerns from day one.
            </p>
            

            
          </div>
          
          <div class="col-lg-6 order-lg-1">
            <div class="code-block">
              <pre class="m-0"><code class="language-ruby">
# adapter-intake/web-app/request/home_web_adapter.rb

class HomeWebAdapter
  def initialize

  end

  def home_page(_request)
    {
      status: 200,
      locals: { message: "Welcome to  Homepage!" },
      display: 'home/home.hyr'  
    }
  end
end

              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hexagonal Architecture -->
    <section class="py-5" id="architecture">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <span class="badge bg-info mb-3">Architecture</span>
            <h2 class="display-5 fw-bold mb-4">Hexagonal Architecture</h2>
            <p class="lead mb-4">
              Clean separation of concerns with ports, adapters, and use cases for maintainable applications.
            </p>
            
            <div class="architecture-features">
              <div class="d-flex align-items-start mb-3">
                <span class="text-primary me-3">•</span>
                <div>
                  <strong>Ports:</strong> Define application boundaries and contracts
                </div>
              </div>
              <div class="d-flex align-items-start mb-3">
                <span class="text-primary me-3">•</span>
                <div>
                  <strong>Adapters:</strong> Implement ports for different technologies
                </div>
              </div>
              <div class="d-flex align-items-start mb-3">
                <span class="text-primary me-3">•</span>
                <div>
                  <strong>Use Cases:</strong> Business logic isolated from infrastructure
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 text-center">
            <div class="architecture-diagram bg-light p-4 rounded">
              <div class="mb-3">
                <div class="fw-bold text-primary">Web Adapter</div>
                <div class="text-muted small">← Port →</div>
              </div>
              <div class="mb-3">
                <div class="fw-bold">Use Cases</div>
                <div class="text-muted small">Business Logic</div>
              </div>
              <div>
                <div class="fw-bold text-primary">Database Adapter</div>
                <div class="text-muted small">← Port →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Template Engine -->
    <section class="py-5 bg-light" id="templates">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <span class="badge bg-success mb-3">Templates</span>
            <h2 class="display-5 fw-bold mb-4">Custom Template Engine</h2>
            <p class="lead mb-4">
              .hyr files with metadata, transmuters, and manifestors for powerful template processing.
            </p>
            
            <div class="template-features">
              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">•</span>
                <span><strong>.hyr files:</strong> Custom template format with metadata</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">•</span>
                <span><strong>Transmuters:</strong> Transform any ruby methods with html syntax</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <span class="text-success me-3">•</span>
                <span><strong>Manifestors:</strong> Can run JavaScript and Vanilla JS</span>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 order-lg-1">
            <div class="code-block">
            
 <pre class="m-0"><code>&lt;metadata html&gt;

&lt;/metadata&gt;


&lt;displayer html&gt;

&lt;/displayer&gt;


&lt;transmuter rb&gt;

&lt;/transmuter&gt;


&lt;manifestor js&gt;

&lt;/manifestor&gt;</code></pre> 


            
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.code-block {
  background: #f8f9fa;
  border-radius: 0.375rem;
  padding: 1.5rem;
  border-left: 4px solid #667eea;
}

pre {
  background: none;
  margin: 0;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
}

.architecture-diagram {
  border: 2px dashed #dee2e6;
}
</style>


<script setup>
const servers = [
  {
    name: 'Thin',
    description: 'Fast and simple Ruby web server',
    features: ['Windows', 'Linux']
  },
  {
    name: 'Puma',
    description: 'Concurrent web server for Ruby',
    features: ['Windows', 'Linux']
  },
  {
    name: 'Falcon',
    description: 'High-performance async server',
    features: ['Linux']
  },
  {
    name: 'Iodine',
    description: 'Scalable web application server',
    features: ['Linux']
  }
]

const features = [
  {
    icon: '/icons/speed.svg',
    title: 'High Performance',
    description: '37-55ms page renders, faster than most Ruby frameworks'
  },
  {
    icon: '/icons/hexagonal.svg',
    title: 'Hexagonal Architecture',
    description: 'Clean separation with ports, adapters, and use cases'
  },
  {
    icon: '/icons/web-templates.svg',
    title: 'Custom Template Engine',
    description: '.hyr files with metadata, displayer, transmuters, and manifestors'
  },
  {
    icon: '/icons/dual-server.svg',
    title: 'Dual-Server Stack',
    description: 'Simultaneous web and API servers across multiple Ruby backends'
  },
  {
    icon: '/icons/multi-server.svg',
    title: 'Multi-Server Support',
    description: 'Puma, Thin, Iodine, Falcon with HTTP/2 & HTTP/3'
  },
  {
    icon: '/icons/lightweight.svg',
    title: 'Lightweight',
    description: 'Minimal dependencies, maximum performance'
  },
  {
    icon: '/icons/auto-discovery.svg',
    title: 'Auto-Discovery',
    description: 'Automatic template and component discovery across apps'
  },
  {
        
    icon: '/icons/page-reload.svg',
    title: 'Hot Reload',
    description: 'Development server with automatic reloading'
  },
  {
    icon: '/icons/cli.svg',
    title: 'CLI Tools',
    description: 'Powerful command-line interface for project management'
  }
]
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.feature-icon-img {
  width: 60px;
  height: 60px;
}

.feature-icon {
  color: #667eea;
}
.red-filter {
  filter: invert(45%) sepia(90%) saturate(500%) hue-rotate(345deg) brightness(120%) contrast(105%);
}

</style>