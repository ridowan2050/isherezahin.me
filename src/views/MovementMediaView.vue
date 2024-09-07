<template>
  <section id="files" style="margin-top: 70px">
    <div class="container">
      <div class="row page-head gap-2">
        <h1 class="white-head fw-bold text-green-800">Movement Images and Videos</h1>
        <p><span class="clause-highlight">Alert:</span> On this page, you will find a collection of images and videos documenting significant moments of the Bangladesh Anti-Discrimination Student Movement. Viewer discretion is advised. The content on this page includes intense and distressing images and videos related to the movement.</p>
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
import image1 from '../assets/BD-24/images/BDM (1).jpg';
import image2 from '../assets/BD-24/images/BDM (2).jpg';
import image3 from '../assets/BD-24/images/BDM (3).jpg';
import image4 from '../assets/BD-24/images/BDM (4).jpg';
import image5 from '../assets/BD-24/images/BDM (5).jpg';
import image6 from '../assets/BD-24/images/BDM (6).jpg';
import image7 from '../assets/BD-24/images/BDM (7).jpg';
import image8 from '../assets/BD-24/images/BDM (8).jpg';
import image9 from '../assets/BD-24/images/BDM (9).jpg';
import image10 from '../assets/BD-24/images/BDM (10).jpg';
import image11 from '../assets/BD-24/images/BDM (11).jpg';
import image12 from '../assets/BD-24/images/BDM (12).jpg';
import image13 from '../assets/BD-24/images/BDM (13).jpg';
import image14 from '../assets/BD-24/images/BDM (14).jpg';
import image15 from '../assets/BD-24/images/BDM (15).jpg';
import image16 from '../assets/BD-24/images/BDM (16).jpg';
import image17 from '../assets/BD-24/images/BDM (17).jpg';
import image18 from '../assets/BD-24/images/BDM (18).jpg';
import image19 from '../assets/BD-24/images/BDM (19).jpg';
import image20 from '../assets/BD-24/images/BDM (20).jpg';
import image21 from '../assets/BD-24/images/BDM (21).jpg';
import image22 from '../assets/BD-24/images/BDM (22).jpg';
import image23 from '../assets/BD-24/images/BDM (23).jpg';
import image24 from '../assets/BD-24/images/BDM (24).jpg';
import image25 from '../assets/BD-24/images/BDM (25).jpg';
import image26 from '../assets/BD-24/images/BDM (26).jpg';
import image27 from '../assets/BD-24/images/BDM (27).jpg';

import image28 from '../assets/BD-24/images/BDM (1).jpeg';
import image29 from '../assets/BD-24/images/BDM (1).webp';
import image30 from '../assets/BD-24/images/BDM (2).webp';






import video1 from '../assets/BD-24/videos/BDM (1).mp4';
import video2 from '../assets/BD-24/videos/BDM (2).mp4';
import video3 from '../assets/BD-24/videos/BDM (3).mp4';
import video4 from '../assets/BD-24/videos/BDM (4).mp4';
import video5 from '../assets/BD-24/videos/BDM (5).mp4';
import video6 from '../assets/BD-24/videos/BDM (6).mp4';
import video7 from '../assets/BD-24/videos/BDM (7).mp4';
import video8 from '../assets/BD-24/videos/BDM (8).mp4';
import video9 from '../assets/BD-24/videos/BDM (9).mp4';
import video10 from '../assets/BD-24/videos/BDM (10).mp4';
import video11 from '../assets/BD-24/videos/BDM (11).mp4';
import video12 from '../assets/BD-24/videos/BDM (12).mp4';
import video13 from '../assets/BD-24/videos/BDM (13).mp4';
import video14 from '../assets/BD-24/videos/BDM (14).mp4';
import video15 from '../assets/BD-24/videos/BDM (15).mp4';
import video16 from '../assets/BD-24/videos/BDM (16).mp4';
import video17 from '../assets/BD-24/videos/BDM (17).mp4';
import video18 from '../assets/BD-24/videos/BDM (18).mp4';
import video19 from '../assets/BD-24/videos/BDM (19).mp4';
import video20 from '../assets/BD-24/videos/BDM (20).mp4';
import video21 from '../assets/BD-24/videos/BDM (21).mp4';
import video22 from '../assets/BD-24/videos/BDM (22).mp4';
import video23 from '../assets/BD-24/videos/BDM (23).mp4';
import video24 from '../assets/BD-24/videos/BDM (24).mp4';
import video25 from '../assets/BD-24/videos/BDM (25).mp4';
import video26 from '../assets/BD-24/videos/BDM (26).mp4';
import video27 from '../assets/BD-24/videos/BDM (27).mp4';
import video28 from '../assets/BD-24/videos/BDM (28).mp4';
import video29 from '../assets/BD-24/videos/BDM (29).mp4';
import video30 from '../assets/BD-24/videos/BDM (30).mp4';
import video31 from '../assets/BD-24/videos/BDM (31).mp4';
import video32 from '../assets/BD-24/videos/BDM (32).mp4';
import video33 from '../assets/BD-24/videos/BDM (33).mp4';
import video34 from '../assets/BD-24/videos/BDM (34).mp4';
import video35 from '../assets/BD-24/videos/BDM (35).mp4';
import video36 from '../assets/BD-24/videos/BDM (36).mp4';
import video37 from '../assets/BD-24/videos/BDM (37).mp4';
import video38 from '../assets/BD-24/videos/BDM (38).mp4';
import video39 from '../assets/BD-24/videos/BDM (39).mp4';
import video40 from '../assets/BD-24/videos/BDM (40).mp4';
import video41 from '../assets/BD-24/videos/BDM (41).mp4';
import video42 from '../assets/BD-24/videos/BDM (42).mp4';
import video100 from '../assets/BD-24/videos/BDM (100).mp4';

