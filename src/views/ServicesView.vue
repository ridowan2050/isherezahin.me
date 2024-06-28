<script setup>
import Services from '../components/ServicesInfo.vue'
</script>

<template>
  <div class="page-header d-flex align-items-center">
    <div class="container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-9 text-center">
          <h2>Services</h2>
          <p>I specialize in full-stack web development, employing languages like PHP, JavaScript, Python, and C++, alongside frameworks such as Laravel and Vue.js to craft dynamic web applications. Additionally, my expertise in software quality assurance and custom testing solutions guarantees the delivery of reliable, high-performance software products tailored precisely to your requirements.</p>
          <RouterLink to="/contact" class="cta-btn">Available for hire</RouterLink>
        </div>
      </div>
    </div>
  </div>

  <main id="main">
    <Services />
  </main>
</template>
