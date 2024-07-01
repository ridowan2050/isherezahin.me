<template>
  <section id="blog" style="margin-top: 70px">
    <div class="container">
      <!-- Page Head -->
      <div class="row page-head gap-2">
        <h1 class="text-white fw-bold text-green-800 theme-color">Blog</h1>
        <p>On my personal website and blog, I share notes, articles, and various thoughts on different subjects, including personal experiences. As a programmer from Bangladesh, I started learning web development as a hobby in July 2019. I use Laravel and Vue.js to create websites, and for testing, I utilize Pest, Selenium, and Puppeteer. For code storage and hosting, I use GitHub, GitLab, Netlify, Vercel, etc. Explore my site to learn more about my journey and personal life, and discover some web development resources that have inspired me.</p>
      </div>

      <!-- Search and Filters -->
      <div class="row filters mt-4">
        <div class="col-md-9">
          <p>{{ filteredBlogs.length }} out of {{ blogs.length }} blogs displayed</p>
        </div>
        <div class="col-md-3">
          <div class="text-end input-group custom-input-group">
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>
            <input type="text"
                  v-model="searchQuery"
                  placeholder="Search articles"
                  class="form-control"
                  data-bs-toggle="tooltip"
                  title="Search by title, category, type, date, month..."
                  data-bs-placement="bottom" />
          </div>
        </div>
      </div>
      <img src="../assets/img/home/about-shape-3.svg" loading="lazy" alt="" class="shape shape-3">
      <!-- Blog Cards -->
      <div class="row">
        <div class="col-md-6" v-for="blog in paginatedBlogs" :key="blog.id">
          <div class="container mt-5">
            <div class="row flex-column-reverse flex-md-row justify-content-between gap-4">
              <div class="col-12">
                <article class="blog-card">
                  <!-- Blog Card Background -->
                  <div class="blog-card__background">
                    <div class="card__background--wrapper">
                      <div class="card__background--main" :style="{ backgroundImage: `url(${blog.image})` }">
                        <div class="card__background--layer"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Blog Card Head -->
                  <div class="blog-card__head">
                    <span class="date__box">
                      <span class="date__day">{{ blog.day }}</span>
                      <span class="date__month">{{ blog.month }}</span>
                    </span>
                  </div>

                  <!-- Blog Card Info -->
                  <div class="blog-card__info">
                    <div class="blog-details">
                      <span class="blog-type">{{ blog.type }}</span>
                      <span class="blog-date">{{ blog.fullDate }}</span>
                    </div>
                    <h2 class="text-white">{{ truncate(blog.title, 50) }}</h2>
                    <p>{{ truncate(blog.excerpt, 100) }}</p>
                    <p>
                      <a :href="blog.link" class="category" target="_blank">
                        <span v-for="category in blog.categories" :key="category">{{ category }}</span>
                      </a>
                    </p>
                    <a :href="blog.link" class="btn btn--with-icon" target="_blank">
                      <i class="btn-icon fa fa-long-arrow-right"></i>READ MORE
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <!-- Not Found Message -->
        <div v-if="filteredBlogs.length === 0" class="col-12 text-center mt-5">
          <p>
            <span :style="{ color: 'var(--rad)' }">{{ searchQuery }}</span> not found. 
            You can read my old page article 
            <RouterLink to="/article" exact-active-class="active-link">Article</RouterLink>
          </p>        
        </div>
      </div>

      <!-- Pagination Section -->
      <div class="row" v-if="filteredBlogs.length > 0">
        <div class="page-pagination">
          <button :disabled="currentPage === 1" @click="currentPage--" class="pagination-btn">Previous</button>
          <span class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</span>
          <span class="pagination-select">
            <select v-model="blogsPerPage" class="form-control">
              <option :value="5">5 per page</option>
              <option :value="10">10 per page</option>
              <option :value="20">20 per page</option>
            </select>
          </span>
          <button :disabled="currentPage === totalPages" @click="currentPage++" class="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import appImage1 from '../assets/img/blog/blog1.jpg';
import appImage2 from '../assets/img/blog/blog2.jpg';

