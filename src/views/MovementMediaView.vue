<template>
  <section id="files" style="margin-top: 70px">
    <div class="container">
      <div class="row page-head gap-2">
        <h1 class="white-head fw-bold text-green-800">Movement Images and Videos</h1>
        <p>On this page, you will find a collection of images and videos documenting significant moments of the Bangladesh Anti-Discrimination Student Movement.</p>
        <p><span class="clause-highlight">Alert:</span> Viewer discretion is advised. The content on this page includes intense and distressing images and videos related to the movement.</p>
      </div>

      <div class="files-container">
        <audio ref="backgroundAudio" src="/Śahīd-audio-song.mp3" autoplay loop playsinline></audio>
        <div class="items-grid">
          <div class="item">
            <img src="../assets/img/me/home-image.jpg" alt="movement-img" />
          </div>
          <div class="item">
            <img src="../assets/img/me/home-image.jpg" alt="movement-img" />
          </div>
          <div class="item">
            <img src="../assets/img/me/home-image.jpg" alt="movement-img" />
          </div>
          <div class="item">
            <video class="files-video" src="../assets/BD-24/videos/video1.mp4" muted playsinline loop @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"></video>
          </div>
          <!-- Add more images items here -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clause-highlight {
  color: var(--rad);
  font-weight: 600;
}

.files-container {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 5px;
}

.item {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.files-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.item:hover img,
.item:hover .files-video {
  filter: grayscale(0%);
}

@media (min-width: 501px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .items-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (min-width: 1025px) {
  .items-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>

<script>
export default {
  mounted() {
    const videos = document.querySelectorAll('.files-video');
    const audio = this.$refs.backgroundAudio;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, {
      threshold: 0.5, // Video needs to be at least 50% visible to be considered in view
    });

    videos.forEach((video) => {
      observer.observe(video);
    });

    // Ensure the audio plays automatically
    audio.addEventListener('canplaythrough', () => {
      audio.play().catch(error => {
        console.log('Audio playback error:', error);
      });
    });
  },
  methods: {
    handleMouseEnter(event) {
      const video = event.target;
      video.currentTime = 0; // Reset video to start from the beginning
      video.muted = false;
      video.controls = true;
      video.play(); // Ensure the video plays from the beginning on hover
    },
    handleMouseLeave(event) {
      const video = event.target;
      video.muted = true;
      video.controls = false;
    },
  },
};
</script>
