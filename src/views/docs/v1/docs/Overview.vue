<!-- views/getting-started/Installation.vue -->
<template>
  <div class="installation-page">
    <!-- Page Header -->

    <!-- Hero Section -->
    <section class="hero-section text-center mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="display-4 fw-bold mb-3">
            <i class="bi bi-hexagon-fill me-3" style="color: orangered;"></i>
               Documentation
          </h1>
          <p class="lead text-success mb-4">
            Coming soon.
          </p>
          <p class="lead text-muted mb-4">
           Coming soon.
          </p>
          
        </div>
      </div>
    </section>

    <!-- Hexagonal Architecture Diagram -->
    <section class="hexagonal-diagram-section mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center mb-4">
            <i class="bi bi-diagram-3-fill text-primary me-2"></i>
            Hexagonal Architecture Flow
          </h2>
          
          <div class="hexagonal-container">
            <!-- Flow Direction -->
            <div class="flow-direction">
              <div class="flow-step">
                <div class="flow-label">Input</div>
                <i class="bi bi-arrow-right"></i>
              </div>
              <div class="flow-step">
                <div class="flow-label">Core</div>
                <i class="bi bi-arrow-right"></i>
              </div>
              <div class="flow-step">
                <div class="flow-label">Output</div>
              </div>
            </div>

   

            
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
// Component logic can be added here if needed
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




<style scoped>
.hero-section {
  padding: 2rem 0;
}

/* Hexagonal Diagram Styles */
.hexagonal-container {
  position: relative;
  height: 400px;
  margin: 0 auto;
  max-width: 700px;
}

/* Flow Direction */
.flow-direction {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.flow-label {
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  border: 2px solid #dee2e6;
}

.flow-step i {
  font-size: 1.5rem;
  color: #007bff;
}

.hexagon-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  height: 150px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
}

.hexagon-core .hexagon-inner {
  text-align: center;
}

.hexagon-core .hexagon-inner h5 {
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.hexagon-core .hexagon-inner small {
  font-size: 0.7rem;
  opacity: 0.9;
}

.hexagon-adapter {
  position: absolute;
  width: 100px;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.hexagon-adapter:hover {
  transform: scale(1.1);
  z-index: 20;
}

.hexagon-adapter .hexagon-inner {
  text-align: center;
  padding: 8px;
}

.hexagon-adapter .hexagon-inner i {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 4px;
}

.hexagon-adapter .hexagon-inner span {
  font-weight: bold;
  display: block;
  font-size: 0.8rem;
}

.hexagon-adapter .hexagon-inner small {
  font-size: 0.65rem;
  opacity: 0.9;
}

/* Primary Adapters (Left - Input) */
.primary-adapter-1 {
  top: 15%;
  left: 20%;
  background: linear-gradient(135deg, #28a745, #1e7e34);
}

.primary-adapter-2 {
  top: 50%;
  left: 10%;
  background: linear-gradient(135deg, #28a745, #1e7e34);
  transform: translateY(-50%);
}

.primary-adapter-3 {
  bottom: 15%;
  left: 20%;
  background: linear-gradient(135deg, #28a745, #1e7e34);
}

/* Secondary Adapters (Right - Output) */
.secondary-adapter-1 {
  top: 15%;
  right: 20%;
  background: linear-gradient(135deg, #ffc107, #e0a800);
}

.secondary-adapter-2 {
  top: 50%;
  right: 10%;
  background: linear-gradient(135deg, #ffc107, #e0a800);
  transform: translateY(-50%);
}

.secondary-adapter-3 {
  bottom: 15%;
  right: 20%;
  background: linear-gradient(135deg, #ffc107, #e0a800);
}

/* Connection Lines */
.connection-line {
  position: absolute;
  height: 2px;
  width: 60px;
  z-index: 5;
  opacity: 0.7;
}

.input-line {
  background: #28a745;
  right: -60px;
}

.output-line {
  background: #ffc107;
  left: -60px;
}

.primary-adapter-1 .connection-line {
  top: 50%;
  transform: rotate(30deg);
  transform-origin: left;
}

.primary-adapter-2 .connection-line {
  top: 50%;
  width: 80px;
}

.primary-adapter-3 .connection-line {
  top: 50%;
  transform: rotate(-30deg);
  transform-origin: left;
}

.secondary-adapter-1 .connection-line {
  top: 50%;
  transform: rotate(-30deg);
  transform-origin: right;
}

.secondary-adapter-2 .connection-line {
  top: 50%;
  width: 80px;
}

.secondary-adapter-3 .connection-line {
  top: 50%;
  transform: rotate(30deg);
  transform-origin: right;
}

/* Legend */
.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  flex-shrink: 0;
}

.primary-color { background: linear-gradient(135deg, #28a745, #1e7e34); }
.core-color { background: linear-gradient(135deg, #007bff, #0056b3); }
.secondary-color { background: linear-gradient(135deg, #ffc107, #e0a800); }
.port-color { background: #6c757d; }

.legend span {
  font-size: 0.85rem;
}

/* Small Hexagons for Components */
.hexagon-small {
  width: 70px;
  height: 81px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.source-hex { background: linear-gradient(135deg, #007bff, #0056b3); }
.port-hex { background: linear-gradient(135deg, #6c757d, #495057); }
.circuit-hex { background: linear-gradient(135deg, #28a745, #1e7e34); }

/* Benefit Icons */
.benefit-icon {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Cards */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #dee2e6;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.badges .badge {
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
}

pre code {
  font-size: 0.85rem;
  line-height: 1.3;
}

/* Responsive */
@media (max-width: 768px) {
  .display-4 {
    font-size: 2rem;
  }
  
  .hexagonal-container {
    height: 350px;
  }
  
  .hexagon-core {
    width: 110px;
    height: 127px;
  }
  
  .hexagon-adapter {
    width: 85px;
    height: 98px;
  }
  
  .connection-line {
    width: 50px;
  }
  
  .hexagon-core .hexagon-inner h5 {
    font-size: 0.8rem;
  }
  
  .hexagon-adapter .hexagon-inner span {
    font-size: 0.75rem;
  }

  .flow-direction {
    gap: 1rem;
  }

  .flow-step {
    gap: 0.5rem;
  }

  .flow-label {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}

@media (max-width: 576px) {
  .hexagonal-container {
    height: 300px;
    transform: scale(0.9);
  }
  
  .legend span {
    font-size: 0.8rem;
  }

  .flow-direction {
    flex-direction: column;
    gap: 0.5rem;
  }

  .flow-step {
    gap: 0.5rem;
  }

  .flow-step i {
    transform: rotate(90deg);
  }
}

/* Ensure content stays within sidebar constraints */
.content-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

/* Override any forced centering that might break the layout */
.content-wrapper .row {
  justify-content: center;
}

.content-wrapper .text-center {
  text-align: center !important;
}
</style>