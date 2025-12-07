<!-- views/getting-started/Index.vue -->
<template>
  <div class="getting-started-layout">
    <!-- Mobile Offcanvas Toggle -->
    <div class="d-lg-none mobile-header bg-white border-bottom py-2 sticky-top">
      <div class="container-fluid">
        <button 
          class="btn btn-primary btn-sm"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
        >
          <i class="bi bi-list me-1"></i>
          Menu
        </button>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- Desktop Sidebar -->
        <div class="col-lg-3 col-xl-2 d-none d-lg-block p-0">
          <!-- Empty column to hold space for fixed sidebar -->
        </div>

        <!-- Mobile Offcanvas Sidebar -->
        <div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="sidebarOffcanvas">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">
              <i class="bi bi-lightning-charge-fill text-primary me-2"></i>
              Getting Started
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body p-0">
            <Sidebar />
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-lg-9 col-xl-10">
          <div class="content-area p-4">
            <div class="content-wrapper">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fixed Desktop Sidebar (outside the grid) -->
    <div class="d-none d-lg-block">
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/views/getting-started/SidebarGetting.vue'
</script>

<style scoped>
.getting-started-layout {
  padding-top: 76px; /* Account for fixed navbar */
  min-height: 100vh;
  background-color: #f8f9fa;
  position: relative;
}

.mobile-header {
  top: 76px;
  z-index: 1020;
}

.content-area {
  min-height: calc(100vh - 76px);

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content-wrapper {
  width: 100%;
  max-width: 900px; /* Reduced max-width for better centering */
  margin: 0 auto; /* True center with auto margins */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Force ALL content to be centered */
.content-wrapper > * {
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

/* Override any Bootstrap classes that might be causing right alignment */
.content-wrapper .row {
  justify-content: center !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.content-wrapper .text-start,
.content-wrapper .text-lg-start {
  text-align: center !important;
}

.content-wrapper .justify-content-start,
.content-wrapper .justify-content-lg-start {
  justify-content: center !important;
}

.offcanvas {
  top: 76px;
  height: calc(100vh - 76px);
}

/* Responsive adjustments */
@media (max-width: 1330px) {
  .getting-started-layout {
    padding-top: 72px;
  }
  
  .mobile-header {
    top: 72px;
  }
  
  .content-area {
    min-height: calc(100vh - 72px);
      width: 100% !important;
    margin-left: 0; /* Remove sidebar margin on mobile */
    padding: 1rem !important;
  }
  
  .content-wrapper {
    max-width: 100%;
  }
  
  .offcanvas {
    top: 72px;
    height: calc(100vh - 72px);
  }
}

@media (max-width: 1200px) {
  .content-area {
    margin-left: 0px !important; 
  }
  
  .content-wrapper {
    max-width: 800px; /* Slightly smaller on medium screens */
  }
}

/* Extra small devices */
@media (max-width: 576px) {
  .content-area {
    padding: 0.5rem !important;
  }
  
  .content-wrapper {
    max-width: 100%;
  }
}

/* Large screens */
@media (min-width: 1400px) {
  .content-wrapper {
    max-width: 1000px;
  }
}

@media (min-width: 1600px) {
  .content-wrapper {
    max-width: 1100px;
        margin-left: 1 !important; /* Remove sidebar margin on mobile */
  }
}
</style>