export default {
  data() {
    return {
      searchQuery: '',
      tagSearchQuery: '',
      selectedTags: [],
      items: [
        { type: 'image', src: image1, alt: 'Movement Image 1', tags: ['image'] },
        { type: 'video', src: video1, alt: 'Movement Video 1', tags: ['Video'] },
        { type: 'image', src: image2, alt: 'Movement Image 2', tags: ['image'] },
        { type: 'video', src: video2, alt: 'Movement Video 2', tags: ['Video'] },
        { type: 'image', src: image3, alt: 'Movement Image 3', tags: ['image'] },
        { type: 'video', src: video3, alt: 'Movement Video 3', tags: ['Video'] },
        { type: 'image', src: image4, alt: 'Movement Image 4', tags: ['image'] },
        { type: 'video', src: video4, alt: 'Movement Video 4', tags: ['Video'] },
        { type: 'image', src: image5, alt: 'Movement Image 5', tags: ['image'] },
        { type: 'video', src: video5, alt: 'Movement Video 5', tags: ['Video'] },
        { type: 'image', src: image6, alt: 'Movement Image 6', tags: ['image'] },
        { type: 'video', src: video6, alt: 'Movement Video 6', tags: ['Video'] },
        { type: 'image', src: image7, alt: 'Movement Image 7', tags: ['image'] },
        { type: 'video', src: video7, alt: 'Movement Video 7', tags: ['Video'] },
        { type: 'image', src: image8, alt: 'Movement Image 8', tags: ['image'] },
        { type: 'video', src: video8, alt: 'Movement Video 8', tags: ['Video'] },
        { type: 'image', src: image9, alt: 'Movement Image 9', tags: ['image'] },
        { type: 'video', src: video9, alt: 'Movement Video 9', tags: ['Video'] },
        { type: 'image', src: image10, alt: 'Movement Image 10', tags: ['image'] },
        { type: 'video', src: video10, alt: 'Movement Video 10', tags: ['Video'] },
        { type: 'image', src: image11, alt: 'Movement Image 11', tags: ['image'] },
        { type: 'video', src: video11, alt: 'Movement Video 11', tags: ['Video'] },
        { type: 'image', src: image12, alt: 'Movement Image 12', tags: ['image'] },
        { type: 'video', src: video12, alt: 'Movement Video 12', tags: ['Video'] },
        { type: 'image', src: image13, alt: 'Movement Image 13', tags: ['image'] },
        { type: 'video', src: video13, alt: 'Movement Video 13', tags: ['Video'] },
        { type: 'image', src: image14, alt: 'Movement Image 14', tags: ['image'] },
        { type: 'video', src: video14, alt: 'Movement Video 14', tags: ['Video'] },
        { type: 'image', src: image15, alt: 'Movement Image 15', tags: ['image'] },
        { type: 'video', src: video15, alt: 'Movement Video 15', tags: ['Video'] },
        { type: 'image', src: image16, alt: 'Movement Image 16', tags: ['image'] },
        { type: 'video', src: video16, alt: 'Movement Video 16', tags: ['Video'] },
        { type: 'image', src: image17, alt: 'Movement Image 17', tags: ['image'] },
        { type: 'video', src: video17, alt: 'Movement Video 17', tags: ['Video'] },
        { type: 'image', src: image18, alt: 'Movement Image 18', tags: ['image'] },
        { type: 'video', src: video18, alt: 'Movement Video 18', tags: ['Video'] },
        { type: 'image', src: image19, alt: 'Movement Image 19', tags: ['image'] },
        { type: 'video', src: video19, alt: 'Movement Video 19', tags: ['Video'] },
        { type: 'image', src: image20, alt: 'Movement Image 20', tags: ['image'] },
        { type: 'video', src: video20, alt: 'Movement Video 20', tags: ['Video'] },
        { type: 'image', src: image21, alt: 'Movement Image 21', tags: ['image'] },
        { type: 'video', src: video21, alt: 'Movement Video 21', tags: ['Video'] },
        { type: 'image', src: image22, alt: 'Movement Image 22', tags: ['image'] },
        { type: 'video', src: video22, alt: 'Movement Video 22', tags: ['Video'] },
        { type: 'image', src: image23, alt: 'Movement Image 23', tags: ['image'] },
        { type: 'video', src: video23, alt: 'Movement Video 23', tags: ['Video'] },
        { type: 'image', src: image24, alt: 'Movement Image 24', tags: ['image'] },
        { type: 'video', src: video24, alt: 'Movement Video 24', tags: ['Video'] },
        { type: 'image', src: image25, alt: 'Movement Image 25', tags: ['image'] },
        { type: 'video', src: video25, alt: 'Movement Video 25', tags: ['Video'] },
        { type: 'image', src: image26, alt: 'Movement Image 26', tags: ['image'] },
        { type: 'video', src: video26, alt: 'Movement Video 26', tags: ['Video'] },
        { type: 'image', src: image27, alt: 'Movement Image 27', tags: ['image'] },
        { type: 'video', src: video27, alt: 'Movement Video 27', tags: ['Video'] },
        { type: 'image', src: image28, alt: 'Movement Image 28', tags: ['image'] },
        { type: 'video', src: video28, alt: 'Movement Video 28', tags: ['Video'] },
        { type: 'image', src: image29, alt: 'Movement Image 29', tags: ['image'] },
        { type: 'video', src: video29, alt: 'Movement Video 29', tags: ['Video'] },
        { type: 'image', src: image30, alt: 'Movement Image 30', tags: ['image'] },
        { type: 'video', src: video30, alt: 'Movement Video 30', tags: ['Video'] },
        { type: 'video', src: video31, alt: 'Movement Video 31', tags: ['Video'] },
        { type: 'video', src: video32, alt: 'Movement Video 32', tags: ['Video'] },
        { type: 'video', src: video33, alt: 'Movement Video 33', tags: ['Video'] },
        { type: 'video', src: video34, alt: 'Movement Video 34', tags: ['Video'] },
        { type: 'video', src: video35, alt: 'Movement Video 35', tags: ['Video'] },
        { type: 'video', src: video36, alt: 'Movement Video 36', tags: ['Video'] },
        { type: 'video', src: video37, alt: 'Movement Video 37', tags: ['Video'] },
        { type: 'video', src: video38, alt: 'Movement Video 38', tags: ['Video'] },
        { type: 'video', src: video39, alt: 'Movement Video 39', tags: ['Video'] },
        { type: 'video', src: video40, alt: 'Movement Video 40', tags: ['Video'] },
        { type: 'video', src: video41, alt: 'Movement Video 41', tags: ['Video'] },
        { type: 'video', src: video42, alt: 'Movement Video 42', tags: ['Video'] },
        { type: 'video', src: video100, alt: 'Movement Video 100', tags: ['Video'] }
      ],
      observer: null
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
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    }
  },
  mounted() {
    // Initialize Intersection Observer
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust as needed
    });

    // Observe each video element
    this.$nextTick(() => {
      this.$refs.videos.forEach(video => this.observer.observe(video));
    });
  },
  beforeDestroy() {
    // Clean up the observer
    if (this.observer) {
      this.$refs.videos.forEach(video => this.observer.unobserve(video));
    }
  }
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
}

.item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;  
  transition: transform 0.3s ease;
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
