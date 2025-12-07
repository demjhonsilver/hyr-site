<template>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="display-5 fw-bold">Why Choose Hyraft?</h2>
        <p class="lead text-muted">Performance meets clean architecture</p>
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

      <div class="text-center mt-5">
        <RouterLink to="/features" class="btn btn-primary btn-lg">
          View All Features
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

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
    icon: '/icons/ready-prod.svg',
    title: 'Production Ready',
    description: 'Built for scalability and high-concurrency applications'
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
  color: #667eea; /* affects emojis */
}


.red-filter {
  filter: invert(45%) sepia(90%) saturate(500%) hue-rotate(345deg) brightness(120%) contrast(105%);
}



</style>
