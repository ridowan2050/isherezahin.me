<template>
    <!-- ======= Header ======= -->
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <RouterLink to="/" class="logo d-flex align-items-center me-auto me-lg-0">
                <!-- Uncomment the line below if you also wish to use an image logo -->
                <img src="./assets/img/home/logo.png" alt="Zahin">
                <!-- <i class="bi bi-code-slash"></i> -->
                <!-- <h1>Zahin</h1> -->
            </RouterLink>

            <nav id="navbar" class="navbar">
                <ul>
                    <li><RouterLink to="/" exact-active-class="active-link">Home</RouterLink></li>
                    <li><RouterLink to="/about" exact-active-class="active-link">About</RouterLink></li>
                    <li><RouterLink to="/article" exact-active-class="active-link">Article</RouterLink></li>
                    <li><RouterLink to="/services" exact-active-class="active-link">Services</RouterLink></li>
                    <li><RouterLink to="/contact" exact-active-class="active-link">Contact</RouterLink></li>
                </ul>
            </nav>
            <!-- .navbar -->

            <div class="header-social-links">
                <a href="https://www.github.com/IsHereZahin/" target="_blank" class="github"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/isherezahin/" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.youtube.com/@IsHereZahin" target="_blank" class="youtube"><i class="bi bi-youtube"></i></a>
                <a href="https://www.twitter.com/IsHereZahin/" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
            </div>
            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
    </header>
    <!-- End Header -->

    <RouterView />

    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><span>ZAHIN</span></strong> 2024 • Got any feedback?
            </div>
            <div class="social-links d-flex justify-content-center">
                <a href="https://www.github.com/IsHereZahin/" target="_blank"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/isherezahin/" target="_blank"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.youtube.com/@IsHereZahin" target="_blank"><i class="bi bi-youtube"></i></a>
                <a href="https://www.twitter.com/IsHereZahin/" target="_blank"><i class="bi bi-twitter"></i></a>
            </div>
            <!-- <div class="credits">
                Deployed by <a href="https://www.linkedin.com/in/isherezahin/" target="blank">Zahin</a>
            </div> -->
            <div class="credits">
                For inquiries, contact me on 
                <a href="https://join.skype.com/invite/xeu3lGYMM8So" target="_blank" rel="noopener noreferrer">
                    Skype
                </a>
            </div>
        </div>
    </footer>
    <!-- End Footer -->

    <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    <div id="preloader">
        <div class="line"></div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/assets/vendor/swiper/swiper-bundle.min.css';
import '../public/assets/vendor/glightbox/css/glightbox.min.css';
import '../public/assets/vendor/aos/aos.css';
import '../public/assets/css/main.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../public/assets/vendor/swiper/swiper-bundle.min.js';
import '../public/assets/vendor/glightbox/js/glightbox.min.js';
// import '../public/assets/vendor/aos/aos.js';
import '../public/assets/vendor/php-email-form/validate.js';
import '../public/assets/js/main.js';
</script>

<style scoped>
.active-link {
    color: var(--color-primary); /* Example active link color */
    font-weight: bold; /* Example active link font weight */
}

</style>
