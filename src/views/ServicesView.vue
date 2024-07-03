<script setup>
import Services from '../components/ServicesInfo.vue'
</script>

<template>
  <section id="blog" style="margin-top: 70px">
    <div class="container">
      <img src="../assets/img/home/about-shape-3.svg" loading="lazy" alt="" class="shape shape-3">
      <!-- Page Head -->
      <div class="row page-head gap-2">
        <h1 class="white-head fw-bold text-green-800">Services</h1>
        <p>I specialize in full-stack web development, employing languages like PHP, JavaScript, Python, and C++, alongside frameworks such as Laravel and Vue.js to craft dynamic web applications. Additionally, my expertise in software quality assurance and custom testing solutions guarantees the delivery of reliable, high-performance software products tailored precisely to your requirements.</p>
      </div>
    </div>
  </section>

  <main id="main">
    <Services />
  </main>
</template>
