<template>
<h1 class="text-center"><span class="title-1 underline">SELECTED</span> <span class="title-2">PROJECTS</span></h1>
<p class="text-center">A few recent design and coding projects. Want to see more? Email me.</p>
  <section id="gallery" class="gallery">
    <div class="container-fluid">
      <div class="row gy-4 justify-content-center">
        <!-- Your gallery items go here -->
        <div v-for="(image, index) in galleryImages" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div class="gallery-item h-100">
            <img :src="image.src" class="img-fluid" :alt="'Gallery ' + (index + 1)">
            <div class="gallery-links d-flex align-items-center justify-content-center">
              <a :href="image.src" :title="'Gallery ' + (index + 1)" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
              <a href="https://github.com/IsHereZahin/" title="Github" target="_blank" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div><!-- End Gallery Item -->
      </div>
    </div>
  </section><!-- End Gallery Section -->
</template>

<script>
import galleryImage1 from '@/assets/img/gallery/gallery-1.jpg';
import galleryImage15 from '@/assets/img/gallery/gallery-15.jpg';
import galleryImage4 from '@/assets/img/gallery/gallery-4.jpg';
import galleryImage3 from '@/assets/img/gallery/gallery-3.jpg';

export default {
  data() {
    return {
      galleryImages: [
        { src: galleryImage1 },
        { src: galleryImage15 },
        { src: galleryImage4 },
        { src: galleryImage3 },
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  margin-top: 40PX;
  font-size: 50px;
  line-height: 1;
  padding: 20px;
}
.title-1{
  color: gray;
  font-weight: bold;
}
.title-2 {
  color: #41B883;
  font-weight: bold;
}
.underline{
    margin-top: 3px;
    border-bottom: 4px solid #41B883;
}
  @media only screen and (max-width: 650px) {
    h1 {
      font-size: 20px;
    }
  }

</style>
