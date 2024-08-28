<template>
  <section id="files" style="margin-top: 70px">
    <div class="container">
      <div class="row page-head gap-2">
        <h1 class="white-head fw-bold text-green-800">Movement Images and Videos</h1>
        <p>On this page, you will find a collection of images and videos documenting significant moments of the Bangladesh Anti-Discrimination Student Movement.</p>
        <p><span class="clause-highlight">Alert:</span> Viewer discretion is advised. The content on this page includes intense and distressing images and videos related to the movement.</p>
      </div>

      <div class="row filters mt-4">
        <div class="col-md-9">
          <p>{{ filteredItems.length }} out of {{ items.length }} items displayed</p>
        </div>
        <div class="col-md-3">
          <div class="text-end input-group custom-input-group">
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>
            <input type="text"
                  v-model="searchQuery"
                  placeholder="Search item"
                  class="form-control"
                  data-bs-toggle="tooltip"
                  title="Search by title, type, date..."
                  data-bs-placement="bottom" />
          </div>
        </div>
      </div>

      <!-- Tag filter -->
      <div class="row tag-filter mt-4">
        <div class="col-md-12">
          <div class="tags">
            <span class="font-medium">Choose topic:</span>
            <a href="#skip-tags" class="tag skip-tag">Skip tag</a>
            <button v-for="tag in uniqueTags" :key="tag" @click="toggleTagFilter(tag)"
                    :class="{ 'tag': true, 'active': selectedTags.includes(tag) }">
              {{ tag }}
            </button>
          </div>
        </div>
      </div>

      <div class="files-container">
        <div class="items-grid">
          <div v-for="(item, index) in filteredItems" :key="index" class="item">
            <img v-if="item.type === 'image'" :src="item.src" :alt="item.alt" />
            <video v-if="item.type === 'video'" class="files-video" :src="item.src" muted autoplay loop ref="videos" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"></video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      tagSearchQuery: '',
      selectedTags: [],
      items: [
      { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 1', tags: ['protest', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 2', tags: ['rally', 'student'] },
        { type: 'image', src: '/src/assets/img/me/home-image.jpg', alt: 'Movement Image 3', tags: ['protest', 'student', 'nextjs', 'react', 'css', 'tailwindcss', 'retro', 'flexbox', 'design', 'tips', 'grid', 'tools', 'vite', 'core-concept', 'git', 'pattern', 'typescript', 'setup', 'form', 'swift', 'javascript', 'html'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 1', tags: ['protest', 'rally'] },
        { type: 'video', src: '/src/assets/BD-24/videos/video1.mp4', alt: 'Movement Video 2', tags: ['rally'] },
      ],
    };
  },
  computed: {
    uniqueTags() {
      const tags = this.items.flatMap(item => item.tags);
      return [...new Set(tags)];
    },
    filteredTags() {
      const query = this.tagSearchQuery.toLowerCase();
      return this.uniqueTags.filter(tag => tag.toLowerCase().includes(query));
    },
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.items.filter(item => 
        (this.selectedTags.length === 0 || item.tags.some(tag => this.selectedTags.includes(tag))) &&
        (item.alt.toLowerCase().includes(query) || item.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    },
  },
  methods: {
    toggleTagFilter(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
    handleMouseEnter(event) {
      const video = event.target;
      video.currentTime = 0;
      video.muted = false;
      video.controls = true;
      video.play();
    },
    handleMouseLeave(event) {
      const video = event.target;
      video.muted = true;
      video.controls = false;
    },
    setupIntersectionObserver() {
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the video is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.muted = false;
            video.play();
          } else {
            video.pause();
          }
        });
      }, options);

      this.$nextTick(() => {
        this.$refs['video'].forEach(video => {
          if (video) {
            observer.observe(video);
          }
        });
      });
    },
  },
  mounted() {
    this.setupIntersectionObserver();
  },
};
</script>


<style scoped>
.custom-input-group {
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s;
}

.custom-input-group:focus-within {
  border-color: var(--theme);
}

.custom-input-group .input-group-text {
  border: none;
  padding: 10px 15px;
  background: transparent;
  color: var(--text);
}

.custom-input-group .input-group-text i {
  color: var(--text);
}

.custom-input-group .form-control {
  border: none;
  padding: 10px 15px;
  outline: none;
  color: var(--text);
  background: transparent;
  flex: 1;
}

.custom-input-group .form-control::placeholder {
  color: var(--grey);
}

@media (max-width: 575px) {
  .custom-input-group {
    width: 100%;
  }
}

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
  gap: 18px;
  justify-items: center; /* Center items horizontally */
}

.item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;  
  transition: transform 0.3s ease;
  width: 100%; /* Make items take full width of the grid column */
  max-width: 100%; /* Ensure items do not exceed their grid column */
}

.item:hover {
  border-radius: 0px;
  transform: scale(1.03);
}

.files-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: filter 0.3s ease;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s ease;
}

.item:hover img,
.item:hover .files-video {
  filter: none; /* Remove the grayscale filter */
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

.tag-filter {
  margin-top: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  justify-content: center; /* Center tags horizontally */
}

.tags span {
  font-weight: 500;
  color: var(--text);
}

.tag {
  border: none;
  display: inline-block;
  padding: 3px 10px;
  font-weight: 500;
  border-radius: 10px;
  background-color: var(--border);
  color: var(--text);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.tag.active {
  color: var(--theme);
  background-color: var(--border);
}

.tag:hover {
  color: var(--theme);
  background-color: var(--blackly);
}

.tag.skip-tag {
  background-color: var(--white);
  color: var(--text);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.tag.skip-tag:focus {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0.7rem);
}
</style>