export default {
  name: 'BlogSection',
  data() {
    return {
      blogs: [
        {
          id: 1,
          day: '11',
          month: 'JUNE',
          fullDate: 'June 11, 2024',
          title: 'The impure can never equal the pure.',
          excerpt: 'যেসব পুরুষেরা কোনো নারীর নোংরা অতীতকে ভুলে গিয়ে তাকে মেনে নেওয়ার মন মানসিকতা রাখে সেসব পুরুষেরা সুস্পষ্টভাবে ক্ষমাশীল হলেও নিঃসন্দেহে তাদের মধ্যে গায়রত আর আত্মসম্মানবোধের অভাব আছে।',
          image: appImage1,
          link: '#',
          categories: ['Purity', 'Integrity', 'Article'],
          type: 'Article',
          tags: ['Bangladesh', 'Programming', 'Web Development']
        },
        {
          id: 2,
          day: '27',
          month: 'March',
          fullDate: 'March 27, 2023',
          title: 'Past experiences shaping present journey anew',
          excerpt: 'In 2020, I endured the most agonizing experience of my life, a moment that forever altered my perspective.',
          image: appImage2,
          link: 'https://www.facebook.com/100062477031346/videos/766194744780592',
          categories: ['Life', 'Blog'],
          type: 'Video',
          tags: ['Life Lessons', 'Personal Growth']
        },
        // Add more blog data as needed
      ],
      searchQuery: '',
      currentPage: 1,
      blogsPerPage: 20
    };
  },
  computed: {
    filteredBlogs() {
      if (!this.searchQuery) {
        return this.blogs;
      }
      const queryWords = this.searchQuery.toLowerCase().split(' ');
      return this.blogs.filter(blog => {
        return queryWords.every(word => {
          return blog.title.toLowerCase().includes(word) ||
                blog.categories.some(category => category.toLowerCase().includes(word)) ||
                blog.type.toLowerCase().includes(word) ||
                blog.month.toLowerCase().includes(word) ||
                blog.day.includes(word) ||
                blog.fullDate.toLowerCase().includes(word) ||
                blog.tags.some(tag => tag.toLowerCase().includes(word));
        });
      });
    },
    paginatedBlogs() {
      const start = (this.currentPage - 1) * this.blogsPerPage;
      const end = this.currentPage * this.blogsPerPage;
      return this.filteredBlogs.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredBlogs.length / this.blogsPerPage);
    }
  },
  methods: {
    truncate(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  },
};
</script>

<style scoped>
.shape-3 {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  animation: moving 20s linear infinite;
}

@media (max-width: 1000px) {
  .shape-3 {
    display: none;
  }
}

@keyframes moving {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
}

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
.date__box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
  border: 4px solid var(--text);
  font-weight: bold;
  padding: 5px 10px;
}
.date__day {
  font-size: 22px;
}
.blog-card {
  padding: 30px;
  position: relative;
  border: 1px solid var(--border);
  transition: 300ms ease-in-out;
  border-radius: 10px;
}
.blog-card:hover 
.btn--with-icon i {
  background: var(--theme);
}
.date__box {
  opacity: 0;
  transform: scale(0.5);
  transition: 300ms ease-in-out;
}
.blog-card__background,
.card__background--layer {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.blog-card__background {
  padding: 15px;
  background: transparent;
}
.card__background--wrapper {
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
  position: relative;
  overflow: hidden;
}
.card__background--main {
  height: 100%;
  position: relative;
  transition: 300ms ease-in-out;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
}
.card__background--layer {
  z-index: 0;
  opacity: 0;
  background: rgba(51, 51, 51, 0.9);
  transition: 300ms ease-in-out;
}
.blog-card__head {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blog-card__info {
  z-index: 10;
  background: var(--color-bg);
  padding: 20px 15px;
}
.blog-card__info h2 {
  text-transform: uppercase;
}
.blog-card:hover .date__box {
  opacity: 1;
  transform: scale(1);
}
.blog-card:hover .card__background--main {
  transform: scale(1.2) rotate(5deg);
}
.blog-card:hover .card__background--layer {
  opacity: 1;
  cursor: help;
}
.category span {
  display: inline-block;
  background-color: var(--blackly);
  color: var(--text);
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 0.85em;
  transition: background-color 300ms ease;
}
.category span:hover {
  background-color: var(--border);
}
.blog-details {
  margin-bottom: 10px;
  font-size: 0.9em;
  color: var(--grey);
}
.blog-type {
  font-weight: bold;
  margin-right: 10px;
}
.btn {
  background: var(--color-bg);
  color: var(--text);
  font-weight: bold;
  outline: none;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 0;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  padding: 0;
  border: none;
}
.btn:focus {
  box-shadow: none;
}
.btn:hover {
  color: var(--theme);
}
.btn--with-icon {
  padding-right: 20px;
}
.btn--with-icon i {
  padding: 0px 30px 0px 15px;
  margin-right: 10px;
  height: 50px;
  line-height: 50px;
  vertical-align: bottom;
  background: var(--text);
  clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
}
.btn--only-icon {
  width: 50px;
}
.page-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  background: var(--color-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pagination-btn {
  background: var(--color-bg);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.pagination-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination-btn:hover:not(:disabled) {
  background: var(--theme);
  color: var(--text);
}

.pagination-info {
  font-size: 0.9em;
  color: var(--grey);
}

.pagination-select .form-control {
  border: none;
  padding: 5px 10px;
  background: transparent;
  color: var(--grey);
}

.pagination-select .form-control option {
  background: var(--color-bg);
  color: var(--text);
}
</style>
