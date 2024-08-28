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
import image18 from '../assets/BD-24/images/457090035_2667904140061487_1037408914244065018_n.jpg';
import image19 from '../assets/BD-24/images/457212695_1174923047130265_6082460985402124078_n.jpg';
import image20 from '../assets/BD-24/images/456962683_2667904166728151_4790298147037831703_n.jpg';
import image21 from '../assets/BD-24/images/457326061_806735374956183_470323408847748992_n.jpg';



import video1 from '../assets/BD-24/videos/Abu Sayed.mp4';
import video20 from '../assets/BD-24/videos/কাজল.mp4';

export default {
  data() {
    return {
      searchQuery: '',
      tagSearchQuery: '',
      selectedTags: [],
      items: [
        { type: "video", src: video1, alt: 'Movement Video 4', tags: ['abusayed','1stsahid'] },
        { type: "image", src: image20, alt: 'Movement Image 3', tags: ['student', 'sohan', 'july19', 'rumpur', 'spinalcord',] },
        { type: "image", src: image18, alt: 'Movement Image 1', tags: ['student', 'sohan', 'july19', 'rumpur', 'spinalcord',] },
        { type: "image", src: image21, alt: 'Movement Image 2', tags: ['student','fayaz','remand'] },
        { type: "image", src: image19, alt: 'Movement Image 2', tags: ['student','fayaz','remand'] },
        { type: "video", src: video20, alt: 'Movement Video 4', tags: ['kajol'] },


        // Add more items with tags here
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
